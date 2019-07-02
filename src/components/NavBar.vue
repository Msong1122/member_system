<template>
    <el-menu :default-active="$route.path" class="nav-bar " :collapse="components.isCollapse"
             background-color="#334157"
             text-color="#fff"
             active-text-color="#ffd04b"
             router
             menu-trigger="hover"
    >
      <div class="brand">
        <img src="../assets/img/brandLogo.png" alt="" class="logo-img">
      </div>
      <el-submenu index="/user" >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">用户</span>
        </template>
        <!--<el-menu-item-group>-->
        <el-menu-item index="/user/userInfo">
          <i class="el-icon-location"></i>个人中心
        </el-menu-item>
        <el-menu-item index="/user/grade">
          <i class="el-icon-more"></i>
          积分详情</el-menu-item>
        <el-menu-item index="1-3">
          <i class="el-icon-setting"></i>
          设置</el-menu-item>
      </el-submenu>
      <!--</el-menu-item-group>-->

      <el-menu-item index="/store">
        <i class="el-icon-menu"></i>
        <span slot="title">商城</span>
      </el-menu-item>
      <el-menu-item index="/test">
        <i class="el-icon-edit"></i>
        <span slot="title">测试</span>
      </el-menu-item>

    </el-menu>

</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapState(['components'])
  }
}
</script>

<style scoped lang="less">
  .nav-bar:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }
  .brand{
    height: 70px;
    padding-top: 15px;
    text-align: center;
    .logo-img{
      width: 40px;
      height: 40px;
    }
  }
</style>
