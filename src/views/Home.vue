<template>
  <div class="home">
    <header>
      <div class="logo">
        <img src="../../public/static/logo@2x.png" alt />
      </div>
      <nav>
        <ul>
          <li class="p-t-li" :class="cruNav==1?'active':''" @click="toOtherPage('/Index')">
            <b>蕴啸首页</b>
            <p>HOME</p>
          </li>
          <li class="p-ser p-t-li" :class="cruNav==2?'active':''">
            <b>产品服务</b>
            <p>SERVICE</p>
            <ul class="p-ser-sub">
              <li :class="subCruNav==1?'activesbu':''" @click="toOtherPage('/Spread')">公关传播</li>
              <li :class="subCruNav==2?'activesbu':''" @click="toOtherPage('/Marketing')">数字化营销</li>
              <li :class="subCruNav==3?'activesbu':''" @click="toOtherPage('/Design')">创意设计</li>
              <li :class="subCruNav==4?'activesbu':''" @click="toOtherPage('/Offline')">线下公关</li>
              <li :class="subCruNav==5?'activesbu':''" @click="toOtherPage('/Monitor')">营销工具</li>
            </ul>
          </li>
          <li class="p-t-li" :class="cruNav==3?'active':''" @click="toOtherPage('/Case')">
            <b>客户案例</b>
            <p>CASE</p>
          </li>
          <li class="p-t-li" :class="cruNav==4?'active':''" @click="toOtherPage('/About')">
            <b>关于我们</b>
            <p>ABOUT</p>
          </li>
          <li class="p-t-li" :class="cruNav==5?'active':''" @click="toOtherPage('/Contact')">
            <b>联系我们</b>
            <p>CONTACT</p>
          </li>
        </ul>
      </nav>
      <div class="tel"></div>
    </header>
    <div class="m-header">
      <div class="logo">
        <img src="../../public/static/logo@2x.png" alt />
      </div>
      <div class="m-nav" @click="showMobileNav">
        <img src="../../public/static/m-nav-icon.png" alt />
      </div>
    </div>
    <div class="m-nav-page" v-if="isShowMobileNav">
      <div class="m-show-header">
        <div class="logo">
          <img src="../../public/static/m-show-icon.png" alt />
        </div>
        <div class="m-nav" @click="showMobileNav">
          <img src="../../public/static/m-nav-icon-white.png" alt />
        </div>
      </div>
      <div class="m-show-nav">
        <ul>
          <li :class="cruNav==1?'activeLi':''" @click="toOtherPage('/Index')">
            <span style="visibility: hidden;">1</span>&nbsp;&nbsp; 蕴啸首页&nbsp;HOME
          </li>
          <li>
            <span style="visibility: hidden;">1</span>&nbsp;&nbsp;产品服务&nbsp;SERVICE
            <ul class="m-ser-ul">
              <li :class="subCruNav==1?'activesbu':''" @click="toOtherPage('/Spread')">公关传播</li>
              <li :class="subCruNav==2?'activesbu':''" @click="toOtherPage('/Marketing')">数字化营销</li>
              <li :class="subCruNav==3?'activesbu':''" @click="toOtherPage('/Design')">创意设计</li>
              <li :class="subCruNav==4?'activesbu':''" @click="toOtherPage('/Offline')">线下公关</li>
              <li :class="subCruNav==5?'activesbu':''" @click="toOtherPage('/Monitor')">营销工具</li>
            </ul>
          </li>
          <li :class="cruNav==3?'activeLi':''" @click="toOtherPage('/Case')">
            <span style="visibility: hidden;">1</span>&nbsp;&nbsp;客户案例&nbsp;CASE
          </li>
          <li :class="cruNav==4?'activeLi':''" @click="toOtherPage('/About')">
            <span style="visibility: hidden;">1</span>&nbsp;&nbsp;关于我们&nbsp;ABOUT
          </li>
          <li :class="cruNav==5?'activeLi':''" @click="toOtherPage('/Contact')">
            <span style="visibility: hidden;">1</span>&nbsp;&nbsp;联系我们&nbsp;CONTACT
          </li>
          <!-- <li :class="active==6?'activeLi':''">蕴啸首页&nbsp;HOME</li> -->
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <footer>
      <div class="auto">
        <div class="a-top">
          <div class="a-left">
            <div class="e-ul">
              <p>我们的服务</p>
              <ul>
                <li @click="toOtherPage('/Spread')">公关传播</li>
                <li @click="toOtherPage('/Marketing')">数字化营销</li>
                <li @click="toOtherPage('/Design')">创意设计</li>
              </ul>
            </div>
            <div class="e-ul e-ul1">
              <p style="visibility: hidden;">我们的服务</p>
              <ul>
                <li @click="toOtherPage('/Offline')">线下公关</li>
                <li @click="toOtherPage('/Monitor')">营销工具</li>
              </ul>
            </div>
            <div class="e-ul">
              <p @click="toOtherPage('/About')">关于我们</p>
              <ul>
                <li @click="toOtherPage('/About')">公司介绍</li>
                <li @click="toOtherPage('/Contact')">联系我们</li>
                <li @click="toOtherPage('/Monitor')">新闻中心</li>
              </ul>
            </div>
            <div class="e-ul e-ul2">
              <p>联系方式</p>
              <ul>
                <li>
                  <img src="../../public/static/yj-iphone@2x.png" alt />
                  <span>电话:</span>
                  <span>021-6917299</span>
                </li>
                <li>
                  <img src="../../public/static/yj-email@2x.png" alt />
                  <span>邮箱:</span>
                  <span>online@pzoom.com</span>
                </li>
                <li>
                  <img src="../../public/static/yj-map@2x.png" alt />
                  <span>地址:</span>
                  <span>北京市朝阳区酒仙桥北路9号恒通国际 创新园C7座</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="a-right">
            <img src="../../public/static/yj-logo@2x.png" alt />
          </div>
        </div>
        <div class="a-bottom">
          版权所有:Copyright @2015 Zoom Interactive Co,Ltd.All rights reserved.
          <a
            href="#"
          >京lCP备12004404号</a>
          <a href="#">京公网安备11010502040679号</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import { init } from "../tools/utils";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isShowMobileNav: false,
      cruNav: 1,
      subCruNav: 0
    };
  },
  methods: {
    //显示移动端导航
    showMobileNav() {
      this.isShowMobileNav = !this.isShowMobileNav;
    },
    //设置当前导航
    setNav(index, index1) {
      this.cruNav = index;
      this.subCruNav = index1;
      console.log(this.cruNav, this.subCruNav);
    },
    //跳转页面
    toOtherPage(path) {
      this.$router.push(path);
      this.isShowMobileNav = false;
    }
  },
  mounted() {
    init(window, document);
  }
};
</script>
<style lang="less" scoped>
// @import "./base.scss";

