<template>
  <a-layout>
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
  }
}
</script>