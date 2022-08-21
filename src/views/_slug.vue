<script setup>
import { onMounted, ref, computed } from "vue";
import { vBackgroundImage as vBg } from '@/plugin/directives'
import { useRoute } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { tags } from '@/data'

const route = useRoute()
const postData = computed(() => {
  if (!route.matched[0].meta.posts) return null
  return route.matched[0].meta.posts.find((post) => {
    return post.slug === route.params.slug
  })
})
const title = computed(() => postData.value && postData.value.title)
const tag = computed(() => {
  if (!postData.value) return ''
  return tags.find((tag) => tag.key === postData.value.tag)
})
const date = computed(() => postData.value && postData.value.date)
const blocks = computed(() => postData.value && postData.value.content)
useTitle(title)
onMounted(() => {
});

</script>

<template>
  <div class="page-slug">
    <div class="page-slug__head">
      <h1>{{ title }}</h1>
      <div class="page-slug__head-wrap">
        <div v-if="tag" class="page-slug__head-tag" :style="{
          backgroundColor: tag.color
        }">
          {{ tag.name }}
        </div>
        <div class="page-slug__head-date">{{ date }}</div>

      </div>
    </div>
    <div class="page-slug__block" v-for="(block, index) in blocks" :key="'block_' + index">
      <div v-if="block.type === 'text'" class="page-slug__block-text" v-text="block.text"></div>
      <div v-else-if="block.type === 'img'" class="page-slug__block-img" v-bg="block.img"></div>
    </div>
  </div>
</template>

<style lang="scss">
.page-slug {
  position: relative;
  z-index: 2;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;

  &__head {
    padding: 67px 105px;

    h1 {
      font-size: 36px;
      line-height: 1.36;
      font-weight: 500;
      letter-spacing: 0px;
      color: #2d9ad9;
      padding-bottom: 32px;
    }

    &-wrap {
      display: flex;
    }

    &-tag {
      font-size: 18px;
      letter-spacing: 2px;
      padding: 8px 24px 12px;
      margin-right: 12px;
      color: #ffffff;
    }

    &-date {
      font-weight: 500;
      letter-spacing: 2px;
      color: #aeaeae;
    }
  }

  &__block {
    &-img {
      &::before {
        content: '';
        display: block;
        padding-bottom: 66.66%;
      }
    }

    &-text {
      padding: 67px 105px;
      font-size: 18px;
      line-height: 1.8;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #535353;
    }
  }
}
</style>
