import { PublishCountData } from "@/types/Data";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const getPublishInfoApi = async (
  type: "moth" | "week"
): Promise<PublishCountData[]> => {
  const response = await http.get<HttpReceive<PublishCountData[]>>(
    "/article/count/publish",
    {
      params: {
        type,
      },
    }
  );
  if (response.status !== 200) {
    throw new Error("获取文章发布活跃接口出错");
  }
  const { data } = response;
  if (data.status === 1 || !data.data) {
    throw new Error("获取文章发布活跃失败");
  }

  return data.data;
};

export default getPublishInfoApi;
