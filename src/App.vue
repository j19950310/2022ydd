<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <Header></Header>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang='scss'>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #68c8ff;
}
#app {
  flex: 1 1 100%;
  width: 100%;
}
</style>
