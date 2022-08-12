export default {
async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      /*.only(['title', 'description', 'img', 'slug', 'quality','imdb'])*/
      /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      /* .sortBy('createdAt', 'asc') */ // ترتيب المقالات من الاقدم للاحدث
      .sortBy('createdAt', 'desc') // ترتيب المقالات من الاحدث للاقدم
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .fetch()

 const tags = await $content('tags')
    .only(['name','slug'])
    .sortBy('createdAt', 'asc')
    .fetch()
    const categories = await $content('categories')
    .only(['name','slug'])
    .sortBy('createdAt', 'asc')
    .fetch()

   return {
      articles,
     tags,
     categories
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('ar', options)
    }
  }
}
