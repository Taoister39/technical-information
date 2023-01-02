import { BeLikeRankingArticle } from "@/types/Data";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const beLikeRankingApi = async () => {
  const response = await http.get<HttpReceive<BeLikeRankingArticle[]>>(
    "/article/belike"
  );

  if (response.status !== 200) {
    throw new Error("获取被点赞数量接口出错");
  }
  const { data } = response;
  if (data.status === 1 || data.data == undefined) {
    throw new Error(data.message);
  }
  return data.data;
};
export default beLikeRankingApi;
