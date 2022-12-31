import type Api from "@/types/Api";
import HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const updateInfoApi = async (email: string): Promise<Api> => {
  const response = await http.post<HttpReceive>("/user/update/userinfo", {
    email,
  });

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

export default updateInfoApi;
