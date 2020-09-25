

<template>
  <div class="productsAndservices">
    <div class="banner">
      <h1>营销工具服务</h1>
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
      <h1>舆情监测</h1>
      <p>集监测、预警、分析、报告于一体的强大功能</p>
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
    <div class="characteristic">
      <h1>产品特点</h1>
      <p>为客户提供从全网舆情信息监控到危机事件应对和品牌宣传推广的一整套解决方案</p>
      <p>真正做到为客户分忧解难。</p>
      <div class="char-box">
        <div class="e-char">
          <div class="e-char-img">
            <img src="../../../public/static/pAnds/fuwu5-icon9@2x.png" alt />
          </div>
          <div class="title">专业系统采集，系统强大</div>
          <p class="e-info">自主研发智能网络采集系统</p>
          <p class="e-info">7*24小时不间断</p>
        </div>
        <div class="e-char">
          <div class="e-char-img">
            <img src="../../../public/static/pAnds/fuwu5-icon10@2x.png" alt />
          </div>
          <div class="title">及时预警，实时推送</div>
          <p class="e-info">灵活配置预警规则</p>
          <p class="e-info">7*通过邮件、微信等方式自动推送</p>
        </div>
        <div class="e-char">
          <div class="e-char-img">
            <img src="../../../public/static/pAnds/fuwu5-icon11@2x.png" alt />
          </div>
          <div class="title">海量数据，覆盖广泛</div>
          <p class="e-info">信息源覆盖报刊、新闻网站、贴吧</p>
          <p class="e-info">论坛、博客、“两微一端”等</p>
          <p class="e-info">文本、图片、音频、视频等多媒体</p>
        </div>
        <div class="e-char">
          <div class="e-char-img">
            <img src="../../../public/static/pAnds/fuwu5-icon12@2x.png" alt />
          </div>
          <div class="title">精准情报、智能决策</div>
          <p class="e-info">自动生成多种统计图表</p>
          <p class="e-info">进行深度内容分析</p>
        </div>
        <div class="e-char">
          <div class="e-char-img">
            <img src="../../../public/static/pAnds/fuwu5-icon13@2x.png" alt />
          </div>
          <div class="title">智能分析、深度挖掘</div>
          <p class="e-info">自动事件聚类、热点追踪、传播脉络分析</p>
          <p class="e-info">网民及媒体观点分析</p>
        </div>
        <div class="e-char">
          <div class="e-char-img">
            <img src="../../../public/static/pAnds/fuwu5-icon14@2x.png" alt />
          </div>
          <div class="title">专业团队、全方位舆情服务</div>
          <p class="e-info">专业舆情和大数据服务团队</p>
          <p class="e-info">多渠道支持和全方位舆情服务</p>
        </div>
      </div>
      <div class="info">
        <div class="left">
          <div class="e-info">
            <div class="e-info-img">
              <img src="../../../public/static/pAnds/fuwu5-icon6@2x.png" alt />
            </div>
            <div class="title">精准排名</div>
            <div class="dian"></div>
            <div class="e-info-int">优化关键词排名,为官网带来高质量流量</div>
          </div>
          <div class="e-info">
            <div class="e-info-img">
              <img src="../../../public/static/pAnds/fuwu5-icon7@2x.png" alt />
            </div>
            <div class="title">电商平台</div>
            <div class="dian"></div>
            <div class="e-info-int">电商产品排名优化、产品下拉优化</div>
          </div>
          <div class="e-info">
            <div class="e-info-img">
              <img src="../../../public/static/pAnds/fuwu5-icon8@2x.png" alt />
            </div>
            <div class="title">百思系统</div>
            <div class="dian"></div>
            <div class="e-info-int">关键词大量拓展、优化，提升官网流量</div>
          </div>
        </div>
        <div class="right">
          <h1>拥有国内</h1>
          <h1>领先SEO技术实力</h1>
          <div class="dian"></div>
          <div class="r-intr">
            自主研发工具，集信息收集、网站诊断、关键词拓展、
            官网排名优化、提升流量、监测流量等为一体，
            为了解客户现状，改善客户现状提供了强力的支持。
            在此基础上不断创新，研发更新更具价值的工具，以此满足客户需求。
          </div>
        </div>
      </div>
      <div class="info1">
        <div class="left">
          <h1>拥有国内</h1>
          <h1>领先SEO技术实力</h1>
          <div class="dian"></div>
          <div class="r-intr">
            自主研发工具，集信息收集、网站诊断、关键词拓展、
            官网排名优化、提升流量、监测流量等为一体，
            为了解客户现状，改善客户现状提供了强力的支持。
            在此基础上不断创新，研发更新更具价值的工具，以此满足客户需求。
          </div>
        </div>
        <div class="right">
          <div class="info1-each">
            <div class="info1-img">
              <img src="../../../public/static/pAnds/fuwu5-tu1@2x.png" alt />
            </div>
            <div class="name">网站诊断评分系统</div>
          </div>
          <div class="info1-each">
            <div class="info1-img">
              <img src="../../../public/static/pAnds/fuwu5-tu2@2x.png" alt />
            </div>
            <div class="name">信息搜集分析工具</div>
          </div>
          <div class="info1-each">
            <div class="info1-img">
              <img src="../../../public/static/pAnds/fuwu5-tu3@2x.png" alt />
            </div>
            <div class="name">关键词拓展工具</div>
          </div>
          <div class="info1-each">
            <div class="info1-img">
              <img src="../../../public/static/pAnds/fuwu5-tu4@2x.png" alt />
            </div>
            <div class="name">百度下拉优化工具</div>
          </div>
          <div class="info1-each">
            <div class="info1-img">
              <img src="../../../public/static/pAnds/fuwu5-tu5@2x.png" alt />
            </div>
            <div class="name">基础数据分析工具</div>
          </div>
          <div class="info1-each">
            <div class="info1-img">
              <img src="../../../public/static/pAnds/fuwu5-tu6@2x.png" alt />
            </div>
            <div class="name">关键词排名监控工具</div>
          </div>
          <div class="info1-each">
            <div class="info1-img">
              <img src="../../../public/static/pAnds/fuwu5-tu7@2x.png" alt />
            </div>
            <div class="name">流量统计分析工具</div>
          </div>
          <div class="info1-each">
            <div class="info1-img">
              <img src="../../../public/static/pAnds/fuwu5-tu8@2x.png" alt />
            </div>
            <div class="name">外链分析监控工具</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
