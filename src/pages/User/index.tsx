import { Col, Menu, Row, theme } from "antd";
import React, { useEffect, useState } from "react";
import type { FC } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./index.module.scss";

const User: FC = () => {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState<string>(location.pathname);

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles["user-view"]}>
      <Row gutter={[24, 24]}>
        <Col span={3}>
          <Menu
            selectedKeys={[selectedMenu]}
            items={[
              {
                label: <Link to="/user/userinfo">基本资料</Link>,
                key: "/user/userinfo",
              },
              {
                label: <Link to="/user/updateavatar">更换头像</Link>,
                key: "/user/updateavatar",
              },
              {
                label: <Link to="/user/updatepwd">重置密码</Link>,
                key: "/user/updatepwd",
              },
            ]}
          />
        </Col>
        <Col span={21}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default User;
