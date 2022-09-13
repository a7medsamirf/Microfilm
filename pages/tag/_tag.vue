<template>
  <div
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div class="absolute top-32 left-32 right-32 text-white">

      <div class="mt-16 -mb-3 flex flex-col text-sm">
        <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
          <h1 class="text-4xl font-bold uppercase">
            {{ tag.name }}
          </h1>

          <nuxt-content :document="tag" />
        </div>
      </div>
    </div>
    <div
      class="relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
    >


    <HomeCard :articles="articles"/>

    </div>
  </div>
</template>

<script>
import HomeCard from '~/components/card/HomeCard.vue'
export default {
    async asyncData({ $content, params }) {
        const tags = await $content("tags")
            .where({ slug: { $contains: params.tag } })
            .limit(1)
            .fetch();
        const tag = tags.length > 0 ? tags[0] : {};
        const articles = await $content("articles")
            .where({ tags: { $contains: tag.name } })
            .sortBy("createdAt", "asc")
            .fetch();
        return {
            articles,
            tag
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        }
    },
    components: { HomeCard }
}
</script>
