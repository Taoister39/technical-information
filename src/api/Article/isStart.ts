import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const isStartApi = async (article_id: number): Promise<boolean> => {
  const response = await http.post<HttpReceive<boolean>>("/article/isstart", {
    article_id,
  });
  if (response.status !== 200) {
    throw new Error("调用是否点赞接口出错");
  }
  const { data } = response;
  if (data.status === 1 || data.data === undefined) {
    throw new Error("获取失败");
  }

  return data.data;
};

export default isStartApi;
