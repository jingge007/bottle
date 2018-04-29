<template>
    <div class="findbottle">
      <!--头部区域-->
      <h2 class="findbottle_title">
        <i class="iconfont icon-fanhui" @click="back"></i>
        <ul class="findbottle_nav">
          <li class="findbottle_nav_item"
              v-for="(item ,index) in switchList"
              @click="switch_nav(index)"
              :class="{'bs':currentIndex===index}"
          >{{item.listText}}
          </li>

        </ul>
      </h2>
      <!--关注-->
      <div class="follow_box" v-show="falg">
        暂无内容，先去关注话题吧~
      </div>
      <!--话题-->
      <div class="conversation" v-show="!falg">

      </div>
    </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        switchList: [
          {listText: '关注'},
          {listText: '话题'},
        ],
        imgData: [
          {imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000t89h41ASyAZ.jpg'},
          {imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000M4BVl39vmuz.jpg'},
          {imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M0000030EI8j38FpGI.jpg'},
          {imgUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002hCCQX0qdHtX.jpg'},
        ],
        currentIndex: 0,
        falg: true
      }
    },
    methods: {
      // 返回按钮
      back() {
        this.$router.back();
      },
      // 头部切换话题与关注
      switch_nav(index) {
        this.currentIndex = index
        if (this.currentIndex === 0) {
          this.falg = true
        } else {
          this.falg = false
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "~@/common/stylus/mixin.styl"
  .findbottle {
    position: fixed
    top: 0
    right: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #fff
    .findbottle_title {
      height: 80px
      line-height: 80px
      position: relative
      background-color: #FBFCFC
      border-bottom-1px(#EAEAEA)
      .icon-fanhui {
        position: absolute
        top 50%
        transform translateY(-50%)
        left: 0
        font-size: 38px
        box-sizing border-box
        color: #333
        text-align: center
        margin 0 0 0 30px
      }
      .findbottle_nav {
        display: flex
        justify-content center
        .findbottle_nav_item {
          color #333
          font-size 30px
          height: 80px
          width: 130px
          text-align: center
          margin 0 15px
          box-sizing border-box
        }
        .bs {
          border-bottom 4px solid #BCEFF3
          color #70B4F8
        }
      }
    }
    .follow_box {
      height: 100%
      color #666
      font-size 35px
      display: flex
      align-items center
      justify-content center
    }
    .conversation {
      width: 100%
      height: 100%
      background-color: #fff
      .slider_img {
        width: 100%
        height: auto
        border 0
        vertical-align: top
      }
    }
  }
</style>
