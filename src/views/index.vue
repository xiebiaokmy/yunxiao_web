<template>
  <div class="index">
    <div class="banner">
      <swiper ref="bannerSwiper" :options="swiperOption2" v-if="list.length > 1">
        <swiper-slide class="each-banner" v-for="(item)  in list" :key="item">
          <img :src="item" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="our-serve">
      <h1>我们的服务</h1>
      <p>通过有效的价值链运作方式，提升营销竞争力</p>
      <div class="serves">
        <swiper ref="mySwiper" v-if="mobielShow" :options="swiperOption1">
          <swiper-slide>
            <div class="e-serves">
              <div class="e-s-top">
                <img src="../../public/static/fuwu1@2x.png" alt="图片" />
                <p class="title">公关传播</p>
              </div>
              <ul class="ul1">
                <li>· 策略规划</li>
                <li>· 市场调研</li>
                <li>· 品牌年度市场策略与计划</li>
                <li>· 规划整合· 品牌传播</li>
                <li>· 新产品上市推广策略与计划</li>
                <li>· PR发稿· SEO优化</li>
                <li>· 品牌跨界合作策略与规划</li>
                <li>· 媒介策略与执行</li>
                <li>· 深度分析</li>
                <li>· 微博微信运营</li>
              </ul>
              <div class="more" @click="toOtherPage('/Spread')">
                <span>More</span>
                <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="e-serves e-serves1">
              <div class="e-s-top">
                <img src="../../public/static/fuwu2@2x.png" alt="图片" />
                <p class="title">数字化营销</p>
              </div>
              <ul class="ul2">
                <li>· 媒介策略及执行</li>
                <li>· 百度广告投放</li>
                <li>· 腾讯朋友圈投放</li>
                <li>· 今日头条投放</li>
              </ul>
              <div class="more" @click="toOtherPage('/Marketing')">
                <span>More</span>
                <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="e-serves">
              <div class="e-s-top">
                <img src="../../public/static/fuwu3@2x.png" alt="图片" />
                <p class="title">创意设计</p>
              </div>
              <ul class="ul1">
                <li>· 品牌核心策划</li>
                <li>· 品牌LOGO设计</li>
                <li>· 品牌核心创意构建</li>
                <li>· 平面设计&执行</li>
                <li>· 产品/活动主视觉设计</li>
                <li>· 品牌IP形象设计及运营</li>
                <li>· 线上/线下活动策划&执行</li>
                <li>· 包装设计·VI设计</li>
                <li>· TVC脚本撰写&执行</li>
                <li>· 新媒体创意&执行</li>
              </ul>
              <div class="more" @click="toOtherPage('/Design')">
                <span>More</span>
                <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="e-serves e-serves1">
              <div class="e-s-top">
                <img src="../../public/static/fuwu4@2x.png" alt="图片" />
                <p class="title">线下公关</p>
              </div>
              <ul class="ul2">
                <li>· 活动行销</li>
                <li>· 会议/会展</li>
                <li>· 路演/巡演</li>
                <li>· 促销推广</li>
                <li>· 通路营销</li>
                <li>· 直效营销</li>
              </ul>
              <div class="more" @click="toOtherPage('/Offline')">
                <span>More</span>
                <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="e-serves">
              <div class="e-s-top">
                <img src="../../public/static/fuwu5@2x.png" alt="图片" />
                <p class="title">营销工具</p>
              </div>
              <ul class="ul1">
                <li>· 综艺/电视/电影</li>
                <li>· 植入与产品开发</li>
                <li>· 歌曲/音乐会/演唱会定制</li>
                <li>· 规划娱乐传播项目整合</li>
                <li>· 艺人邀约</li>
                <li>· 娱乐媒体合作</li>
              </ul>
              <div class="more" @click="toOtherPage('/Monitor')">
                <span>More</span>
                <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination1" slot="pagination1"></div>
        </swiper>
        <div class="serves-box" v-else>
          <div class="e-serves">
            <div class="e-s-top">
              <img src="../../public/static/fuwu1@2x.png" alt="图片" />
              <p class="title">公关传播</p>
            </div>
            <ul class="ul1">
              <li>· 策略规划</li>
              <li>· 市场调研</li>
              <li>· 品牌年度市场策略与计划</li>
              <li>· 规划整合· 品牌传播</li>
              <li>· 新产品上市推广策略与计划</li>
              <li>· PR发稿· SEO优化</li>
              <li>· 品牌跨界合作策略与规划</li>
              <li>· 媒介策略与执行</li>
              <li>· 深度分析</li>
              <li>· 微博微信运营</li>
            </ul>
            <div class="more" @click="toOtherPage('/Spread')">
              <span>More</span>
              <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
            </div>
          </div>
          <div class="e-serves e-serves1">
            <div class="e-s-top">
              <img src="../../public/static/fuwu2@2x.png" alt="图片" />
              <p class="title">数字化营销</p>
            </div>
            <ul class="ul2">
              <li>· 媒介策略及执行</li>
              <li>· 百度广告投放</li>
              <li>· 腾讯朋友圈投放</li>
              <li>· 今日头条投放</li>
            </ul>
            <div class="more" @click="toOtherPage('/Marketing')">
              <span>More</span>
              <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
            </div>
          </div>
          <div class="e-serves">
            <div class="e-s-top">
              <img src="../../public/static/fuwu3@2x.png" alt="图片" />
              <p class="title">创意设计</p>
            </div>
            <ul class="ul1">
              <li>· 品牌核心策划</li>
              <li>· 品牌LOGO设计</li>
              <li>· 品牌核心创意构建</li>
              <li>· 平面设计&执行</li>
              <li>· 产品/活动主视觉设计</li>
              <li>· 品牌IP形象设计及运营</li>
              <li>· 线上/线下活动策划&执行</li>
              <li>· 包装设计·VI设计</li>
              <li>· TVC脚本撰写&执行</li>
              <li>· 新媒体创意&执行</li>
            </ul>
            <div class="more" @click="toOtherPage('/Design')">
              <span>More</span>
              <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
            </div>
          </div>
          <div class="e-serves e-serves1">
            <div class="e-s-top">
              <img src="../../public/static/fuwu4@2x.png" alt="图片" />
              <p class="title">线下公关</p>
            </div>
            <ul class="ul2">
              <li>· 活动行销</li>
              <li>· 会议/会展</li>
              <li>· 路演/巡演</li>
              <li>· 促销推广</li>
              <li>· 通路营销</li>
              <li>· 直效营销</li>
            </ul>
            <div class="more" @click="toOtherPage('/Offline')">
              <span>More</span>
              <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
            </div>
          </div>
          <div class="e-serves">
            <div class="e-s-top">
              <img src="../../public/static/fuwu5@2x.png" alt="图片" />
              <p class="title">营销工具</p>
            </div>
            <ul class="ul1">
              <li>· 综艺/电视/电影</li>
              <li>· 植入与产品开发</li>
              <li>· 歌曲/音乐会/演唱会定制</li>
              <li>· 规划娱乐传播项目整合</li>
              <li>· 艺人邀约</li>
              <li>· 娱乐媒体合作</li>
            </ul>
            <div class="more" @click="toOtherPage('/Monitor')">
              <span>More</span>
              <img src="../../public/static/jiantou-small@2x(1).png" alt="了解更多" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="con-serve">
      <h1>客户服务案例</h1>
      <p>覆盖装修、汽车、金融、家居，服装等10大领域</p>
      <div class="carousel">
        <swiper ref="conServe" :options="swiperOption2">
          <swiper-slide>
            <div class="each">
              <img src="../../public/static/tu1@2x.png" alt />
              <img src="../../public/static/tu2@2x.png" alt />
              <img src="../../public/static/tu3@2x.png" alt />
              <img src="../../public/static/tu4@2x.png" alt />
              <img src="../../public/static/tu5@2x.png" alt />
              <img src="../../public/static/tu6@2x.png" alt />
              <img src="../../public/static/tu7@2x.png" alt />
              <img src="../../public/static/tu8@2x.png" alt />
              <img src="../../public/static/tu9@2x.png" alt />
              <img src="../../public/static/tu10@2x.png" alt />
              <img src="../../public/static/tu12@2x.png" alt />
              <img src="../../public/static/tu13@2x.png" alt />
              <img src="../../public/static/tu14@2x.png" alt />
              <img src="../../public/static/tu15@2x.png" alt />
              <img src="../../public/static/tu16@2x.png" alt />
              <img src="../../public/static/tu17@2x.png" alt />
              <img src="../../public/static/tu18@2x.png" alt />
              <img src="../../public/static/tu19@2x.png" alt />
              <img src="../../public/static/tu20@2x.png" alt />
              <img src="../../public/static/tu21@2x.png" alt />
              <img src="../../public/static/tu22@2x.png" alt />
              <img src="../../public/static/tu23@2x.png" alt />
              <img src="../../public/static/tu24@2x.png" alt />
              <img src="../../public/static/tu25@2x.png" alt />
              <img src="../../public/static/tu26@2x.png" alt />
              <img src="../../public/static/tu27@2x.png" alt />
              <img src="../../public/static/tu28@2x.png" alt />
              <img src="../../public/static/tu29@2x.png" alt />
              <img src="../../public/static/tu30@2x.png" alt />
              <img src="../../public/static/tu31@2x.png" alt />
              <img src="../../public/static/tu32@2x.png" alt />
              <img src="../../public/static/tu33@2x.png" alt />
              <img src="../../public/static/tu34@2x.png" alt />
              <img src="../../public/static/tu35@2x.png" alt />
              <img src="../../public/static/tu36@2x.png" alt />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="each">
              <img src="../../public/static/tu1@2x.png" alt />
              <img src="../../public/static/tu2@2x.png" alt />
              <img src="../../public/static/tu3@2x.png" alt />
              <img src="../../public/static/tu4@2x.png" alt />
              <img src="../../public/static/tu5@2x.png" alt />
              <img src="../../public/static/tu6@2x.png" alt />
              <img src="../../public/static/tu7@2x.png" alt />
              <img src="../../public/static/tu8@2x.png" alt />
              <img src="../../public/static/tu9@2x.png" alt />
              <img src="../../public/static/tu10@2x.png" alt />
              <img src="../../public/static/tu12@2x.png" alt />
              <img src="../../public/static/tu13@2x.png" alt />
              <img src="../../public/static/tu14@2x.png" alt />
              <img src="../../public/static/tu15@2x.png" alt />
              <img src="../../public/static/tu16@2x.png" alt />
              <img src="../../public/static/tu17@2x.png" alt />
              <img src="../../public/static/tu18@2x.png" alt />
              <img src="../../public/static/tu19@2x.png" alt />
              <img src="../../public/static/tu20@2x.png" alt />
              <img src="../../public/static/tu21@2x.png" alt />
              <img src="../../public/static/tu22@2x.png" alt />
              <img src="../../public/static/tu23@2x.png" alt />
              <img src="../../public/static/tu24@2x.png" alt />
              <img src="../../public/static/tu25@2x.png" alt />
              <img src="../../public/static/tu26@2x.png" alt />
              <img src="../../public/static/tu27@2x.png" alt />
              <img src="../../public/static/tu28@2x.png" alt />
              <img src="../../public/static/tu29@2x.png" alt />
              <img src="../../public/static/tu30@2x.png" alt />
              <img src="../../public/static/tu31@2x.png" alt />
              <img src="../../public/static/tu32@2x.png" alt />
              <img src="../../public/static/tu33@2x.png" alt />
              <img src="../../public/static/tu34@2x.png" alt />
              <img src="../../public/static/tu35@2x.png" alt />
              <img src="../../public/static/tu36@2x.png" alt />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="each">
              <img src="../../public/static/tu1@2x.png" alt />
              <img src="../../public/static/tu2@2x.png" alt />
              <img src="../../public/static/tu3@2x.png" alt />
              <img src="../../public/static/tu4@2x.png" alt />
              <img src="../../public/static/tu5@2x.png" alt />
              <img src="../../public/static/tu6@2x.png" alt />
              <img src="../../public/static/tu7@2x.png" alt />
              <img src="../../public/static/tu8@2x.png" alt />
              <img src="../../public/static/tu9@2x.png" alt />
              <img src="../../public/static/tu10@2x.png" alt />
              <img src="../../public/static/tu12@2x.png" alt />
              <img src="../../public/static/tu13@2x.png" alt />
              <img src="../../public/static/tu14@2x.png" alt />
              <img src="../../public/static/tu15@2x.png" alt />
              <img src="../../public/static/tu16@2x.png" alt />
              <img src="../../public/static/tu17@2x.png" alt />
              <img src="../../public/static/tu18@2x.png" alt />
              <img src="../../public/static/tu19@2x.png" alt />
              <img src="../../public/static/tu20@2x.png" alt />
              <img src="../../public/static/tu21@2x.png" alt />
              <img src="../../public/static/tu22@2x.png" alt />
              <img src="../../public/static/tu23@2x.png" alt />
              <img src="../../public/static/tu24@2x.png" alt />
              <img src="../../public/static/tu25@2x.png" alt />
              <img src="../../public/static/tu26@2x.png" alt />
              <img src="../../public/static/tu27@2x.png" alt />
              <img src="../../public/static/tu28@2x.png" alt />
              <img src="../../public/static/tu29@2x.png" alt />
              <img src="../../public/static/tu30@2x.png" alt />
              <img src="../../public/static/tu31@2x.png" alt />
              <img src="../../public/static/tu32@2x.png" alt />
              <img src="../../public/static/tu33@2x.png" alt />
              <img src="../../public/static/tu34@2x.png" alt />
              <img src="../../public/static/tu35@2x.png" alt />
              <img src="../../public/static/tu36@2x.png" alt />
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="news">
      <h1>新闻中心</h1>
      <p>我们对数字化工作充满热情，并希望与其他人分享我们的知识，以便您在线上取得成功。</p>
      <div v-if="mobielShow">
        <swiper ref="mySwiper1" :options="swiperOption">
          <swiper-slide class="each-news" v-for="(item)  in newsList" :key="item.id">
            <div class="cover">
              <img :src="item.cover" alt="图片" />
            </div>
            <div class="time">{{item.time}}</div>
            <div class="title">{{item.title}}</div>
            <div class="brief">{{item.brief}}</div>
            <div class="more">More</div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="news-box" v-else>
        <div class="each-news" v-for="(item)  in newsList" :key="item.id">
          <div class="cover">
            <img :src="item.cover" alt="图片" />
          </div>
          <div class="time">{{item.time}}</div>
          <div class="title">{{item.title}}</div>
          <div class="brief">{{item.brief}}</div>
          <div class="more">More</div>
        </div>
      </div>
      <div class="show-more" @click="toOtherPage('/NewsList')">
        <span>More</span>
        <img src="../../public/static/jiantou-big.png" alt="了解更多" />
      </div>
    </div>
    <MyForm></MyForm>
  </div>
