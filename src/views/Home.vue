<template>
  <div class="home">
    <header>
      <div class="logo">
        <img src="../../public/static/logo@2x.png" alt />
      </div>
      <nav>
        <ul>
          <li class="active">
            <b>蕴啸首页</b>
            <p>HOME</p>
          </li>
          <li>
            <b>蕴啸首页</b>
            <p>HOME</p>
          </li>
          <li>
            <b>蕴啸首页</b>
            <p>HOME</p>
          </li>
          <li>
            <b>蕴啸首页</b>
            <p>HOME</p>
          </li>
          <li>
            <b>蕴啸首页</b>
            <p>HOME</p>
          </li>
        </ul>
      </nav>
      <div class="tel"></div>
    </header>
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
                <li>公关传播</li>
                <li>数字化营销</li>
                <li>创意设计</li>
              </ul>
            </div>
            <div class="e-ul e-ul1">
              <p style="visibility: hidden;">我们的服务</p>
              <ul>
                <li>线下公关</li>
                <li>营销工具</li>
              </ul>
            </div>
            <div class="e-ul">
              <p>关于我们</p>
              <ul>
                <li>公司介绍</li>
                <li>联系我们</li>
                <li>新闻中心</li>
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
  mounted() {
    init(window, document);
  }
};
</script>
<style lang="less" scoped>
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
        li {
          width: 1.1rem;
          height: 1.1rem;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          margin: 0 0.1rem;
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
      }
    }
    .tel {
      width: 2.1rem;
      outline: 1px solid red;
    }
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
</style>
