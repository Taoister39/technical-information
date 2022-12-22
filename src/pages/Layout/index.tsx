import React, { FC } from "react";

import { Button, Layout, Menu } from "antd";
import type { MenuProps } from "antd";

import { Link, Outlet } from "react-router-dom";

import styles from "./index.module.scss";
import Breadcrumb from "antd/es/breadcrumb";

const { Header, Content, Footer } = Layout;

const navItems: MenuProps["items"] = [
  { label: <Link to="/">首页</Link>, key: "home" },
  { label: <Link to="/article">文章</Link>, key: "article" },
  { label: <Link to="/issue">问答</Link>, key: "issue" },
  { label: <Link to="/analyze">分析</Link>, key: "analyze" },
];

const LayoutApp: FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className={styles.header}>
        <div className={styles.logo} />
        <Menu items={navItems} mode="horizontal" theme="dark" />
        <Button type="primary">登录/注册</Button>
      </Header>
      <Content style={{ padding: "0 50px", flex: "1 1 auto" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Outlet />
      </Content>
      <Footer>软件213你说对就队</Footer>
    </Layout>
  );
};

export default LayoutApp;
