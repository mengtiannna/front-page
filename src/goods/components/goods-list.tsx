import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context.ts";
import "./goods-list.less";
import { Pagination, PaginationProps, Empty } from "antd";
import { get } from "../../axios";

export default function GoodsList(props) {
  const { state, dispatch } = useContext(Context);
  const { goodsList, formData, searchProduct, searchBrand } = state;

  const [data, setData] = useState<any[]>([]);
  const [pageNum, setPageNum] = useState(1); // 初始页码从1开始
  const [total, setTotal] = useState(0); // 初始页码从1开始
  const reSearch = async ({ pageNum, pageSize }) => {
    const res: any = await get("/public/product/list", {
      pageNum,
      pageSize,
      type: searchProduct,
      brand: searchBrand,
    });
    console.log(123, "reSearch pc", res);
    if (res.code === 200) {
      const list = res.rows;
      const totalPages = Math.ceil(res.total / 10);

      // 拼接数据
      setData(list);
      // 更新页码
      setPageNum(1);
      setTotal(res.total);
    }
  };
  // 确定选择品牌和产品触发商品重新搜索
  useEffect(() => {
    reSearch({ pageNum: 1, pageSize: 10 });
  }, [searchProduct, searchBrand]);
  const onChange: PaginationProps["onChange"] = (pageNum, pageSize) => {
    console.log("Page: ", pageNum, pageSize);
    reSearch({ pageNum, pageSize });
  };

  return (
    <div className="goodsBox">
      {data.length > 0 ? (
        <Fragment>
          <div className="goods-list">
            {data.map((item) => {
              return (
                <div
                  className="goods-item"
                  key={item.id}
                  onClick={() => {
                    dispatch({
                      type: "set",
                      payload: {
                        inquiryModal: true,
                        formData: {
                          ...formData,
                          productId: item.id,
                          id: item.id,
                          productName: item.name,
                        },
                      },
                    });
                  }}
                >
                  <img className="img" src={item.image} alt="" />
                  <div className="goods-content">
                    <div className="goodsName">{item.name}</div>
                    <div className="goodsNoBox">
                      <span className="goodsNo">型号：{item.type}</span>
                      <div className="btn">立即询价</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            showQuickJumper={false}
            defaultCurrent={pageNum}
            // total={total}
            onChange={onChange}
          />
        </Fragment>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='没有搜索到商品哦！' imageStyle={{ height: 60 }}/>
      )}
    </div>
  );
}
