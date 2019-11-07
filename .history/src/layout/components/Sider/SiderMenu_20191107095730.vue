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
import { mapGetters } from 'vuex'
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
    },
    openPage (item) {
      // 被选中的一级menu，在折叠状态下有用
      this.activeMenu = item.keyPath.pop()
      if (item.key !== this.$route.name) {
        this.$router.push(item.key)
      }
      // this.$router.push({ name: item.key })

    },
  },
  watch: {
    // 监听collapse 状态的该百年
    collapsed (val) {
      this.collapse = val
      if (val) {
        this.cachedOpenKeys = this.openKeys.concat()
        console.log(this.cachedOpenKeys)
        this.openKeys = []
      } else {
        this.openKeys = this.cachedOpenKeys
      }
    }
  },
}
</script>

