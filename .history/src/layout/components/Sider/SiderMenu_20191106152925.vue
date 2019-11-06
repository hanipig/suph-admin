<template>
  <a-menu theme="dark" mode="inline" :openKeys="openKeys" @openChange="onOpenChange">
    <template v-for="item in menuList">
      <a-menu-item v-if="!item.children" :key="item.name">
        <a-icon :type="item.meta.icon" />
        <span>{{item.meta.title}}</span>
      </a-menu-item>
      <sider-item v-else :list="item" :key="item.name" />
    </template>
  </a-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import SiderItem from './SiderItem.vue'
export default {
  name: 'sider-menu',
  components: {
    SiderItem
  },
  computed: {
    ...mapGetters(['themeStyle']),
    menuList () {
      return this.$store.getters.menuList
    }
  },
}
</script>

