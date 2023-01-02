import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const startApi = async (article_id: number) => {
  const response = await http.post<HttpReceive>("/article/start", {
    article_id,
  });
  if (response.status !== 200) {
    throw new Error("调用点赞接口失败");
  }
  const { data } = response;
  if (data.status === 1) {
    throw new Error(data.message);
  }
};
export default startApi;
