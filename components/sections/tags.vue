<template>
    <section class="tags">

  <div class="text-center">
    <v-chip
        v-for="tag of tags"
      :key="tag.slug"
      class="ma-2 default">
    <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">
           <span class="ml-3">#</span>{{ tag.name }}
      </NuxtLink>
    </v-chip>
  </div>
    </section>

</template>

<script>
export default {
    name: "tags",
    
    props: ['tags']

    }

</script>

<style>

</style>