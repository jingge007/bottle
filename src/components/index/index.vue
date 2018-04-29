<template>
  <div class="bottle_index">
    <div class="bottle_index_nav">
      <div class="switch_box">
        <i class="iconfont icon-paihangbang- ranking_item"></i>
        <van-tabs v-model="active" swipeable>
          <van-tab v-for="(item,indexs) in title" :title="item.name" :key="indexs">
            <div class="nav_tab" :style="{height:height_item}">
              <div class="nav_tab_img" v-show="indexs === 0">
                <img src="../../common/images/p1-1c.jpg" alt="">
              </div>
              <div class="nav_tab_img" v-show="indexs === 1">
                <img src="../../common/images/p1-2c.jpg" alt="">
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <i class="iconfont icon-40" @click="popup_boxs"></i>
      </div>
    </div>
    <van-popup v-model="show">
      <ul class="popup_boxs_item">
        <li
          class="popup_boxs_item_txt"
          v-for="(item,index) in gender"
          :key="index"
          :class="{'screen_centent_item_bs':genderIndex===index}"
          @click="genderFun(index)"
        >{{item.gender_item}}
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        active: 2,
        height_item: '',
        show: false,
        genderIndex: 0,
        title: [
          {name: '世界瓶'},
          {name: '同城瓶'}
        ],
        gender: [
          {gender_item: '全部'},
          {gender_item: '男生'},
          {gender_item: '女生'}
        ],
      }
    },
    mounted() {
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let footerH = 86
      this.height_item = h - footerH + 'px'
    },
    methods: {
      popup_boxs() {
        this.show = true
      },
      genderFun(index) {
        this.genderIndex = index
        this.show = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "~@/common/stylus/mixin.styl"
  .bottle_index {
    width: 100%
    height: 100%
    background-color: #fff
    .bottle_index_nav {
      height: 90px
      line-height: 90px
      position: relative
      .ranking_item {
        position: absolute
        top: 50%
        left: 0
        transform translateY(-50%)
        height: 90px
        color: #ECAD2D
        padding 0 30px
        font-size 50px
        z-index 300
      }
      .switch_box {
        .van-tab {
          line-height normal !important
        }
        .van-tabs--line {
          padding-top 90px !important
        }
        /deep/ .van-tabs__nav {
          align-items center
          font-size 35px
        }
        /deep/ .van-tabs--line .van-tabs__wrap {
          height: 90px
          width: 55%
          margin: 0 auto
          .van-tab {
            line-height 90px
            padding 0
            font-size 32px
          }
          .van-tab--active {
            color: #52D8BE
          }
          .van-tab:active {
            background-color: #fff
          }
          .van-tabs__nav-bar {
            background-color: #52D8BE
            height: 3px
          }
        }
        .nav_tab {
          width: 100%
          .nav_tab_img {
            height: 100%
            img {
              width: 100%
              height: 100%
              vertical-align: top
              border: none
            }
          }
        }
      }
      .icon-40 {
        position: absolute
        top: 50%
        right 0
        transform translateY(-50%)
        height: 90px
        color #000
        font-size 50px
        padding 0 30px
        z-index 300
      }
    }
    /deep/ .van-popup {
      width: 60%
      border-radius 8px
      background-color: #fff
    }
    .popup_boxs_item {
      border-bottom-1px(#D1D3D3)
      .popup_boxs_item_txt {
        height: 70px
        line-height: 70px
        padding-left 30px
        font-size 28px
        color #333
      }
      &:last-child {
        border-bottom-1px(transparent)
      }
      .screen_centent_item_bs {
        color: #CC0C08;
      }
    }
  }
</style>
