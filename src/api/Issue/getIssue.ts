import { IssuePreviewData } from "@/types/Data";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const getIssueApi = async (id: number): Promise<IssuePreviewData> => {
  const response = await http.get<HttpReceive<IssuePreviewData>>(
    `/issue/content/${id}`
  );
  if (response.status !== 200) {
    throw new Error("调用问答接口出错");
  }
  const { data } = response;
  if (data.status === 1 || !data.data) {
    throw new Error("获取失败");
  }

  return data.data;
};
export default getIssueApi;
