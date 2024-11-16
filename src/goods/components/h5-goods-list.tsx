import {useContext, useEffect, useState} from "react";
import { InfiniteScroll, List } from "antd-mobile";
import { Context } from "../context";
import { get } from "../../axios";
import "./h5-goods-list.less";
import * as React from "react";

export default () => {
  const { state, dispatch } = useContext(Context);
  const { formData, searchProductIds,searchBrandIds } = state;
  const [data, setData] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNum, setPageNum] = useState(1); // 初始页码从1开始
  const reSearch = async({pageNum,pageSize, isReset})=>{
    const res: any =  await get("/public/product/list", {
      pageNum,
      pageSize,
      productIds: searchProductIds,
      brandIds: searchBrandIds
    });
    console.log(123,'reSearch', isReset, res);
    if (res.code === 200) {
      const list = res.rows;
      const totalPages = Math.ceil(res.total / 10);

      // 拼接数据
      setData(list);
      // 判断是否还有更多数据
      setHasMore(pageNum + 1 < totalPages);
      // 搜索时重置页码
      if(isReset){
        // 更新页码
        setPageNum(1);
      } else {
        setPageNum((prevPageNum) => prevPageNum + 1);
      }
    }
  }
  // 确定选择品牌和产品触发商品重新搜索
  useEffect(() => {
    if(searchProductIds.length > 0 || searchBrandIds.length > 0){
      reSearch({pageNum: 1,pageSize: 10, isReset: true});
    }
  }, [searchProductIds,searchBrandIds]);

  async function loadMore() {
    await reSearch({pageNum: 1,pageSize: 10, isReset: false});
  }

  return (
    <>
      <List className="h5-goods-List">
        {data.map((item, index) => {
          return (
            <div className="goods-item" key={item.id}>
              <div
                className="content"
                onClick={() => {
                  dispatch({
                    type: "set",
                    payload: {
                      inquiryModal: true,
                      formData: {
                        ...formData,
                        productId: item.id,
                        id: item.id,
                        productName: item.name
                      },
                    },
                  });
                }}
              >
                <img
                  className="img"
                  src={item.image}
                  alt=""
                />
                <div className="goods-content">
                  <div className="goodsName">
                    {item.name}
                  </div>
                  <div className="goodsNoBox">
                    <span className="goodsNo">型号：{item.type}</span>
                    <div className="btn">立即询价</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={500} />
    </>
  );
};
