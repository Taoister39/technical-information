import { Button, Card, Col, Form, Input, Row, Select, Upload } from "antd";
import React from "react";
import type { FC } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const ArticlePublish: FC = () => {
  return (
    <div>
      <Row gutter={[12, 12]} justify="center" align="middle">
        <Col span={12}>
          <Card>
            <Form labelCol={{ span: 4 }}>
              <Form.Item label="文章标题" name="title">
                <Input placeholder="请输入文章的标题" />
              </Form.Item>
              <Form.Item label="文章类型" name="cate">
                <Select />
              </Form.Item>
              <Form.Item label="封面" name="cover">
                <Upload />
              </Form.Item>
              <Form.Item label="文章内容" name="content">
                <ReactQuill />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4 }}>
                <Button type="primary" size="large">
                  发布文章
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ArticlePublish;
