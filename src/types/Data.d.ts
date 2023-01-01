export interface UserData {
  id?: number;
  user_avatar?: string;
  user_name?: string;
  user_password?: string;
  user_email?: string;
}

export interface ArticleCateData {
  id: number;
  name: string;
}

export interface ArticleData {
  id: number;
  title: string;
  content: string;
  cover_url: string;
  publish_date: string;
  cate_id: number;
  author_id: number;
  user_name: string;
  user_avatar: string;
}

export interface ArticleListData {
  article_id: number;
  title: string;
  content: string;
  cover_url: string;
  publish_date: string;
  cate_id: number;
  author_id: number;
  user_name: string;
  user_avatar: string;
}
export interface PublishCountData {
  author_id: number;
  user_name: string;
  count: number;
}

export interface IssuesData {
  issue_id: number;
  title: string;
  content: string;
  tags: string;
  publish_date: string;
  like_count: number;
}

export interface IssuePreviewData {
  issue_id: number;
  title: string;
  content: string;
  tags: string;
  publish_date: string;
  user_name: string;
  user_avatar: string;
  like_count: number;
}

export interface IssueMessageListData {
  publish_date: string;
  content: string;
  issue_id: number;
  user_name: string;
  user_avatar: string;
}
