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
          <span :class="index==1?'activeSpan':''" @click="toOtherPage('/Spread')">公关传播</span>
          <b>|</b>
          <span :class="index==2?'activeSpan':''" @click="toOtherPage('/Marketing')">数字化营销</span>
          <b>|</b>
          <span :class="index==3?'activeSpan':''" @click="toOtherPage('/Design')">创意设计</span>
          <b>|</b>
          <span :class="index==4?'activeSpan':''" @click="toOtherPage('/Offline')">线下公关</span>
          <b>|</b>
          <span :class="index==5?'activeSpan':''" @click="toOtherPage('/Monitor')">营销工具</span>
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
    <div class="case-box">
      <h1>服务案例</h1>
      <p>致力于协助企业品牌形象的建立和公众活动的开展</p>
      <div class="ca-box">
        <swiper ref="swiper" :options="swiperOption2">
          <swiper-slide class="each-banner" v-for="(item)  in caseList" :key="item.id">
            <div class="eachca">
              <div class="left">
                <img :src="item.cover" alt />
              </div>
              <div class="right">
                <div class="title">{{item.title}}</div>
                <div class="dian"></div>
                <div class="background">
                  <span>项目背景:</span>
                  <span>{{item.background}}</span>
                </div>
                <div class="introduce">
                  <span>项目介绍:</span>
                  <span>{{item.introduce}}</span>
                </div>
                <div class="target">
                  <span>项目目标:</span>
                  <span>{{item.target}}</span>
                </div>
                <div class="show-more">
                  <span>More</span>
                  <img src="../../../public/static/pAnds/jiantou-small@2x(1).png" alt="了解更多" />
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <MyForm></MyForm>
  </div>
</template>

<script>
// @ is an alias to /src
import MyForm from "../../components/myForm";
var img = require("../../../public/static/pAnds/i1.png");
export default {
  name: "ProductsAndservices",
  components: {
    MyForm
  },
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
      },
      caseList: [
        {
          id: "1",
          cover:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1699230831,3846389953&fm=26&gp=0.jpg",
          title: "我是案例",
          background:
            "大家看法看见迪斯科解放看见士大夫看见后市的看法合适的客户发开始的回复开始的回复看和",
          introduce:
            "大家看法看见迪斯科解放看见士大夫看见后市的看法合适的客户发开始的回复开始的回复看和",
          target:
            "大家看法看见迪斯科解放看见士大夫看见后市的看法合适的客户发开始的回复开始的回复看和"
        },
        {
          id: "2",
          cover:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1699230831,3846389953&fm=26&gp=0.jpg",
          title: "我是案例",
          background:
            "大家看法看见迪斯科解放看见士大夫看见后市的看法合适的客户发开始的回复开始的回复看和",
          introduce:
            "大家看法看见迪斯科解放看见士大夫看见后市的看法合适的客户发开始的回复开始的回复看和",
          target:
            "大家看法看见迪斯科解放看见士大夫看见后市的看法合适的客户发开始的回复开始的回复看和"
        },
        {
          id: "3",
          cover:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1699230831,3846389953&fm=26&gp=0.jpg",
          title: "我是案例",
          background:
            "大家看法看见迪斯科解放看见士大夫看见后市的看法合适的客户发开始的回复开始的回复看和",
          introduce:
            "大家看法看见迪斯科解放看见士大夫看见后市的看法合适的客户发开始的回复开始的回复看和",
          target:
            "大家看法看见迪斯科解放看见士大夫看见后市的看法合适的客户发开始的回复开始的回复看和"
        }
      ],
      swiperOption2: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 500,
          disableOnInteraction: false
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    //跳转页面
    toOtherPage(path) {
      this.$router.push(path);
    }
  },
  mounted() {
    this.$parent.setNav(2, 1);
  }
};
</script>
<style lang="less" scoped>
.productsAndservices {
  .banner {
    height: 10.64rem;
    background-image: url("../../../public/static/pAnds/fuwu1-banner@2x.png");
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
  .case-box {
    height: 9rem;
    background-image: url("../../../public/static/pAnds/case-bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 0.56rem;
    h1 {
      font-size: 0.36rem;
      font-weight: 600;
      color: #fff;
      text-align: center;
      margin-bottom: 0.18rem;
    }
    p {
      color: #fff;
      font-size: 0.18rem;
      margin-bottom: 0.74rem;
    }
    .ca-box {
      width: 15.15rem;
      margin: 0 auto;
      .eachca {
        display: flex;
        .left {
          width: 7.39rem;
          height: 6.18rem;
          img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
        .right {
          width: 7.75rem;
          box-sizing: border-box;
          height: 6.18rem;
          background: rgba(0, 0, 0, 0.6);
          padding: 0.7rem 0.56rem;
          color: #fff;
          text-align: left;
          .title {
            font-size: 0.3rem;
            margin-bottom: 0.34rem;
          }
          .dian {
            width: 0.35rem;
            height: 0.06rem;
            background: #ffffff;
            border-radius: 0.03rem;
            margin-bottom: 0.41rem;
          }
          .background,
          .introduce,
          .target {
            font-size: 0.18rem;
            line-height: 0.3rem;
            margin-bottom: 0.1rem;
          }

          .show-more {
            cursor: pointer;
            font-size: 0.18rem;
            display: flex;
            align-items: center;
            width: 1.22rem;
            height: 0.4rem;
            border: 1px solid #fff;
            border-radius: 0.2rem;
            margin-top: 1rem;
            text-align: center;
            justify-content: space-around;
            img {
              width: 0.49rem;
              height: 0.09rem;
            }
          }
        }
      }
    }
  }
}
</style>