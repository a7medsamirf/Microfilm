<template>
  <div class="my-5">
    <title-section  :link="link" :head="head" />

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
                    <strong>{{Serie.imdb.rating}}</strong>
                  </div>

                  <div class="categories success">
                    <span>{{ Serie.categories }}</span>
                  </div>
                  <a href="" class="fa-solid fa-play play-btn white--text"></a>
                  <ul class="RestInformation">
                    <li>
                      <span v-for="tag in Serie.tags" :key="tag">
                        <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">
                        {{ tag }}
                      </NuxtLink>
                      </span>

                    </li>
                    <li>{{ Serie.quality }}</li>
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
import TitleSection from "~/components/widget/Title-Section";
export default {
  name: "Series",
  components: {TitleSection},
  props: {
    Series: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      head: ' جديد المسلسلات',
      link: '/Series',
    }
  },
}
</script>

<style>

</style>
