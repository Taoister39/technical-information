import useStore from "@/store";
import http from "@/utils/http.js";
import { Button, Card, Form, FormProps, Input, message } from "antd";
import React from "react";

const UpdatePwd = () => {
  const [form] = Form.useForm();
  const { userStore } = useStore();
  // 當提交更新密碼時
  const onFinish: FormProps<{
    oldPwd: string;
    newPwd: string;
  }>["onFinish"] = async (params) => {
    userStore.updatePwd(params.oldPwd, params.newPwd);
    form.resetFields(["newPwd", "oldPwd", "newPwd2"]);
  };

  return (
    <Card title="修改密码">
      <Form
        form={form}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 6 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="oldPwd"
          label="原密码"
          rules={[{ required: true, message: "不可为空" }]}
        >
          <Input.Password placeholder="请输入原密码" />
        </Form.Item>
        <Form.Item
          name="newPwd"
          label="新密码"
          rules={[{ required: true, message: "不可为空" }]}
        >
          <Input.Password placeholder="請輸入新密码" />
        </Form.Item>
        <Form.Item
          name="newPwd2"
          label="确认新密码"
          rules={[
            { required: true, message: "不可为空" },
            ({ getFieldValue }) => ({
              validator(_, pwd2) {
                if (pwd2 !== getFieldValue("newPwd")) {
                  return Promise.reject(new Error("两次密码不一致"));
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input.Password placeholder="请确认新密码" />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          提交
        </Button>
      </Form>
    </Card>
  );
};

export default UpdatePwd;
