<template>
  <div> 
    <el-menu :default-active="this.$route.path"  :collapse="isshowaside" router>
      <template v-for="menuinfo of menulist">
        <template v-if="menuinfo.subs"></template>
        <template v-else>
            <el-menu-item :index="menuinfo.munu_url" :key="menuinfo.munu_url">
              <i class="el-icon-headset"></i>
              <span slot="title">{{ menuinfo.munu_name}}</span>
            </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>



<script>
  export default {
    data() {
      this.$http.getmenulist().then(res=>{
          this.menulist = res.data;
          console.log(this.menulist.menu_url)
        }).catch(res =>{
            this.$message({message:res.message,type:"warning"})
        })
      return {
        menulist:[]
      }
    },
    computed:{
      isshowaside(){
        return this.$store.state.isCollapse
      }
    }
  }
</script>

