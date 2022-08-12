<template>
  <div class="post-tag">
    <ul class="">
      <li class=" white--text microfilm-card-bg pa-2 ml-2 rounded-lg mt-3" v-for="tag of tags" :key="tag.slug">
        <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">

          {{ tag.name }}
        </NuxtLink>
      </li>
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
    name: "Tag-box",
    props: {
      tags: {
        type: Array,
        required: true
      },
      categories: {
        type: Array,
        required: true
      },
    },
  }

</script>

<style>

</style>
