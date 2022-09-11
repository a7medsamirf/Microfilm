<template>
<div>

<home-carousel :articles="articles" />


<TagSearch :tags="tags" />
<CategorySearch :categories="categories" />

<search-box />

<title-section :link="link" :head="head" />


  <home-card :articles="articles" />





    <movies :Movies="Movies"/>

    <series :Series="Series"/>



  <v-container>
    <v-row>
      <v-col cols="12" md="3">

      </v-col>
    </v-row>
  </v-container>





  <div class="text-center">
    <v-chip
        v-for="tag of tags"
      :key="tag.slug"
      class="ma-2 default">
    <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">
           <span class="ml-3">#</span>{{ tag.name }}
      </NuxtLink>
    </v-chip>
  </div>
  <div class="text-center">
    <v-chip
        v-for="category of categories"
      :key="category.slug"
      class="ma-2 default">
    <NuxtLink :to="`/category/${category.slug}`" class="white--text">
           <span class="ml-3">#</span>{{ category.name }}
      </NuxtLink>
    </v-chip>
  </div>

</div>
</template>

<script>
import fetchPostsMixin from '@/utils/fetchPostsMixin';
import HomeCarousel from "~/components/card/HomeCarousel";
import HomeCard from "~/components/card/HomeCard";
import Movies from '~/components/sections/Movies.vue';
import Series from '~/components/sections/Series';
import SearchBox from '~/components/widget/Search-Box';
import TitleSection from '~/components/widget/Title-Section.vue';
import AdvancedSearch from "~/components/widget/advanced-search";
import TagSearch from '~/components/widget/TagSearch.vue';
import CategorySearch from '~/components/widget/CategorySearch.vue';
export default {
    name: "IndexPage",
    components: { AdvancedSearch, HomeCard, HomeCarousel, Movies, Series, SearchBox, TitleSection, TagSearch, CategorySearch },
    mixins: [fetchPostsMixin],
  data () {
    return {
      head: ' جديد ميكروفيلم',
      link: '/movies',
    }
  }
}
</script>

<style>
</style>
