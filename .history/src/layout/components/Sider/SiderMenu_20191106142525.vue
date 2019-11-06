<template>
  <a-menu :mode="mode" :theme="themeStyle.theme" :openKeys="openKeys" :selectedKeys="selectedKeys" @openChange="onOpenChange" @select="openPage">
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
import SiderItem from './SideItem.vue'
export default {
  name: 'sider-menu',
  components: {
    SiderItem
  }
}

</script>
<style  lang='less' scoped>
</style>
