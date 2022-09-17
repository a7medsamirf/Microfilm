<template>
<div>

<home-carousel :articles="articles" />


<div class="Search-box">

<v-container fluid>
  
  <v-card
      class="d-flex justify-center mb-6 rounded-lg"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        class="pa-2"
        outlined
        tile
      >
      <v-row>
      <v-col cols="12" lg="4" md="4" sm="4" xs="6" col="5">
          <TagSearch :tags="tags"/>
      </v-col>
 
    <v-col cols="12" lg="4" md="4" sm="4" xs="6" col="5">
      <CategorySearch :categories="categories" />
    </v-col>
    <v-col cols="12" lg="4" md="4" sm="4" xs="6" col="5">
        <AppSearchInput />
    </v-col>
  </v-row>
      </v-card>
    </v-card>
</v-container>


</div>

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



<Tags :tags="tags"/>


<Categories :categories="categories"/>


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
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
import Tags from '~/components/sections/tags.vue';
import Categories from '~/components/sections/categories.vue';
export default {
    name: "IndexPage",
    components: { AdvancedSearch, HomeCard, HomeCarousel, Movies, Series, SearchBox, TitleSection, TagSearch, CategorySearch, AppSearchInput, Tags, Categories },
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
