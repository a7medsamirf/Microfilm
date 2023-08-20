<template>
<div>

<home-carousel :articles="articles" />

<div class="Search-box">

<v-container fluid>

  <v-card
      class=" mb-6 rounded-lg"
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
        <v-col cols="12" lg="3" md="3" sm="3" xs="6" col="5">
        <AppSearchInput />
    </v-col>
      <v-col cols="12" lg="3" md="3" sm="3" xs="6" col="5">
          <TagSearch :tags="tags"/>
      </v-col>

    <v-col cols="12" lg="3" md="3" sm="3" xs="6" col="5">
      <CategorySearch :categories="categories" />
    </v-col>
    <v-col cols="12" lg="3" md="3" sm="3" xs="6" col="5">
      <ProducersSearch  :Producers="Producers"/>
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


    <Tags :tags="tags" />

</div>
</template>

<script>
import fetchPostsMixin from '@/utils/fetchPostsMixin';
import HomeCarousel from "~/components/card/HomeCarousel";
import HomeCard from "~/components/card/HomeCard";
import Movies from '~/components/sections/Movies';
import Series from '~/components/sections/Series';
import SearchBox from '~/components/widget/Search-Box';
import TitleSection from '~/components/widget/Title-Section';
import AdvancedSearch from "~/components/widget/advanced-search";
import TagSearch from '~/components/widget/TagSearch';
import CategorySearch from '~/components/widget/CategorySearch';
import AppSearchInput from '~/components/widget/AppSearchInput';
import ProducersSearch from '~/components/widget/ProducersSearch';
import Tags from '~/components/sections/tags.vue';
export default {
    name: "IndexPage",
    components: { AdvancedSearch, HomeCard, HomeCarousel, Movies, Series, SearchBox, TitleSection, TagSearch, CategorySearch, AppSearchInput, ProducersSearch,Tags },
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
