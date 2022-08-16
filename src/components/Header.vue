<script setup>
import LogoUrl from '@/assets/logo.png'

</script>

<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__item">
        <img :src="LogoUrl" alt="" class="header__logo">
      </div>
      <div class="header__item -links">
        <router-link class="header__item-link" to="/">首頁</router-link>
        <router-link class="header__item-link" to="/topic">主題文章</router-link>
        <router-link class="header__item-link" to="/about">關於我們</router-link>
      </div>
    </div>
  </header>
</template>


<style lang="scss">
.header {
  padding: 24px 32px;
  position: relative;
  overflow: hidden;
  &::before,&::after {
    content: '';
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
    background-image: url('@/assets/img_menu_left.png');
    transform: translate(-50%, 0);
  };
  &::after {
    right: 0;
    bottom: 0;
    width: 86px;
    height: 174px;
    background-image: url('@/assets/img_menu_right.png');
    transform: translate(0%, 111px);
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
}
</style>