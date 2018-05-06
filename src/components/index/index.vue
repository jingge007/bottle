<template>
  <div class="bottle_index">
    <div class="bottle_index_nav">
      <div class="switch_box">
        <router-link tag="i" to="/ranking" class="iconfont icon-paihangbang- ranking_item"></router-link>
        <van-tabs v-model="active" swipeable>
          <van-tab v-for="(item,indexs) in title" :title="item.name" :key="indexs">
            <div class="nav_tab" :style="{height:height_item}">
              <div class="nav_tab_img" v-show="indexs === 0">
                <img src="../../common/images/p1-1c.jpg" alt="" class="nav_img_icon">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_01" @click="pickUp_bottle">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_02">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_03">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_04">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_05">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_06">
                <span class="nav_tab_icon">
                  <img src="../../common/images/edit_btn.png" alt="">
                </span>
              </div>
              <div class="nav_tab_img" v-show="indexs === 1">
                <img src="../../common/images/p1-2c.jpg" alt="" class="nav_img_icon">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_01">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_02">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_03">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_04">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_05">
                <img src="../../common/images/bottle_icon.png" alt="" class="bottle_icon_06">
                <span class="nav_tab_icon">
                  <img src="../../common/images/edit_btn.png" alt="">
                </span>
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <i class="iconfont icon-40" @click="popup_boxs"></i>
      </div>
    </div>
    <!--性别筛选弹窗-->
    <van-popup v-model="showItem" class="sex_box">
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

    <!--捡瓶子弹窗-->
    <van-popup v-model="pickbottle" class="pick_box">
      <h2 class="pick_box_title">世界瓶</h2>
      <div class="pick_information">
        <img src="../../common/images/avatar.jpg" alt="" class="pick_header">
        <div class="pick_navItem">
          <h2 class="pick_navItem_title">话不多说</h2>

        </div>
      </div>
    </van-popup>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        active: 2,
        height_item: '',
        showItem: false,
        pickbottle: false,
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
        this.showItem = true
      },
      genderFun(index) {
        this.genderIndex = index
        this.showItem = false
      },
      pickUp_bottle() {
        this.pickbottle = true
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
            position: relative
            .nav_img_icon {
              width: 100%
              height: 100%
              vertical-align: top
              border: none
            }
            .bottle_icon_01 {
              position: absolute
              top: 400px
              left: 250px
              width: 95px
              height: 95px
              animation: move_bottle_01 4.5s infinite;
            }
            .bottle_icon_02 {
              position: absolute
              top: 430px
              left: 490px
              width: 95px
              height: 95px
              animation: move_bottle_02 3.8s infinite;
            }
            .bottle_icon_03 {
              position: absolute
              top: 560px
              left: 110px
              width: 95px
              height: 95px
              animation: move_bottle_03 3.2s infinite;
            }
            .bottle_icon_04 {
              position: absolute
              top: 575px
              left: 330px
              width: 95px
              height: 95px
              animation: move_bottle_04 5s infinite;
            }
            .bottle_icon_05 {
              position: absolute
              top: 730px
              left: 150px
              width: 95px
              height: 95px
              animation: move_bottle_05 3.3s infinite;
            }
            .bottle_icon_06 {
              position: absolute
              top: 710px
              left: 470px
              width: 95px
              height: 95px
              animation: move_bottle_05 4.1s infinite;
            }
            .nav_tab_icon {
              position: absolute
              right 60px
              bottom 150px
              width 100px
              height: 100px
              border-radius 50%
              overflow: hidden
              display: inline-block
              img {
                width: 100%
                height: 100%
                vertical-align: middle
              }
            }
            .move_bollte_img {

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
      border-radius 8px
      background-color: #fff
    }
    .sex_box {
      width: 60% !important
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
    .pick_box {
      width: 85%
      border-radius 5px !important
      padding 10px 10px 20px 10px
      .pick_box_title {
        height: 60px
        width: 30%
        border-radius 50%
        line-height: 60px
        position: absolute
        top -30px
        left: 50%
        transform translateX(-50%)
        border 2px solid #E3F9FF
        background-color: #fff
        text-align: center
        color #56D7FA
        font-size 28px
      }
      .pick_information {
        background-color: #E3F9FF
        border-radius 5px
        min-height: 350px
        padding 35px 25px 20px 25px
        .pick_header {
          width: 85px
          height: 85px
          border-radius 50%
          overflow: hidden
          margin-right 20px
          float left
        }
        .pick_navItem {
          padding-top 15px
          overflow: hidden
          .pick_navItem_title {
            color #000000
            font-size 25px
            display: block
          }
        }
      }
    }
  }

  @keyframes move_bottle_01 {
    0%, 50%, 100% {
      top: 400px
    }
    25%, 75% {
      top: 390px
    }
  }

  @keyframes move_bottle_02 {
    0%, 50%, 100% {
      top: 430px
    }
    25%, 75% {
      top: 420px
    }
  }

  @keyframes move_bottle_03 {
    0%, 50%, 100% {
      top: 560px
    }
    25%, 75% {
      top: 550px
    }
  }

  @keyframes move_bottle_04 {
    0%, 50%, 100% {
      top: 575px
    }
    25%, 75% {
      top: 565px
    }
  }

  @keyframes move_bottle_05 {
    0%, 50%, 100% {
      top: 730px
    }
    25%, 75% {
      top: 720px
    }
  }

  @keyframes move_bottle_06 {
    0%, 50%, 100% {
      top: 710px
    }
    25%, 75% {
      top: 700px
    }
  }
</style>
