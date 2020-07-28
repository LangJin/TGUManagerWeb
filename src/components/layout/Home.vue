<template>
    <el-container>
    <el-header>
        <v-header></v-header>
    </el-header>
    
    <el-container>
        <el-aside>
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
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  

</style>