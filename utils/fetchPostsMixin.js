export default {
  async asyncData({$content,params}) {
    const Movies = await $content('articles', params.slug)
      .where({sections: {$containsAny: ['Movies']}})
      .sortBy('createdAt', 'desc')
      .fetch();
    const Series = await $content('articles', params.slug)
      .where({sections: {$containsAny: ['Series']}})
      .sortBy('createdAt', 'desc')
      .fetch();

    const articles = await $content('articles', params.slug)
      /*.only(['title', 'description', 'img', 'slug', 'quality', 'imdb'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      /* .sortBy('createdAt', 'asc') */ // ترتيب المقالات من الاقدم للاحدث
      .sortBy('createdAt', 'desc') // ترتيب المقالات من الاحدث للاقدم
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .fetch()

    const tags = await $content('tags')
      .only(['name', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const categories = await $content('categories')
      .only(['name', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
      tags,
      categories,
      Movies,
      Series
    }
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return new Date(date).toLocaleDateString('ar', options)
    }
  }
}
