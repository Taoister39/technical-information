import UserInfo from "../types/UserInfo";
import { makeAutoObservable } from "mobx";

class UserStore {
  userInfo: UserInfo = {
    username: "",
  };
  constructor() {
    makeAutoObservable(this);
  }
}
export default UserStore;
