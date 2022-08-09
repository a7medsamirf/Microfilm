<template>
  <div
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >

    <div class="absolute top-32 left-32 right-32 text-white">

      <div class="mt-16 -mb-3 flex flex-col text-sm">
        <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
          <h1 class="text-4xl font-bold uppercase">
            {{ category.name }}
          </h1>

          <nuxt-content :document="category" />
        </div>
      </div>
    </div>
    <div
      class="relative"
    >

      <h3 class="mb-4 font-bold text-4xl">Articles tagged {{ category.name }}:</h3>
      <ul>
        <li
          v-for="article in articles"
          :key="article.slug"
          class="w-full px-2 xs:mb-6 md:mb-12 article-card"
        >
          <NuxtLink
            :to="`/${article.slug}`"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
          >


            <div
              class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
            >
              <h2 class="font-bold">{{ article.title }}</h2>
              <p>{{ article.description }}</p>

            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const categories = await $content('categories')
      .where({ slug: { $contains: params.category } })
      .limit(1)
      .fetch()
    const category = categories.length > 0 ? categories[0] : {}
    const articles = await $content('articles')
      .where({ categories: { $contains: category.name } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      category
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ar', options)
    }
  },
  head() {
    return {
      title: this.category.title,
      link: [
        {
          href: `${this.$config.baseUrl}/${this.$route.params.slug}`,
        },
      ],
    };
  },
}
</script>
