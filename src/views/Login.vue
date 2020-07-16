<template>
    <div>
        <div>账号：<input v-model="username"/></div> 
        <div>密码：<input v-model="password" type="password" /></div>   
        <button @click="login">登陆</button>    
    </div>
</template>

<script>
export default {
    data() {
        return {
        username:"",
        password:""}
    },
    methods:{
        login:function(){
            let userinfo = {"username":this.username,"password":this.password}
            this.$http.login(userinfo)
            this.$router.push("/home")
        }
    }
}
</script>