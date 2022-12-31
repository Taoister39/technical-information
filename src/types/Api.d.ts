export default interface Api<Data = unknown> {
  message: string;
  isOk: boolean;
  data?: Data;
}
