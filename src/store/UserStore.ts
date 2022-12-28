import { makeAutoObservable } from "mobx";

class UserStore {
  username = "";
  avatar = ""; // 使用base64 url
  constructor() {
    makeAutoObservable(this);
  }
  login() {}
  register() {}
}
export default UserStore;
