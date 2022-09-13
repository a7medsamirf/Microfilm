<template>
  <div>

    <v-autocomplete
            hide-details
            hide-no-data
            hide-selected
            outlined
            :items="categories"
            color="white"
            label="الاقسام"
            placeholder=" بحث فى الاقسام"
            prepend-inner-icon="fa-light fa-camera-movie"
            item-value="name"
            :item-text="item => `${item.slug}`"
  >
 <template v-slot:item="{ item }">
  <NuxtLink :to="`/category/${item.slug}`" class="white--text">
                 {{ item.name }}
                </NuxtLink>


 </template>
</v-autocomplete>
  </div>
</template>

<script>
export default {
    name: "TagSearch",
    props: ['categories']
  }

</script>

<style>

</style>