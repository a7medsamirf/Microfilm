<template>
  <div class="Search-box">

   <v-container fluid>
     <v-card

       class="d-flex justify-center mb-6 title-Section rounded-lg"
       :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
       flat
       tile
     >
       <v-card
         class=""
         outlined
         tile
       >

       <TagSearch :tags="tags"/>
       <CategorySearch :categories="categories" />


       </v-card>
     </v-card>
   </v-container>


  </div>
</template>

<script>
import TagSearch from './TagSearch.vue';
import CategorySearch from './CategorySearch.vue';

export default {
    components: { TagSearch, CategorySearch }
}
</script>

<style>

</style>
