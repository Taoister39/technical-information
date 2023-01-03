import React, { useEffect, useState } from "react";
import type { FC } from "react";

import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Input,
  List,
  Row,
  Space,
  Tag,
  Typography,
  message,
} from "antd";
import { useParams } from "react-router-dom";
import { getIssueApi, likeApi, sendMessageApi } from "@/api/Issue";
import { IssueMessageListData, IssuePreviewData } from "@/types/Data";
import {
  FieldTimeOutlined,
  LikeOutlined,
  LikeTwoTone,
} from "@ant-design/icons";
import useStore from "@/store";
import getMessageListApi from "@/api/Issue/getMessageList";
import { isLikeApi } from "@/api/Issue";
import CommentBar from "@/components/CommentBar";

const ArticlePreview: FC = () => {
  const { id } = useParams();
  const { userStore } = useStore();
  const [issueData, setIssueData] = useState<IssuePreviewData>();

  useEffect(() => {
    (async () => {
      const result = await getIssueApi(Number(id));
      setIssueData(result);
      if (userStore.username) {
        setIsLike(await isLikeApi(Number(id)));
      }
    })();
  }, [id]);

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
  const [commentList, setCommentList] = useState<IssueMessageListData[]>([]);
  useEffect(() => {
    (async () => {
      const result = await getMessageListApi(Number(id));
      setCommentList(result);
    })();
  }, [refresh]);

  const [isLike, setIsLike] = useState(false);
  const onLike = async () => {
    if (!userStore.username) {
      return message.error("请先登录");
    }
    await likeApi(Number(id));
    setIsLike((state) => !state);
    if (!isLike) {
      message.success("点赞成功");
      issueData?.like_count !== undefined ? (issueData.like_count += 1) : "";
    } else {
      message.success("取消点赞成功");
      issueData?.like_count !== undefined ? (issueData.like_count -= 1) : "";
    }
  };

  return (
    <div style={{ marginTop: "1em" }}>
      <Row gutter={[12, 12]} justify="center" align="middle">
        <Col span={14}>
          <Card
            actions={[
              <Space key="likeCount" onClick={onLike}>
                {isLike ? <LikeTwoTone /> : <LikeOutlined />}
                {/* {item.focusCount} */}
                {issueData?.like_count}
              </Space>,
              <Space key="time">
                <FieldTimeOutlined />
                {issueData?.publish_date}
              </Space>,
            ]}
          >
            <Typography.Title>{issueData?.title}</Typography.Title>
            <Space size="large">
              <Avatar size={50} src={issueData?.user_avatar} />
              <Typography.Title type="success" level={5}>
                {issueData?.user_name}
              </Typography.Title>
            </Space>
            <div style={{ marginTop: "1em" }}>
              {issueData?.tags != undefined &&
                JSON.parse(issueData?.tags).map(
                  (item: string, index: number) => (
                    <Tag key={index} color="green">
                      {item}
                    </Tag>
                  )
                )}
            </div>
            <Divider />
            <Typography.Paragraph>{issueData?.content}</Typography.Paragraph>
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
