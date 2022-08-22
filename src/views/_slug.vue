<script setup>
import { onMounted, ref, computed } from "vue";
import { vBackgroundImage as vBg } from '@/plugin/directives'
import { useRoute } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { tags } from '@/data'
import Lottie from "lottie-web";

import EventSection from "@/components/EventSection.vue"

import iconLocation from '@/assets/ic_address.png'
import iconBusinessHour from '@/assets/ic_business_hours.png'
import iconPhone from '@/assets/ic_phone.png'

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
const location = computed(() => postData.value && postData.value.location)
const phone = computed(() => postData.value && postData.value.phone)
const businessHour = computed(() => postData.value && postData.value.hour)
const hashTags = computed(() => postData.value && postData.value.tags)
const lottieEvent = ref(null);

useTitle(title)
onMounted(() => {
  const [ILottieEvent] = [
    ["/Lottie/web_Pink_clound.json", lottieEvent.value],
  ].map(([path, container]) =>
    Lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    })
  );
});

</script>

<template>
  <div class="page-slug">
    <div class="page-slug__container">
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
        <div v-else-if="block.type === 'album'" class="page-slug__block-album">
          <div class="page-slug__block-album-item" v-for="(item, _index) in block.album"
            :key="index + 'album' + _index">
            <div class="page-slug__block-album-item-img" v-bg="item.img"></div>
            <div v-if="item.title" class="page-slug__block-album-item-title">{{ item.title }}</div>
          </div>
        </div>
      </div>

      <div class="page-slug__info">
        <div v-if="location" class="page-slug__info-row">
          <div class="page-slug__info-icon" style="width: 22px; height: 34px;" v-bg="iconLocation"></div>
          <div class="page-slug__info-title">地址</div>
          <div class="page-slug__info-desc">{{ location }}</div>
        </div>
        <div v-if="phone" class="page-slug__info-row">
          <div class="page-slug__info-icon" v-bg="iconPhone"></div>
          <div class="page-slug__info-title">電話</div>
          <div class="page-slug__info-desc">{{ phone }}</div>
        </div>
        <div v-if="businessHour" class="page-slug__info-row">
          <div class="page-slug__info-icon" v-bg="iconBusinessHour"></div>
          <div class="page-slug__info-title">營業時間</div>
          <div class="page-slug__info-desc">{{ businessHour }}</div>
        </div>
      </div>
      <div class="page-slug__tags">
        <span v-for="tag in hashTags">#{{ tag }}</span>
      </div>
    </div>
    <EventSection class="home__event home__section">
      <template #image>
        <div class="home__title-wrap-image" ref="lottieEvent">
        </div>
      </template>
    </EventSection>
  </div>
</template>

<style lang="scss">
.page-slug {
  &__container {

    position: relative;
    z-index: 2;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 20px;
  }

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
    &:last-child {
      padding-bottom: 67px;
    }

    &-img {
      &::before {
        content: '';
        display: block;
        padding-bottom: 66.66%;
      }
    }

    &-text {
      text-indent: 2em;
      padding: 67px 105px 0;
      font-size: 18px;
      line-height: 1.8;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #535353;
    }

    &-album {
      padding: 67px 105px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 45px;

      &-item {
        &-img {
          &::before {
            display: block;
            content: '';
            padding-bottom: 56%;
          }
        }

        &-title {
          margin-top: 12px;
          position: relative;
          padding-left: 28px;
          font-size: 18px;
          font-weight: 500;
          line-height: 1;

          &::before {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            display: block;
            content: '';
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 17px solid #2d9ad9;
          }
        }
      }
    }
  }

  &__info {
    padding: 67px 105px 0;

    &-row {
      position: relative;
      padding-left: 40px;
      padding-bottom: 24px;
    }

    &-icon {
      position: absolute;
      top: 10px;
      left: 0;
      @include size(30px);
    }

    &-title {
      font-size: 30px;
      font-weight: 500;
      letter-spacing: 2px;
      color: #2d9ad9;
      line-height: 1.5;
    }

    &-desc {
      font-size: 24px;
      letter-spacing: 1px;
      font-weight: 300;
      color: #535353;
      line-height: 1.5;
    }
  }

  &__tags {
    padding: 67px 105px;
    margin: -6px;

    span {
      padding: 6px;
      white-space: nowrap;
      font-size: 30px;
      letter-spacing: 2px;
      color: #2d9ad9;
    }
  }
}
</style>
