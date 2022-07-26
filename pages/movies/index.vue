<template>

    <div class="inner">
      <v-container fluid>
        <v-row>

          <v-col  v-for="Movie in movies"
                  :key="Movie.slug"
                  sm="6"
                  md="4"
                  lg="2"
                  class="pa-1"
          >


<v-card
              class="moving"
              outlined
              elevation-0
            >
              <NuxtLink  :to="{ name: 'movies-slug', params: { slug: Movie.slug } }">
                <div class="blog-img">
                  <v-img
                    v-if="Movie.img"
                    :src="require(`~/static/images/poster/${Movie.img}`)"
                    :alt="Movie.alt"
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
                {{ Movie.quality }}
              </div>
              
   <div v-for="(tag, idx) of Movie.tags" :key="idx">
            <!-- The Tag component -->
            <UITag :tag="tag"></UITag>
          </div>
              
       

            </v-card>

          </v-col>


        </v-row>




      </v-container>
    </div>

</template>

<script>

export default {
  async asyncData({ $content, params }) {
    const movies = await $content('movies')
      /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      .sortBy('createdAt', 'desc')
      .limit(10)
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .fetch()
   const tags = await $content('tags')
      .only(['name','slug'])
      .fetch()
    return {
      movies,
      tags
    }
  },

}
</script>

<style>

</style>