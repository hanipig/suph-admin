<template>
  <a-layout>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="handleCollapsed" />
    </a-layout-header>
    <div>tabs</div>
    <a-layout-content :style=" { margin: '24px 16px' , padding: '24px' , background: '#fff' , minHeight: '280px' }">
      Content
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCollapsed () {
      this.$emit('handleCollapsed')
    }
  },
  computed: {
    ...mapGetters(['themeStyle']),
    menuList () {
      return this.$store.getters.menuList
    }
  },
  mounted () {

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