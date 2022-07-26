<template>
  <div>
    <h1>Test Page</h1>
    <v-row>

      <v-col  v-for="article in articles"
              :key="article.slug"
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
          <NuxtLink  :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div class="blog-img">
              <v-img
                v-if="article.img"
                :src="require(`~/static/images/poster/${article.img}`)"
                :alt="article.alt"
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
              <div  class="quality default">
                {{ article.quality }}
              </div>
            </div>


          </NuxtLink>


          <div class="product-links">
            <a><i class="fa-brands fa-facebook-f"></i></a>
            <a><i class="fa-brands fa-youtube"></i></a>
            <a><i class="fa-brands fa-twitter"></i></a>
            <a><i class="fa-brands fa-instagram"></i></a>
            <a><i class="fa-solid fa-square-rss"></i></a>
          </div>


          <!--                  <div class="post-content pa-5">
                              <v-card-text class="py-1 pa-0">
                               <span class="blog-Date"> <v-icon small  color="primary">mdi-clock-outline</v-icon> {{ formatDate(article.updatedAt) }}</span>
                                <span class="blog-user"> <v-icon small  color="primary">mdi-account</v-icon> {{ article.author.name }}</span>
                           </v-card-text>
                           <NuxtLink  :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                                <v-card-title class="py-2 pa-0 font-weight-bold">{{ article.title }}</v-card-title>
                              </NuxtLink>
                            <v-card-text class="py-1 pa-0 "><p>{{ article.description }}</p></v-card-text>

                          <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">
                                <v-btn :to="{ name: 'blog-slug', params: { slug: article.slug } }"  large color="primary"
                                       class="button figs-btn pa-5 white&#45;&#45;text">
                                  Read More
                                  <v-icon right small>mdi-arrow-right-thick</v-icon>
                                </v-btn>

                              </v-card-actions>
                            </div>-->
        </v-card>

      </v-col>


    </v-row>
  </div>

</template>


<script>
export default {
  name: "Blog-Card",
  async asyncData({ $content, params }) {
    const tenArticles = await $content('articles')
      /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /*.where({ tags: { $containsAny: ['action'] } })  */// استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      .sortBy('createdAt', 'desc')
      .limit(10)
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .fetch()
    const nextPage = tenArticles.length === 10
    const articles = nextPage ? tenArticles.slice(0, -1) : tenArticles

    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .fetch()
    return {
      articles,
      tags,
      page: 1,
      nextPage,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>



<style lang="scss">

</style>
