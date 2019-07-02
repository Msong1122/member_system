<template>
  <el-container>
    <el-aside :class="components.isCollapse? 'shrink':'open'" class="hidden-sm-and-down">
      <nav-bar></nav-bar>
    </el-aside>
    <el-aside :class="components.isCollapse? 'close':'open_mobile'" class="hidden-sm-and-up"
      :style="components.isCollapse? 'width:0px':'width:300px'"
    >
      <nav-bar-mobile></nav-bar-mobile>
    </el-aside>

    <el-container>
      <el-header>
        <header-info></header-info>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavBar from '../components/NavBar'
import NavBarMobile from '../components/NavBarMobile'
import HeaderInfo from '../components/HeaderInfo'
import {mapState} from 'vuex'

export default {
  name: 'index',
  components: {HeaderInfo, NavBar, NavBarMobile},
  computed: {
    ...mapState(['components'])
  }
}
</script>

<style scoped lang="less">
  .el-container{
    width: 100%;
    height: 100%;
  }
  .el-header,.el-aside{
    background-color: #334157;

  }
  .el-header{
    border-left: solid 1px #cccccc;
  }
  .el-aside{
    border-right: none;
    .el-menu{
      border-right: none;
    }
  }
  //去掉侧边滚动条 只有webkit内核有效
  .el-aside::-webkit-scrollbar {
    display: none;
  }
  //侧边宽高度
  .shrink{
    width: 64px !important;
    height: 100%;
    transition-delay: 0.3s;
  }
  .open{
    width: 240px !important;
    height: 100%;
  }
  .open_mobile{
    transition-duration: 0.51s;

    width: 160px !important;
    height: 100%;
  }
  .close{
    transition-duration: 0.5s;
    /*display: none;*/
    width: 0px;
  }

</style>
