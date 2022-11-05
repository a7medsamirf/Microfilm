<template>
<div>
  <div class="tag breadcrumb">
      <div class="breadcrumb-bg">
        <v-img class="breadcrumb-img ml-auto" max-height="320px" max-width="100%" alt=""
          :src="require(`~/static/images/banner/55.jpg`)"></v-img>
      </div>
      <div class="">
          <h1 class=" font-bold uppercase">
          بحث الأقسام :       {{ tag.name }}

          </h1>

          <nuxt-content :document="tag" />
        </div>
    </div>




      <v-container fluid>
        <div class="">
          <HomeCard :articles="articles"/>

        </div>
      </v-container>



</div>


</template>

<script>
import HomeCard from '~/components/card/HomeCard.vue'
export default {
    async asyncData({ $content, params }) {
        const tags = await $content("tags")
            .where({ slug: { $contains: params.tag } })
            .limit(1)
            .fetch();
        const tag = tags.length > 0 ? tags[0] : {};
        const articles = await $content("articles")
            .where({ tags: { $contains: tag.name } })
            .sortBy("createdAt", "asc")
            .fetch();
        return {
            articles,
            tag
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        }
    },
    components: { HomeCard }
}
</script>
