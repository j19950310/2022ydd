<script setup>
import LogoUrl from "@/assets/logo.png";
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const isMobile = useMediaQuery('(max-width: 576px)')
const router = useRouter()
const overlap = ref(false)
router.afterEach(() => {
  overlap.value = false
})
</script>

<template>
  <header class="header">
    <div class="header__wrap" v-if="!isMobile">
      <div class="header__item">
        <img :src="LogoUrl" alt="" class="header__logo" />
      </div>
      <div class="header__item -links">
        <router-link class="header__item-link" to="/">首頁</router-link>
        <router-link class="header__item-link" to="/topic">主題文章</router-link>
        <router-link class="header__item-link" to="/about">關於我們</router-link>
      </div>
    </div>
    <div v-else class="header__mobile">
      <div class="header__mobile-logo">
        <img :src="LogoUrl" alt="" class="header__logo" />
      </div>
      <div class="header__mobile-menu" @click="overlap = true">
        <div class="header__mobile-menu-pad"></div>
      </div>
      <transition name="fade">
        <div v-if="overlap && isMobile" class="header__mobile-overlap">
          <router-link class="header__item-link" to="/">首頁</router-link>
          <router-link class="header__item-link" to="/topic">主題文章</router-link>
          <router-link class="header__item-link" to="/about">關於我們</router-link>
          <div class="header__mobile-overlap-close" @click="overlap = false">
            <div class="header__mobile-overlap-close-pad"></div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  padding: 24px 32px;
  position: fixed;
  background-color: #68c8ff;
  z-index: map-get($z-index, header);
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  @include media-breakpoint-down('sm') {
    height: $header-height-mobile;
    padding: 0;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &::before {
    top: 0;
    left: 50%;
    width: 151px;
    height: 67px;
    background-image: url("@/assets/img_menu_left.png");
    transform: translate(-50%, 0);

    @include media-breakpoint-down('sm') {
      left: 70px;
      top: 0px;
      width: 100px;
      height: 44px;
    }
  }

  &::after {
    right: 0;
    bottom: 0;
    width: 86px;
    height: 174px;
    background-image: url("@/assets/img_menu_right.png");
    transform: translate(0%, 111px);

    @include media-breakpoint-down('sm') {
      display: none;
    }
  }

  &__logo {
    width: 268px;
    height: 60px;
  }

  &__wrap {
    display: flex;
  }

  &__item {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;

    &.-links {
      display: flex;
      flex: 1 0 auto;
      align-self: start;
      justify-content: end;
    }

    &-link {
      padding: 10px 22px;
    }
  }

  &__mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;

    &-logo {
      width: 200px;
      height: 44px;

      img {
        width: 100%;
        height: auto;
      }
    }

    &-menu {
      position: absolute;
      width: 40px;
      height: 4px;
      background-color: #fff;
      right: 12px;

      &-pad {
        @include size(40px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &::before,
      &::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        @include size(100%);
        background-color: #fff;
      }

      &::before {
        bottom: 12px;
      }

      &::after {
        top: 12px;
      }
    }

    &-overlap {
      background-color: #68c8ff;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: map-get($z-index, header-overlap);

      &-close {
        position: absolute;
        width: 40px;
        height: 4px;
        right: 12px;
        top: 30px;

        &-pad {
          @include size(40px);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        &::before,
        &::after {
          display: block;
          content: '';
          position: absolute;
          left: 0;
          @include size(100%);
          background-color: #fff;
        }

        &::before {
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>
