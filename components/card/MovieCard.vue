<template>

      <v-card
              class="moving"
              outlined
              elevation-0
            >
              <NuxtLink  :to="{ name: 'blog-slug', params: { slug: movies.slug } }">
                <div class="blog-img">
                  <v-img
                    v-if="movies.img"
                    :src="require(`~/static/images/poster/${movies.img}`)"
                    :alt="movies.alt"
                    height="350"
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


              </NuxtLink>
              <div  class="quality default">
                {{ movies.quality }}
              </div>
              
              <nuxt-link to="">
                {{ movies.tags }}
              </nuxt-link>

            </v-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    quality: {
      type: String,
      required: true
    },
   tags: {
      type: String,
      required: true
    },

  }
}
</script>

<style>

</style>