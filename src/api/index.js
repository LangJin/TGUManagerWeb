import request from '../utils/request'
import {setCookie } from '../utils/cookie'

function login(userinfo) {
    let respnse = request.post("/manage/login",userinfo)
    respnse.then(res => {
        let data = res.data
        setCookie("token",data.token)
    }).catch(err =>{
        console.log(err.message)
    })
}

export default {
    login
}