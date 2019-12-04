<template>
  <a-menu theme="dark" mode="inline" :openKeys="openKeys" :defaultSelectedKeys="['home']" @openChange="onOpenChange" @select="openPage">
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
import SiderItem from './SiderItem.vue'
export default {
  name: 'sider-menu',
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  components: {
    SiderItem
  },
  data () {
    return {
      openKeys: ['home'],
    }
  },
  computed: {
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
    },
    // 把addTagNavList 的操作放在外层了
    openPage (item) {
      this.$router.push({ name: item.key })
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
  watch: {
    // 监听collapse 状态的改变
    // false=>true 时记住打开的是哪项（cachedOpenKeys），然后展开项置空（openKeys），不然在折叠的时候会保留展开状态
    // true=>false时恢复展开状态  
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
}
</script>

