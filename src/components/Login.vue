<template>
<div class="login-box">
  <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-ruleForm">
    <el-form-item prop="userName">
      <el-input type="text" v-model="loginForm.userName" autocomplete="off" placeholder="登录账号"></el-input>
    </el-form-item>
    <el-form-item prop="password" @keyup.enter.native ="submitForm('loginForm')" inline = 'true'>
      <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="登录密码"><el-button slot="append">忘记密码?</el-button></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')" class="login-btn">立即登录</el-button>
    </el-form-item>
  </el-form>
  <!-- <el-button type="primary" @click="onClickLogin">主要按钮</el-button> -->
</div>
</template>

<script>
export default {
  data () {
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        if (this.loginForm.userName !== '') {
          // this.$refs.loginForm.validateField('userName');
        }
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.loginForm.password !== '') {
          // this.$refs.loginForm.validateField('password');
        }
        callback()
      }
    }

    return {
      loginForm: {
        userName: 'guest',
        password: 'guest'
      },
      rules: {
        userName: [{
          validator: validateUserName,
          trigger: 'blur'
        }],
        password: [{
          validator: validatePassword,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.loginForm.userName)
          console.log(this.loginForm.password)
          localStorage.setItem('guest', this.loginForm.userName)
          this.$router.push('/list')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-box {
  height: 100vh;
  width: 100vw;
  position: relative;
  background: #fff;
  .el-form{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 350px;
    .login-btn{
      width: 100%;
    }
  }
  .el-header {
    background-color: #409EFF;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
}
</style>
