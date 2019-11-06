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
  },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      openKeys: ['_home'],
      selectedKeys: ['home'],
      cachedOpenKeys: [],
      activeMenu: 'home'
    }
  },
  computed: {
    ...mapGetters(['themeStyle']),
    menuList () {
      return this.$store.getters.menuList
    },
    rootSubmenuKeys () {
      return this.$store.getters.menuList.map(item => item.name)
    },
    mode () {
      return this.themeStyle.layout === 'sidemenu' ? 'inline' : 'horizontal'
    }
  },
  watch: {
    collapsed (val) {
      this.collapse = val
      if (val) {
        this.cachedOpenKeys = this.openKeys.concat()
        this.openKeys = []
      } else {
        this.openKeys = this.cachedOpenKeys
      }
    }
  },
  methods: {
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    openPage (item) {
      // 被选中的一级menu，在折叠状态下有用
      this.activeMenu = item.keyPath.pop()
      if (item.key !== this.$route.name) {
        this.$router.push(item.key)
      }
    },
    updateMenu () {
      let routes = this.$route.matched.concat()
      this.selectedKeys = [routes.pop().name]
      let openKeys = []
      routes.forEach((item) => {
        openKeys.push(item.name)
      })
      this.collapsed ? this.cachedOpenKeys = openKeys : this.openKeys = openKeys
    }
  },
  created () {
    this.updateMenu()
  }
}

</script>
<style  lang='less' scoped>
</style>
