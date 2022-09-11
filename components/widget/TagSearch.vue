<template>
  <div>
    <v-autocomplete
            solo-inverted
            flat
            clearable
            color="primary"
            :items="tags"
            label="Select"
             item-value="name"
            :item-text="item => `${item.slug}` - `${item.name}`"
  >
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
    props: {
    tags: {
        type: Array,
      required: true
    }
 
  },
}
</script>

<style>

</style>