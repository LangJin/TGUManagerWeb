<template>
    <div>
    <i class="el-icon-s-operation" @click="showaside"></i>
    <div style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        showaside(){
            this.$store.commit('edit')
            console.log(this.$store.state.isCollapse)
        }

    }
}
</script>

<style scoped>

</style>