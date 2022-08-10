<script setup>
import LogoUrl from '@/assets/logo.png'

</script>

<template>
  <header class="header">
    <div class="header__wrap">
      <div class="header__item">
        <img :src="LogoUrl" alt="">
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
  &__wrap {
    display: flex;
  }
  &__item {
    border: 1px solid;
    &.-links {
      display: flex;
      flex: 1 0 auto;
      align-self: start;
      justify-content: end;
    }
    &-link {
      padding: 10px 20px;
    }
  }
}
</style>