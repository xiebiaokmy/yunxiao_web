<template>
  <div class="list">
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
        <span>新闻中心</span>
      </div>
    </div>
    <div class="news-box">
      <div
        class="each-news"
        v-for="(item)  in newsList"
        :key="item.id"
        @click=" toOtherPage('/NewsDetail')"
      >
        <div class="cover">
          <img :src="item.cover" alt="图片" />
        </div>
        <div class="time">{{item.time}}</div>
        <div class="title">{{item.title}}</div>
        <div class="brief">{{item.brief}}</div>
      </div>
    </div>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="count"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  nameL: "list",
  data() {
    return {
      newsList: [
        {
          id: 1,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        },
        {
          id2: 2,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        },
        {
          id: 3,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        },
        {
          id: 4,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        },
        {
          id: 5,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        },
        {
          id: 6,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        },
        {
          id: 5,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        },
        {
          id: 6,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        },
        {
          id: 5,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        },
        {
          id: 6,
          cover:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=188173295,510375359&fm=26&gp=0.jpg",
          title:
            "我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻",
          brief:
            "在疫情过后，广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力广告传媒人应当怎样做才能赢回先机？广告传媒企业又当如何发力",
          time: 1600856325000
        }
      ],
      count: 50
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
.list {
  background: #eff7fe;
  padding-bottom: 1rem;
  text-align: center;
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
        &:nth-child(2) {
          cursor: pointer;
        }
      }
    }
  }
  .news-box {
    width: 15.2rem;
    margin: 0 auto 1.15rem;
    display: flex;
    flex-wrap: wrap;
  }
  .each-news {
    padding: 0.2rem 0.2rem 0.8rem;
    width: 3.6rem;
    box-sizing: border-box;
    text-align: left;
    cursor: pointer;
    background: #fff;
    margin-bottom: 0.3rem;
    margin-right: 0.2rem;
    &:nth-child(4n) {
      margin-right: 0;
    }
    &:hover {
      background: #1a72e6;
    }
    &:hover .title {
      color: #fff;
    }
    &:hover .time {
      color: #fff;
    }
    &:hover .brief {
      color: #fff;
    }
    &:hover .more {
      color: #fff;
    }
    .cover {
      width: 3.2rem;
      height: 2.23rem;
      margin-bottom: 0.5rem;
      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
    .time {
      font-size: 0.18rem;
    }
    .title {
      font-size: 0.24rem;
      font-weight: 600;
      margin: 0.24rem 0 0.29rem;
      line-height: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .brief {
      font-size: 0.18rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 0.26rem;
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
  .list {
    .new-header {
      width: 100%;
      padding: 0 0.2rem;
      box-sizing: border-box;
      margin: 0.3rem 0;
    }
    .news-box {
      width: 100%;
      padding: 0 0.2rem;
      box-sizing: border-box;
      flex-wrap: wrap;
      justify-content: space-between;
      .each-news {
        width: 48%;
        margin-right: 0;
      }
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