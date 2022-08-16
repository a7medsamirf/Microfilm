<template>
<div class="HomeCarousel">

    <carousel-3d
      :display="8"
      :autoplay="true"
      :height="500"
      :autoplay-timeout="5000"
      :disable3d="true"
       :space="365"

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
                <strong>{{ article.imdb }}</strong>
              </div>
              <a href="" class="fa-solid fa-play play-btn white--text"></a>
              <ul class="RestInformation">


                <li>

                  1080p WEB DL
                </li>
              </ul>

              <h5 class="BlockTitle">{{ article.title }}</h5>
              <div  class="quality default">{{article.quality}}</div>

            </div>

          </v-card>
        </nuxt-link>

      </slide>
  </carousel-3d>

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
.carousel-3d-slide.item.BlockItem.current
{

}
.carousel-3d-slide.item {
  background: transparent;
}

.HomeCarousel
{
  padding-top: 65px;
}

</style>
