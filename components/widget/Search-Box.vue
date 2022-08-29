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

             <v-select
               label="Outlined style"
               outlined
               v-for="tag of tags"
               :key="tag.slug"
             >

                 <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">
                   <span class="ml-3">#</span>{{ tag.name }}
                 </NuxtLink>


             </v-select>



<AppSearchInput />




       </v-card>
     </v-card>
   </v-container>


  </div>
</template>

<script>
import AppSearchInput from './AppSearchInput.vue';
export default {
    components: { AppSearchInput },
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style>

</style>