var img = require("../../../public/static/pAnds/i1.png");
export default {
  name: "ProductsAndservices",
  data() {
    return {
      index: 5,
      spans: [
        "媒介策略及执行",
        "百度广告投放",
        "今日头条投放",
        "腾讯朋友圈投放"
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
  },
  methods: {
    //跳转页面
    toOtherPage(path) {
      this.$router.push(path);
    }
  },
  mounted() {
    this.$parent.setNav(2, 5);
  }
};
</script>
<style lang="less" scoped>
.productsAndservices {
  text-align: center;
  background: #eff7fe;
  .banner {
    height: 10.64rem;
    background-image: url("../../../public/static/pAnds/fuwu5-banner@2x.png");
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
    padding: 0.8rem 0 1.14rem;
    h1 {
      font-size: 0.36rem;
      color: #000000;
      margin-bottom: 0.18rem;
    }
    p {
      font-size: 0.18rem;
      margin-bottom: 0.2rem;
    }
    .columns {
      width: 15.2rem;
      margin: 1.1rem auto 0;
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
  .characteristic {
    margin-top: 0.75rem;
    color: #000;
    h1 {
      font-size: 0.36rem;
      margin-bottom: 0.2rem;
    }
    > p {
      font-size: 0.18rem;
      margin: 0.1rem;
    }
    .char-box {
      width: 15.2rem;
      margin: 1.05rem auto 0.9rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .e-char {
        width: 33%;
        text-align: center;
        margin-bottom: 1rem;
        .e-char-img {
          width: 1.6rem;
          height: 1.6rem;
          margin: 0 auto 0.27rem;
          border: 1px dashed #a3a5a7;
          img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
        .title {
          font-size: 0.3rem;
          margin-bottom: 0.16rem;
        }
        .e-info {
          font-size: 0.18rem;
          line-height: 0.4rem;
        }
      }
    }
    .info {
      margin: 0 auto 0.27rem;
      width: 15.2rem;
      display: flex;
      justify-content: space-between;
      box-shadow: 1px 1px 13px 3px rgba(30, 39, 165, 0.33);
      .left {
        display: flex;
        width: 9.19rem;
        padding: 0.64rem 0.26rem 0;
        box-sizing: border-box;
        background: #fff;
        justify-content: space-between;
        .e-info {
          width: 28%;
          .e-info-img {
            width: 1.4rem;
            height: 1.4rem;
            margin: 0 auto 0.48rem;
            img {
              width: 100%;
              height: 100%;
              vertical-align: middle;
            }
          }
          .title {
            font-size: 0.3rem;
            margin-bottom: 0.5rem;
          }
          .dian {
            width: 0.36rem;
            height: 0.06rem;
            background: #1a72e6;
            border-radius: 0.03rem;
            margin: 0 auto 0.48rem;
          }
          .e-info-int {
            text-align: left;
            font-size: 0.18rem;
            line-height: 0.3rem;
          }
        }
      }
      .right {
        width: 5.93rem;
        height: 5.35rem;
        background-image: url("../../../public/static/pAnds/info-bg.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: #fff;
        padding: 0.64rem;
        text-align: left;
        h1 {
          font-size: 0.3rem;
        }
        .dian {
          width: 0.35rem;
          height: 0.06rem;
          background: #ffffff;
          border-radius: 0.03rem;
          margin: 0.4rem 0 0.58rem;
        }
        .r-intr {
          width: 3.6rem;
          font-size: 0.18rem;
          line-height: 0.6rem;
        }
      }
    }
    .info1 {
      width: 15.2rem;
      height: 5.85rem;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      box-shadow: 1px 1px 13px 3px rgba(30, 39, 165, 0.33);
      .left {
        width: 4.64rem;
        background-image: url("../../../public/static/pAnds/info-bg.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: #fff;
        padding: 0.88rem 0.54rem;
        text-align: left;
        h1 {
          font-size: 0.3rem;
        }
        .dian {
          width: 0.35rem;
          height: 0.06rem;
          background: #ffffff;
          border-radius: 0.03rem;
          margin: 0.4rem 0 0.58rem;
        }
        .r-intr {
          font-size: 0.18rem;
          line-height: 0.5rem;
        }
      }
      .right {
        width: 10.49rem;
        display: flex;
        justify-content: space-between;
        padding: 0.6rem 0.5rem 0;
        flex-wrap: wrap;
        box-sizing: border-box;
        .info1-each {
          width: 25%;
          margin-bottom: 0.4rem;
          .info1-img {
            width: 2.2rem;
            height: 1.5rem;
            margin-bottom: 0.2rem;
            border: 1px dashed #888888;
            padding: 0.1rem;
            box-sizing: border-box;
            img {
              width: 100%;
              height: 100%;
              vertical-align: middle;
            }
          }
          .name {
            font-size: 0.18rem;
            text-align: center;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .productsAndservices {
    .banner {
      height: 6.83rem;
      padding-top: 1.6rem;
      h1 {
        margin-bottom: 0.4rem;
      }
      .spans {
        width: 100%;
        span {
          font-size: 12px;
        }
      }
      .tabs-box {
        width: 100%;
        .tabs {
          display: flex;
          > span {
            width: 20%;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
    .servers {
      > p {
        width: 6rem;
        line-height: 0.4rem;
        margin: 0 auto 0.2rem;
      }
      .columns {
        width: 100%;
        flex-wrap: wrap;
        padding: 0 0.35rem;
        box-sizing: border-box;
        margin: 1.1rem auto;
        justify-content: space-between;
        .e-column {
          width: 48%;
          margin-bottom: 0.24rem;
          margin-right: 0;
        }
      }
    }
    .case-box {
      height: auto;
      padding-bottom: 1rem;
      .ca-box {
        width: 6.82rem;
        margin: 0 auto;
        .eachca {
          width: 6.82rem;
          flex-wrap: wrap;
          .left {
            width: 100%;
          }
          .right {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>