<template>
  <div class="tabs-bar">
    <div class="left-icon">
      <a-button icon="left" />
    </div>
    <div class="right-icon">
      <a-button icon="rught" />
    </div>
    <div class="content-outer">内容</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.tabs-bar {
  height: 40px;
  position: relative;
  div {
    height: 40px;
    line-height: 40px;
  }
  .left-icon {
    position: absolute;
    left: 0;
  }
  .right-icon {
    position: absolute;
    right: 0;
  }
  .content-outer {
    width: 100%;
  }
}
</style>