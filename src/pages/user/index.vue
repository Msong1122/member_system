<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      </el-breadcrumb>
      个人中心

      <el-table
        :data="userlist"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="age"
          label="出生日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="id"
          label="省份证号码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="grade"
          label="积分"
          width="180">
        </el-table-column>
        <el-table-column
          prop="site"
          label="收货地址"
          width="180">
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
import {getUserlist} from '../../api/user'

export default {
  name: 'index',
  data () {
    return {
      userlist: []
    }
  },
  created () {
    getUserlist().then(res => {
      this.userlist = res.data.userList
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
