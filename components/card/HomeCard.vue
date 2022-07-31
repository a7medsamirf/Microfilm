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
          <nuxt-link :to="`/${article.slug}`">
            <v-card
              outlined
              elevation-0
              class="moving"
            >
              <div class="blog-img">
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
              </div>
              <h5>{{ article.title }}</h5>
              <div  class="quality default">{{article.quality}}</div>
            </v-card>
          </nuxt-link>
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
