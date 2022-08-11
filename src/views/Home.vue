<script setup>
import { onMounted, ref } from "vue"
import ButtonMore from "@/components/ButtonMore.vue"
import Lottie from "lottie-web"
import { vBackgroundImage as vBg } from '@/plugin/directives'

import imgSlogan from "@/assets/img_slogan.png"
import imgMascot from "@/assets/img_mascot.png"

const lottieYouKnow = ref(null)
const lottieTopic = ref(null)
const lottieEvent = ref(null)

onMounted(() => {
  const [ILottieYK, ILottieTopic, ILottieEvent] = [
    ["Lottie/web_AB_clound.json", lottieYouKnow.value],
    ["Lottie/web_Blue_clound.json", lottieTopic.value],
    ["Lottie/web_Pink_clound.json", lottieEvent.value]
  ].map(([path, container])=>Lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path
  }))
})

const TopicItems = [
  ['美食', '#da7481', 'https://fakeimg.pl/300x200/','文章標題文章標題文章標題文章標題文章標題'],
  ['人文', '#0f9fb9', 'https://fakeimg.pl/300x200/','文章標題文章標題文章標題文章標題文章標題'],
  ['人文', '#0f9fb9', 'https://fakeimg.pl/300x200/','文章標題文章標題文章標題文章標題文章標題'],
  ['景點', '#ea9700', 'https://fakeimg.pl/300x200/','文章標題文章標題文章標題文章標題文章標題'],
  ['美食', '#da7481', 'https://fakeimg.pl/300x200/','文章標題文章標題文章標題文章標題文章標題'],
  ['美食', '#da7481', 'https://fakeimg.pl/300x200/','文章標題文章標題文章標題文章標題文章標題'],
].map(item => ({tag: item[0], color: item[1], image: item[2], title: item[3]}))

const EventItems = [
  ['測試1', 'https://google.com','https://fakeimg.pl/500x280/'],
  ['測試1', 'https://google.com','https://fakeimg.pl/500x280/'],
].map(item => ({title: item[0], url: item[1], image: item[2]}))
</script>

<template>
  <div class="home container">
    <!-- Player -->
    <div class="home__player home__section">
      <div class="home__title-wrap">
        <div class="home__title-wrap-image" ref="lottieYouKnow">
        </div>
        <div class="home__title-wrap-text">
          哎！你知道嗎?
        </div>
      </div>
      <div class="home__player-list">
        <div class="home__player-list-item" v-bg="'https://fakeimg.pl/270x480/'">

        </div>
        <div class="home__player-list-item" v-bg="'https://fakeimg.pl/270x480/'">

        </div>
        <div class="home__player-list-item" v-bg="'https://fakeimg.pl/270x480/'">

        </div>
      </div>
    </div>

    <!-- Topic -->
    <div class="home__topic home__section">
      <div class="home__title-wrap">
        <div class="home__title-wrap-image" ref="lottieTopic">
        </div>
        <div class="home__title-wrap-text">
          主題文章
        </div>
      </div>
      <div class="home__topic-list">
        <div v-for="(item, key) in TopicItems" class="home__topic-list-item" :key="key" :style="{
          backgroundImage: `url('${item.image}')`
        }">
        <div class="home__topic-list-item-tag" :style="{
          '--color': item.color,
        }">
          {{item.tag}}
        </div>
        </div>
      </div>
      <div class="home__topic-all">
        <ButtonMore class="home__topic-all-btn"></ButtonMore>
      </div>
    </div>

    <!-- Events -->
    <div class="home__event home__section">
      <div class="home__title-wrap">
        <div class="home__title-wrap-image" ref="lottieEvent">
        </div>
        <div class="home__title-wrap-text">
          主題文章
        </div>
      </div>
      <div class="home__event-list">
        <div v-for="(item, key) in EventItems" class="home__event-list-item" :key="key" :style="{
          backgroundImage: `url('${item.image}')`
        }">
        </div>
      </div>
    </div>

    <!-- Direct -->
    <div class="home__direct home__section">
      <img :src="imgMascot" alt="" class="home__direct-mascot">
      <img :src="imgSlogan" alt="" class="home__direct-slogan">
      <div class="home__direct-more">
        瞭解更多雲的觀察日誌
        <div class="home__direct-more-arrow"></div>
        <ButtonMore class="home__direct-more-btn"></ButtonMore>
      </div>
    </div>
  </div>
</template>


<style lang='scss'>

.home {
  &__section {
    margin: 0 auto;
    width: 1000px;
    padding: 40px 0;
  }

  &__title {
    &-wrap {
      display: flex;
      align-items: center;
      max-width: 100%;
      width: 1000px;
      margin: 0 auto 60px;
      &-image {
        border: 1px solid;
        padding: 0 10px;
        flex: 0 0 400px;
        // width: 404px;
      }
      &-text {
        height: 100%;
        padding: 0 10px;
        flex: 1 0 auto;
        @include text-header;
      }
    }
  }

  // Player
  &__player {
    .home__title-wrap-image {
    
    }
    &-list {
      $space: 43.5px;
      margin: #{'0 ' + -$space};
      display: flex;
      &-item {
        // width: 270px;
        flex: 1 0 auto;
        margin: #{'0 ' + $space};
        &::before {
          content: '';
          display: block;
          padding-bottom: 177.777778%;
          //           width: 270px;
          // height: 481px;
        };
      }
    }
  }

  // Topic
  &__topic {
    .home__title-wrap-image {
      
    }
  
    &-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 48px 52px;
      &-item {
        position: relative;
        &::before {
          content: '';
          display: block;
          padding-bottom: 66.66%;
        }
        &-tag {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
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
      }
    }

    &-all {
      padding: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      &-btn {
        width: 100px;
      }
    }
  }

   // Event
  &__event {
    .home__title-wrap-image {
      
    }
  
    &-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 44px;
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

  // Direct
  &__direct {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      max-width: 100%;
    }
    &-mascot {
      width: 700px;
      margin-bottom: 33px;
    }
    &-slogan {
      width: 600px;
    }

    &-more {
      padding-top: 30px;
      font-size: 18px;
    	font-weight: bold;
    	letter-spacing: 1px;
	    color: #ffffff;
      &-arrow {
        margin: 24px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &::before {
          content: '';
          display: block;
          padding-bottom: 125px;
          width: 3px;
          background-color: currentColor;
        };
        &::after {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform-origin: 50% 100%;
          transform: translateX(-50%) rotate(-33deg);
          content: '';
          display: block;
          padding-bottom: 36px;
          width: 3px;
          background-color: currentColor;
        }
      }

      &-btn {
        width: 100px;
        margin: 0 auto;
      }
    }

  }
}
</style>