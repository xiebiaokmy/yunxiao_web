
<template>
  <div class="Case">
    <div class="banner">
      <h1>为1000+企业提供整合营销服务</h1>
      <div class="spans">营销效果超出客户预期</div>
    </div>
    <div class="list">
      <div class="row">
        <div class="h-row" v-for="(item,index) in list" :key="item.cover +index">
          <div class="left">
            <img :src="item.cover" alt />
          </div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="dian"></div>
            <div class="brief" :title="item.brief">{{item.brief}}</div>
            <div class="more">
              <span>More</span>
              <img src="../../public/static/jiantou-blue-big.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :pager-count="5" :total="count"></el-pagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Case",
  components: {},
  data() {
    return {
      list: [
        {
          cover:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
          title: "我是新闻标题",
          brief:
            "网站改版后整体跳出率降至50%;在线名营管理执行4个月后，品牌词首页呈现8条正面信线名营管理执行4个月后，品牌词首页呈现8条正面信线名营管理执行4个月后，品牌词首页呈现8条正面信"
        },
        {
          cover:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
          title: "我是新闻标题",
          brief:
            "网站改版后整体跳出率降至50%;在线名营管理执行4个月后，品牌词首页呈现8条正面信"
        },
        {
          cover:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
          title: "我是新闻标题",
          brief:
            "网站改版后整体跳出率降至50%;在线名营管理执行4个月后，品牌词首页呈现8条正面信"
        },
        {
          cover:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
          title: "我是新闻标题",
          brief:
            "网站改版后整体跳出率降至50%;在线名营管理执行4个月后，品牌词首页呈现8条正面信"
        },
        {
          cover:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1689053532,4230915864&fm=26&gp=0.jpg",
          title: "我是新闻标题",
          brief:
            "网站改版后整体跳出率降至50%;在线名营管理执行4个月后，品牌词首页呈现8条正面信"
        }
      ],
      count: 100
    };
  },
  mounted() {
    this.$parent.setNav(3, 0);
  }
};
</script>
<style lang="less" scoped>
.Case {
  text-align: center;
  background: #eff7fe;
  .banner {
    height: 7rem;
    background-image: url("../../public/static/kehuanli-banne@2x.png");
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
  .list {
    width: 15.1rem;
    margin: 0.8rem auto 0;
    padding-bottom: 1.4rem;
    .row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .h-row {
        width: 7.31rem;
        display: flex;
        background: #fff;
        margin-bottom: 0.5rem;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid #1a72e6;
        }
        .left {
          width: 2.15rem;
          height: 2.42rem;
          img {
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
        .right {
          height: 2.42rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0.42rem 0.47rem 0.35rem;
          text-align: left;
          box-sizing: border-box;
          .title {
            font-size: 0.18rem;
            font-weight: 600;
          }
          .dian {
            width: 0.42rem;
            height: 4px;
            background: #000000;
            margin: 0.1rem 0;
          }
          .brief {
            font-size: 0.14rem;
            margin-bottom: 0.3rem;
            line-height: 0.26rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .more {
            display: flex;
            color: #1a72e6;
            font-size: 0.14rem;
            img {
              width: 0.4rem;
              height: auto;
              margin-left: 0.1rem;
            }
          }
        }
      }
    }
  }
  /deep/.el-pager li {
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #d4e5f3;
  }
  /deep/.el-pagination button {
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #d4e5f3;
  }
  /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #1a72e6;
  }
}
@media screen and (max-width: 1200px) {
  .Case {
    .list {
      width: 100%;
      padding: 0 0.2rem;
      box-sizing: border-box;
    }
    .page {
      box-sizing: border-box;
      width: 100%;
    }
  }
}
</style>