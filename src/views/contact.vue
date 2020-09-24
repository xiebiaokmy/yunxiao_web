<template>
  <div class="Contact">
    <div class="banner">
      <h1>我们期待您的来电</h1>
      <div class="spans">让我们优秀的团队为您服务</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Contact",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.$parent.setNav(5, 0);
  }
};
</script>
<style lang="less" scoped>
.Contact {
  .banner {
    height: 7rem;
    background-image: url("../../public/static/lianxi-banner@2x.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 3rem;
    box-sizing: border-box;
    position: relative;
    h1 {
      font-size: 0.6rem;
      color: #fff;
      text-align: center;
      margin-bottom: 0.62rem;
    }
    .spans {
      font-size: 0.36rem;
      color: #fff;
    }
  }
}
</style>
