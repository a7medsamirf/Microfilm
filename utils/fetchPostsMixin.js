export default {

async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'quality'])
      .sortBy('createdAt', 'asc')
      .fetch()
 const tags = await $content('tags')
    .only(['name','slug'])
    .fetch()
   return {
      articles
    }
  }
}