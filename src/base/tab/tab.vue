<template>
  <!--底部导航条-->
  <div class="footers_box">
    <ul class="footers_box_center">
      <router-link to='/index' tag="li" class="footers_box_item">
        <img src="../../common/images/footer_01.png" alt="" class="footer_box_img">
        <p class="footer_box_txt">瓶子</p>
      </router-link>
      <router-link to='/findbottle' tag="li" class="footers_box_item">
        <img src="../../common/images/footer_03.png" alt="" class="footer_box_img">
        <p class="footer_box_txt">发现</p>
      </router-link>
      <router-link to='/newsbottle' tag="li" class="footers_box_item">
        <img src="../../common/images/footer_04.png" alt="" class="footer_box_img">
        <p class="footer_box_txt">消息</p>
      </router-link>
      <router-link to='/mybottle' tag="li" class="footers_box_item footers_box_my">
        <img src="../../common/images/footer_05.png" alt="" class="footer_box_img">
        <p class="footer_box_txt">我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "~@/common/stylus/mixin.styl"
  .footers_box {
    border-top-1px(#DCDCDE)
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FAFAFA;
    z-index 1000 !important
    .footers_box_center {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .footers_box_item {
        width: 20%;
        padding-top: 10px
        text-align: center;
        .footer_box_img {
          width: 45px
          height: 45px
          display: inline-block;
        }
        .footer_box_txt {
          color: #A9A8AF;
          font-size: 23px
          margin-bottom: 5px
        }
      }
    }
  }
</style>
