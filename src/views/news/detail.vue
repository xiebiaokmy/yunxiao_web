<template>
  <div class="detail">
    <div class="bg"></div>
    <div class="new-header">
      <div class="left">
        <span>新闻</span>
        <span>中心</span>
        <span>NEWS</span>
      </div>
      <div class="right">
        <span>当前位置:</span>
        &nbsp;
        &nbsp;
        <span @click="toOtherPage('/Index')">首页</span>
        &nbsp;
        &nbsp;
        <span>></span>
        &nbsp;
        &nbsp;
        <span @click="toOtherPage('/NewsList')">新闻中心</span>
        &nbsp;
        &nbsp;
        <span>></span>
        &nbsp;
        &nbsp;
        <span>新闻详情</span>
      </div>
    </div>
    <div class="detail-box">
      <div class="head">
        <div class="title">{{detail.title}}</div>
        <div class="time">{{detail.time}}</div>
      </div>
      <div class="content" v-html="detail.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  nameL: "detail",
  data() {
    return {
      detail: {
        title: "我是新闻标题",
        time: 12321312312312,
        content:
          "<div style='font-size:16px;'>冬季服饰道具覅雕塑夫的山坡但是剖腹丷u浦东苏泼妇但是剖腹u的山坡u大炮u排毒素</div>"
      }
    };
  },
  methods: {
    toOtherPage(path) {
      this.$router.push(path);
    }
  },
  mounted() {
    this.$parent.setNav(0, 0);
  }
};
</script>
<style lang="less" scoped>
.detail {
  .bg {
    height: 1.1rem;
    background: url("../../../public/static/news-bg.png") no-repeat center;
    background-size: cover;
  }
  .new-header {
    width: 15.18rem;
    margin: 0.2rem auto;
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 0.36rem;
      span {
        font-weight: 600;
        &:first-child {
          color: #1d73e6;
        }
        &:nth-child(2) {
          color: #000;
        }
        &:last-child {
          color: #a8a8a9;
        }
      }
    }
    .right {
      font-size: 0.18rem;
      span {
        &:nth-child(2),
        &:nth-child(4) {
          cursor: pointer;
        }
      }
    }
  }
  .detail-box {
    width: 15.18rem;
    margin: 0 auto;
    .head {
      padding: 0 0.3rem 0.2rem;
      border-bottom: 1px solid #000000;
      margin-bottom: 0.7rem;
      text-align: center;

      .title {
        font-size: 0.3rem;
      }
      .time {
        font-size: 0.14rem;
        text-align: right;
        margin-top: 0.1rem;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .detail {
    .new-header {
      width: 100%;
      padding: 0 0.2rem;
      box-sizing: border-box;
    }
    .detail-box {
      .head {
        width: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
      }
      width: 100%;
      padding: 0 0.2rem;
      box-sizing: border-box;
    }
  }
}
</style>