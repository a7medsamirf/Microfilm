<template>
  <div class="HomeCard">
    <v-container fluid>
      <v-row>
        <v-col  v-for="article in articles"
                :key="article.slug"
                sm="6"
                md="4"
                lg="2"
                class="pa-1 "
        >
          <div class="BlockItem">
            <nuxt-link :to="`/${article.slug}`">
              <v-card
                outlined
                elevation-0
              >
                <div class="blog-img BlockImageItem">

                  <v-img
                    :src="require(`~/static/images/poster/${article.img}`)"
                    height="350"
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

          </div>



        </v-col>
      </v-row>
    </v-container>


  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
    articles: {
      type: Array,
      required: true
    },
  },
}
</script>

<style scoped>

</style>
