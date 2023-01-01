import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import {
  Button,
  Card,
  Col,
  Divider,
  Pagination,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import {
  FieldTimeOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { IssuesData } from "@/types/Data";
import { getIssueListApi } from "@/api/Issue";

const Issue = () => {
  const [selectPage, setSelectPage] = useState({
    per_page: 10,
    max_count: 1,
    page: 1,
  });

  // const issueDatas = Array.from({ length: 20 }).map((_, index) => ({
  //   id: index,
  //   userId: 1,
  //   title: "PHP是世界上最好的语言 " + index,
  //   description:
  //     "没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一没有之一",
  //   focusCount: 10,
  //   messageCount: 3,
  //   createTime: "2015-09-01 18:00:00 ",
  //   tags: ["php", "前端"],
  // }));
  const [issueData, setIssueData] = useState<IssuesData[]>([]);
  useEffect(() => {
    (async () => {
      const result = await getIssueListApi(
        selectPage.per_page,
        selectPage.page
      );
      setIssueData(result.list);
      setSelectPage((state) => ({ ...state, max_count: result.maxCount }));
    })();
  }, [selectPage.page, selectPage.per_page]);

  return (
    <div className={styles["issue-view"]}>
      <Link to="/issue/publish">
        <Button type="primary" style={{ marginBottom: "1em" }}>
          发布问题
        </Button>
      </Link>
      <Row gutter={[24, 24]} align="middle" justify="start">
        {issueData.map((item, index) => (
          <Col key={index} span={8}>
            <Card
              title={item.title}
              actions={[
                <Space key="focus">
                  <LikeOutlined />
                  {/* {item.focusCount} */}
                  {item.like_count}
                </Space>,
                <Space key="time">
                  <FieldTimeOutlined />
                  {item.publish_date}
                </Space>,
              ]}
            >
              <Link to={`/issue/preview/${item.issue_id}`}>
                <Typography.Paragraph type="secondary" ellipsis={true}>
                  {item.content}
                </Typography.Paragraph>

                {item.tags != undefined &&
                  JSON.parse(item.tags).map((item: string, index: number) => (
                    <Tag key={index} color="green">
                      {item}
                    </Tag>
                  ))}
              </Link>
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
