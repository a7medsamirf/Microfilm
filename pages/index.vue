<template>
<div>




<home-carousel :articles="articles" />

  <app-search-input />


  <home-card :articles="articles" />
  <ul>
    <li
      v-for="tag of tags"
      :key="tag.slug"
      class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"
    >
      <NuxtLink :to="`/tag/${tag.slug}`" class="">
        <p
          class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"
        >
          {{ tag.name }}
        </p>
      </NuxtLink>
    </li>
  </ul>


</div>
</template>

<script>
import fetchPostsMixin from '@/utils/fetchPostsMixin';
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
import HomeCarousel from "~/components/card/HomeCarousel";
import HomeCard from "~/components/card/HomeCard";
export default {
    name: "IndexPage",
    components: {HomeCard, HomeCarousel, AppSearchInput },
    mixins: [fetchPostsMixin]
}
</script>

<style>
.v-card.moving .v-image{
  background-size: cover;
  border-radius: 20px !important;

}
.v-card.moving
{
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 30%);
  border-radius: 20px !important;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.v-card.moving:hover{
  box-shadow: 0 0 0 0 rgb(0 0 0 / 30%);
  transform: translateY(5px);
}
.v-card.moving .v-image__image--cover{
  transition: all 0.5s ease-in-out;
}
.v-card.moving:hover .v-image__image--cover {
  transform: scale(1.15);
}
</style>
