<template>
  <div class="post-category">
    <ul class="">
      <li class=" white--text microfilm-card-bg pa-2 ml-2 rounded-lg mt-3" v-for="category of categories"
        :key="category.slug">
        <NuxtLink :to="`/category/${category.slug}`" class="white--text">

          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>



  </div>
</template>

<script>
  export default {
    name: "Category-box",
    props: {
      categories: {
        type: Array,
        required: true
      },
    },
  }

</script>

<style>

</style>
