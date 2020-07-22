<template>
    <el-container>
    <el-header>
        <v-header></v-header>
    </el-header>
    
    <el-container>
        <el-aside width="200px">
            <v-aside></v-aside>
        </el-aside>
        
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
    </el-container>
</template>

<script>
import VHeader from './Header.vue'
import VAside from './Aside.vue'
export default {
    data() {
        return {}
    },
    components:{
        VHeader,
        VAside
    }
}
</script>



<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>