import type Api from "@/types/Api";
import type HttpReceive from "@/types/HttpReceive";
import http from "@/utils/http";

const updatePwdApi = async (oldPwd: string, newPwd: string): Promise<Api> => {
  const response = await http.post<HttpReceive>("/user/update/password", {
    oldPwd,
    newPwd,
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
export default updatePwdApi;
