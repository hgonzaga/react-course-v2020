import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-5bd1d.firebaseio.com/",
});

export default instance;
