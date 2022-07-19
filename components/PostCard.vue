<template>
  <v-fade-transition>
    <v-card
      class="mx-auto my-12"
      max-width="374"

    >
      <v-img
        v-if="!data_loaded"
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <template >
        <v-row
          class="fill-height"
          justify="center"
          align="center"
        >
          <v-progress-circular
            width="2"
            size="100"
            color="red"
            indeterminate
            v-if="data_loaded"
          ></v-progress-circular>
        </v-row>
      </template>

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

        <div class="my-4 text-subtitle-1">
          $ • Italian, Cafe
        </div>

        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-fade-transition>


</template>

<script>
  export default {
    name: "PostCard",
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

<style scoped>

</style>
