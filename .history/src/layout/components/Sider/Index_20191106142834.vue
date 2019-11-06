<template>
  <a-layout-sider :trigger="null" collapsible v-model="collapsed">
    <div class="logo" />
    <sider-menu />
  </a-layout-sider>
</template>

<script>
import SiderMenu from './SiderMenu.vue'
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SiderMenu
  }
}
</script>

<style>
#basic-layout {
  height: 100%;
}

#basic-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#basic-layout .trigger:hover {
  color: #1890ff;
}

#basic-layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>