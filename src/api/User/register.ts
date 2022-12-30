import http from "@/utils/http";

const registerApi = async (
  username: string,
  password: string,
  password2: string
): Promise<{ message: string; isOk: boolean }> => {
  const response = await http.post("/api/register", {
    username,
    password,
    password2,
  });

  const data = response.data;

  if (data.status === 1) {
    return { message: data.message, isOk: false };
  }
  return { message: data.message, isOk: true };
};

export default registerApi;
