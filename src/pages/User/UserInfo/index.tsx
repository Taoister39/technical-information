import useStore from "@/store";
import http from "@/utils/http.js";
import {
  Button,
  Card,
  Form,
  FormProps,
  Input,
  message,
  Typography,
} from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

const { Text } = Typography;

const UserInfo = () => {
  const { userStore } = useStore();

  useEffect(() => {
    formInfo.setFieldsValue({ ...userStore });

    // console.log(formInfo);
  }, []);

  const [formInfo] = Form.useForm();
  // 修改用戶信息時
  const onFinish: FormProps<{
    email: string;
  }>["onFinish"] = async (params) => {
    userStore.updateInfo(params.email);
  };

  return (
    <Card title="用户基本信息">
      <Form
        form={formInfo}
        labelCol={{ span: 1 }}
        onFinish={onFinish}
        wrapperCol={{ offset: 1, span: 6 }}
      >
        <Form.Item label="用户名">
          <Text type="success">{userStore.username}</Text>
        </Form.Item>
        {/* <Form.Item label="用戶暱稱" name="nickname">
          <Input type="text" />
        </Form.Item> */}
        <Form.Item label="邮箱" name="email">
          <Input type="text" />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          提交修改
        </Button>
      </Form>
    </Card>
  );
};

export default observer(UserInfo);