.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  header {
    display: flex;
    justify-content: space-between;
    margin: 0 5.2rem;
    position: relative;
    z-index: 888;
    .logo {
      width: 2rem;
      height: 0.64rem;
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
    nav {
      > ul {
        display: flex;
        align-items: center;
        .p-t-li {
          width: 1.1rem;
          height: 1.1rem;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          margin: 0 0.3rem;
          cursor: pointer;
          &:hover {
            background: #1a72e6;
            color: #fff;
          }
          b {
            margin-bottom: 0.1rem;
            font-size: 0.16rem;
            font-weight: 600;
          }
          p {
            font-size: 0.13rem;
          }
        }
        .active {
          background: #1a72e6;
          color: #fff;
        }
        .p-ser {
          position: relative;
          .p-ser-sub {
            display: none;
            text-align: left;
            bottom: -3.8rem;
            left: 0;
            width: 2.2rem;
            position: absolute;
            background: #1a72e6;
            font-size: 0.16rem;
            li {
              line-height: 0.8rem;
              padding-left: 0.2rem;
              cursor: pointer;
              color: #fff;
              &:hover {
                background: #1764ca;
              }
            }
            .activesbu {
              background: #1764ca;
            }
          }
          &:hover .p-ser-sub {
            display: block;
          }
        }
      }
    }
    .tel {
      width: 2.1rem;
      outline: 1px solid red;
    }
  }
  .m-header {
    display: none;
  }
  .m-nav-page {
    display: none;
  }
  .content {
    flex: 1;
    position: relative;
    margin-top: -1.1rem;
    // z-index: -1;
  }
  footer {
    padding: 0.72rem 0 0.22rem;
    background: #2f2f2f;
    .auto {
      width: 15.2rem;
      margin: 0 auto;
      .a-top {
        display: flex;
        justify-content: space-between;
        .a-left {
          display: flex;
          border-bottom: 1px solid #373737;
          padding-bottom: 0.7rem;
          width: 13rem;
          padding-right: 3rem;
          box-sizing: border-box;
          justify-content: space-between;
          .e-ul {
            > p {
              color: #aeaeae;
              font-size: 0.18rem;
              margin-bottom: 0.4rem;
              text-align: left;
            }
            li {
              font-size: 0.16rem;
              color: #aeaeae;
              line-height: 0.4rem;
              text-align: left;
              img {
                width: 0.34rem;
                height: 0.34rem;
                vertical-align: middle;
              }
            }
          }
        }
        .a-right {
          width: 1.9rem;
          height: 2.24rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .a-bottom {
        font-size: 0.16rem;
        margin-top: 0.25rem;
        color: #757575;
        a {
          color: #757575;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .home {
    header {
      display: none;
    }
    .m-nav-page {
      position: fixed;
      top: 0;
      left: 0;
      display: block;
      z-index: 999;
      width: 100%;
      height: 100vh;
      background: #1a72e6;
      overflow-y: auto;
      .m-show-header {
        display: flex;
        justify-content: space-between;
        height: 1.1rem;
        align-items: center;
        padding: 0 0.34rem;
        .logo {
          width: 1.96rem;
          height: 0.53rem;
          img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
        .m-nav {
          width: 0.37rem;
          height: 0.37rem;
          img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
      }
      .m-show-nav {
        margin-top: 1rem;
        > ul {
          text-align: left;
          li {
            font-size: 0.3rem;
            font-weight: 600;
            color: #fff;
            line-height: 1.4rem;
          }
          .activeLi {
            background: #1868d1;
          }
        }
        .m-ser-ul {
          li {
            padding: 0 0.34rem;
            width: 100%;
            font-size: 0.26rem;
            font-weight: normal;
            line-height: 0.8rem;
          }
        }
        .activesbu {
          background: #1764ca;
        }
      }
    }
    .content {
      // z-index: -1;
    }
    .m-header {
      display: flex;
      justify-content: space-between;
      height: 1.1rem;
      align-items: center;
      padding: 0 0.34rem;
      box-sizing: border-box;
      position: relative;
      z-index: 11;
      .logo {
        width: 1.96rem;
        height: 0.53rem;
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
      .m-nav {
        width: 0.49rem;
        height: 0.39rem;
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
    }
    footer {
      .auto {
        width: 100%;
        padding: 0 0.4rem;
        box-sizing: border-box;
        .a-top {
          flex-wrap: wrap;
          border-bottom: 1px solid #373737;
          .a-left {
            flex-wrap: wrap;
            padding: 0;
            border: none;
            .e-ul {
              > p {
                font-size: 0.3rem;
              }
              margin-bottom: 1rem;

              li {
                font-size: 0.24rem;
                line-height: 0.6rem;
              }
            }
          }
          .a-right {
            width: 100%;
            text-align: center;
            img {
              width: 1.95rem;
              height: 2.24rem;
            }
          }
        }
        .a-bottom {
          font-size: 0.28rem;
          margin-top: 0.25rem;
          line-height: 0.36rem;
          color: #757575;
          a {
            color: #757575;
          }
        }
      }
    }
  }
}
</style>
