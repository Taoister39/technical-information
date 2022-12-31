import type Api from "@/types/Api";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";
import type { UploadFile } from "antd";

const articleAddApi = async (
  title: string,
  cateId: number,
  cover: File,
  content: string
): Promise<Api> => {
  const bodyData = new FormData();
  bodyData.append("title", title);
  bodyData.append("cate_id", String(cateId));
  bodyData.append("cover", cover);
  bodyData.append("content", content);

  const response = await http.post<HttpReceive>(
    "http://localhost:3939/article/publish",
    bodyData,
    { headers: { "Content-Type": "form-data" } }
  );
  if (response.status !== 200) {
    throw new Error("文章发布接口有误");
  }
  const { data } = response;

  if (data.status === 1) {
    return {
      isOk: false,
      message: data.message,
    };
  }
  return {
    isOk: true,
    message: data.message,
  };
};

export default articleAddApi;
