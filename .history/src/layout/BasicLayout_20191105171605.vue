<template>

  <layout />
  <layout-sider />
  </a-layout>
</template>
<script>
import Layout from '@/layout/Layout'
import LayoutSider from '@/layout/LayoutSider'

export default {
  components: {
    Layout,
    LayoutSider
  },
  data () {
    return {
      collapsed: false,
    };
  },
};
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