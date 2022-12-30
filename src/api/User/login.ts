import http from "@/utils/http";

import type HttpReceive from "@/types/HttpReceive";

interface Data {
  username: string;
  avatar: string;
  email: string;
  token: string;
}

const loginApi = async (
  username: string,
  password: string
): Promise<{
  message: string;
  isOk: boolean;
  data?: Data;
}> => {
  const response = await http.post<HttpReceive<Data>>("api/login", {
    username,
    password,
  });
  const { data } = response;

  if (data.status === 1) {
    return { isOk: false, message: data.message };
  }

  return {
    isOk: true,
    message: data.message,
    data: data.data,
  };
};

export default loginApi;
