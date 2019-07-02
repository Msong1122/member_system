<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>测试</el-breadcrumb-item>

  </el-breadcrumb>
</template>

<script>
import Children from '../components/Children'
export default {
  name: 'test',
  data () {
    return {
      isCollapse: true,
      test: 'test3233'
    }
  },
  components: {
    Children
  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
