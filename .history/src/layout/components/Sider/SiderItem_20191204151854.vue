<template functional>
  <a-sub-menu :key="props.list.name">
    <span slot="title">
      <a-icon v-if="props.list.meta.icon" :type="props.list.meta.icon" />
      <span>{{props.list.meta.title}}</span>
    </span>
    <template v-for="item in props.list.children">
      <a-menu-item v-if="!item.children" :key="item.name">
        <a-icon v-if="i.meta.icon" :type="item.meta.icon" />
        <span>{{item.meta.title}}</span>
      </a-menu-item>
      <sider-item v-else :key="item.name" :list="item" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: 'SiderItem',
  props: ['list']
}
</script>