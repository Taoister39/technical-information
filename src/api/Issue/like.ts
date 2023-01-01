import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const likeApi = async (issue_id: number) => {
  const response = await http.post<HttpReceive>("/issue/like", {
    issue_id,
  });
  if (response.status !== 200) {
    throw new Error("调用点赞接口失败");
  }
  const { data } = response;
  if (data.status === 1) {
    throw new Error(data.message);
  }
};
export default likeApi;
