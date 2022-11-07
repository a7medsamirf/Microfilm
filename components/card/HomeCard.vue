<template>
  <div class="HomeCard">
    <v-container fluid>
      <v-row>
        <v-col  v-for="article in articles"
                :key="article.slug"
                cols="12"
                lg="2"
                md="3"
                sm="3"
                xs="6"
                col="5"

                class="pa-1 "
        >
          <div class="BlockItem">
            <nuxt-link :to="`/${article.slug}`">
              <v-card
                outlined
                elevation-0
                class="rounded-lg"
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
                    <strong>{{article.imdb.rating}}</strong>
                  </div>
                  <div class="categories success">
                    <span>{{ article.categories }}</span>
                  </div>
                  <a href="" class="fa-solid fa-play play-btn white--text"></a>
                  <ul class="RestInformation">
                    <li v-for="tag in article.tags" :key="tag">
                      <span >
                        <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">
                        {{ tag }}
                      </NuxtLink>
                      </span>

                    </li>
                    <li>{{ article.quality }}</li>
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
  props: ['articles']

}
</script>

<style scoped>

</style>
