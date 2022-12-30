import { Button, Card, Checkbox, Form, FormProps, Input, message } from "antd";
import React, { useState } from "react";
import type { FC } from "react";
import styles from "./index.module.scss";

import logoImg from "@/assets/logo.png";
import { loginApi, registerApi } from "@/api/User";
import { setToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";
import useStore from "@/store";

const Login: FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { userStore } = useStore();

  const navigate = useNavigate();

  const onFinish: FormProps<{
    username: string;
    password: string;
    password2: string;
  }>["onFinish"] = async (param) => {
    console.log(param);

    if (!isLogin) {
      userStore.register(param.username, param.password, param.password2);
      setIsLogin(true);
    } else {
      userStore.login(param.username, param.password);
      navigate("/");
    }
  };

  return (
    <div className={styles["login-view"]}>
      <Card className={styles.login}>
        <img src={logoImg} className={styles.logo} />
        <Form
          labelCol={{ span: 2 }}
          onFinish={onFinish}
          wrapperCol={{ span: 20, offset: 1 }}
        >
          <Form.Item label="用户名" name="username">
            <Input placeholder="输入您的用户名" />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password placeholder="输入您的密码" />
          </Form.Item>
          {!isLogin && (
            <Form.Item label="确认密码" name="password2">
              <Input.Password placeholder="再次输入您的密码" />
            </Form.Item>
          )}
          {/* <Divider /> */}
          <Form.Item
            label="隐私条款"
            name="remember"
            valuePropName="checked" //子节点的值的属性
          >
            <Checkbox style={{ color: "#1890ff" }}>
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item label="提交">
            <Button type="primary" htmlType="submit" size="large">
              {isLogin ? "登录" : "注册"}
            </Button>
          </Form.Item>
          {/* <Form.Item> */}
          <Button type="link" onClick={() => setIsLogin((state) => !state)}>
            {isLogin ? "我还没有账号，点我注册" : "我有账号，点我登录"}
          </Button>
          {/* </Form.Item> */}
        </Form>
      </Card>
    </div>
  );
};
export default Login;
