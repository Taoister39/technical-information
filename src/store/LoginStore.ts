import { makeAutoObservable } from "mobx";

class LoginStore {
  token = "";
  constructor() {
    makeAutoObservable(this);
  }
  async login() {
    return true;
  }
  loginOut() {
    return true;
  }
}

export default LoginStore;
