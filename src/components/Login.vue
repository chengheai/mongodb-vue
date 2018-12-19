<template>
  <div class="login-box">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" class="demo-ruleForm">
      <el-form-item prop="userName">
        <el-input type="text" v-model="loginForm.userName" autocomplete="off" placeholder="登录账号"></el-input>
      </el-form-item>
      <el-form-item prop="password" @keyup.enter.native="submitForm('loginForm')" inline="true">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="登录密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="submitForm('loginForm', 1)" class="login-btn">注册</el-button>
        <el-button
          type="primary"
          @click="submitForm('loginForm', 2)"
          style="margin-top: 10px; margin-left: 0"
          class="login-btn"
        >立即登录</el-button>
      </el-form-item>
    </el-form>
    <!-- <el-button type="primary" @click="onClickLogin">主要按钮</el-button> -->
  </div>
</template>

<script>
import { post_login, post_register } from '@/server/api/server';

export default {
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        if (this.loginForm.userName !== '') {
          // this.$refs.loginForm.validateField('userName');
        }
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.loginForm.password !== '') {
          // this.$refs.loginForm.validateField('password');
        }
        callback();
      }
    };

    return {
      loginForm: {
        userName: 'guest',
        password: 'guest'
      },
      rules: {
        userName: [
          {
            validator: validateUserName,
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: validatePassword,
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName, type) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.loginForm.userName);
          console.log(this.loginForm.password);
          if (type === 1) {
            post_register(that.loginForm).then(res => {
              if (res.data.status === 1000) {
                this.$message({
                  message: res.data.message,
                  type: 'success'
                });
              } else {
                this.$message({
                  message: res.data.message,
                  type: 'warning'
                });
              }
            });
          } else {
            post_login(that.loginForm).then(res => {
              if (res.data.status === 1000) {
                this.$message({
                  message: res.data.message,
                  type: 'success'
                });
                this.$store.dispatch('setUser', this.loginForm.userName);
                this.$router.push('/list');
              } else {
                this.$message({
                  message: res.data.message,
                  type: 'warning'
                });
                this.$store.dispatch('setUser', null)
              }
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-box {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: url('../assets/bg.jpg') no-repeat;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  // background: #fff;
  .el-form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 300px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding: 25px 15px 5px 15px;
    background: darkgray;
    .login-btn {
      width: 100%;
    }
  }
  .el-header {
    background-color: #409eff;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
}
</style>
