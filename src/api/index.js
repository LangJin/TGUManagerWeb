import request from "../utils/request";

function login(userinfo) {
  return request.post("/manage/login", userinfo);
}

function getmenulist(){
  return request.get("/getsystemmenulist")
}
export default {
  login,
  getmenulist
};
