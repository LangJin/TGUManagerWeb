import request from '../utils/request'
import {setCookie } from '../utils/cookie'

function login(userinfo) {
    return request.post("/manage/login",userinfo)
}

export default {
    login
}