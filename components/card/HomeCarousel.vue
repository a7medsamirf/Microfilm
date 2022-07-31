<template>
<div class="HomeCarousel">
  <v-container fill-height fluid >
    <carousel-3d
      :perspective="20"
      :display="7"
      :autoplay="false"
      :height="500"
      :autoplay-timeout="5000"
      :controls-visible="true"
       :controls-width="10"
      :controls-height="50"
      
      :clickable="true"
    >
       <slide v-for="(article, i) in articles" :index="i"
              :key="article.slug"
              class="item">
        <nuxt-link :to="`/${article.slug}`">
        <v-card
              outlined
              elevation-0
            >
                 <div class="blog-img">
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
                </div>
              <h5>{{ article.title }}</h5>
              <span class="title">You know</span>
              <p>You know, being a test pilot isn't always the healthiest business in the world.</p>
              <div  class="quality default">{{article.quality}}</div>
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
