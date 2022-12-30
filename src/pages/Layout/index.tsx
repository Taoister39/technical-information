import React, { FC } from "react";

import {
  Avatar,
  Button,
  Dropdown,
  Image,
  Layout,
  Menu,
  Popconfirm,
  Space,
  Typography,
} from "antd";
import type { MenuProps } from "antd";

import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./index.module.scss";
import useStore from "@/store";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const navItems: MenuProps["items"] = [
  { label: <Link to="/">首页</Link>, key: "/" },
  { label: <Link to="/article">文章</Link>, key: "/article" },
  { label: <Link to="/issue">问答</Link>, key: "/issue" },
  { label: <Link to="/analyze">分析</Link>, key: "/analyze" },
];

const LayoutApp: FC = () => {
  const location = useLocation();
  const { userStore } = useStore();

  const selectedKey = location.pathname;
  // console.log(selectedKey);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className={styles.header}>
        <div className={styles.logo} />
        <Menu
          items={navItems}
          selectedKeys={[selectedKey]}
          mode="horizontal"
          theme="dark"
          className={styles["nav-bar"]}
        />
        {userStore.username == "" ? (
          <Link to="/login">
            <Button type="primary">登录/注册</Button>
          </Link>
        ) : (
          <Space className={""}>
            <Typography.Text type="success">
              {userStore.username}
            </Typography.Text>
            <Avatar src={<Image src={userStore.avatar} />} />
            {/* <Dropdown>
              <Space>
                個人中心
                <DownOutlined />
              </Space>
            </Dropdown>
            <Popconfirm
              title="確認是否退出"
              okText="確認"
              cancelText="取消"
            >
              <LogoutOutlined />
              退出
            </Popconfirm> */}
          </Space>
        )}
      </Header>
      <Content style={{ padding: "0 50px", flex: "1 1 auto" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb> */}
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        <Typography.Text style={{ padding: "1em" }}>
          软件213你说对就队
        </Typography.Text>
      </Footer>
    </Layout>
  );
};

export default LayoutApp;
