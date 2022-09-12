<template>
  <div>
    <v-combobox
    outlined
            :items="categories"
            :search-input.sync="search"
          color="white"
          hide-no-data
          hide-selected
          label="Public APIs"
          placeholder="Start typing to Search"
          prepend-inner-icon="mdi-database-search"
             item-value="name"
            :item-text="item => `${item.slug}` - `${item.name}`"
  >
 <template v-slot:item="{ item }">
  <NuxtLink :to="`/category/${item.slug}`" class="white--text">
                 {{ item.name }}
                </NuxtLink>


 </template>
</v-combobox>
  </div>
</template>

<script>
export default {
    name: "TagSearch",
    props: {
      categories: {
        type: Array,
      required: true
    }
 
  },
}
</script>

<style>

</style>