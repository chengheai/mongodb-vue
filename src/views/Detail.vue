<template>
  <div class="detail">
    <el-button
      type="success"
      class="goback"
      icon="el-icon-arrow-left"
      @click="goback"
    >返回上一页</el-button>
    <el-carousel
      :interval="2000"
      type="card"
      height="300px"
      indicator-position="outside"
    >
      <el-carousel-item v-for="(item, index) in imgArr" :key="index">
        <img :src="item" alt="" class="imgClass">
      </el-carousel-item>
    </el-carousel>
    <p class="heroName">{{ name }} ● {{ flag }}</p>

    <div>{{ explain }}</div>
  </div>
</template>

<script>
import { get_hero_detail } from "@/api";
// import queryString from 'query-string';
// console.log('queryString:',queryString)
export default {
  name: "Detail",
  data: function() {
    return {
      imgArr: [],
      name: "",
      flag: "",
      explain: ""
    };
  },
  mounted: function() {
    // console.log(this.$route)
    this.getMessage(this.$route.params.name);
  },
  methods: {
    getMessage(id) {
      get_hero_detail(id)
        .then(res => {
          console.log(res);
          this.imgArr = res.data.imgArr;
          this.name = res.data.name;
          this.flag = res.data.favourite;
          this.explain = res.data.explain;
        })
        .catch(error => {
          console.log(error);
        });
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  width: 80%;
  margin: 50px auto;
}

.imgClass {
  width: 100%;
}

.heroName {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
}

.goback {
  margin-bottom: 30px;
}
</style>
