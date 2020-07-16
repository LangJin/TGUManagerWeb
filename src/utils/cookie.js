
import VueCookies from 'vue-cookies'

// const Cookies = VueCookies.VueCookies;

export function setCookie(key,value){
    VueCookies.set(key,value)
}

export function getCookie(key){
    return VueCookies.get(key)
}

export function delCookie(key){
    VueCookies.remove(key)
}

export function isCookie(key){
    return VueCookies.isKey(key)

}
export default {
    setCookie,
    getCookie,
    delCookie,
    isCookie
}

