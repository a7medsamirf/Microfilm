<template>
  <div class="post-tag">
    <ul class="">
      <li class="white--text microfilm-card-bg pa-2 ml-2 rounded-lg mt-3">
        <i class="fa-light fa-list ml-2"></i><span>التصنيف</span>
        
        </li>


      <li class=" white--text microfilm-card-bg pa-2 ml-2 rounded-lg mt-3" v-for="tag of tags" :key="tag.slug">
        <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">

          {{ tag.name }}
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
    },
  }

</script>

<style>

</style>
