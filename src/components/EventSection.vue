<script setup>
const EventItems = [
  ['測試1', 'https://google.com', 'https://fakeimg.pl/500x280/'],
  ['測試1', 'https://google.com', 'https://fakeimg.pl/500x280/'],
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
        主題文章
      </div>
    </div>
    <div class="event-section-list">
      <div v-for="(item, key) in EventItems" class="event-section-list-item" :key="key" :style="{
        backgroundImage: `url('${item.image}')`
      }">
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

      &::before {
        content: '';
        display: block;
        padding-bottom: 56%;
      }
    }
  }
}
</style>