import styles from "./index.module.scss";
import React, { FC } from "react";
import {
  Typography,
  Space,
  Button,
  Row,
  Col,
  Image,
  Card,
  Carousel,
} from "antd";

const { Title, Text, Paragraph } = Typography;

import arrow1Img from "@/assets/arrow1.png";
import arrow2Img from "@/assets/arrow2.png";

import jsconf1Img from "@/assets/jsconf/53_1.png";
import jsconf2Img from "@/assets/jsconf/53_61.png";

import connectImg from "@/assets/connect.png";

import functionImg1 from "@/assets/function/f1.png";
import functionImg2 from "@/assets/function/f2.png";
import functionImg3 from "@/assets/function/f3.png";
import functionImg4 from "@/assets/function/f4.png";
import functionImg5 from "@/assets/function/f5.png";
import functionImg6 from "@/assets/function/f6.png";

import { Link } from "react-router-dom";
import {
  BookOutlined,
  FormOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const Home: FC = () => {
  const functionShowItems = [
    {
      icon: functionImg1,
      title: "原生分布式",
      description:
        "自研一体化架构突破高性能和高可用， 实现应用无限扩展和服务永远在线",
    },
    {
      icon: functionImg2,
      title: "高兼容",
      description: "Oracle/MySQL 平滑迁移快速、最小成本搬迁应用与数据",
    },
    {
      icon: functionImg3,
      title: "HTAP",
      description:
        "一份数据既能做事务处理又能实时分析， 通过 HTAP 助力拓展更多可能",
    },
    {
      icon: functionImg4,
      title: "稳定可靠",
      description:
        "全量数据校验真正实现数据强一致，数据不丢失，“三地五中心”实现城市级容灾 RTO<30s",
    },
    {
      icon: functionImg5,
      title: "自主研发",
      description:
        "12 年完全自主研发，代码级可控，大规模金融核心场景 9 年可靠性验证",
    },
    {
      icon: functionImg6,
      title: "高性价比",
      description:
        "基于 LSM-Tree 的高压缩引擎平衡了“性能”和“压缩”的瓶颈，有效降低存储成本 70% - 90%，原生多租户，资源隔离按需使用",
    },
  ];

  const carouselItems = [
    { img: jsconf1Img, description: "" },
    { img: jsconf2Img, description: "" },
  ];

  return (
    <div style={{ marginTop: "5em" }}>
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

      <Carousel>
        {carouselItems.map((item, index) => (
          <div key={index} className={styles["carousel-item"]}>
            <div
              style={{
                background: `url("${item.img}") top left / cover`,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}
      </Carousel>

      <Row gutter={[24, 8]} align="middle" justify="center">
        <Col span={16}>
          <Title level={2} className={styles.footnote}>
            为什么选择我们
          </Title>
          <Paragraph>
            OceanBase 已连续 10 年稳定支撑双
            11，创新推出“三地五中心”城市级容灾新标准，在被誉为“数据库世界杯”的
            TPC-C 和 TPC-H
            测试上都刷新了世界纪录。自研一体化架构，兼顾分布式架构的扩展性与集中式架构的性能优势，用一套引擎同时支持
            OLTP 和 OLAP
            的混合负载，具备数据强一致、高扩展、高可用、高性价比、高度兼容
            Oracle/MySQL、稳定可靠等特征，不断用技术降低企业使用数据库的门槛。现已助力金融、政府、运营商、零售、互联网等多个行业的客户实现核心系统升级。
          </Paragraph>
        </Col>
        <Col span={8}>
          <Image preview={false} src={connectImg} />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        {functionShowItems.map((item, index) => (
          <Col span={8} key={index} className={styles["function-item"]}>
            <div>
              <Image width={60} src={item.icon} preview={false} />
            </div>
            <div style={{ marginLeft: "1em" }}>
              <Title level={5}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
