import Api from "@/types/Api";
import { ArticleData } from "@/types/Data";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const getArticleApi = async (articleId: number): Promise<Api<ArticleData>> => {
  const response = await http.get<HttpReceive<ArticleData>>(
    `/article/content/${articleId}`
  );
  if (response.status !== 200) {
    throw new Error("获取文章接口出错");
  }

  const { data } = response;
  if (data.status === 1) {
    return {
      isOk: false,
      message: data.message,
    };
  }
  return {
    isOk: true,
    message: data.message,
    data: data.data,
  };
};
export default getArticleApi