import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../context.ts";
import { Form, Input, InputNumber, Modal } from "antd";

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const priceReg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]([0-9])?$)/;
const phoneReg = /^1\d{10}$/;

export default function InquiryModal(props) {
  const [form] = Form.useForm();
  const { state, dispatch } = useContext(Context);
  const { formData, inquiryModal } = state;
  // const { goodsId, goodsName, price, num, useName, phone, email } = formData;

  const handleCancel = () => {
    dispatch({
      type: "set",
      payload: {
        inquiryModal: false,
        formData: {
          goodsId: "",
          goodsName: "",
          price: "",
          num: "",
          useName: "",
          phone: "",
          email: "",
        },
      },
    });
  };

  const onCreate = (values: Values) => {
    console.log("Received values of form: ", values);
    // todo
    // 这里调用接口保存数据
    alert(JSON.stringify(values));
    handleCancel();
  };

  return (
    <Modal
      wrapClassName="inquiry-modal"
      open={inquiryModal}
      title="在线询价"
      okText="立即询价"
      cancelText="取消"
      okButtonProps={{ autoFocus: true, htmlType: "submit" }}
      onCancel={() => handleCancel()}
      destroyOnClose
      modalRender={(dom) => (
        <Form
          {...formItemLayout}
          form={form}
          initialValues={formData}
          onFinish={(values) => onCreate(values)}
          layout="horizontal"
          name="form_in_modal"
        >
          {dom}
        </Form>
      )}
    >
      <Form.Item name="goodsId" label="产品id" style={{ display: "none" }}>
        <Input disabled={true} />
      </Form.Item>
      <Form.Item name="goodsName" label="产品名称">
        <Input disabled={true} />
      </Form.Item>
      <Form.Item
        name="price"
        label="期望价格"
        rules={[
          { required: true, type: "regexp", message: "请输入期望价格" },
          { pattern: priceReg, message: "请输入有效的价格" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="num"
        label="预定数量"
        rules={[
          {
            required: true,
            type: "number",
            min: 1,
            max: 99999,
            message: "请输入预定数量",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="userName"
        label="您的姓名"
        rules={[{ required: true, message: "请输入您的您的姓名" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="您的手机"
        rules={[
          { required: true, message: "请输入您的手机号码" },
          { pattern: phoneReg, message: "请输入正确的手机号码" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="您的邮箱"
        rules={[{ required: true, type: "email", message: "请输入您的邮箱" }]}
      >
        <Input />
      </Form.Item>
    </Modal>
  );
}
