<template>
  <div class="newsbottle">
    <div class="newsbottle_title">
      <i class="iconfont icon-fanhui" @click="newsbottleback"></i>
      <span class="newsbottle_title_txt">联系人</span>
    </div>
    <ul>
      <li class="newsbottle_center_item" v-for="(items,index) in newsList" data-type="0">
        <div class="newsbottle_center_list clearfix"
             @touchstart.capture="touchStart"
             @touchend.capture="touchEnd"
             @click="skip"
        >
          <img src="../../common/images/avatar.jpg" alt="" class="newsbottle_img">
          <div class="newsbottle_boxs">
            <h2 class="newsbottle_boxs">{{items.title_name}}</h2>
            <p class="newsbottle_boxs_txt">{{items.newsCenter}}</p>
            <span class="newsbottle_boxs_txt_time">{{items.news_time}}</span>
          </div>
        </div>
        <div class="delete_boxs" :data-index="index" @click="deletenewsbottle">删除</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  // @touchstart.capture   是指开始触摸屏幕的事件捕获模式
  export default {
    data() {
      return {
        newsList: [
          {
            title_name: '用户昵称1',
            newsCenter: '用户的用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容聊天内容',
            news_time: '3月12日'
          },
          {
            title_name: '用户昵称2',
            newsCenter: '用户的用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容聊天内容',
            news_time: '3月13日'
          },
          {
            title_name: '用户昵称3',
            newsCenter: '用户的用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容聊天内容',
            news_time: '3月14日'
          },
          {
            title_name: '用户昵称4',
            newsCenter: '用户的用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容聊天内容',
            news_time: '3月15日'
          },
          {
            title_name: '用户昵称5',
            newsCenter: '用户的用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容聊天内容',
            news_time: '3月16日'
          },
          {
            title_name: '用户昵称6',
            newsCenter: '用户的用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容用户的聊天内容聊天内容',
            news_time: '3月17日'
          },
        ],
        startX: 0,
        endX: 0
      }
    },
    methods: {
      // 点击返回按钮返回上一层路由
      newsbottleback() {
        this.$router.back()
      },
      // 手指触摸屏幕滑动滑块时
      skip() {
        if (this.checkNewsitem()) {
          this.setnewsbottle()
        }
      },
      // 手指开始触摸屏幕时
      touchStart(e) {
        this.startX = e.touches[0].clientX
      },
      // 手指离开屏幕时
      touchEnd(e) {
        let parentElement = e.currentTarget.parentElement    // 获取父元素的事件对象（vue必须借助事件的 event 对象 的 currentTarget 才能获取事件对象）
        this.endX = e.changedTouches[0].clientX
        if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
          this.setnewsbottle()
          parentElement.dataset.type = 1
        }
        if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
          this.setnewsbottle()
          parentElement.dataset.type = 0
        }
        // 滑动结束时，重置标志位
        this.startX = 0
        this.endX = 0
      },
      // 判断当前的滑块是否处在滑动的状态
      checkNewsitem() {
        let newsbottle_lengths = document.querySelectorAll('.newsbottle_center_item')
        for (let i = 0; i < newsbottle_lengths.length; i++) {
          if (newsbottle_lengths[i].dataset.type === 1) {       // data-type=1时，滑块是处在滑动的状态
            return true
          }
        }
        return false
      },

      // 控制所有的滑块每次只能滑动一个
      setnewsbottle() {
        let newsbottle_lengths = document.querySelectorAll('.newsbottle_center_item')
        for (let i = 0; i < newsbottle_lengths.length; i++) {
          newsbottle_lengths[i].dataset.type = 0
        }
      },

      // 删除滑块
      deletenewsbottle(e) {
        let index = e.currentTarget.dataset.index
        this.setnewsbottle()
        this.newsList.splice(index, 1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "~@/common/stylus/mixin.styl"
  .newsbottle {
    position: fixed
    top: 0
    right: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #fff
    overflow: hidden
    .newsbottle_title {
      width: 100%
      height: 90px
      line-height: 90px
      background-color: #393A3F
      display: flex
      .icon-fanhui {
        flex 1
        margin 0 30px 0 10px
        font-size: 38px
        box-sizing border-box
        color: #fff
        text-align: center
      }
      .newsbottle_title_txt {
        font-size 35px
        flex 9
        color #fff
      }
    }
    .newsbottle_center_item {
      position: relative
      height: 140px
      border-bottom-1px(#EAEAEA)
      transition: all 0.2s
      .newsbottle_center_list {
        position: absolute
        top: 20px
        left: 20px
        width: 100%
        .newsbottle_img {
          float left
          width: 110px
          height: 110px
          margin-right 30px
          border-radius 50%
        }
        .newsbottle_boxs {
          overflow: hidden
          position: relative
          .newsbottle_boxs {
            font-size 33px
            color #000
            font-family 'SimHei'
            margin-bottom 5px
          }
          .newsbottle_boxs_txt {
            font-size 26px
            color #BABBBA
            no-wrap()
          }
          .newsbottle_boxs_txt_time {
            position: absolute
            top: 2px
            right 45px
            font-size 22px
            color #BABBBA
          }
        }
      }
      .delete_boxs {
        position: absolute
        top: 0
        right -160px
        height: 140px
        line-height: 140px
        width: 160px
        background: #ff4949;
        text-align: center
        color #fff
        font-size 25px
      }
    }

    .newsbottle_center_item[data-type="0"] {
      transform: translate3d(0, 0, 0);
    }

    .newsbottle_center_item[data-type="1"] {
      transform: translate3d(-160px, 0, 0);
    }
  }
</style>
