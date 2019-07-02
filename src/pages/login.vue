
<template>
  <div class="loginContainer">
    <div class="login-box">
        <el-form :model="formInfo" :status-icon="false" :rules="rules" >
          <h3>艾鑫会员登录</h3>
          <el-form-item  prop="phone">
            <el-input @input="changeFlag" :clearable="true" type="text" v-model="formInfo.phone" autocomplete="on" placeholder="手机号码"></el-input>
          </el-form-item>
          <el-form-item  prop="validateCode">
            <el-row :gutter="20">
              <el-col :span="14" >
                <el-input v-model="formInfo.validateCode" placeholder="验证码"></el-input>
              </el-col>
              <el-col :span="6" >
                <el-button @click="sendValidateCode" :disabled="isDisable" v-if="!isSend">获取验证码</el-button>
                <el-button style="width:112px" @click="sendValidateCode" :disabled="isDisable" v-else>{{this.timeCount}}</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginUser(formInfo)" >登录</el-button>
            <el-button @click="$router.push('/register')">注册</el-button>
          </el-form-item>
        </el-form>
        <!--<div >-->
        <!--<i class="iconfont icon-weixin" ></i>-->
        <!--</div>-->
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      formInfo: {},
      rules: {
        phone: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          {min: 11, max: 11, message: '请输入11位的手机号码', trigger: 'blur'}
        ],
        validateCode: [
          {required: true, message: '请输入验证码'}
        ]
      },
      validateArry: [],
      isDisable: true,
      timeCount: 30,
      isSend: false,
      timer: null,
      validateCode: -1
    }
  },
  methods: {
    loginUser (info) {
      let _this = this
      // if (info.username === 'admin' && info.pwd === '123456') {
      //   this.$router.push({ path: '/index' })
      //   sessionStorage.setItem('user', 'ok')
      // } else {
      //   this.$message({
      //     message: '账号或密码错误',
      //     type: 'error'
      //   })
      // }

      let flagCode = info.validateCode
      flagCode = parseInt(flagCode)

      console.log(this.validateArry)
      console.log(this.validateArry.indexOf(flagCode))
      // 验证码判断
      if (this.validateArry.indexOf(flagCode) !== -1) {
        this.axios({
          method: 'post',
          url: '/api.php/demo/index/mobilelogin',
          params: {
            mobile: info.phone
          }
        }).then(res => {
          if (res.status === 200) {
            let userData = res.data.data
            _this.$store.commit('setUser', userData)
            sessionStorage.setItem('user', res.data.data.name)
            _this.$router.push('/index')
          } else {
            _this.$message({
              message: '未知异常请联系管理员',
              type: 'error'
            })
          }
        })
      } else {
        this.$message({
          message: '验证码错误',
          type: 'error'
        })
      }
    },
    registerUser () {

    },
    sendValidateCode () {
      let _this = this
      let phone = this.formInfo.phone
      this.timeDelay()
      this.isSend = true
      this.axios({
        method: 'post',
        url: '/api.php/demo/index/send',
        params: {
          mobile: phone
        }
      }).then(response => {
        if (response.status === 200) {
          // sessionStorage.setItem('user', response.data.data.name)
          // this.$store.commit('setUser')
          console.log(this === _this)
          _this.validateArry.push(response.data.recode)
        } else {
          _this.$message({
            message: '未知异常请联系管理员',
            type: 'error'
          })
        }
      })
    },
    changeFlag (str) {
      if (str.length === 11) {
        this.isDisable = false
      } else {
        this.isDisable = true
      }
    },
    timeCountt () {
      this.timeCount = this.timeCount - 1
      // console.log(this.timeCount)
      if (this.timeCount === 0) {
        clearInterval(this.timer)
        this.isSend = false
      }
    },
    timeDelay () {
      this.timeCount = 30
      this.timer = setInterval(this.timeCountt, 1000)
    }
  }
}
</script>

<style scoped lang="less">
  .loginContainer{
    height: 100%;
    padding-top: 200px;

    .login-box{
      box-shadow: 0 0 20px 2px rgba(0,0,0,0.1);
      width: 350px;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
      text-align: center;
      border-radius: 5px;
      h3{
        font-size: 20px;
        letter-spacing: 2px;
        padding-bottom: 20px;
        font-weight: 800;
        color: #505458;
      }
    }
    .icon-weixin{
      font-size: 30px;

    }
    .icon-weixin:hover{
      color: green;

    }

  }

</style>
