<script setup>
import { onMounted, ref, computed } from "vue";
import EventSection from "@/components/EventSection.vue";
import Lottie from "lottie-web";
import { vBackgroundImage as vBg } from "@/plugin/directives";

// import imgDecoLeft from '@/assets/img_index_bg_left.png';
// import imgDecoRight from '@/assets/img_index_bg_right.png';

const lottieTopic = ref(null);
const lottieEvent = ref(null);
const filterCurrent = ref(0);
const pagination = ref(1);

onMounted(() => {
  const [ILottieTopic, ILottieEvent] = [
    ["Lottie/web_Blue_clound.json", lottieTopic.value],
    ["Lottie/web_Pink_clound.json", lottieEvent.value],
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

const templateTopicItems = [
  [
    "美食",
    "#da7481",
    "https://fakeimg.pl/300x200/",
    "文章標題文章標題文章標題文章標題文章標題",
  ],
  [
    "人文",
    "#0f9fb9",
    "https://fakeimg.pl/300x200/",
    "文章標題文章標題文章標題文章標題文章標題",
  ],
  [
    "人文",
    "#0f9fb9",
    "https://fakeimg.pl/300x200/",
    "文章標題文章標題文章標題文章標題文章標題",
  ],
  [
    "景點",
    "#ea9700",
    "https://fakeimg.pl/300x200/",
    "文章標題文章標題文章標題文章標題文章標題",
  ],
  [
    "美食",
    "#da7481",
    "https://fakeimg.pl/300x200/",
    "文章標題文章標題文章標題文章標題文章標題",
  ],
  [
    "美食",
    "#da7481",
    "https://fakeimg.pl/300x200/",
    "文章標題文章標題文章標題文章標題文章標題",
  ],
].map((item) => ({
  tag: item[0],
  color: item[1],
  image: item[2],
  title: item[3],
}));

const TopicItems = [
  ...templateTopicItems,
  ...templateTopicItems,
  ...templateTopicItems,
];
const currentTopicItems = computed(() =>
  TopicItems.slice((pagination.value - 1) * 9, pagination.value * 9)
);
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
        <div
          class="topic__filter-item"
          :class="{
            '-active': filterCurrent === 0,
          }"
          @click="filterCurrent = 0"
        >
          全部
        </div>
        <div
          class="topic__filter-item"
          :class="{
            '-active': filterCurrent === 1,
          }"
          @click="filterCurrent = 1"
        >
          美食
        </div>
        <div
          class="topic__filter-item"
          :class="{
            '-active': filterCurrent === 2,
          }"
          @click="filterCurrent = 2"
        >
          人文
        </div>
        <div
          class="topic__filter-item"
          :class="{
            '-active': filterCurrent === 3,
          }"
          @click="filterCurrent = 3"
        >
          景點
        </div>
      </div>

      <div class="home__topic-list">
        <div
          v-for="(item, key) in currentTopicItems"
          class="home__topic-list-item"
          :key="key"
        >
          <div
            class="home__topic-list-item-img"
            :style="{
              backgroundImage: `url('${item.image}')`,
            }"
          ></div>
          <div
            class="home__topic-list-item-tag"
            :style="{
              '--color': item.color,
            }"
          >
            {{ item.tag }}
          </div>
          <h3 class="home__topic-list-item-title">
            {{ item.title }}
          </h3>
        </div>
      </div>
      <!-- Clamp Pagination -->
      <div class="topic__pagination">
        <div
          class="topic__pagination-item"
          v-for="i in Math.ceil(TopicItems.length / 9)"
          :class="{ '-active': pagination === i }"
          @click="pagination = i"
        >
          {{ i }}
        </div>
      </div>
    </div>

    <EventSection class="home__event home__section">
      <template #image>
        <div class="home__title-wrap-image" ref="lottieEvent"></div>
      </template>
    </EventSection>
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
    &-item {
      padding: 0px 24px;
      font-size: 24px;
      line-height: 2;
      letter-spacing: 2px;
      border-radius: 24px;
      color: #ffffff;
      transition: 0.3s;
      cursor: pointer;
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
