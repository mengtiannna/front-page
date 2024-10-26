import React, {useContext, useEffect, useState} from "react";
import { InfiniteScroll, List } from "antd-mobile";
import { Context } from "../context";
import { post } from "../../axios";
import "./h5-goods-list.less";

export default () => {
  const { state, dispatch } = useContext(Context);
  const { formData, searchProductIds,searchBrandIds } = state;
  const [data, setData] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNum, setPageNum] = useState(0); // 初始页码从1开始
  // 确定选择品牌和产品触发商品重新搜索
  useEffect(() => {
    const res: any =  post("/goods/unLogin/skuList", {
      pageNum: 0,
      pageSize: 10,
      productIds: searchProductIds,
      brandIds: searchBrandIds
    });
    if (res.code === "K000000") {
      const goodsInfoPage = res.context.goodsInfoPage;
      const list = goodsInfoPage.content;
      const totalPages = goodsInfoPage.totalPages;

      // 拼接数据
      setData(list);
      // 判断是否还有更多数据
      setHasMore(pageNum + 1 < totalPages);
      // 更新页码
      setPageNum(0);
    }
  }, [searchProductIds,searchBrandIds]);

  async function loadMore() {
    const res: any = await post("/goods/unLogin/skuList", {
      pageNum: pageNum,
      pageSize: 10,
    });
    if (res.code === "K000000") {
      const goodsInfoPage = res.context.goodsInfoPage;
      const list = goodsInfoPage.content;
      const totalPages = goodsInfoPage.totalPages;

      // 拼接数据
      setData((val) => [...val, ...list]);
      // 判断是否还有更多数据
      setHasMore(pageNum + 1 < totalPages);
      // 更新页码
      setPageNum((prevPageNum) => prevPageNum + 1);
    }
  }

  return (
    <>
      <List className="h5-goods-List">
        {data.map((item, index) => {
          return (
            <div className="goods-item" key={item.goodsId || item.goodsInfoId}>
              <div
                className="content"
                onClick={() => {
                  dispatch({
                    type: "set",
                    payload: {
                      inquiryModal: true,
                      formData: {
                        ...formData,
                        goodsId: item.goodsId || item.goodsInfoId,
                        goodsName: item.goodsName || item.goodsInfoName,
                      },
                    },
                  });
                }}
              >
                <img
                  className="img"
                  src={item.goodsImg || item.goodsInfoImg}
                  alt=""
                />
                <div className="goods-content">
                  <div className="goodsName">
                    {item.goodsName || item.goodsInfoName}
                  </div>
                  <div className="goodsNoBox">
                    <span className="goodsNo">型号：{item.goodsNo}</span>
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
