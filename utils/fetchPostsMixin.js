export default {
async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'quality'])
      .sortBy('createdAt', 'asc')
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
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
