import styles from "./index.module.scss";
import React, { FC } from "react";
import { Typography, Space, Button, Row, Col, Image, Card } from "antd";

const { Title, Text } = Typography;

import arrow1Img from "@/assets/arrow1.png";
import arrow2Img from "@/assets/arrow2.png";

import { Link, useNavigate } from "react-router-dom";
import {
  BookOutlined,
  FormOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const Home: FC = () => {
  return (
    <div>
      <Space
        className={styles.title}
        direction="vertical"
        align="center"
        size="large"
      >
        <Title>技术资讯，关注你的成长。</Title>
        <Text>为每一个人，为每一个团队，提供优秀的文档与知识库工具</Text>
      </Space>
      <Space align="center" size="large" className={styles.title}>
        <Link to="/article">
          <Button>文章</Button>
        </Link>
        <Link to="/issue">
          <Button type="primary">问答</Button>
        </Link>
      </Space>

      <div className={styles["read-img"]} />

      <Row
        align="middle"
        justify="center"
        gutter={[16, 16]}
        style={{ textAlign: "end" }}
      >
        <Col>
          <Space direction="vertical">
            <Title level={3}>每一个人，都能构建知识体系</Title>
            <Text>收集与记录是知识管理的起点</Text>
            <Text>知识管理还需整理与输出</Text>
          </Space>
        </Col>
        <Col>
          <Image src={arrow1Img} preview={false} width={84} />
        </Col>
        <Col>
          <Card title="使用场景" size="small">
            <Space size="large">
              <Space>
                <FormOutlined />
                <Text>个人笔记</Text>
              </Space>
              <Space>
                <UnorderedListOutlined />
                <Text>代办清单</Text>
              </Space>
              <Space>
                <BookOutlined />
                <Text>生活备忘</Text>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
      <div className={styles["sliding-line"]} />
      <Row align="middle" justify="center" gutter={[16, 16]}>
        <Col>
          <Space direction="vertical" style={{ textAlign: "end" }}>
            <Title level={3}>每个团队，都会爱上异步协作</Title>
            <Text>以文档为中心的协同，让沟通高质量发生</Text>
            <Text>异步优先的交流方式，让打扰少点，让专注多点</Text>
          </Space>
        </Col>
        <Col>
          <Image src={arrow2Img} preview={false} width={84} />
        </Col>
        <Col>
          <Card title="使用场景" size="small">
            <Space size="large">
              <Space>
                <FormOutlined />
                <Text>会议记录</Text>
              </Space>
              <Space>
                <UnorderedListOutlined />
                <Text>项目文档</Text>
              </Space>
              <Space>
                <BookOutlined />
                <Text>需求管理</Text>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>
      <div className={styles["turning-line"]} />
    </div>
  );
};

export default Home;
