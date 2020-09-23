<template>
  <div class="productsAndservices">
    <div class="banner">
      <h1>公关传播服务</h1>
      <div class="spans">
        <span v-for="item in spans" :key="item">{{item}}</span>
      </div>
      <div class="tabs-box">
        <div class="tabs">
          <b>|</b>
          <span :class="index==1?'activeSpan':''">公关传播</span>
          <b>|</b>
          <span :class="index==2?'activeSpan':''">数字化营销</span>
          <b>|</b>
          <span :class="index==3?'activeSpan':''">创意设计</span>
          <b>|</b>
          <span :class="index==4?'activeSpan':''">线下公关</span>
          <b>|</b>
          <span :class="index==5?'activeSpan':''">营销工具</span>
          <b>|</b>
        </div>
      </div>
    </div>
    <div class="servers">
      <h1>{{serveInfo.title}}</h1>
      <p>{{serveInfo.sTitle}}</p>
      <div class="columns">
        <div class="e-column" v-for="item in serveInfo.column" :key="item.title">
          <div class="icon">
            <img :src="item.icon" alt />
          </div>
          <p class="title">{{item.title}}</p>
          <div class="dian"></div>
          <div class="describe">{{item.describe}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
var img = require("../../public/static/pAnds/i1.png");
export default {
  name: "ProductsAndservices",
  components: {},
  data() {
    return {
      index: 1,
      spans: [
        "策略规划",
        "品牌年度市场策略与计划",
        "新产品上市推广策略与计划",
        "品牌跨界合作策略与规划",
        "深度分析",
        "市场调研",
        "规划整合",
        "品牌传播",
        "PR发稿",
        "SEO优化",
        "微博微信运营",
        "媒介策略与执行"
      ],
      serveInfo: {
        title: "公关传播业务",
        sTitle:
          "日常曝光率稿件、会务组织、媒体关系管理、网络传播管理、意见领袖（KOL）、微信微博等对外沟通平台托管",
        column: [
          {
            icon: img,
            title: "搜索优化1",
            describe: "为客户提供生态式的营销解决方案，让其在行业内占据领先地位"
          },
          {
            icon: img,
            title: "搜索优化",
            describe: "为客户提供生态式的营销解决方案，让其在行业内占据领先地位"
          },
          {
            icon: img,
            title: "搜索优化2",
            describe: "为客户提供生态式的营销解决方案，让其在行业内占据领先地位"
          },
          {
            icon: img,
            title: "搜索优化3",
            describe: "为客户提供生态式的营销解决方案，让其在行业内占据领先地位"
          }
        ]
      }
    };
  }
};
</script>
<style lang="less" scoped>
.productsAndservices {
  .banner {
    height: 10.64rem;
    background-image: url("../../public/static/pAnds/fuwu1-banner@2x.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 3.8rem;
    box-sizing: border-box;
    position: relative;
    h1 {
      font-size: 0.6rem;
      color: #fff;
      text-align: center;
      margin-bottom: 0.62rem;
    }
    .spans {
      width: 8rem;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      span {
        padding: 0.1rem 0.2rem;
        border-radius: 0.22rem;
        background: #172278;
        opacity: 0.7rem;
        margin: 0.1rem 0.2rem;
        color: #fff;
        font-size: 0.2rem;
        border: 1px dashed #463f7d;
      }
    }
    .tabs-box {
      position: absolute;
      bottom: 0rem;
      left: 0;
      height: 0.8rem;
      line-height: 0.8rem;
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      .tabs {
        font-size: 0.22rem;
        cursor: pointer;
        > span {
          display: inline-block;
          width: 3rem;
          text-align: center;
          color: #fff;
        }
        .activeSpan {
          background: #1a72e6;
        }
        b {
          color: #64656c;
        }
      }
    }
  }
  .servers {
    background: #eff7fe;
    padding: 0.8rem 0 1.14rem;
    h1 {
      font-size: 0.36rem;
      color: #000000;
      margin-bottom: 0.18rem;
    }
    > p {
      font-size: 0.18rem;
      margin-bottom: 1.1rem;
    }
    .columns {
      width: 15.2rem;
      margin: 0 auto;
      display: flex;
      .e-column {
        width: 3.6rem;
        height: 5.35rem;
        box-sizing: border-box;
        padding: 0.48rem 0.5rem 0;
        background: #fff;
        margin-right: 0.25rem;
        color: #000;
        .icon {
          width: 1.65rem;
          height: 1.26rem;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title {
          font-size: 0.3rem;
          margin: 0.43rem 0;
        }
        .dian {
          width: 0.35rem;
          height: 0.06rem;
          background: #1a72e6;
          margin: 0 auto;
          border-radius: 0.03rem;
        }
        .describe {
          font-size: 0.18rem;
          margin-top: 0.62rem;
          line-height: 0.26rem;
          text-align: left;
        }
      }
    }
  }
}
</style>