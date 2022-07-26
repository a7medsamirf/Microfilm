<template>
  <div class="blog-wrap">

    <testi-card />


    <div class="inner">
      <v-container fluid>
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

                </div>


              </NuxtLink>
              <div  class="quality default">
                {{ article.quality }}
              </div>
              
              <nuxt-link to="">
                {{ article.tags }}
              </nuxt-link>

            </v-card>

          </v-col>


        </v-row>

        <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>
        <ul class="flex flex-wrap mb-4 text-center">
          <li
            v-for="tag of tags"
            :key="tag.slug"
            class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
          >
            <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
              <p
                class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
              >
                {{ tag.name }}
              </p>
            </NuxtLink>
          </li>
        </ul>

        <pagination :nextPage="nextPage" :pageNo="1" urlPrefix="/blog"  />

      </v-container>
    </div>

  </div>
</template>



<script>
import Pagination from '~/components/blog/Pagination.vue';
import TestiCard from '~/components/TestiCard.vue';
export default {
  name: "index.vue",
  components: {Pagination,TestiCard},
  async asyncData({ $content, params }) {
    const tenArticles = await $content('articles')
      .only(['title', 'tags', 'img', 'slug', 'quality'])
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
      PageTitle: 'Our Blog',
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
  head() {
    return {
      title: this.PageTitle,
    }
  }
}
</script>

<style lang="scss">
.v-card {
  overflow: hidden;
  .blog-description {
    margin-top: 0;
    margin-bottom: 0;
    color: #636465;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}


.blog-link {
  text-decoration: none;
  color: #41641e;
}
.blog-img
{
  overflow: hidden;
  cursor: pointer;
}
.v-card .blog-img .v-image
{
  transition: .3s ease-in-out;
}

.theme--light.v-application {
  .blog-wrap{
    background: #faf7f2;
    color: rgba(0, 0, 0, 0.87);
  }
  .v-card {
    overflow: hidden;
  }
}

.v-card:hover .product-links {
  bottom: 10px;
}

.quality {
  position: absolute;
  width: 14.42vw;
  top: 1.6vw;
  left: -4.5vw;
  z-index: 10;
  line-height: 2vw;
  text-align: center;
  color: #fff;
  background:$palette-primary-main;
  -webkit-transform: rotate(-40deg);
  -ms-transform: rotate(-40deg);
  transform: rotate(-40deg);
}
.moving:hover{
  background: #000;
}

</style>

