import getArticleStarApi from "@/api/User/articleStar";
import apiConfig from "@/api/apiConfig";
import { UserArticleStarData } from "@/types/Data";
import {
  FieldTimeOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Image, List, Space, message } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticleStar() {
  const [selectPage, setSelectPage] = useState({
    per_page: 10,
    page: 1,
    max_count: 0,
  });
  const [articleData, setArticleData] = useState<UserArticleStarData[]>([]);
  useEffect(() => {
    getArticleStarApi(selectPage.page, selectPage.per_page).then((result) => {
      if (result.isOk && result.data) {
        setArticleData(result.data?.list);
        selectPage.max_count = result.data?.maxCount;
        return;
      }

      message.error(result.message);
    });
  }, [selectPage.page, selectPage.per_page]);

  return (
    <Card title="我的收藏">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            setSelectPage((prevPage) => ({ ...prevPage, page }));
          },
          pageSize: selectPage.per_page,
          current: selectPage.page,
          total: selectPage.max_count,
        }}
        dataSource={articleData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <Space key="startCount">
                <StarOutlined />
                {
                  //item.startCount
                  item.star_count
                }
              </Space>,
              <Space key="likeCount">
                <LikeOutlined />
                {
                  //item.likeCount
                  item.like_count
                }
              </Space>,
              <Space key="messageCount">
                <MessageOutlined />
                {
                  //item.messageCount
                  item.comment_count
                }
              </Space>,
              <Space key="time">
                <FieldTimeOutlined />
                {item.publish_date}
              </Space>,
            ]}
            extra={
              <Image
                width={200}
                alt="logo"
                src={apiConfig.baseUrl + item.cover_url}
              />
            }
          >
            <Link to={`/article/preview/${item.start_article_id}`}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.author}
                description={item.title}
              />
            </Link>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default ArticleStar;
