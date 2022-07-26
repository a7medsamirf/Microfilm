<template>
<div>
    <TestiCard />


  <v-container fluid>

    <app-search-input />
      <v-row>
          <v-col cols="12" lg="2" md="6" v-for="article of articles" :key="article.slug">

                <homecard 
                    :title="article.title"
                    :img="article.img"
                    :quality="article.quality"
                    :tags="article.tags"
                    
                    />
          </v-col>
 </v-row>



  </v-container>


</div>
</template>

<script>
import Homecard from '~/components/card/homecard.vue';
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
export default {
    name: "IndexPage",
    components: { AppSearchInput, Homecard },
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

     return {
        articles
      }
    }


}
</script>

<style>
.v-card.moving .v-image{
  background-size: cover;
  border-radius: 20px !important;

}
.v-card.moving
{
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 30%);
  border-radius: 20px !important;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.v-card.moving:hover{
  box-shadow: 0 0 0 0 rgb(0 0 0 / 30%);
  transform: translateY(5px);
}
.v-card.moving .v-image__image--cover{
  transition: all 0.5s ease-in-out;
}
.v-card.moving:hover .v-image__image--cover {
  transform: scale(1.15);
}
</style>
