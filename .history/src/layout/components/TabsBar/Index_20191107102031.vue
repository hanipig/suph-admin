<template>
  <div class="tabs-bar">
    <div class="left-icon">左箭头</div>
    <div class="right-icon">右箭头</div>
    <div>内容</div>
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
  .left-icon {
    position: absolute;
    left: 0;
  }
  .right-icon {
    position: absolute;
    right: 0;
  }
}
</style>