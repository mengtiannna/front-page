import * as React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../context.ts";
import {Form, Input, Modal} from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

export default function InquiryModal(props) {
  const [form] = Form.useForm();
  const { state, dispatch } = useContext(Context);
  const { formData, inquiryModal } = state;
  const {goodsName, price, num, useName, phone, email } =
    formData;
  console.log("state formData", formData);
  console.log("state", state);

  const handleOk = () => {
    setTimeout(() => {
      dispatch({
        type: "set",
        payload: {
          inquiryModal: false,
          formData: {
            goodsName: '',
            price: '',
            num: '',
            useName: '',
            phone: '',
            email: ''
          },
        },
      });
    }, 2000);
  };

  const handleCancel = () => {
    dispatch({
      type: "set",
      payload: {
        inquiryModal: false,
        formData: {
          goodsName: '',
          price: '',
          num: '',
          useName: '',
          phone: '',
          email: ''
        },
      },
    });
  };

  const onCreate = (values: Values) => {
    console.log('Received values of form: ', values);
  };

  // goodsName: '',
  //   price: '',
  //   num: '',
  //   useName: '',
  //   phone: '',
  //   email: ''
  return (
    <Modal
      open={inquiryModal}
      title="在线询价"
      okText="立即询价"
      cancelText="取消"
      okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
      onCancel={() => handleCancel()}
      destroyOnClose
      modalRender={(dom) => (
        <Form
          layout="vertical"
          form={form}
          name="form_in_modal"
          initialValues={formData}
          clearOnDestroy
          onFinish={(values) => onCreate(values)}
        >
          {dom}
        </Form>
      )}
    >
      <Form.Item
        name="goodsName"
        label="goodsName"
        rules={[{ required: true, message: 'Please input the title of collection!' }]}
      >
        <Input />
      </Form.Item>
    </Modal>
  );
}
