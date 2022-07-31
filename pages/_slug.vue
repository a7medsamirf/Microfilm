<template>
  <article class="slug-wrap">
    <div class="breadcrumb">
        <v-img class="breadcrumb-img ml-auto"
          max-height="400px"
          max-width="100%"
          alt=""
          :src="require(`~/static/images/poster/${article.img}`)"
        ></v-img>
    </div>


    <div class="inner-content ">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="blog-img">
            <v-img
              height="500"
              width="350"
              alt="article.img"
              :src="require(`~/static/images/poster/${article.img}`)"
            ></v-img>
          </div>

        </v-col>
        <v-col cols="12" md="8">
        <div class="post-content pa-3">

          <p class="">
            {{ formatDate(article.updatedAt) }}
          </p>
          <h3>قصة الفيلم</h3>
          <p class="">
            {{ article.description }}
          </p>
        </div>
        </v-col>
        <v-col cols="12" md="12">
          <!-- content from markdown -->
          <nuxt-content :document="article" />
        </v-col>


      </v-row>

    </v-container>
    </div>
  </article>
</template>

<script>
import BlogComment from "~/components/blog/blog-comment";
import PrevNext from "~/components/blog/PrevNext";
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
export default {
  components: {PrevNext, BlogComment, AppSearchInput},
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
   return {
      article,
      tags,
      prev,
      next
    }
  },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: this.article.title,
      link: [
        {
          href: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
        },
      ],
    };
  },
}
</script>

<style lang="scss">
.theme--light.v-application .slug-wrap
{
  background: #faf7f2;
  .post-content {
    background-color: #fff;
  }
}
.inner-content
{
  position: relative;
  margin-top: -200px;
}
</style>
