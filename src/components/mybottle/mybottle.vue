<template>
    <div class="my_info">
      <!--头部区域-->
      <ul class="my_info_title">
        <li class="info_back" @click="info_back_item">
          <i class="iconfont icon-fanhui"></i>
        </li>
        <li class="info_text">我</li>
        <li class="info_shezi">
          <i class="iconfont icon-shezhi"></i>
        </li>
      </ul>
      <!--头像区域-->
      <div class="my_info_item clearfix">
        <img src="../../common/images/avatar.jpg" alt="" class="header_icon">
        <div class="header_icon_center">
          <p class="header_icon_center_txt">
                <span class="header_icon_box1">
                    <i class="iconfont icon-zuihoudinggao-"></i>
                </span>
            <span class="header_icon_box2">LV 6</span>
          </p>
          <p class="header_icon_center_txt">
            <span>昵称：</span>
            <span class="header_icon_center_text">厉害了</span>
          </p>
          <p class="header_icon_center_txt">
            <span>瓶子号：</span>
            <span class="header_icon_texts">666666</span>
          </p>
        </div>
      </div>
      <!--状态区域-->
      <ul class="zhuan_boxs">
        <li class="zhuan_boxs_item">
          <i class="iconfont icon-shuhuizhuangtai"></i>
          <span class="zhuan_boxs_item_txt">状态</span>
        </li>
        <li class="zhuan_boxs_item">
          <i class="iconfont icon-gift__easyico"></i>
          <span class="zhuan_boxs_item_txt">我的礼物</span>
        </li>
        <li class="zhuan_boxs_item">
          <i class="iconfont icon-huiyuanzhongxin"></i>
          <span class="zhuan_boxs_item_txt">会员中心</span>
        </li>
      </ul>
      <!--语音认证-->
      <ul class="yuyin_boxs">
        <li class="zhuan_boxs_item">
          <i class="iconfont icon-yuyin"></i>
          <span class="zhuan_boxs_item_txt">语音认证</span>
        </li>
        <li class="zhuan_boxs_item">
          <i class="iconfont icon-huiyuanchongzhi"></i>
          <span class="zhuan_boxs_item_txt">充值中心</span>
        </li>
        <li class="zhuan_boxs_item">
          <i class="iconfont icon-qianbao"></i>
          <span class="zhuan_boxs_item_txt">我的钱包</span>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      // 点击返回上一层路由
      info_back_item() {
        this.$router.back()
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "~@/common/stylus/mixin.styl"
  .my_info {
    background-color: #ECEBEB;
    width: 100%;
    height: 100%
    position: fixed
    top: 0
    left: 0
    right: 0
    .my_info_title {
      height: 90px
      background-color: #fff;
      line-height: 90px
      text-align: center;
      display: flex;
      justify-content: space-between;
      .info_back {
        flex: 1;
        .icon-fanhui {
          font-size: 38px
          color: #333;
        }
      }
      .info_text {
        flex: 8;
        font-size: 35px
        color: #000;
      }
      .info_shezi {
        flex: 1;
        .icon-shezhi {
          font-size: 40px
          color: #333;
        }
      }
    }
    .my_info_item {
      margin-top: 25px
      background-color: #fff;
      .header_icon {
        margin: 25px 40px 0 35px
        float: left;
        width: 100px
        border-radius: 50%;
      }
      .header_icon_center {
        overflow: hidden;
        padding-top: 25px
        .header_icon_center_txt {
          margin-bottom: 10px
          color: #7F7E7E;
          font-size: 28px
          display: flex;
          .header_icon_center_text {
            color: #333;
          }
          .header_icon_box1 {
            display: inline-block;
            width: 35px
            height: 28px
            line-height: 28px
            background-color: #FBB7C7;
            margin-right: 5px
            text-align: center;
            .icon-zuihoudinggao- {
              color: #fff;
              font-size: 22px
            }
          }
          .header_icon_box2 {
            display: inline-block;
            width: 70px
            height: 28px
            line-height: 32px
            text-align: center;
            font-size: 20px
            color: #fff;
            background-color: #A3DDEC;
          }
        }
      }
    }
    .zhuan_boxs, .yuyin_boxs {
      margin-top: 25px
      background-color: #fff;
      .zhuan_boxs_item {
        height: 90px
        line-height: 90px
        display: flex;
        .icon-shuhuizhuangtai, .icon-gift__easyico, .icon-huiyuanzhongxin, .icon-yuyin, .icon-huiyuanchongzhi, .icon-qianbao {
          text-align: center;
          flex: 1;
          font-size: 45px
          color: #88CFF4;
          margin: 0 10px 0 10px
        }
        .icon-gift__easyico {
          color: #EF4D4D;
        }
        .icon-huiyuanzhongxin {
          color: #EFE116;
        }
        .icon-huiyuanchongzhi {
          color: #D1E2F9;
        }
        .icon-huiyuanchongzhi {
          color: #EDC640;
        }
        .icon-qianbao {
          color: #F6716F;
        }
        .zhuan_boxs_item_txt {
          display: inline-block;
          flex: 9;
          border-bottom: 1px solid #E7E7E4;
          font-size: 32px
          color: #000;
        }
        &:last-child {
          .zhuan_boxs_item_txt {
            border-bottom: 0;
          }
        }
      }
    }
  }
</style>
