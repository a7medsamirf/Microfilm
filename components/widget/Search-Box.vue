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
         v-for="n in 2"
         :key="n"
         class=""
         outlined
         tile
       >



<AppSearchInput />




       </v-card>
     </v-card>
   </v-container>


  </div>
</template>

<script>
import AppSearchInput from './AppSearchInput.vue';
export default {
    components: { AppSearchInput }
}
</script>

<style>

</style>
