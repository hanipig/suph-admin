<template>
  <div class="tabs-bar">
    <div class="left-icon" @click="handleScroll(240)">
      <a-button icon="left" />
    </div>
    <div class="right-icon" @click="handleScroll(-240)">
      <a-button icon="right" />
    </div>
    <div class="tabs-outer" ref="scrollOuter">
      <ul class="tabs-inner" ref="scrollBody" :style="{left: tagBodyLeft + 'px'}">
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>

        <li>
          <i class="circle"></i>
          <span>tabs</span>
          <a-icon type="close" class="close" />
        </li>
        <li>
          <i class="circle"></i>
          <span>tabs</span>
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
    handleScroll (offset) {
      const outerWidth = this.$refs.scrollOuter.offsetWidth
      const bodyWidth = this.$refs.scrollBody.offsetWidth
      if (offset > 0) {
        this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
        console.log(this.tagBodyLeft)
      } else {
        if (outerWidth < bodyWidth) {
          if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
            this.tagBodyLeft = this.tagBodyLeft
          } else {
            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
          }
        } else {
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
      width: 100%;
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