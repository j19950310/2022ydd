<script setup>
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
        <div class="home__title-wrap-image">
          IMG
        </div>
        <div class="home__title-wrap-text">
          哎！你知道嗎?
        </div>
      </div>
      <div class="home__player-list">
        <div class="home__player-list-item">

        </div>
        <div class="home__player-list-item">

        </div>
        <div class="home__player-list-item">

        </div>
      </div>
    </div>

    <!-- Topic -->
    <div class="home__topic home__section">
      <div class="home__title-wrap">
        <div class="home__title-wrap-image">
          IMG
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
        padding: 0 10px;
        border: 1px solid;
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
        border: 1px solid;
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
        border: 1px solid;
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
  }
}
</style>