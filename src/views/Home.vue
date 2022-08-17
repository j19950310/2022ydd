<script setup>
import { onMounted, ref } from "vue"
import ButtonMore from "@/components/ButtonMore.vue"
import EventSection from "@/components/EventSection.vue"
import Lottie from "lottie-web"
import { vBackgroundImage as vBg } from '@/plugin/directives'

import imgSlogan from "@/assets/img_slogan.png"
import imgMascot from "@/assets/img_mascot.png"
import imgLogo from '@/assets/logo.png'
// import imgDecoLeft from '@/assets/img_index_bg_left.png';
// import imgDecoRight from '@/assets/img_index_bg_right.png';

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


</script>

<template>
  <div class="home container">

    <!-- Player -->
    <div class="home__player home__section">
      <div class="home__title-wrap">
        <div class="home__title-wrap-image-container">
          <div class="home__title-wrap-image" ref="lottieYouKnow">
          </div>
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
        <div class="home__title-wrap-image-container">
          <div class="home__title-wrap-image" ref="lottieTopic">
          </div>
        </div>
        <div class="home__title-wrap-text">
          主題文章
        </div>
      </div>
      <div class="home__topic-list">
        <div v-for="(item, key) in TopicItems" class="home__topic-list-item" :key="key">
          <div class="home__topic-list-item-img"  :style="{
              backgroundImage: `url('${item.image}')`
            }">
            
          </div>
          <div class="home__topic-list-item-tag" :style="{
            '--color': item.color,
          }">
            {{item.tag}}
          </div>
          <h3 class="home__topic-list-item-title">
            {{item.title}}
          </h3>
        </div>
      </div>
      <div class="home__topic-all">
        <ButtonMore class="home__topic-all-btn"></ButtonMore>
      </div>
    </div>

    <EventSection class="home__event home__section">
      <template #image>
        <div class="home__title-wrap-image" ref="lottieEvent">
        </div>
      </template>
    </EventSection>

    <!-- Direct -->
    <div class="home__direct home__section">
      <img :src="imgMascot" alt="" class="home__direct-mascot">
      <img :src="imgSlogan" alt="" class="home__direct-slogan">
      <div class="home__direct-more">
        瞭解更多雲的觀察日誌
        <div class="home__direct-more-arrow"></div>
        <ButtonMore class="home__direct-more-btn"></ButtonMore>
      </div>
      <img :src="imgLogo" alt="" class="home__direct-logo">
    </div>
  </div>
</template>


<style lang='scss'>

.home {
  
  &__section {
    position: relative;
    z-index: 2;
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
        &-container {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          flex: 0 0 400px;
          width: 404px;
        }
        svg {
          pointer-events: none;
        }
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
    margin-bottom: -105px;
    .home__title-wrap {
      margin-bottom: -76px;
      &-image {
        width: 440px;
      }
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
    margin-bottom: -100px;
    .home__title-wrap{
      margin-bottom: -45px;
      &-image {
        width: 400px;
        transform: translate(65px, 0px);
      }
    }
  
    &-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 48px 52px;
      &-item {
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
    margin-bottom: 100px;
    .home__title-wrap {
      margin-bottom: -90px;
      &-image {
        width: 440px;
        transform: translate(65px, 0px);
      }
    }
  }

  // Direct
  &__direct {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
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
      padding-bottom: 60px;
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

    &-logo {
      width: 268px;
	    height: 60px;
    }
  }
}
</style>