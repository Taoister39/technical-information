import React, { useState } from "react";
import styles from "./index.module.scss";
import {
  Card,
  Col,
  Divider,
  Pagination,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import { FieldTimeOutlined, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Issue = () => {
  const issueData = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    userId: 1,
    title: "PHP是世界上最好的语言 " + index,
    description:
      "没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一",
    focusCount: 10,
    messageCount: 3,
    createTime: "2015-09-01 18:00:00 ",
    tags: ["php", "前端"],
  }));
  const [selectPage, setSelectPage] = useState({
    per_page: 20,
    max_count: 20,
    page: 1,
  });

  return (
    <div className={styles["issue-view"]}>
      <Row gutter={[24, 24]} align="middle" justify="center">
        {issueData.map((item, index) => (
          <Col key={index} span={6}>
            <Card
              title={item.title}
              actions={[
                <Space key="focus">
                  <StarOutlined />
                  {item.focusCount}
                </Space>,
                <Space key="time">
                  <FieldTimeOutlined />
                  {item.createTime}
                </Space>,
              ]}
            >
              <Link to="/">
                <Typography.Paragraph type="secondary" ellipsis={true}>
                  {item.description}
                </Typography.Paragraph>
              </Link>
              {item.tags.map((item, index) => (
                <Tag key={index} color="green">
                  {item}
                </Tag>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
      <Divider />
      <Row justify="end" gutter={[12, 12]} align="middle">
        <Col>
          <Pagination
            current={selectPage.page}
            total={selectPage.max_count}
            pageSize={selectPage.per_page}
            onChange={(page) => setSelectPage((state) => ({ ...state, page }))}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Issue;
