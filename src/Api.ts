import axios from "axios";

export const api = axios.create({
  baseURL: "https://crudcrud.com/api/89c903ecfdef4648a2d24f3aa499bc1b",
  timeout: 10000,
});
