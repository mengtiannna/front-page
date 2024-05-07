import { get } from "../../axios";

// 修改为正确的函数定义语法
export async function init(dispatch) {
  try {
    // const response = await get("baseConfig", { param1: "value1" });
    // console.log("response", response);
    // 使用作为参数传递的dispatch
    dispatch({
      type: "set",
      payload: {
        name: "123123123"
      }
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
  // let arr = res.cancellationReasonVOList;
  // arr.push({id: '-1', reason: '其他原因'});
  // setReasons(arr);
}