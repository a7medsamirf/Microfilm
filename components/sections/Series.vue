<template>
  <div class="my-5">
      <div dense class="title-Section">
        <v-toolbar-title class="right-Title-Section">
                  <i class="fas fa-camera-movie default title-icon">  </i>
                    <span>جديد المسلسلات </span>
            </v-toolbar-title>
        <v-spacer></v-spacer>
     <div class="left-Title-Section">
      <a href="" class="MoreFromSection HoverAfter"><span>المزيد</span><div class="title-loader"></div></a>
    </div>
      </div>
    <v-container fluid>
      <v-row>
        <v-col  v-for="Serie in Series"
                :key="Serie.slug"
                cols="12"
                lg="2"
                md="3"
                sm="3"
                col="5"
               
                class="pa-1 "
        >
          <div class="BlockItem">
            <nuxt-link :to="`/${Serie.slug}`">
              <v-card
                outlined
                elevation-0
              >
                <div class="blog-img BlockImageItem">

                  <v-img
                    :src="require(`~/static/images/poster/${Serie.img}`)"
                    height="350"
                    :alt="Serie.alt"
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
                    <strong>{{ Serie.imdb }}</strong>
                  </div>
                  <a href="" class="fa-solid fa-play play-btn white--text"></a>
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

                  <h5 class="BlockTitle">{{ Serie.title }}</h5>
                  <div  class="quality default">{{Serie.quality}}</div>

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
  name: "Series",
  props: {
    Series: {
      type: Array,
      required: true
    },
  },
}
</script>

<style>

</style>