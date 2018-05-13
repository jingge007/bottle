<template>
  <div class="bottle_index">
    <div class="bottle_index_nav">
      <div class="switch_box">
        <router-link tag="i" to="/ranking" class="iconfont icon-paihangbang- ranking_item"></router-link>
        <van-tabs v-model="active" swipeable>
          <van-tab v-for="(item,indexs) in title" :title="item.name" :key="indexs">
            <div class="nav_tab">
              <div class="nav_tab_img" v-show="indexs === 0">
                <div class="nav_img_icon" :style="{height:height_item}">
                  <img :src="img_icon" alt="" class="bottle_icon_01" :class="{'pick_none':pickItem.Item_01}" data-iconImg='1' @click="pickUp_bottle($event)">
                  <img :src="img_icon" alt="" class="bottle_icon_02" :class="{'pick_none':pickItem.Item_02}" data-iconImg='2' @click="pickUp_bottle($event)">
                  <img :src="img_icon" alt="" class="bottle_icon_03" :class="{'pick_none':pickItem.Item_03}" data-iconImg='3' @click="pickUp_bottle($event)">
                  <img :src="img_icon" alt="" class="bottle_icon_04" :class="{'pick_none':pickItem.Item_04}" data-iconImg='4' @click="pickUp_bottle($event)">
                  <img :src="img_icon" alt="" class="bottle_icon_05" :class="{'pick_none':pickItem.Item_05}" data-iconImg='5' @click="pickUp_bottle($event)">
                  <img :src="img_icon" alt="" class="bottle_icon_06" :class="{'pick_none':pickItem.Item_06}" data-iconImg='6' @click="pickUp_bottle($event)">
                  <span class="nav_tab_icon" @click="edit_bottle">
                  <img src="../../common/images/edit_btn.png" alt="">
                </span>
                </div>
              </div>
              <div class="nav_tab_img" v-show="indexs === 1">
                <div class="nav_img_icon_01" :style="{height:height_item}">
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
    <van-popup v-model="pickbottle" class="pick_box" :close-on-click-overlay="false">
      <h2 class="pick_box_title">世界瓶</h2>
      <div class="pick_information">
        <img src="../../common/images/avatar.jpg" alt="" class="pick_header">
        <div class="pick_navItem">
          <h2 class="pick_navItem_title">话不多说</h2>
          <ul class="pick_nav_title">
            <li>
              <i class="iconfont icon-zuihoudinggao-"></i>
              <span class="icon_ages">20</span>
            </li>
            <li>深圳</li>
            <li>
              <span class="wealth_txt">财</span>
              <span class="wealth_num">100</span>
            </li>
            <li>
              <span class="charm_txt">魅</span>
              <span class="charm_num">100</span>
            </li>
          </ul>
        </div>
        <p class="pick_texts">高房价高房价很高吃顿饭高房价高房价很高吃顿饭高房价高房价很高吃顿饭高房价高房价很高吃顿饭高房价高房价很高吃顿饭高房价高房价很高吃顿饭高房价高房价很高吃顿饭</p>
      </div>
      <div class="input_pick_box">
        <textarea class="input_pick_center"
                  :placeholder="placeholder"
                  ref="input_pick"
                  @focus="focus_btn"
                  @blur="blur_btn"
        >
        </textarea>
        <div class="pick_icon">
          <i class="iconfont icon-yuyin2"></i>
          <i class="iconfont icon-biaoqing"></i>
        </div>
      </div>
      <div class="pick_btn">
        <span class="pick_cancel_btn" @click="cancel_btn">回归大海</span>
        <span class="pick_send_out" @click="send_btn">发送</span>
      </div>
    </van-popup>
    <!--扔瓶子弹窗-->
    <van-popup v-model="throwbottle" class="pick_box throw_bottle_box" :close-on-click-overlay="false">
      <h2 class="pick_box_title">世界瓶</h2>
      <div class="input_pick_box input_throw">
        <textarea class="input_pick_center"
                  :placeholder="placeholder"
                  ref="input_pick"
                  @focus="focus_btn"
                  @blur="blur_btn"
        >
        </textarea>
        <div class="pick_icon">
          <i class="iconfont icon-yuyin2"></i>
          <i class="iconfont icon-biaoqing"></i>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Dialog} from 'vant'

  export default {
    data() {
      return {
        active: 2,
        height_item: '',
        showItem: false,
        pickbottle: false,
        throwbottle: false,
        genderIndex: 0,
        targets: 0,
        placeholder: '请输入...',
        pickItem: [
          {Item_01: false},
          {Item_02: false},
          {Item_03: false},
          {Item_04: false},
          {Item_05: false},
          {Item_06: false}
        ],
        title: [
          {name: '世界瓶'},
          {name: '同城瓶'}
        ],
        gender: [
          {gender_item: '全部'},
          {gender_item: '男生'},
          {gender_item: '女生'}
        ],
        img_icon: './static/bottle_icon.png'
      }
    },
    mounted() {
      let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let footerH = 80
      this.height_item = h - footerH + 'px'
    },
    methods: {
      // 性别的筛选
      popup_boxs() {
        this.showItem = true
      },
      // 性别的字体变色
      genderFun(index) {
        this.genderIndex = index
        this.showItem = false
      },
      // 捡瓶子的弹窗显示
      pickUp_bottle(e) {
        this.pickbottle = true
        this.$refs.input_pick.value = ''
        this.targets = e.target.getAttribute('data-iconImg')

      },
      focus_btn() {
        this.placeholder = ''
      },
      blur_btn() {
        if (this.$refs.input_pick.value !== '') {
          this.placeholder = ''
        } else {
          this.placeholder = '请输入...'
        }
      },
      // 回归大海
      cancel_btn() {
        this.pickbottle = false
        Dialog.close()
      },
      // 发送
      send_btn() {
        let txts = this.$refs.input_pick.value
        if (txts === '') {
          Dialog.alert({
            title: '',
            showConfirmButton: false,
            overlay: false,
            message: '请输入发送内容！'
          })
          setTimeout(() => {
            Dialog.close()
          }, 1300)
          return false
        } else {
          this.pickbottle = false
          Dialog.close()
        }
      },
      //扔瓶子
      edit_bottle() {
        this.throwbottle = true
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
            .nav_img_icon, .nav_img_icon_01 {
              width: 100%
              position: relative
              background url("../../common/images/p1-1c.jpg")
              background-size cover
            }
            .nav_img_icon_01 {
              background url("../../common/images/p1-2c.jpg")
              background-size cover
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
            .pick_none {
              display: none !important
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
            color #333
            font-size 25px
            display: block
            margin-bottom 15px
          }
          .pick_nav_title {
            display: flex
            color #ffffff
            font-family '微软雅黑'
            font-size 22px
            li {
              min-width: 50px
              height: 30px
              padding 3px 15px
              display: flex
              justify-content: center
              align-items center
              border-radius 10px
              margin-right 15px
              .icon-zuihoudinggao- {
                display: block
                font-size 20px !important
              }
              .icon_ages, .wealth_num, .charm_num {
                margin-left 5px
                display: inline-block
              }
            }
            li:nth-child(1) {
              background-color: #F68AF9
            }
            li:nth-child(2) {
              background-color: #91D242
            }
            li:nth-child(3) {
              background-color: #FFCE32
            }
            li:nth-child(4) {
              background-color: #87EED5
              margin-right 0
            }
          }
        }
        .pick_texts {
          margin: 20px 0 0 5px
          height: 35px
          line-height: 35px
          font-size 28px
          font-family '微软雅黑'
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color #000
        }
      }
      .input_pick_box {
        width: 100%
        border: 1px solid #BEBEBE
        border-radius 5px
        padding 20px 15px 8px 15px
        box-sizing border-box
        margin-top 15px
        .input_pick_center {
          border none
          height 170px
          overflow-y: scroll
          width: 100%
          outline: none;
          resize: none;
          font-size 30px
          color #9B9B9B
        }
        .pick_icon {
          display: flex
          justify-content: center
          align-items center
          width: 21%
          .icon-yuyin2 {
            font-size 62px
            color: #AEAEAE
            margin-right 15px
          }
          .icon-biaoqing {
            font-size 50px
            color: #9C9C9C
          }
        }
      }
      .pick_btn {
        display: flex
        width: 100%
        margin 25px auto 5px
        height: 45px
        line-height: 45px
        .pick_cancel_btn {
          display: block
          flex 1
          box-sizing border-box
          border-right 1px solid #E1E1E1
          color #BEBEBE
          text-align: center
          font-size 30px
        }
        .pick_send_out {
          display: block
          flex 1
          color #07C3E3
          text-align: center
          font-size 30px
        }
      }
      .input_throw {
        margin-top 0px
        border: none
        padding-top 60px
        background-color: #fff
      }
    }
    .throw_bottle_box {
      background-color: #E2F8FF
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
