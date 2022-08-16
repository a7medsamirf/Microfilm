<template>
<div>


  <home-card :articles="articles" />


  <v-container>
    <v-row>
      <v-col cols="12" md="3">

      </v-col>
    </v-row>
  </v-container>

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
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
import HomeCarousel from "~/components/card/HomeCarousel";
import HomeCard from "~/components/card/HomeCard";
export default {
    name: "IndexPage",
    components: {HomeCard, HomeCarousel, AppSearchInput },
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      /*.only(['title', 'description', 'img', 'slug', 'quality','imdb'])*/
      /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
       .where({ sections: { $containsAny: ['Movies'] } }) // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      /* .sortBy('createdAt', 'asc') */ // ترتيب المقالات من الاقدم للاحدث
      .sortBy('createdAt', 'desc') // ترتيب المقالات من الاحدث للاقدم
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .fetch()

 const tags = await $content('tags')
    .only(['name','slug'])
    .sortBy('createdAt', 'asc')
    .fetch()

   return {
      articles,
     tags
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ar', options)
    }
  }
}
</script>

<style>
</style>
