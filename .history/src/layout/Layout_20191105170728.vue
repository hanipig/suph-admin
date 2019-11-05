<template>
  <a-layout>
    <a-layout-header style="background: #fff; padding: 0">
      <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
    </a-layout-header>
    <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
      Content
    </a-layout-content>
  </a-layout>
</template>

<script>
import Layout from '@/layout/Layout'
import LayoutSider from '@/layout/LayoutSider'

export default {

}
</script>