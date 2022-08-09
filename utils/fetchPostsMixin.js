export default {
async asyncData({ $content, params, error }) {
    const articles = await $content('articles', params.slug)
      /*.only(['title', 'description', 'img', 'slug', 'quality','imdb'])*/
      /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      .sortBy('createdAt', 'asc')
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
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
