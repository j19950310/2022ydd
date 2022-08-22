<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header></Header>
  <div class="app">
    <div class="app__page">
      <div class="app__deco">
        <div class="app__deco-item"></div>
        <div class="app__deco-item"></div>
        <div class="app__deco-item"></div>
        <div class="app__deco-item"></div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
  overflow: hidden;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #68c8ff;
  overflow: auto;
}

#app {
  flex: 1 1 100%;
  width: 100%;
}

.app {
  overflow: hidden;
  padding-top: 108px;

  &__page {
    position: relative;
  }

  &__deco {
    pointer-events: none;
    position: absolute;
    z-index: 1;
    width: 100%;
    left: 0;
    right: 0;

    &-item {
      height: 900px;
      position: relative;

      &::before,
      &::after {
        display: block;
        position: absolute;
        content: "";
        background-size: cover;
        background-repeat: no-repeat;
      }

      &::before {
        top: 0;
        left: 0;
        width: 161px;
        height: 234px;
        background-image: url("@/assets/img_index_bg_left.png");
      }

      &::after {
        width: 113px;
        height: 234px;
        right: 0;
        bottom: 0;
        background-image: url("@/assets/img_index_bg_right.png");
      }
    }
  }
}
</style>
