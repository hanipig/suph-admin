<template>
  <a-layout id="basic-layout">
    <layout-sider :collapsed="collapsed" ref="sider" style="width: 360px;max-width: 360px" />
    <layout-content :collapsed="collapsed" @handleCollapsed="handleCollapsed" />
  </a-layout>
</template>

<script>
import LayoutSider from '@/layout/components/Sider/Index.vue'
import LayoutContent from '@/layout/components/Main.vue'
export default {
  components: {
    LayoutSider,
    LayoutContent
  },
  data () {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  },
  created () {
    this.$store.dispatch('app/setHomeRoute')
  },
  watch: {
    '$route' (newRoute) {
      const { name, query, params, meta } = newRoute
      this.$store.dispatch('app/addTagNavList', { name, query, params, meta })
      this.$refs.sider.updateMenu()
    }
  }
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