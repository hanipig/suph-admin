<template>
  <div class="tabs-bar">
    <div class="left-icon" @click="handleScroll('toLeft')">
      <a-button icon="left" />
    </div>
    <div class="right-icon" @click="handleScroll('toRight')">
      <a-button icon="right" />
    </div>
    <div class="tabs-outer">
      <ul class="tabs-inner">
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
  methods: {
    handleScroll (flag) {
      console.log(flag)
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
      li {
        display: flex;
        align-items: center;
        width: 100px;
        height: 28px;
        margin: 0 6px;
        background: #fff;
        padding: 0 8px;
        border: 1px solid #e8eaec;
        color: #515a6e;
        .circle {
          display: inline-block;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #f0f2f5;
          margin-right: 8px;
        }
        .close {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>