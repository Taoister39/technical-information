import Api from "@/types/Api";
import { ArticleListData } from "@/types/Data";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

interface ArticleListApi {
  list: ArticleListData[];
  maxCount: number;
}
const getArticleListApi = async (
  page: number,
  per_page: number,
  cate_id?: number,
  search?: string
): Promise<Api<ArticleListApi>> => {
  const response = await http.get<HttpReceive<ArticleListApi>>(
    "/article/list",
    {
      params: {
        page,
        per_page,
        cate_id,
        search,
      },
    }
  );
  if (response.status !== 200) {
    throw new Error("获取文章接口有误");
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

export default getArticleListApi;
