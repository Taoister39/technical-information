import { IssueMessageListData } from "@/types/Data";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const getMessageListApi = async (id: number) => {
  const response = await http.get<HttpReceive<IssueMessageListData[]>>(
    "/issue/comment/list",
    {
      params: {
        id,
      },
    }
  );
  if (response.status !== 200) {
    throw new Error("调用问答评论接口出错");
  }
  const { data } = response;

  if (data.status === 1 || !data.data) {
    throw new Error(data.message);
  }
  return data.data;
};
export default getMessageListApi;
