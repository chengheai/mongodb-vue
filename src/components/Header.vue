<template>
  <el-header style="height: 65px">
    <el-row>
      <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4">
        <div class="navbar-header pull-left  hidden-xs hidden-sm">
          <a class="navbar-brand no-padding">
            <!--<i class="navbar-logo pull-left"></i>-->
            <span class="navbar-title pull-left logo">
					  LOGO
          </span>
          </a>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" id="logout" class="fontSize" @click.native="logout">
        退出
        <i class="el-icon-setting"></i>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: '0'
      };
    },
    methods: {
      logout(){
        console.log(1)
        this.$router.push('/')
      }
    }
  }
</script>
<style>
  .el-header {
    background-color: #409EFF;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  .logo{
    font-weight: 600;
    font-size: 20px;
    color: #fff;
  }
  #logout{
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    float: right;
    cursor: pointer;
  }
</style>

