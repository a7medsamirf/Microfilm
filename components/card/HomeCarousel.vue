<template>
<div class="HomeCarousel">
  <v-container fill-height fluid >
    <carousel-3d
      :perspective="20"
      :display="7"
      :autoplay="false"
      :height="500"
      :autoplay-timeout="3000"
      :controls-visible="true"
       :controls-width="10"
      :controls-height="50"

      :clickable="true"
    >
      <slide v-for="(article, i) in articles" :index="i"
             :key="article.slug"
             class="item BlockItem">
        <nuxt-link :to="`/${article.slug}`">
          <v-card
            outlined
            elevation-0
          >
            <div class="blog-img BlockImageItem">

              <v-img
                :src="require(`~/static/images/poster/${article.img}`)"
                height="500"
                :alt="article.alt"
              >
                <template slot="placeholder">
                  <v-row
                    class="fill-height"
                    justify="center"
                    align="center"
                  >
                    <v-progress-circular
                      width="2"
                      size="100"
                      color="default"
                      indeterminate
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>

              <div class="StarsIMDB warning">
                <span>IMDB</span>
                <strong>8.3</strong>
              </div>
              <a href="" class="fa-light fa-circle-play play-btn"></a>
              <ul class="RestInformation">
                <li>
                  <span>اثارة</span>
                  <span>جريمة</span>
                  <span>غموض</span>
                </li>
                <li>

                  1080p WEB DL
                </li>
              </ul>

              <ul class="InfoEndBlock">
                <li>
                  <span>الإشراف العائلي : </span>
                  PG-13
                </li>
                <li>
                  <span>سنة الإنتاج : </span>
                  2022
                </li>
              </ul>
              <h5 class="BlockTitle">{{ article.title }}</h5>
              <div  class="quality default">{{article.quality}}</div>

            </div>

          </v-card>
        </nuxt-link>

      </slide>
  </carousel-3d>
  </v-container>
</div>
</template>

<script>
export default {
    props: {
    articles: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss">
.carousel-3d-slide.item {
  background: transparent;
}

.HomeCarousel
{
  height: 100vh;
}
.v-image:after,
.v-image:before {
  content: "";
  position: absolute;
  display: block;
  width: inherit;
  height: 50%;
  bottom: -52%;
}
.v-image:after {
  background: inherit;
  transform: scaleY(-1);
}
.v-image:before {
  z-index: 1;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), #fff);
}
</style>
