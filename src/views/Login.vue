<template>
  <div>
    <el-form ref="from" :model="userinfo" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="userinfo.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="userinfo.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="login('from')">登录</el-button>
        <el-button type="primary" @click="refrom('from')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {setCookie } from '../utils/cookie'
  export default {
    name: "Login",
    data() {
      return {
        userinfo: {
          username: 'admin',
          password: 'admin123'
        },
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'},
            { message: '账号长度在5-8位', trigger: 'blur',min:5,max:8}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'},
            { message: '密码长度在8-12位', trigger: 'blur',min:8,max:12}
          ]
        }
      }
    },
    methods: {
      login(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
                let userinfo = {"username":this.userinfo.username,"password":this.userinfo.password}
                this.$http.login(userinfo).then(res =>{
                    console.log(res)
                    setCookie("token",res.data.token)
                    this.$router.push("/home")
                    this.$message({
                        message:"登陆成功！",
                        type:"success"
                    })
                }).catch(res =>{
                    this.$message({message:res.message,type:"warning"})
                })
            } else {
                console.log('输入的数据不符合要求！');
            }
        })
        },
        refrom(formName){
            this.$refs[formName].resetFields();
        }
    }
  }
</script>

<style scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
</style>