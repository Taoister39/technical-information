import UserStore from "@/store/UserStore";

class RootStore {
  userStore = new UserStore();
}

const store = new RootStore();
const useStore = () => store;

export default useStore;
