<template>
<div>

<home-carousel :articles="articles" />
<v-container>
  <v-row>

  <v-col lg="4">
          <v-autocomplete
        v-model="model"
        :items="tags"
        :loading="isLoading"
        :search-input.sync="search"
        clearable
        hide-details
        hide-selected
        item-text="name"
        item-value="symbol"
        placeholder="Search"
        flat
        solo
        dense
      >
      <template v-slot:item="{ item }">
    <v-list-item >
      <v-chip
        v-for="tag in tags"
      :key="tag.slug"
      class="ma-2 default">
    <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">
           <span class="ml-3">#</span>{{ item.name }}
      </NuxtLink>
    </v-chip>
    
    </v-list-item>
  </template>
      </v-autocomplete>
  </v-col>


</v-row>
</v-container>



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
export default {
    name: "IndexPage",
    components: { HomeCard, HomeCarousel, Movies, Series, SearchBox, TitleSection },
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
