<script setup>
import { vBackgroundImage as vBg } from '@/plugin/directives'
defineProps([
  'image',
  'color',
  'tag',
  'title',
  'to',
])
</script>
<template>
  <div class="topic-item">
    <div class="topic-item-img" v-bg="image">

    </div>
    <div class="topic-item-tag" :style="{
      '--color': color,
    }">
      {{ tag }}
    </div>
    <h3 class="topic-item-title">
      {{ title }}
    </h3>
    <router-link :to="to"></router-link>
  </div>
</template>
<style lang="scss">
.topic-item {
  position: relative;

  &-tag {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 90px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    letter-spacing: 2px;
    color: #ffffff;
    background-color: var(--color, #ffffff);
  }

  &-img {
    z-index: 1;
    width: 100%;

    &::before {
      content: '';
      display: block;
      padding-bottom: 66.66%;
    }
  }

  &-title {
    padding-top: 4px;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 1px;
    font-family: "Noto Sans TC";
    @include line-clamp(2);
  }

  a {
    @include link;
  }
}
</style>