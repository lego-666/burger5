import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-34171.firebaseio.com/",
});

export default instance;
