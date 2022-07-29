<template>
<div>
    <TestiCard />


  <v-container fluid>

    <app-search-input />
<client-only>
  <homecard  :movies="movies"/>
</client-only>
              




  </v-container>


</div>
</template>

<script>
import fetchPostsMixin from '@/utils/fetchPostsMixin';
import Homecard from '~/components/card/homecard.vue';
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
export default {
    name: "IndexPage",
    components: { AppSearchInput, Homecard },
    mixins: [fetchPostsMixin]
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
