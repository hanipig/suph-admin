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
        <transition-group enter-active-class="animated bounceIn" leave-active-class="animated fadeOut">
          <li v-for="item in tagNavList" :key="item.name" @click="handleSelect(item)" ref="tagEle" :data-router="JSON.stringify(item)" @contextmenu.prevent="contextMenu(item.name, $event)">
            <i :class="isCurrentTag(item) ? 'circle active' : 'circle'"></i>
            <span>{{item.meta.title}}</span>
            <a-icon type="close" class="close" v-show="item.name!== 'home'" @click.stop="handleClose(item)" />
          </li>
        </transition-group>
      </ul>
    </div>
    <ul v-show="visible" :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}" class="contextmenu">
      <li @click="handleTagsOption('others')">关闭其他</li>
      <li @click="handleTagsOption('all')">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { routeEqual } from '@/util'
export default {
  data () {
    return {
      visible: false,
      contextMenuLeft: 0,
      contextMenuTop: 0,
      tagBodyLeft: 0,
      outerWidth: 0
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
      const bodyWidth = this.$refs.scrollBody.offsetWidth // 里层盒子的实际宽度 (可视区域加上被隐藏的部分的宽度和)
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
    // 关闭tag标签 需要处理下事件冒泡 这里是直接.stop处理的
    handleClose (router) {
      this.$store.dispatch('app/delTagNavList', router)
      this.$router.push(this.tagNavList[this.tagNavList.length - 1].name)
    },
    // 根据当前路由对象获取当前选中的tag元素 === 确保选中的的tag标签在可是区域
    getTagEleByRoute () {
      console.log('active')
      let tagList = this.$refs.tagEle // 所有tag标签
      tagList.forEach((item, index) => {
        if (routeEqual(this.$route, JSON.parse(item.dataset.router))) {
          let tag = this.$refs.tagEle[index]
          this.moveToView(tag)
        }
      })
    },
    // 获取scrollOuter的offsetWidth
    getOuterWidth () {
      const outerWidth = this.$refs.scrollOuter.offsetWidth //外层盒子的可视宽度 (可视区域的宽度)
      return outerWidth
    },
    // 刷新之后或者选择标签后确保选择的tag在可视区内
    moveToView (tag) {
      let outerWidth = this.getOuterWidth() //需要通过另一个methods才能保证刷新之后获取到的宽度是正确的
      let bodyWidth = this.$refs.scrollBody.offsetWidth
      if (bodyWidth < outerWidth) {// 标签可视区域内
        this.tagBodyLeft = 0
      } else {
        if (tag.offsetLeft < -this.tagBodyLeft) { //标签在可视区左
          this.tagBodyLeft = -tag.offsetLeft
        } else if (tag.offsetLeft > -this.tagBodyLeft + outerWidth) {// 标签在可视区域右侧
          this.tagBodyLeft = -(tag.offsetLeft - (outerWidth - tag.offsetWidth))
        }
      }
    },
    // 右键菜单
    contextMenu (name, e) {
      if (name === 'home') {
        return
      }
      this.visible = true
      const offsetLeft = this.$el.getBoundingClientRect().left
      this.contextMenuLeft = e.clientX - offsetLeft + 10
      this.contextMenuTop = e.clientY - 64
    },
    // 关闭邮件菜单
    closeMenu () {
      this.visible = false
    },
    // 关闭操作
    handleTagsOption (type) {
      this.visible = false
      let tagNavList = []
      if (type === 'all') {
        // 关闭所有，除了home
        tagNavList = this.tagNavList.filter(item => item.name === 'home')
        this.$router.push('home')
      } else if (type === 'others') {
        // 关闭除当前页和home页的其他页
        tagNavList = this.tagNavList.filter(item => routeEqual(this.$route, item) || item.name === 'home')
      }
      this.$store.dispatch('app/setTagNavList', tagNavList)
    }
  },
  computed: {
    ...mapGetters([
      'tagNavList'
    ])
  },
  watch: {
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted () {
    setTimeout(this.getTagEleByRoute, 200)
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
    position: absolute;
    left: 36px;
    right: 36px;
    display: flex;
    box-shadow: 0px 0 3px 2px rgba(100, 100, 100, 0.1) inset;
    overflow: hidden;
    .tabs-inner {
      margin: 0;
      padding: 1px 4px;
      box-sizing: border-box;
      position: relative;
      white-space: nowrap;
      li {
        display: inline-block;
        height: 29px;
        line-height: 28px;
        margin: 0 6px;
        background: #fff;
        padding: 0 8px;
        border: 1px solid #e8eaec;
        color: #515a6e;
        position: relative;
        cursor: pointer;
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
  .contextmenu {
    position: absolute;
    margin: 0;
    padding: 5px 0;
    background: #fff;
    z-index: 1000;
    list-style-type: none;
    border-radius: 4px;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.1);
    li {
      margin: 0;
      padding: 5px 15px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>