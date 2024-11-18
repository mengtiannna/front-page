import {Fragment, useContext, useEffect, useState} from "react";
import { InfiniteScroll, List, Empty } from "antd-mobile";
import { Context } from "../context";
import { get } from "../../axios";
import "./h5-goods-list.less";
import * as React from "react";
import {QuestionCircleOutline} from "antd-mobile-icons";

export default () => {
  const { state, dispatch } = useContext(Context);
  const { formData, searchProduct,searchBrand } = state;
  const [data, setData] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNum, setPageNum] = useState(1); // 初始页码从1开始
  const [initialized, setInitialized] = useState(false); // 标记是否初始化完成
  const reSearch = async({pageNum,pageSize, isReset})=>{
    const res: any =  await get("/public/product/list", {
      pageNum,
      pageSize,
      type: searchProduct,
      brand: searchBrand
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
    reSearch({ pageNum: 1, pageSize: 10, isReset: true }).then(() => {
      setInitialized(true); // 标记初始化完成
    });
  }, [searchProduct,searchBrand]);

  async function loadMore() {
    if (!initialized) return; // 如果未初始化完成，不执行加载
    await reSearch({pageNum: 1,pageSize: 10, isReset: false});
  }

  return (
    <>
      {
        data.length > 0 ? <Fragment>
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
        </Fragment> : <Empty
          style={{ padding: '64px 0' }}
          imageStyle={{ width: 128 }}
          description='没有搜索到商品哦！'
        />
      }
    </>
  );
};
