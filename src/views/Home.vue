<script setup>
import { onMounted, ref } from "vue"
import ButtonMore from "@/components/ButtonMore.vue"
import EventSection from "@/components/EventSection.vue"
import Video from "@/components/Video.vue"
import Lottie from "lottie-web"
import { vBackgroundImage as vBg } from '@/plugin/directives'
import { useMediaQuery } from '@vueuse/core'

import imgSlogan from "@/assets/img_slogan.png"
import imgMascot from "@/assets/img_mascot.png"
import imgLogo from '@/assets/logo.png'
import banner from '@/assets/banner/banner.jpg'
import bannerMobile from '@/assets/banner/banner_mobile.jpg'

import video1 from "@/assets/video/新聞處影視補助_布袋戲篇.mp4"
import video2 from "@/assets/video/新聞處影視補助_花生篇.mp4"
import video3 from "@/assets/video/新聞處影視補助_番薯篇.mp4"

import { posts, tags } from '@/data'
// import imgDecoLeft from '@/assets/img_index_bg_left.png';
// import imgDecoRight from '@/assets/img_index_bg_right.png';
const isMobile = useMediaQuery('(max-width: 576px)')

const lottieYouKnow = ref(null)
const lottieTopic = ref(null)
const lottieEvent = ref(null)

onMounted(() => {
  const [ILottieYK, ILottieTopic, ILottieEvent] = [
    ["/Lottie/web_AB_clound.json", lottieYouKnow.value],
    ["/Lottie/web_Blue_clound.json", lottieTopic.value],
    ["/Lottie/web_Pink_clound.json", lottieEvent.value]
  ].map(([path, container]) => Lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path
  }))
})

const TopicItems = posts.map(item => {
  const { slug, title, tag: _tag } = item
  const tag = tags.find(tag => tag.key === _tag)
  const image = item.content.find((block) => block.type === 'img')
  return {
    to: `/topic/${slug}`,
    tag: tag.name,
    color: tag.color,
    image: image && image.img,
    title
  }
})


</script>

<template>
  <div class="home ">
    <div class="home__banner">
      <div v-if="!isMobile" class="home__banner-img" v-bg="banner"></div>
      <div v-else class="home__banner-img-mobile" v-bg="bannerMobile"></div>
    </div>

    <div class="container">
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
            <Video :src="video1"></Video>
          </div>
          <div class="home__player-list-item" v-bg="'https://fakeimg.pl/270x480/'">
            <Video :src="video2"></Video>
          </div>
          <div class="home__player-list-item" v-bg="'https://fakeimg.pl/270x480/'">
            <Video :src="video3"></Video>
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
            <div class="home__topic-list-item-img" v-bg="item.image">

            </div>
            <div class="home__topic-list-item-tag" :style="{
              '--color': item.color,
            }">
              {{ item.tag }}
            </div>
            <h3 class="home__topic-list-item-title">
              {{ item.title }}
            </h3>
            <router-link :to="item.to"></router-link>
          </div>
        </div>
        <div class="home__topic-all">
          <router-link to="/topic">
            <ButtonMore class="home__topic-all-btn"></ButtonMore>
          </router-link>
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
  </div>
</template>


<style lang='scss'>
</style>