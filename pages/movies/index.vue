<template>
<div>
<home-carousel :articles="articles" />

  <title-section :link="link" :head="head"/>

  <home-card :articles="articles" />


    <Tags :tags="tags" />


  <v-container>
    <v-row>
      <v-col cols="12" md="3">

      </v-col>
    </v-row>
  </v-container>



</div>
</template>

<script>
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
import HomeCarousel from "~/components/card/HomeCarousel";
import HomeCard from "~/components/card/HomeCard";
import TitleSection from "~/components/widget/Title-Section";
import Tags from '~/components/sections/tags.vue';
export default {
    name: "IndexPage",
    components: { TitleSection, HomeCard, HomeCarousel, AppSearchInput, Tags },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
       .where({ sections: { $containsAny: ['Movies'] } }) 
      .sortBy('createdAt', 'desc')
      .fetch()

 const tags = await $content('tags')
    .only(['name','slug'])
    .sortBy('createdAt', 'asc')
    .fetch()

   return {
      articles,
     tags
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ar', options)
    }
  },
  data () {
    return {
      head: 'أفلام',
      link: '/movies',
    }
  }
}
</script>

<style>
</style>
