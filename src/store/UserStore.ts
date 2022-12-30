import { loginApi, registerApi } from "@/api/User";
import { setToken } from "@/utils/token";
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
  async updateInfo(email: string, avatar: string) {}
  async updatePwd(oldPwd: string, newPwd: string) {}
}
export default UserStore;
