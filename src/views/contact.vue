<template>
  <div class="Contact">
    <div class="banner">
      <h1>我们期待您的来电</h1>
      <div class="spans">让我们优秀的团队为您服务</div>
    </div>
    <div class="con-box">
      <h1>联系我们</h1>
      <p>专注、专业、专一、专心是我们的目标</p>
      <div class="map-box">
        <div class="left">
          <div class="btns">
            <div class="btn" :class="activeIndex == 1?'cative-btn':''" @click="changgeInfo(true)">上海</div>
            <div
              class="btn"
              :class="activeIndex == 2?'cative-btn':''"
              @click="changgeInfo(false)"
            >北京</div>
          </div>
          <div class="iphone">
            <img src="../../public/static/yj-iphone@2x.png" alt />
            <span>{{iphone}}</span>
          </div>
          <div class="iphone">
            <img src="../../public/static/yj-email@2x.png" alt />
            <span>{{iphone}}</span>
          </div>
          <div class="iphone">
            <img src="../../public/static/yj-map@2x.png" alt />
            <span>{{address}}</span>
          </div>
        </div>
        <div class="right">
          <div id="all-map" class="all-map"></div>
        </div>
      </div>
    </div>
    <MyForm></MyForm>
  </div>
</template>

<script>
// @ is an alias to /src
import MyForm from "../components/myForm";
import BMap from "BMap";
export default {
  name: "Contact",
  components: { MyForm },
  data() {
    return {
      activeIndex: 1,
      iphone: 1311111111,
      email: "sshdkjh@qq.com",
      address: "上海市嘉定区佳通路31弄中冶祥腾城市广场2号楼1620室",
      longitude: 104.081822,
      latitude: 30.544737
    };
  },

  methods: {
    changgeInfo(flag) {
      if (flag) {
        this.activeIndex = 1;
        this.iphone = 1311111111;
        this.email = "djkshfhdhd@qw.com";
        this.address = "上海市嘉定区佳通路31弄中冶祥腾城市广场2号楼1620室";
        this.longitude = 104.081822;
        this.latitude = 30.544737;
      } else {
        this.activeIndex = 2;
        this.iphone = 1233333333;
        this.email = "sshdkjh@qw.com";
        this.address = "北京烧烤活动开始";
        this.longitude = 116.399;
        this.latitude = 39.91;
      }
      this.BaiduMap();
    },
    BaiduMap() {
      /**地图初始化 start */
      var map = new BMap.Map("all-map"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(this.longitude, this.latitude), 15); // 初始化地图,设置中心点坐标和地图级别 // 添加地图类型控件
      var marker = new BMap.Marker(
        new BMap.Point(this.longitude, this.latitude)
      ); // 创建点
      // var polyline = new BMap.Polyline(
      //   [
      //     new BMap.Point(116.399, 39.91),
      //     new BMap.Point(116.405, 39.92),
      //     new BMap.Point(116.425, 39.9)
      //   ],
      //   { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
      // ); //创建折线
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.addOverlay(marker);
      map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }
  },
  mounted() {
    this.$parent.setNav(5, 0);
    this.$nextTick(() => {
      this.BaiduMap();
    });
  }
};
</script>
<style lang="less" scoped>
.Contact {
  text-align: center;
  .banner {
    height: 7rem;
    background-image: url("../../public/static/lianxi-banner@2x.png");
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
  .con-box {
    margin: 0.9rem 0 1.64rem;
    h1 {
      font-size: 0.36rem;
      margin-bottom: 0.2rem;
    }
    p {
      font-size: 0.18rem;
      margin-bottom: 0.28rem;
    }
    .map-box {
      width: 15.18rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .left {
        color: #fff;
        width: 5.65rem;
        height: 5.6rem;
        background: #1971e5;
        box-shadow: 0px 1px 0.12rem 2px rgba(29, 38, 165, 0.33);
        padding: 1rem 0.7rem 0;
        box-sizing: border-box;
        .btns {
          width: 4.26rem;
          margin: 0 auto 1.04rem;
          display: flex;
          .btn {
            height: 0.56rem;
            width: 2.13rem;
            text-align: center;
            line-height: 0.56rem;
            font-size: 0.16rem;
            border: 1px solid #eff7fd;
            box-sizing: border-box;
            cursor: pointer;
          }
          .cative-btn {
            background: #fff;
            border-color: transparent;
            color: #131da3;
          }
        }
        .iphone {
          display: flex;
          font-size: 0.18rem;
          align-items: center;
          margin-bottom: 0.4rem;
          text-align: left;
          img {
            width: 27px;
            height: 25px;
            vertical-align: middle;
            margin-right: 0.2rem;
          }
        }
      }
      .right {
        width: 9.48rem;
        height: 4.58rem;
        .all-map {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .Contact {
    background: #eff7fe;
    .con-box {
      margin-bottom: 0.3rem;
      .map-box {
        flex-wrap: wrap;
        width: 100%;
        padding: 0 0.2rem;
        box-sizing: border-box;
        .left {
          width: 100%;
        }
        .right {
          width: 100%;
          height: 5rem;
        }
      }
    }
  }
}
</style>
