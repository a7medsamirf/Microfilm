<template>
<div>
    <TestiCard />


  <v-container fluid>
    <v-row>
      <v-col
        v-for="n in 4"
        :key="n"
        class="d-flex child-flex "
        cols="12"
        lg="3"
        md="6"
        sm="12"
      >
        <v-card
          class="my-12 moving"
          v-if="!data_loaded"
        >
          <v-img
            height="300"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>
            <div class="my-4">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="default"
              depressed
            >
              الرئيسية
            </v-btn>
          </v-card-actions>

        </v-card>
        <v-skeleton-loader
          v-if="data_loaded"
          type=" card-avatar, article, actions"
        >
        </v-skeleton-loader>
      </v-col>

    </v-row>



  </v-container>


</div>
</template>

<script>
import TestiCard from '~/components/TestiCard.vue';
export default {
    name: "IndexPage",
    components: { TestiCard },
  data(){
    return {
      data_loaded : true
    };
  },
  mounted(){
    setTimeout(()=>{
      this.data_loaded= false;
    } , 2000);
  },
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
