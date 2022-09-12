<template>
  <div>


    <v-combobox
    outlined
            color="primary"
            :items="tags"
            label="التصنيف"
             item-value="name"
            :item-text="item => `${item.slug}` "
  >
 <template v-slot:item="{ item }">
  <NuxtLink :to="`/tag/${item.slug}`" class="white--text">
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
      tags: {
        type: Array,
        required: true
      },

    },


}
</script>

<style>

</style>