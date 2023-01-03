import React, { useEffect, useRef, useState } from "react";
import type { FC } from "react";

import {
  Avatar,
  Card,
  Col,
  Divider,
  Image,
  List,
  Row,
  Space,
  Typography,
  message,
} from "antd";
import { Link, useParams } from "react-router-dom";
import {
  getArticleApi,
  getMessageListApi,
  isLikeApi,
  isStartApi,
  likeApi,
  sendMessageApi,
  startApi,
} from "@/api/Article";
import { ArticleData, ArticleMessageListData } from "@/types/Data";
import apiConfig from "@/api/apiConfig";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.bubble.css";
import {
  FieldTimeOutlined,
  LikeOutlined,
  LikeTwoTone,
  MessageOutlined,
  StarOutlined,
  StarTwoTone,
} from "@ant-design/icons";
import CommentBar from "@/components/CommentBar";
import useStore from "@/store";

const ArticlePreview: FC = () => {
  const { id } = useParams();
  const { userStore } = useStore();

  const [articleInfo, setArticleInfo] = useState<ArticleData>();

  useEffect(() => {
    (async () => {
      const result = await getArticleApi(Number(id));
      if (result.isOk) {
        setArticleInfo(result.data);
      }
      if (userStore.username) {
        setIsLike(await isLikeApi(Number(id)));
        setIsStart(await isStartApi(Number(id)));
      }
    })();
  }, [id]);

  const [isLike, setIsLike] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const onLike = async () => {
    if (!userStore.username) {
      return message.error("请先登录");
    }
    await likeApi(Number(id));
    setIsLike((state) => !state);
    if (!isLike) {
      message.success("点赞成功");
      articleInfo?.like_count !== undefined
        ? (articleInfo.like_count += 1)
        : "";
    } else {
      message.success("取消点赞成功");
      articleInfo?.like_count !== undefined
        ? (articleInfo.like_count -= 1)
        : "";
    }
  };

  const onStart = async () => {
    if (!userStore.username) {
      return message.error("请先登录");
    }
    await startApi(Number(id));
    setIsStart((state) => !state);
    if (!isStart) {
      message.success("收藏成功");
      articleInfo?.start_count !== undefined
        ? (articleInfo.start_count += 1)
        : "";
    } else {
      message.success("取消收藏成功");
      articleInfo?.start_count !== undefined
        ? (articleInfo.start_count -= 1)
        : "";
    }
  };

  const [inputValue, setInputValue] = useState("");
  const sendMessage = async () => {
    if (!userStore.username || userStore.username === "") {
      message.error("请先登录");
      return;
    }
    try {
      await sendMessageApi(inputValue, Number(id));
      message.success("发送成功");
      setInputValue("");
      setRefresh((state) => !state);
    } catch (error) {
      console.log(error);
      message.error("发送失败");
    }
  };

  const [refresh, setRefresh] = useState(false);
  const [commentList, setCommentList] = useState<ArticleMessageListData[]>([]);
  useEffect(() => {
    (async () => {
      const result = await getMessageListApi(Number(id));
      setCommentList(result);
    })();
  }, [refresh]);

  return (
    <div style={{ marginTop: "1em" }}>
      <Row gutter={[12, 12]} justify="center" align="middle">
        <Col span={14}>
          <Card
            actions={[
              <Space key="likeCount" onClick={onLike}>
                {isLike ? <LikeTwoTone /> : <LikeOutlined />}
                {/* {item.focusCount} */}
                {articleInfo?.like_count}
              </Space>,
              <Space key="startCount" onClick={onStart}>
                {isStart ? <StarTwoTone /> : <StarOutlined />}

                {
                  //item.startCount
                  articleInfo?.start_count
                }
              </Space>,
              <Space key="messageCount">
                <MessageOutlined />
                {
                  //item.messageCount
                  articleInfo?.comment_count
                }
              </Space>,
            ]}
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
            <Space>
              <FieldTimeOutlined />
              <Typography.Text>{articleInfo?.publish_date}</Typography.Text>
            </Space>
          </Card>
          <Card style={{ marginTop: "1em" }}>
            <CommentBar
              inputState={[inputValue, setInputValue]}
              onSubmit={sendMessage}
            />
            <Divider />
            <List
              itemLayout="horizontal"
              dataSource={commentList}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Space key="time">
                      <FieldTimeOutlined />
                      {/* {"2023-01-01T01:34:54.000Z"} */}
                      {item.publish_date}
                    </Space>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.user_avatar} />}
                    title={item.user_name}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ArticlePreview;
