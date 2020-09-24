<template>
  <div class="About">
    <div class="banner">
      <h1>整合精准营销解决方案提供商</h1>
      <div class="spans">专注高质量高品质营销服务</div>
    </div>
    <div class="about-info">
      <h1>关于蕴啸</h1>
      <p>专注高质量高品质营销服务</p>
      <div class="info-box">
        <div class="left">
          <img src="../../public/static/guanyu-gongsi@2x.png" alt />
        </div>
        <div class="right">
          <div class="c-info c-info1">
            <p class="cp1">上海蕴啸网络科技有限公司</p>
            <p class="cp2">
              公司拥有丰富的客户及媒体资源和优秀的执行团队，
              为客户提供基于搜索营销、移动营销、程序化购买、
              大数据分析、互联网整合营销的一站式服务。
            </p>
          </div>
          <div class="c-info">
            <p class="cp1">核心团队成员</p>
            <p class="cp2">
              皆拥有丰富的SEO 、 SEM、信息流、及互联网营销经验
              常年服务家居/电商/金融/等效果类行业客户
              多人为媒体认证专家，与主流媒体及高校有深度合作项目
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="team">
      <h1>管理团队</h1>
      <p>SEO品牌技术，效果有保障</p>
      <div class="team-user">
        <div class="e-user" v-for="(item,index) in team" :key="item.headIcon+index">
          <div class="user-img">
            <img :src="item.headIcon" alt />
          </div>
          <div class="introduce">
            <div class="name">{{item.name}}</div>
            <div class="title">{{item.title}}</div>
            <div class="dian"></div>
            <div class="brief" :title="item.brief">{{item.brief}}</div>
          </div>
        </div>
      </div>
    </div>
    <MyForm></MyForm>
  </div>
</template>

<script>
// @ is an alias to /src
import MyForm from "../components/myForm";
export default {
  name: "About",
  components: { MyForm },
  data() {
    return {
      team: [
        {
          headIcon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1473836766,4030812874&fm=26&gp=0.jpg",
          name: "管理员",
          title: "seo专业人员",
          brief:
            "媒介策略中心总经理5年BTV媒介工作经验，12年数字媒介工作经验。拥有丰富的能源、汽车、金融FMCG、电商品类经验。"
        },
        {
          headIcon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1473836766,4030812874&fm=26&gp=0.jpg",
          name: "管理员",
          title: "seo专业人员",
          brief:
            "媒介策略中心总经理5年BTV媒介工作经验，12年数字媒介工作经验。拥有丰富的能源、汽车、金融FMCG、电商品类经验。"
        },
        {
          headIcon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1473836766,4030812874&fm=26&gp=0.jpg",
          name: "管理员",
          title: "seo专业人员",
          brief:
            "媒介策略中心总经理5年BTV媒介工作经验，12年数字媒介工作经验。拥有丰富的能源、汽车、金融FMCG、电商品类经验。"
        },
        {
          headIcon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1473836766,4030812874&fm=26&gp=0.jpg",
          name: "管理员",
          title: "seo专业人员",
          brief:
            "媒介策略中心总经理5年BTV媒介工作经验，12年数字媒介工作经验。拥有丰富的能源、汽车、金融FMCG、电商品类经验。"
        },
        {
          headIcon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1473836766,4030812874&fm=26&gp=0.jpg",
          name: "管理员",
          title: "seo专业人员",
          brief:
            "媒介策略中心总经理5年BTV媒介工作经验，12年数字媒介工作经验。拥有丰富的能源、汽车、金融FMCG、电商品类经验。"
        },
        {
          headIcon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1473836766,4030812874&fm=26&gp=0.jpg",
          name: "管理员",
          title: "seo专业人员",
          brief:
            "媒介策略中心总经理5年BTV媒介工作经验，12年数字媒介工作经验。拥有丰富的能源、汽车、金融FMCG、电商品类经验。"
        },
        {
          headIcon:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1473836766,4030812874&fm=26&gp=0.jpg",
          name: "管理员",
          title: "seo专业人员",
          brief:
            "媒介策略中心总经理5年BTV媒介工作经验，12年数字媒介工作经验。拥有丰富的能源、汽车、金融FMCG、电商品类经验。"
        }
      ]
    };
  },
  mounted() {
    this.$parent.setNav(4, 0);
  }
};
</script>

<style lang="less" scoped>
.About {
  .banner {
    height: 7rem;
    background-image: url("../../public/static/guanyu-banner@2x.png");
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
  .about-info {
    height: 9.17rem;
    background-image: url("../../public/static/guanyu-bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 0.9rem;
    box-sizing: border-box;
    color: #000;
    h1 {
      font-size: 0.36rem;
    }
    p {
      font-size: 0.18rem;
      margin: 0.2rem 0 1.2rem;
    }
    .info-box {
      width: 15.18rem;
      margin: 0 auto;
      display: flex;
      .left {
        width: 7.6rem;
        height: 4.6rem;
        margin-right: 0.6rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 4.7rem;
        color: #000;
        padding-top: 0.4rem;
        text-align: left;
        .c-info1 {
          margin-bottom: 0.6rem;
        }
        .c-info {
          .cp1 {
            font-size: 0.3rem;
            margin: 0;
            font-weight: 600;
            margin-bottom: 0.2rem;
          }
          .cp2 {
            margin: 0;
            line-height: 0.32rem;
          }
        }
      }
    }
  }
  .team {
    padding-top: 0.77rem;
    color: #000;
    h1 {
      font-size: 0.36rem;
      margin-bottom: 0.2rem;
    }
    p {
      font-size: 0.18rem;
      margin-bottom: 0.7rem;
    }
    .team-user {
      width: 15.18rem;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      .e-user {
        width: 3.6rem;
        height: 5.66rem;
        position: relative;
        margin-right: 0.26rem;
        margin-bottom: 0.2rem;
        &:nth-child(4) {
          margin-right: 0;
        }
        .user-img {
          width: 3.6rem;
          height: 5.66rem;
          img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
        .introduce {
          display: none;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.2);
          padding: 2rem 0.56rem 0;
          box-sizing: border-box;
          text-align: left;
          color: #fff;
          .name {
            font-size: 0.32rem;
          }
          .title {
            font-size: 0.18rem;
            margin-top: 0.05rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .dian {
            width: 0.35rem;
            height: 0.06rem;
            background: #fff;
            border-radius: 0.03rem;
            margin: 0.4rem 0;
          }
          .brief {
            font-size: 0.18rem;
            line-height: 0.24rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          }
        }
        &:hover .introduce {
          display: block;
        }
      }
    }
  }
}
</style>
