<template>
<div>

<home-carousel :articles="articles" />
<category-search />
  <v-container>
    <v-row>
      <v-col lg="4">
        <v-autocomplete
          :items="tags"
          label="Select"
          item-value="name"
        >
          <template v-slot:item="{ item }">

            <v-list-item link :to="'/tag/' + tag.slug>{{item.name}}</v-list-item>

            <v-list-item  v-for="tag in tags" :key="tag.slug">
              <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">
                <span class="ml-3">#</span>{{ item.name }}
              </NuxtLink>


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
import AdvancedSearch from "~/components/widget/advanced-search";
import CategorySearch from "~/components/widget/CategorySearch";
export default {
    name: "IndexPage",
    components: {CategorySearch, AdvancedSearch, HomeCard, HomeCarousel, Movies, Series, SearchBox, TitleSection },
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
