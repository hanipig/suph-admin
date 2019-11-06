<template functional>
  <a-sub-menu :key="props.list.name">
    <span slot="title">
      <a-icon v-if="props.list.meta.icon" :type="props.list.meta.icon" />
      <span>{{props.list.meta.title}}</span>
    </span>
    <template v-for="i in props.list.children">
      <a-menu-item v-if="!i.children" :key="i.name">
        <a-icon v-if="i.meta.icon" :type="i.meta.icon" />
        <span>{{i.meta.title}}</span>
      </a-menu-item>
      <sider-item v-else :key="i.name" :list="i" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: 'SiderItem',
  props: ['list']
}
</script>

<style scoped lang="less">
</style>