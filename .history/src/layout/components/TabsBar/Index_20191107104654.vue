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
        <li>tabs</li>
        <li>tabs</li>
        <li>tabs</li>
        <li>tabs</li>

        <li>tabs</li>
        <li>tabs</li>
        <li>tabs</li>
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
    padding: 2px 4px;
    box-shadow: 0px 0 3px 2px rgba(100, 100, 100, 0.1) inset;
    overflow: hidden;
    .tabs-inner {
      margin: 0;
      width: 100%;
      height: 28px;
      padding: 2px;
      box-sizing: border-box;
      overflow-x: auto;
      display: flex;
      align-items: center;
      li {
        width: 100px;
        margin: 0 4px;
        background: #fff;
      }
    }
  }
}
</style>