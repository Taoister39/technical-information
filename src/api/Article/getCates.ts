import { ArticleCateData } from "@/types/Data";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const getCatesApi = async (): Promise<ArticleCateData[]> => {
  const response = await http.get<HttpReceive<ArticleCateData[]>>(
    "/article/cates"
  );
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  const { data } = response;

  if (data.status === 1 || data.data === undefined) {
    throw new Error("获取文章分类失败");
  }

  return data.data;
};

export default getCatesApi;
