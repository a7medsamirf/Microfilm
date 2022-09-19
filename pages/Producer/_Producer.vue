<template>
  <div
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >

    <div class="absolute top-32 left-32 right-32 text-white">

      <div class="mt-16 -mb-3 flex flex-col text-sm">
        <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
          <h1 class="text-4xl font-bold uppercase">
            {{ Producer.name }}
          </h1>

          <nuxt-content :document="Producer" />
        </div>
      </div>
    </div>
    <div
      class="relative"
    >

    
    <HomeCard :articles="articles"/>

    </div>
  </div>
</template>

<script>
import HomeCard from '~/components/card/HomeCard.vue'
export default {
    async asyncData({ $content, params }) {
        const Producers = await $content("Producers")
            .where({ slug: { $contains: params.Producer } })
            .limit(1)
            .fetch();
        const Producer = Producers.length > 0 ? Producers[0] : {};
        const articles = await $content("articles")
            .where({ Producers: { $contains: Producer.name } })
            .sortBy("createdAt", "asc")
            .fetch();
        return {
            articles,
            Producer
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("ar", options);
        }
    },
    head() {
        return {
            title: this.Producer.title,
            link: [
                {
                    href: `${this.$config.baseUrl}/${this.$route.params.slug}`,
                },
            ],
        };
    },
    components: { HomeCard }
}
</script>
