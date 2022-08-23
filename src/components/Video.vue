<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { vBackgroundImage as vBg } from '@/plugin/directives'
import iconPlay from "@/assets/btn_arrow_right.png"
const videoRef = ref(null)
const checkInterval = ref(null)
const paused = ref(true)
defineProps({
  src: {
    type: String,
    default: ''
  }
})
const toggle = (e) => {
  e.preventDefault();
  if (paused.value) {
    videoRef.value.play()
  } else {
    videoRef.value.pause()
  }
}
onMounted(() => {
  // checkInterval.value = setInterval(() => {
  //   paused.value = videoRef.value.paused
  // }, 500)
})
onMounted(() => {
  // clearInterval(checkInterval.value)
})
defineExpose({ videoRef, paused })
</script>

 <template>
  <div class="video-player">
    <video class="video" width="270" height="480" ref="videoRef" @play="paused = false" @pause="paused = true"
      @click="toggle" :controls="!paused">
      <source :src="src" type="video/mp4">
    </video>
    <transition name="fade">
      <div v-if="paused" class="video-player__layer">
        <div class="video-player__layer-icon" v-bg="iconPlay"></div>
      </div>
    </transition>
  </div>
</template>
    
<style lang="scss">
.video-player {
  position: relative;
  cursor: pointer;

  .video {
    @include link;
  }

  &__layer {
    @include link;
    pointer-events: none;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00000033;

    &-icon {
      @include size(50px);
    }
  }

  &::after {
    display: block;
    content: '';
    padding-bottom: 177.777778%;
  }
}
</style>