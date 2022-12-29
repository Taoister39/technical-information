import { Button, Card, Checkbox, Divider, Form, Input } from "antd";
import React, { useState } from "react";
import type { FC } from "react";
import styles from "./index.module.scss";

import logoImg from "@/assets/logo.png";

const Login: FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles["login-view"]}>
      <Card className={styles.login}>
        <img src={logoImg} className={styles.logo} />
        <Form labelCol={{ span: 2 }} wrapperCol={{ span: 20, offset: 1 }}>
          <Form.Item label="用户名" name="username">
            <Input placeholder="输入您的用户名" />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password placeholder="输入您的密码" />
          </Form.Item>
          {!isLogin && (
            <Form.Item label="确认密码">
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
              登录
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
