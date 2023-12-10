import type { UserArticleStarData } from "@/types/Data.d";
import type Api from "@/types/Api";
import type HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

interface UserArticleStarApi {
  list: UserArticleStarData[];
  maxCount: number;
}

const getArticleStarApi = async (
  page: number,
  per_page: number
): Promise<Api<UserArticleStarApi>> => {
  const response = await http.get<HttpReceive<UserArticleStarApi>>(
    "user/article/star",
    {
      params: {
        page,
        per_page,
      },
    }
  );

  const { data } = response;

  if (data.status === 1) {
    return {
      message: data.message,
      isOk: false,
    };
  }
  return {
    isOk: true,
    message: data.message,
    data: data.data,
  };
};

export default getArticleStarApi;
