<template>
  <el-header style="height: 65px">
    <el-row>
      <el-col :xs="10" :sm="10" :md="8" :lg="6" :xl="4">
        <div class="navbar-header pull-left hidden-xs hidden-sm">
          <a class="navbar-brand no-padding">
            <!--<i class="navbar-logo pull-left"></i>-->
            <span class="navbar-title pull-left logo">LOGO</span>
          </a>
        </div>
      </el-col>
      <el-col
        v-show="isLogin"
        id="logout"
        :xs="2"
        :sm="2"
        :md="2"
        :lg="2"
        :xl="2"
        class="fontSize"
      >
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ currentUser }}
            <i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">
              <i class="el-icon-menu" style="margin-right: 5px" />退出
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-star-on" style="margin-right: 5px" />
              <a
                class="a-new"
                style="color: '#111'; text-decoration: none"
                target="_blank"
                href="https://github.com/chengheai/mongodb-vue"
              >github</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "0",
      user: ""
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    }
  },
  methods: {
    logout() {
      console.log("this.$router: ", this.$route);
      console.log(1);
      this.$router.push("/");
      this.$store.dispatch("setUser", null);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: #409eff;
  color: #333;
  text-align: left;
  line-height: 60px;
}
.logo {
  font-weight: 600;
  font-size: 20px;
  color: #fff;
}
#logout {
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  float: right;
  cursor: pointer;
}
.el-dropdown-link {
  font-size: 18px;
  color: #fff;
}
.a-new:hover,
.a-new:focus,
.a-new:visited {
  color: #111;
}
</style>
