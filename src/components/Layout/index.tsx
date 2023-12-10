import React, { FC, useEffect } from "react";

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
  message,
} from "antd";
import type { MenuProps } from "antd";

import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./index.module.scss";
import useStore from "@/store";
import {
  AppstoreAddOutlined,
  DownOutlined,
  ImportOutlined,
  LogoutOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { observer } from "mobx-react-lite";

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

  useEffect(() => {
    userStore.getInfo();
  }, []);

  const avatarMenu = [
    {
      key: "/user/userinfo",
      icon: <AppstoreAddOutlined />,
      label: <Link to="/user/userinfo">基本资料</Link>,
    },
    {
      key: "/user/updateavatar",
      icon: <UserOutlined />,
      label: <Link to="/user/updateavatar">更换头像</Link>,
    },
    {
      key: "/user/updatepwd",
      icon: <ImportOutlined />,
      label: <Link to="/user/updatepwd">重置密码</Link>,
    },
    {
      label: <Link to="/user/article/star">文章收藏</Link>,
      icon: <StarOutlined />,
      key: "/user/article/star",
    },
  ];

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
        {userStore.username === undefined ? (
          <Link to="/login">
            <Button type="primary">登录/注册</Button>
          </Link>
        ) : (
          <Space className={""}>
            <Typography.Text type="success">
              {userStore.username}
            </Typography.Text>
            {userStore.avatar != undefined ? (
              <Avatar src={<Image src={userStore.avatar} />} />
            ) : (
              <Avatar icon={<UserOutlined />} />
            )}
            <Dropdown menu={{ items: avatarMenu }}>
              <Button type="link">
                <Space>
                  个人中心
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Button type="link">
              <Popconfirm
                title="确认是否退出"
                okText="确认"
                cancelText="取消"
                onConfirm={() => {
                  userStore.logout();
                  message.success("退出成功");
                }}
              >
                <LogoutOutlined />
                退出
              </Popconfirm>
            </Button>
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
          软件213第一组
        </Typography.Text>
      </Footer>
    </Layout>
  );
};

export default observer(LayoutApp);
