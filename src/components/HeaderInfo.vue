<template>
  <div class="header-container">
    <span v-if="!components.isCollapse" @click="changeIsCollapse" class="icon-collapse">
      <img src="../assets/img/sq.png" alt="">
    </span>
    <span v-else @click="changeIsCollapse" class="icon-collapse">
      <img src="../assets/img/show.png" alt="">
    </span>
    <div class="header-right">
      <el-dropdown size="medium" placement="bottom-start">
        <a href="javascipt:void(0);"><span class="el-dropdown-link">
        欢迎 {{user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span></a>
        <el-dropdown-menu slot="dropdown">

          <el-dropdown-item >
            <router-link to="/user/userInfo" tag="span">个人中心</router-link>
          </el-dropdown-item>

          <el-dropdown-item divided @click.native="logOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HeaderInfo',
  computed: {
    ...mapState(['components', 'user'])
  },
  methods: {
    changeIsCollapse () {
      this.$store.commit('changeIsCollapse')
    },
    logOut () {
      this.$store.commit('cleanUser')
      sessionStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
  .header-container{
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .header-right{
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    a{
      text-decoration: none;
    }
  }
  .icon-collapse{
    display: inline-block;
    height: 100%;
    padding-top: 14px;
  }
  .el-dropdown-link{
    color: #fff;
  }
</style>
