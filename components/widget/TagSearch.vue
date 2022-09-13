<template>
  <div>

    <v-autocomplete
          hide-details
          hide-no-data
          hide-selected
          outlined
          :items="tags"
          color="white"
          label="التصنيف"
            placeholder=" بحث فى التصنيفات"
            prepend-inner-icon="fa-light fa-camera-movie"
          item-value="name"
          :item-text="item => `${item.slug}` ">
  <template v-slot:item="{ item }">
  <NuxtLink :to="`/tag/${item.slug}`" class="white--text">
                 {{ item.name }}
        </NuxtLink>
 </template>
</v-autocomplete>


  </div>
</template>

<script>
export default {
    name: "TagSearch",
    props: ['tags']

 /*    props: {
      tags: {
        type: Array,
        required: true
      },
      item: {
        type: Array,
        required: true
      }
    }, */


}
</script>

<style>

</style>