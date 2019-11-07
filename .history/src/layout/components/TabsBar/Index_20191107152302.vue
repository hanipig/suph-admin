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
        <li>
          <i class="circle"></i>
          <span>tabs1</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs2</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs3</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs4</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs5</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs6</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs7</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs8</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs9</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs10</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs11</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs12</span>
          <a-icon type="close" class="close" />
        </li>

        <li>
          <i class="circle"></i>
          <span>tabs13</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs14</span>
          <a-icon type="close" class="close" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tagBodyLeft: 0
    }
  },
  methods: {
    handlescroll (e) {

    },
      // 处理tabsBar滚动
      handleScroll (offset) {
  const outerWidth = this.$refs.scrollOuter.offsetWidth //外层盒子的可视宽度 (可视区域的宽度)
  const bodyWidth = this.$refs.scrollBody.offsetWidth // 里层盒子的实际官渡 (可视区域加上被隐藏的部分的宽度和)
  console.log(outerWidth, bodyWidth)
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
}
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
      display: flex;
      align-items: center;
      position: relative;
      li {
        display: flex;
        align-items: center;
        height: 28px;
        margin: 0 6px;
        background: #fff;
        padding: 0 8px;
        border: 1px solid #e8eaec;
        color: #515a6e;
        .circle {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #f0f2f5;
        }
        span {
          margin: 0 8px;
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