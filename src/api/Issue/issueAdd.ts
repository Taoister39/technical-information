import Api from "@/types/Api";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const issueAddApi = async (
  title: string,
  content: string,
  tags: string
): Promise<Api> => {
  const response = await http.post<HttpReceive>("/issue/publish", {
    title,
    content,
    tags,
  });
  if (response.status !== 200) {
    throw new Error("发布问答接口出错");
  }

  const { data } = response;

  if (data.status === 1) {
    return {
      message: data.message,
      isOk: false,
    };
  }
  return {
    message: data.message,
    isOk: true,
  };
};
export default issueAddApi;
