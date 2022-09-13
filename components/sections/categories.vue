<template>
      <section class="categories">

        <div class="text-center">
    <v-chip
        v-for="category of categories"
      :key="category.slug"
      class="ma-2 default">
    <NuxtLink :to="`/category/${category.slug}`" class="white--text">
           <span class="ml-3">#</span>{{ category.name }}
      </NuxtLink>
    </v-chip>
  </div>
  </section>


</template>

<script>
export default {
    name: "Categories",
    props: ['categories']
}
</script>

<style>

</style>