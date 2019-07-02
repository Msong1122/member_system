<template>
  <div class="container">
    <el-row justify="center" type="flex" class="row_title">
      <span class="span_title">艾鑫会员注册</span>
    </el-row>
    <el-row justify="center" type="flex">
      <el-col :xs="20" :sm="16" :lg="16">
        <el-form  label-width="100px" :model="registerData" :rules="rules">
          <el-form-item label="手机号码" prop="phone">
            <el-input @input="changeFlag" type="text" v-model="registerData.phone"></el-input>
          </el-form-item>
          <el-form-item label="部门id" prop="deptId">
            <el-input type="text"  v-model="registerData.deptId"></el-input>
          </el-form-item>
          <el-form-item label="验证码"  prop="validateCode">
            <el-row type="flex" justify="space-between">
              <el-col :lg="12">
                <el-input type="text"  v-model="registerData.validateCode"></el-input>
              </el-col>
              <el-col :lg="8" >
                <el-button @click="getValidateCode" :disabled="isDisable" v-if="!isSend">获取验证码</el-button>
                <el-button style="width:112px" @click="getValidateCode" :disabled="isDisable" v-else>{{this.timeCount}}</el-button>
              </el-col>
            </el-row>

          </el-form-item>
          <el-form-item class="form_button">
              <el-button type="primary" @click="register(registerData)">注册</el-button>
              <el-button @click="returnLogin">返回</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>

  </div>

</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      registerData: {
        deptId: 0
      },
      rules: {
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位的手机号码', trigger: 'blur' }
        ],
        validateCode: [
          { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
      },
      validateArry: [],
      isSend: false,
      timeCount: 30,
      isDisable: true

    }
  },
  methods: {
    register (data) {
      // console.log(data)
      let validateCode = parseInt(data.validateCode)
      if (this.validateArry.indexOf(validateCode) !== -1) {
        this.axios({
          method: 'post',
          url: '/api.php/demo/index/mobileregister',
          params: {
            mobile: data.phone,
            deptid: data.deptId
          }
        }).then(res => {
          if (res.status === 200) {
            if (res.data.code === 1) {
              this.$message({
                message: '注册成功',
                type: 'success'
              })
            } else if (res.data.code === 0) {
              this.$message({
                message: res.data.msg,
                type: 'success'
              })
            } else {
              this.$message({
                message: '未知异常请联系管理员',
                type: 'error'
              })
            }
          }
        })
      } else {
        this.$message({
          message: '验证码错误',
          type: 'error'
        })
      }
    },
    returnLogin () {
      this.$router.push('/login')
    },
    getValidateCode () {
      let _this = this
      this.isSend = true
      this.timeDelay()
      let phone = this.registerData.phone
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
          _this.validateArry.push(response.data.recode)
        } else {
          this.$message({
            message: '未知异常请联系管理员',
            type: 'error'
          })
        }
      })
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
    },
    changeFlag (str) {
      if (str.length === 11) {
        this.isDisable = false
      } else {
        this.isDisable = true
      }
    }

  }
}
</script>

<style scoped lang="less">
  .container{
    height: 100%;
    padding-top: 80px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;

  }
  .row_title{
    padding-bottom: 50px;
    .span_title{

      font-size: 20px;
      letter-spacing: 2px;
      /*padding-bottom: 20px;*/
      font-weight: 800;
      color: #505458;
    }
  }
  .form_button{
    display: flex;
    .el-form-item__content{
    }
  }
  .validateButton{
    width: 100%;
  }

</style>
