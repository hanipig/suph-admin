<template>
  <keep-alive>
    <router-view :key="$route.fullPath" />
  </keep-alive>
</template>