import { getInfoApi, loginApi, registerApi, updatePwdApi } from "@/api/User";
import updateInfoApi from "@/api/User/updateInfo";
import { clearToken, setToken } from "@/utils/token";
import { message } from "antd";
import { makeAutoObservable } from "mobx";

class UserStore {
  username: string | undefined;
  avatar: string | undefined; // 使用base64 url
  email: string | undefined;

  constructor() {
    makeAutoObservable(this);
  }
  async login(username: string, password: string): Promise<void> {
    const result = await loginApi(username, password);

    if (result.isOk && result.data) {
      message.success(result.message);
      this.username = result.data.username;
      this.email = result.data.email;
      this.avatar = result.data.avatar;

      setToken(result.data.token);
    } else {
      message.error(result.message);
      throw new Error();
    }
  }
  async register(username: string, password: string, password2: string) {
    const result = await registerApi(username, password, password2);

    if (result.isOk) {
      message.success(result.message);
    } else {
      message.error(result.message);
      throw new Error();
    }
  }
  logout() {
    this.avatar = undefined;
    this.email = undefined;
    this.username = undefined;
    clearToken();
  }
  async updateInfo(email: string) {
    const result = await updateInfoApi(email);

    if (result.isOk) {
      return message.success(result.message);
    }
    return message.error(result.message);
  }
  async updatePwd(oldPwd: string, newPwd: string) {
    const result = await updatePwdApi(oldPwd, newPwd);
    if (result.isOk) {
      return message.success(result.message);
    }
    message.error(result.message);
  }

  async getInfo() {
    const result = await getInfoApi();
    if (!result.isOk) {
      clearToken();
      return message.error(result.message);
    }

    this.avatar = result.data?.user_avatar;
    this.email = result.data?.user_email;
    this.username = result.data?.user_name;
  }
}
export default UserStore;
