<script setup>
import { vBackgroundImage as vBg } from '@/plugin/directives'
import img1 from '@/assets/event/P1.jpg'
import img2 from '@/assets/event/P2.jpg'

const EventItems = [
  ['三小市集', 'https://www.tri-small.com/', img1],
  ['雲林食務所', 'https://www.facebook.com/yunlingfooding/ ', img2],
].map(item => ({ title: item[0], url: item[1], image: item[2] }))
</script>
<template>
  <!-- Events -->
  <div class="event-section home__section">
    <div class="home__title-wrap">
      <div class="home__title-wrap-image-container">
        <slot name="image"></slot>
      </div>
      <div class="home__title-wrap-text">
        活動推薦
      </div>
    </div>
    <div class="event-section-list">
      <div v-for="(item, key) in EventItems" class="event-section-list-item" :key="key" v-bg="item.image">
        <a :href="item.url"></a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.event-section {
  &-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 44px;

    @include media-breakpoint-down('md') {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 44px;
    }

    &-item {
      position: relative;

      a {
        @include link;
      }

      &::before {
        content: '';
        display: block;
        padding-bottom: 56%;
      }
    }
  }
}
</style>