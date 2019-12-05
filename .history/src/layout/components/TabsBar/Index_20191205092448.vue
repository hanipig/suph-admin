<template>
  <div class="tabs-bar">
    <div class="left-icon" @click="handleScroll(240)">
      <a-button icon="left" />
    </div>
    <div class="right-icon" @click="handleScroll(-240)">
      <a-button icon="right" />
    </div>
    <div class="tabs-outer" ref="scrollOuter" @DOMMouseScroll="handlescroll" @mousewheel="handlescroll">
      <ul class="tabs-inner" ref="scrollBody" :style="{left: tagBodyLeft + 'px'}">
        <li v-for="item in tagNavList" :key="item.name" @click="handleSelect(item)">
          <i :class="isCurrentTag(item) ? 'circle active' : 'circle'"></i>
          <span>{{item.meta.title}}</span>
          <a-icon type="close" class="close" v-show="item.name!== 'home'" @click.stop="handleClose($event,item)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { routeEqual } from '@/util'
export default {
  data () {
    return {
      tagBodyLeft: 0
    }
  },
  methods: {
    // 监听外层盒子的鼠标滚动事件
    // 火狐 DOMMouseScroll 
    // 其他 mousewheel 
    handlescroll (e) {
      let type = e.type // 火狐 DOMMouseScroll 其他 mousewheel 
      let delta = 0 // 用来保存鼠标滚动的方向 火狐以e.detail标识左=>右 +3 右=>左 -3 其他e.wheelDelta标识 左=>右 -120 右=>左 +120
      if (type === 'DOMMouseScroll' || type === 'mousewheel') { // 兼容各浏览器滚动幅度一致
        delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
      }
      this.handleScroll(delta)
    },
    // 处理tabsBar滚动
    handleScroll (offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth //外层盒子的可视宽度 (可视区域的宽度)
      const bodyWidth = this.$refs.scrollBody.offsetWidth // 里层盒子的实际官渡 (可视区域加上被隐藏的部分的宽度和)
      if (offset > 0) { // 向左滚动
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
      } else { // 向右滚动
        if (outerWidth < bodyWidth) { // 如果外层盒子不足以显示完tabsBar 才滚动
          if (this.tagBodyLeft >= -(bodyWidth - outerWidth)) {// 如果tabsBar能够向左移
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {// 如果外层盒子已经足以显示完tabsBar 把tabsBar归0
          this.tagBodyLeft = 0
        }
      }
    },
    // 判断当前选中的tag标签
    isCurrentTag (router) {
      return routeEqual(this.$route, router)
    },
    // 选中tag标签 
    handleSelect (router) {
      if (!routeEqual(this.$route, router)) {
        this.$router.push(router)
      }
    },
    // 关闭tag标签
    handleClose (router) {
      this.$store.dispatch('app/delTagNavList', router)
      this.$router.push(this.tagNavList[this.tagNavList.length - 1].name)
    }
  },
  computed: {
    ...mapGetters([
      'tagNavList'
    ])
  }
}
</script>

<style scoped lang="less">
.tabs-bar {
  height: 40px;
  padding: 4px 0;
  position: relative;
  div {
    height: 32px;
    line-height: 32px;
  }
  .left-icon {
    position: absolute;
    left: 1px;
  }
  .right-icon {
    position: absolute;
    right: 1px;
  }
  .tabs-outer {
    display: flex;
    margin: 0 36px;
    box-shadow: 0px 0 3px 2px rgba(100, 100, 100, 0.1) inset;
    overflow: hidden;
    .tabs-inner {
      margin: 0;
      padding: 1px 4px;
      box-sizing: border-box;
      // display: flex;
      // align-items: center;
      position: relative;
      white-space: nowrap;
      li {
        display: inline-block;
        // display: flex;
        // align-items: center;
        height: 29px;
        line-height: 28px;
        margin: 0 6px;
        background: #fff;
        padding: 0 8px;
        border: 1px solid #e8eaec;
        color: #515a6e;
        position: relative;
        .circle {
          position: absolute;
          top: 8px;
          display: inline-block;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #f0f2f5;
        }
        .active {
          background: #1890ff;
        }
        span {
          margin: 0 8px 0 16px;
        }
        .close {
          margin-top: 1px;
          color: #b4bfd8;
          font-size: 10px;
          &:hover {
            color: #1890ff;
          }
        }
      }
    }
  }
}
</style>