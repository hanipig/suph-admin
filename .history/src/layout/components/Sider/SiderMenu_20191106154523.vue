<template>
  <a-menu theme="dark" mode="inline" :openKeys="openKeys" :selectedKeys="selectedKeys" @openChange="onOpenChange">
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
  data () {
    return {
      openKeys: ['test1'],
      selectedKeys: ['home']
    };
  },
  computed: {
    ...mapGetters(['themeStyle']),
    menuList () {
      return this.$store.getters.menuList
    },
    // 获取到路由列表中的 name 属性组成的数组，在侧边栏口风琴效果中使用
    rootSubmenuKeys () {
      return this.$store.getters.menuList.map(item => item.name)
    },
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>

