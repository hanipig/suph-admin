<template>
  <div class="tabs-bar">
    <div class="left-icon" @click="handleScroll('toLeft')">
      <a-button icon="left" />
    </div>
    <div class="right-icon" @click="handleScroll('toRight')">
      <a-button icon="right" />
    </div>
    <div class="content-outer">内容</div>
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
  .content-outer {
    // width: 100%;
    margin: 0 36px;
    box-shadow: 0px 0 3px 2px rgba(100, 100, 100, 0.1) inset;
  }
}
</style>