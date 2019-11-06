<template>
  <keep-alive>
    <router-view :key="$route.fullPath" />
  </keep-alive>
</template>

<script>
export default {
  name: 'RouterView'
}
</script>