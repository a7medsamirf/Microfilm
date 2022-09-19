<template>
    <div>
  
      <v-autocomplete
              hide-details
              hide-no-data
              hide-selected
              outlined
              :items="Producers"
              color="white"
              label="البلد"
              placeholder=" بحث فى الاقسام"
              prepend-inner-icon="fa-light fa-camera-movie"
              item-value="name"
              :item-text="item => `${item.slug}`"
    >
   <template v-slot:item="{ item }">
    <NuxtLink :to="`/Producer/${item.slug}`" class="white--text">
                   {{ item.name }}
                  </NuxtLink>
  
  
   </template>
  </v-autocomplete>
    </div>
  </template>
  
  <script>
  export default {
      name: "TagSearch",
      props: ['Producers']
    }
  
  </script>
  
  <style>
  
  </style>