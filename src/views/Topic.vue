<script setup>
import { onMounted, ref, computed } from "vue";
import EventSection from "@/components/EventSection.vue";
import Lottie from "lottie-web";
import { vBackgroundImage as vBg } from "@/plugin/directives";
import { posts, tags, mapPostItem } from '@/data'
import TopicItem from "@/components/TopicItem.vue"

// import imgDecoLeft from '@/assets/img_index_bg_left.png';
// import imgDecoRight from '@/assets/img_index_bg_right.png';
import imgLogo from '@/assets/logo.png'

const lottieTopic = ref(null);
const lottieEvent = ref(null);
const filterCurrent = ref("");
const pagination = ref(1);
const TopicItems = posts.map(mapPostItem)

onMounted(() => {
  const [ILottieTopic, ILottieEvent] = [
    ["/Lottie/web_Blue_clound.json", lottieTopic.value],
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

const currentTopicItems = computed(() => {
  if (!filterCurrent.value) {
    return TopicItems.slice((pagination.value - 1) * 9, pagination.value * 9)
  }

  const arr = TopicItems.filter((item) => item.tagKey === filterCurrent.value)

  return arr.slice((pagination.value - 1) * 9, pagination.value * 9)
});
</script>

<template>
  <div class="home topic container">
    <!-- Topic -->
    <div class="home__topic home__section">
      <div class="home__title-wrap">
        <div class="home__title-wrap-image-container">
          <div class="home__title-wrap-image" ref="lottieTopic"></div>
        </div>
        <div class="home__title-wrap-text">主題文章</div>
      </div>

      <!-- Clamp Filter -->
      <div class="topic__filter">
        <div class="topic__filter-item" :class="{
          '-active': filterCurrent === '',
        }" @click="filterCurrent = ''">
          全部
        </div>
        <div class="topic__filter-item" v-for="tag in tags" :key="tag.key" :class="{
          '-active': filterCurrent === tag.key,
        }" @click="filterCurrent = tag.key">
          {{ tag.name }}
        </div>
      </div>

      <TransitionGroup name="list" tag="div" class="home__topic-list" mode="out-in">
        <TopicItem v-for="(item, key) in currentTopicItems" v-bind="item" :key="item.slug">
        </TopicItem>
      </TransitionGroup>
      <!-- Clamp Pagination -->
      <div class="topic__pagination">
        <div class="topic__pagination-item" v-for="i in Math.ceil(TopicItems.length / 9)"
          :class="{ '-active': pagination === i }" @click="pagination = i">
          {{ i }}
        </div>
      </div>
    </div>

    <EventSection class="home__event home__section">
      <template #image>
        <div class="home__title-wrap-image" ref="lottieEvent"></div>
      </template>
    </EventSection>
    <!-- Direct -->
    <div class="home__direct home__section">
      <img :src="imgLogo" alt="" class="home__direct-logo">
    </div>
  </div>
</template>

<style lang="scss">
.topic {
  .home__topic {
    z-index: 3;
  }

  &__filter {
    width: 472px;
    margin: 40px auto 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include media-breakpoint-down('sm') {
      overflow-x: auto;
      max-width: 100%;
    }

    &-item {
      padding: 0px 24px;
      font-size: 24px;
      line-height: 2;
      letter-spacing: 2px;
      border-radius: 24px;
      color: #ffffff;
      transition: 0.3s;
      cursor: pointer;
      white-space: nowrap;

      @include media-breakpoint-down('sm') {
        padding: 0px 16px;
      }

      &.-active {
        color: #68c8ff;
        background-color: #ffffff;
      }

      @include hover {
        color: #68c8ff;
        background-color: #ffffff;
      }
    }
  }

  &__pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    &-item {
      margin: 40px 12px;
      padding-bottom: 4px;
      width: 50px;
      height: 50px;
      display: flex;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      letter-spacing: 2px;
      border-radius: 24px;
      color: #ffffff;
      transition: 0.3s;

      &.-active {
        color: #68c8ff;
        background-color: #ffffff;
      }

      @include hover {
        color: #68c8ff;
        background-color: #ffffff;
      }
    }
  }
}
</style>
