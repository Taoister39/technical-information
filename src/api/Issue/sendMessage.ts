import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const sendMessageApi = async (msg: string, issueId: number) => {
  const response = await http.post<HttpReceive>("/issue/comment", {
    content: msg,
    issue_id: issueId,
  });
  if (response.status !== 200) {
    throw new Error("调用发送问答评论接口出错");
  }

  const { data } = response;
  if (data.status === 1) {
    throw new Error(data.message);
  }
};
export default sendMessageApi;
