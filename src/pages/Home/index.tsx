import styles from "./index.module.scss";
import React, { FC } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Home: FC = () => {
  return (
    <div>
      <Title>技术资讯，关注你的成长。</Title>
    </div>
  );
};

export default Home;