</template>

<script>
import MyForm from "../components/myForm";
export default {
  name: "Index",
  components: { MyForm },
  data() {
    return {
      list: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2771978851,2906984932&fm=26&gp=0.jpg"
      ],
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
        }
      ],
      height: "",
      height1: "",
      mobielShow: false,
      swiperOption1: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination1",
          clickable: true
        }
      },
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperOption2: {
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
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
      },
      swiperOption3: {
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
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
    toOtherPage(path) {
      console.log(111), this.$router.push(path);
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    var winWidth = window.innerWidth;
    if (winWidth > 1200) {
      this.height = "10.64rem";
      this.height1 = "6.86rem";
      this.mobielShow = false;
    } else {
      this.height = "5.78rem";
      this.height1 = "6.36rem";
      this.mobielShow = true;
    }
    this.$parent.setNav(1, 0);
  }
};
</script>
<style lang="less" scoped>
.index {
  .banner {
    height: 10.64rem;
    .each-banner {
      height: 10.64rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // /deep/ .el-carousel__item {
    //   color: #475669;
    //   font-size: 14px;
    //   opacity: 0.75;
    //   height: 10.64rem;
    //   margin: 0;
    // }
    // img {
    //   width: 100%;
    //   height: 100%;
    // }
  }
  .our-serve {
    height: 10.26rem;
    background-image: url("../../public/static/kefubg@2x.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 1.04rem;
    > h1 {
      color: #fff;
      font-size: 0.36rem;
      text-align: center;
      font-weight: 700;
      margin-bottom: 0.18rem;
    }
    > p {
      color: #fff;
      font-size: 0.18rem;
      text-align: center;
    }
    .serves-box {
      width: 15.2rem;
      margin: 0 auto;
      padding-top: 1.04rem;
      box-sizing: border-box;
      display: flex;
    }
    .e-serves {
      text-align: center;
      padding: 0.44rem 0 0.56rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 3.04rem;
      height: 6.7rem;
      background: #171949;
      .e-s-top {
        img {
          width: 1.3rem;
          height: 1rem;
          vertical-align: middle;
          margin-bottom: 0.26rem;
        }
        .title {
          font-size: 0.24rem;
          color: #fff;
        }
      }
      ul {
        flex: 1;
        font-size: 0.14rem;
        color: #fff;
        line-height: 0.4rem;
        text-align: left;
        margin-top: 0.57rem;
      }
      .more {
        cursor: pointer;
        font-size: 0.14rem;
        color: #fff;
        display: flex;
        align-items: center;
        width: 1.22rem;
        height: 0.32rem;
        border: 1px solid #fff;
        border-radius: 0.16rem;
        margin: 0 auto;
        text-align: center;
        justify-content: space-around;
        img {
          width: 0.3rem;
          height: 0.09rem;
        }
      }
      .ul1 {
        padding-left: 0.46rem;
      }
    }
    .e-serves1 {
      background: #1a72e6;
      .ul2 {
        padding-left: 0.99rem;
      }
    }
  }
  .con-serve {
    color: #000;
    text-align: center;
    height: 10.26rem;
    background-image: url("../../public/static/logobg@2x.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 1.04rem;
    > h1 {
      font-size: 0.36rem;
      font-weight: 700;
      margin-bottom: 0.18rem;
    }
    > p {
      font-size: 0.18rem;
      margin-bottom: 0.5rem;
    }
    .each {
      width: 15.14rem;
      height: 6.86rem;
      margin: 0 auto;
      background: #ffffff;
      box-shadow: 0px 0px 0.41rem 0.31rem rgba(2, 16, 203, 0.17);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0.1rem;
      > img {
        flex-shrink: 0;
        width: 2rem;
        height: 1rem;
        vertical-align: middle;
        margin-top: 0.26rem;
      }
    }
  }
  .news {
    padding-top: 1.04rem;
    margin-bottom: 1.44rem;
    text-align: center;
    > h1 {
      font-size: 0.36rem;
      font-weight: 700;
      margin-bottom: 0.18rem;
    }
    > p {
      font-size: 0.18rem;
      margin-bottom: 0.7rem;
    }
    .news-box {
      width: 15.2rem;
      margin: 0 auto 1.15rem;
      display: flex;
      justify-content: space-between;
    }
    .each-news {
      padding: 0.2rem;
      width: 4.76rem;
      box-sizing: border-box;
      text-align: left;
      background: #eff7fe;
      cursor: pointer;
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
        width: 4.4rem;
        height: 3rem;
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
      .more {
        text-align: right;
        font-size: 0.18rem;
        margin-top: 0.86rem;
      }
    }
    .show-more {
      cursor: pointer;
      font-size: 0.18rem;
      color: #000;
      display: flex;
      align-items: center;
      width: 2.12rem;
      height: 0.56rem;
      border: 1px solid #000;
      border-radius: 0.28rem;
      margin: 0 auto;
      text-align: center;
      justify-content: space-around;
      img {
        width: 0.49rem;
        height: 0.09rem;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .index {
    .banner {
      height: 5.78rem;
      .each-banner {
        height: 5.78rem;
      }
      // .el-carousel__item {
      //   height: 100%;
      // }
    }
    .our-serve {
      > p {
        margin-bottom: 0.7rem;
      }
      .serves-box {
        .swiper-slide {
          width: 3.2rem;
          height: 7rem;
        }
        .e-serves {
          width: 3.2rem;
          height: 7rem;
          // flex-shrink: 0;
        }
      }
      .e-serves {
        ul {
          font-size: 0.18rem;
        }
      }
    }
    .con-serve {
      height: 8.89rem;
      .each {
        width: 6.67rem;
      }
    }
    .news {
      > p {
        padding: 0 0.2rem;
        line-height: 0.36rem;
      }
      .news-box {
        width: 100%;
        .each-news {
          width: 4.76rem !important;
        }
      }
      .show-more {
        margin-top: 0.8rem;
      }
    }
  }
}
</style>

