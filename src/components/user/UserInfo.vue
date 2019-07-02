<template>
    <div>
      {{user}}
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'UserInfo',
  data () {
    return {
      centerDialogVisible: false
    }
  },
  computed: {
    ...mapState(['components', 'user'])
  }
}
</script>

<style scoped lang="less">
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
