import React, { FC } from "react";

import { Button, Layout, Menu } from "antd";
import type { MenuProps } from "antd";

import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./index.module.scss";
import Breadcrumb from "antd/es/breadcrumb";
import useStore from "@/store";

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
        {userStore.username == "" && <Button type="primary">登录/注册</Button>}
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
