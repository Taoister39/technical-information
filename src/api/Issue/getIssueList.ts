import { IssuesData } from "@/types/Data";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

interface IssueListApi {
  maxCount: number;
  list: IssuesData[];
}

const getIssueListApi = async (
  per_page: number,
  page: number
): Promise<IssueListApi> => {
  const response = await http.get<HttpReceive<IssueListApi>>("/issue/list", {
    params: {
      per_page,
      page,
    },
  });

  if (response.status !== 200) {
    throw new Error("获取问答分类接口出错");
  }

  const { data } = response;

  if (data.status !== 0 || !data.data) {
    throw new Error("获取失败");
  }
  return data.data;
};

export default getIssueListApi;
