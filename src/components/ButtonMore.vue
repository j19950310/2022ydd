<script setup>
import BgImage from '@/assets/btn_more.png'
import {vBackgroundImage as vBg} from '@/plugin/directives'
</script>
<template>
<div class="button-more" v-bg='BgImage' >

</div>  
</template>



<style lang='scss'>
.button-more {
  cursor: pointer;
  display: block;
  &::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  };
}
</style>