import { Button, Col, List, Row } from "antd";
import React, { FC } from "react";

const Article: FC = () => {
  const listDatas: string[] = ["前端", "后端", "小程序", "IOS", "Android"];

  return (
    <div>
      <Row>
        <Col span={4}>
          <List
            size="small"
            dataSource={listDatas}
            renderItem={(item) => (
              <List.Item>
                <Button type="link" size="large">
                  # {item}
                </Button>
              </List.Item>
            )}
          />
        </Col>
        <Col span={14}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default Article;
