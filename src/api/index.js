import request from "../utils/request";

function login(userinfo) {
  return request.post("/manage/login", userinfo);
}

export default {
  login,
};
