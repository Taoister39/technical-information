import React, { useEffect, useRef, useState } from "react";
import type { FC } from "react";

import {
  Avatar,
  Card,
  Col,
  Divider,
  Image,
  Row,
  Space,
  Typography,
} from "antd";
import { useParams } from "react-router-dom";
import { getArticleApi } from "@/api/Article";
import { ArticleData } from "@/types/Data";
import apiConfig from "@/api/apiConfig";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.bubble.css";

const ArticlePreview: FC = () => {
  const { id } = useParams();

  const [articleInfo, setArticleInfo] = useState<ArticleData>();

  useEffect(() => {
    (async () => {
      const result = await getArticleApi(Number(id));
      if (result.isOk) {
        setArticleInfo(result.data);
      }
    })();
  }, [id]);

  return (
    <div style={{ marginTop: "1em" }}>
      <Row gutter={[12, 12]} justify="center" align="middle">
        <Col span={14}>
          <Card
            cover={<Image src={apiConfig.baseUrl + articleInfo?.cover_url} />}
          >
            <Typography.Title>{articleInfo?.title}</Typography.Title>
            <Space size="large">
              <Avatar size={50} src={articleInfo?.user_avatar} />
              <Typography.Title type="success" level={5}>
                {articleInfo?.user_name}
              </Typography.Title>
            </Space>
            <Divider />
            <ReactQuill
              id="quill"
              readOnly={true}
              value={articleInfo?.content}
              theme="bubble"
            />
            <Divider />
            <Typography.Text>{articleInfo?.publish_date}</Typography.Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ArticlePreview;
