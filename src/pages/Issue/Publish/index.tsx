import { issueAddApi } from "@/api/Issue";
import TagsInput from "@/components/TagsInput";
import {
  Button,
  Card,
  Col,
  Form,
  FormProps,
  Input,
  Row,
  Space,
  Tag,
  message,
} from "antd";
import React, { useState } from "react";
import type { FC } from "react";

import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const ArticlePublish: FC = () => {
  const navigate = useNavigate();

  const onFinish: FormProps<{
    title: string;
    content: string;
  }>["onFinish"] = async (params) => {
    const tagJson = JSON.stringify(tags);

    const result = await issueAddApi(params.title, params.content, tagJson);

    if (result.isOk) {
      message.success(result.message);
      navigate("/issue");
      return;
    }
    message.error(result.message);
  };

  const [tags, setTags] = useState<string[]>([]);

  return (
    <div style={{ marginTop: "1em" }}>
      <Row gutter={[12, 12]} justify="center" align="middle">
        <Col span={12}>
          <Card>
            <Form labelCol={{ span: 4 }} onFinish={onFinish}>
              <Form.Item
                label="问题标题"
                name="title"
                rules={[{ required: true, message: "不可为空" }]}
              >
                <Input placeholder="请输入您遇到的问题" />
              </Form.Item>
              <Form.Item label="输入标签">
                <TagsInput tagsState={[tags, setTags]} />
              </Form.Item>
              <Form.Item
                label="问题内容"
                name="content"
                rules={[{ required: true, message: "不可为空" }]}
              >
                <Input.TextArea size="large" placeholder="请输入您遇到的问题" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4 }}>
                <Button type="primary" size="large" htmlType="submit">
                  发布问题
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
