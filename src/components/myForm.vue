<template>
  <div class="my-form">
    <div class="forms" :style="{height:height}">
      <div class="left">
        <div class="title">获取专业营销解决方案</div>
        <div class="s-title">留下您的联系方式，我们的营销专业顾问为您服务</div>
        <div class="e-row">
          <div class="e-info">
            <img src="../../public/static/ren-icon@2x.png" alt />
            <el-input v-model="name" placeholder="姓名"></el-input>
          </div>
          <div class="e-info">
            <img src="../../public/static/iphone-icon@2x.png" alt />
            <el-input v-model="iphone" maxlength="11" placeholder="手机"></el-input>
          </div>
        </div>
        <div class="e-row">
          <div class="e-info">
            <img src="../../public/static/gongsi-icon@2x.png" alt />
            <el-input v-model="companyName" placeholder="公司名称"></el-input>
          </div>
          <div class="e-info">
            <img src="../../public/static/email-icon@2x.png" alt />
            <el-input v-model="email" placeholder="邮箱"></el-input>
          </div>
        </div>
        <div class="e-row">
          <div class="e-info">
            <img src="../../public/static/gongwenb-icon@2x.png" alt />
            <el-select v-model="channel" placeholder="从那个渠道了解我们的">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="e-info">
            <img src="../../public/static/kefu-icon.@2x.png" alt />
            <el-select v-model="business" placeholder="咨询业务">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="l-row">
          <!-- <img src="../../public/static/beizhu-icon@2x.png" alt /> -->
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请写明您的具体需求，以便我们安排相关顾问与您联系。"
            v-model="remarks"
          ></el-input>
        </div>
        <div class="btn">预约营销专家</div>
      </div>
      <div class="right">
        <img src="../../public/static/kefulxbg@2x.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "MyForm",
  props: {
    height: {
      type: String,
      default() {
        return "8.7rem";
      }
    }
  },
  components: {},
  data() {
    return {
      name: "",
      iphone: "",
      companyName: "",
      email: "",
      channel: "",
      business: "",
      remarks: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.my-form {
  background: #eff7fe;
  .forms {
    width: 15.2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left {
      flex: 1;
      margin-right: 0.36rem;
      text-align: center;
      padding-top: 0.86rem;
      .title {
        font-size: 0.36rem;
      }
      .s-title {
        font-size: 0.18rem;
        margin-top: 0.18rem;
        margin-bottom: 0.72rem;
      }
      .e-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.25rem;
        .e-info {
          display: flex;
          align-items: center;
          width: 3.24rem;
          height: 0.6rem;
          background: #fff;
          padding: 0.1rem;
          box-sizing: border-box;
          img {
            width: 0.34rem;
            height: 0.34rem;
            vertical-align: middle;
          }
          input {
            display: inline-block;
            outline: none;
            border: none;
            height: 0.5rem;
          }
        }
        /deep/.el-input__inner {
          height: 0.36rem;
          border: none !important;
        }
        /deep/.el-input__icon {
          line-height: 0.36rem;
        }
      }
      .l-row {
        background: #fff;
        position: relative;
        img {
          position: absolute;
          top: 0.1rem;
          left: 0.1rem;
          width: 0.34rem;
          height: 0.34rem;
          vertical-align: middle;
          z-index: 33;
        }
        /deep/.el-textarea__inner {
          top: 0;
          border: none !important;
          font-size: 0.1rem;
          height: 2.56rem;
          &::before {
            content: "111";
            background: url("../../public/static/kefu-icon.@2x.png");
            width: 0.34rem;
            height: 0.34rem;
          }
        }
      }
      .btn {
        margin-top: 0.25rem;
        background: #1a72e6;
        height: 0.55rem;
        line-height: 0.55rem;
        text-align: center;
        font-size: 0.16rem;
        color: #fff;
      }
    }
    .right {
      width: 7.78rem;
      height: 8.7rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .my-form {
    height: auto;
    .forms {
      flex-wrap: wrap;
      width: 100%;
      height: auto !important;
      .left {
        width: 100vw;
        margin-right: 0;
        padding: 0.7rem 0.2rem 0.2rem;
        font-size: 0.16rem;
        input {
          font-size: 0.16rem;
        }
        textarea {
          font-size: 0.16rem;
        }
        .e-row {
          .e-info {
            height: 0.6rem;
            /deep/.el-input__inner {
              height: 0.58rem;
            }
          }
        }
        .l-row {
          /deep/.el-textarea__inner {
            font-size: 0.28rem;
          }
        }
        .btn {
          height: 0.8rem;
          line-height: 0.8rem;
          font-size: 0.22rem;
        }
      }
      .right {
        width: 100vw;
      }
    }
  }
}
</style>
