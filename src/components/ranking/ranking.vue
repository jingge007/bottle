<template>
  <div class="ranking_box">
    <div class="ranking_box_title">
      排行榜
      <i class="iconfont icon-fanhui" @click="back"></i>
    </div>
    <div class="ranking_box_nav">
      <van-tabs v-model="active" swipeable>
        <van-tab v-for="(item,index) in ranking_title" :title="item.title" :key="index">
          <!--魅力总榜-->
          <div class="ranking_box_center"
               v-for="(items_01,idx_item_01) in ranking_center_01"
               v-show="index === 0"
          >
            <img :src="items_01.img" alt="" class="header_items">
            <div class="center_box_items">
              <h2 class="items_name">{{items_01.name}}</h2>
              <p class="items_nums">{{items_01.charm_num}}</p>
              <div class="ranking_icon">
                <img src="../../common/images/one_icon.png" alt="" v-show="idx_item_01 === 0">
                <img src="../../common/images/two_icon.png" alt="" v-show="idx_item_01 === 1">
                <img src="../../common/images/three_icon.jpg" alt="" v-show="idx_item_01 === 2">
                <span class="ranking_icon_id" v-show="idx_item_01>=3">{{idx_item_01+1}}</span>
              </div>
            </div>
          </div>

          <!--财富总榜-->
          <div class="ranking_box_center"
               v-for="(items_02,idx_item_02) in ranking_center_02"
               v-show="index === 1"
          >
            <img :src="items_02.img" alt="" class="header_items">
            <div class="center_box_items">
              <h2 class="items_name">{{items_02.name}}</h2>
              <p class="items_nums">{{items_02.charm_num}}</p>
              <div class="ranking_icon">
                <img src="../../common/images/one_icon.png" alt="" v-show="idx_item_02 === 0">
                <img src="../../common/images/two_icon.png" alt="" v-show="idx_item_02 === 1">
                <img src="../../common/images/three_icon.jpg" alt="" v-show="idx_item_02 === 2">
                <span class="ranking_icon_id" v-show="idx_item_02>=3">{{idx_item_02+1}}</span>
              </div>
            </div>
          </div>

          <!--魅力日榜-->
          <div class="ranking_box_center"
               v-for="(items_03,idx_item_03) in ranking_center_03"
               v-show="index === 2"
          >
            <img :src="items_03.img" alt="" class="header_items">
            <div class="center_box_items">
              <h2 class="items_name">{{items_03.name}}</h2>
              <p class="items_nums">{{items_03.charm_num}}</p>
              <div class="ranking_icon">
                <img src="../../common/images/one_icon.png" alt="" v-show="idx_item_03 === 0">
                <img src="../../common/images/two_icon.png" alt="" v-show="idx_item_03 === 1">
                <img src="../../common/images/three_icon.jpg" alt="" v-show="idx_item_03 === 2">
                <span class="ranking_icon_id" v-show="idx_item_03>=3">{{idx_item_03+1}}</span>
              </div>
            </div>
          </div>

          <!--财富日榜-->
          <div class="ranking_box_center"
               v-for="(items_04,idx_item_04) in ranking_center_04"
               v-show="index === 3"
          >
            <img :src="items_04.img" alt="" class="header_items">
            <div class="center_box_items">
              <h2 class="items_name">{{items_04.name}}</h2>
              <p class="items_nums">{{items_04.charm_num}}</p>
              <div class="ranking_icon">
                <img src="../../common/images/one_icon.png" alt="" v-show="idx_item_04 === 0">
                <img src="../../common/images/two_icon.png" alt="" v-show="idx_item_04 === 1">
                <img src="../../common/images/three_icon.jpg" alt="" v-show="idx_item_04 === 2">
                <span class="ranking_icon_id" v-show="idx_item_04>=3">{{idx_item_04+1}}</span>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        active: 0,
        ranking_title: [
          {title: '魅力总榜'},
          {title: '财富总榜'},
          {title: '魅力日榜'},
          {title: '财富日榜'}
        ],
        ranking_center_01: [
          {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑一下',
            charm_num: '累计魅力值：2510'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑01',
            charm_num: '累计魅力值：2510'
          }


        ],
        ranking_center_02: [
          {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '1250'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑02',
            charm_num: '累计财富值：6666'
          }


        ],
        ranking_center_03: [
          {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '1250'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑03',
            charm_num: '日魅力值：2222'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑一下',
            charm_num: '日魅力值：2222'
          }


        ],
        ranking_center_04: [
          {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          }, {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          },
          {
            img: './static/avatar.jpg',
            name: '小爷笑04',
            charm_num: '日财富值：888'
          }


        ]
      }
    },
    methods: {
      // 返回按钮
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "~@/common/stylus/mixin.styl"
  .ranking_box {
    background-color: #fff
    width: 100%
    .ranking_box_title {
      height: 90px
      line-height: 90px
      text-align center
      background-color: #00C7FE
      color #ffffff
      font-size 35px
      position: relative
      .icon-fanhui {
        color: #ffffff
        font-size 40px
        padding 0 20px
        position: absolute
        height: 90px
        left: 0
        top: 50%
        transform translateY(-50%)
      }
    }
    .ranking_box_nav {
      /deep/ .van-tabs__content {
        padding-bottom 80px
      }
      /deep/ .van-tabs--line {
        padding-top: 80px
        .van-tabs__nav-bar {
          height: 3px
          background-color: #4ED5F7
        }
        .van-tabs__wrap {
          height: 80px
          .van-tab {
            line-height: 80px
            color #333333
            font-size 26px
            padding: 0
            background-color: #FBFBFB
            &:active {
              background-color: #FBFBFB
            }
          }
          .van-tab--active {
            color #4ED5F7
            background-color: #FBFBFB
          }
        }
      }
      .ranking_box_center {
        display: flex
        border-bottom-1px(#E8E5E5)
        padding 25px
        .header_items {
          width: 90px
          height: 90px
          border-radius 50%
          overflow: hidden
        }
        .center_box_items {
          flex 1
          margin-left 30px
          position: relative
          .items_name {
            color #333333
            font-size 30px
            font-weight 600
            margin-bottom 15px
          }
          .items_nums {
            font-size 28px
            color #666666
          }
          .ranking_icon {
            width: 100px
            position absolute
            top: 50%
            transform translateY(-50%)
            right: 0
            text-align: center
            img {
              width: 100%
              height: 100%
              vertical-align: middle
            }
            .ranking_icon_id {
              font-size 30px
              color #646464
            }
          }
        }
      }
    }
  }
</style>
