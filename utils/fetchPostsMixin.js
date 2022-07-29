export default {

async asyncData({ $content, params }) {
    const movies = await $content('movies', params.slug)
      .only(['title', 'description', 'img', 'slug', 'quality'])
      .sortBy('createdAt', 'asc')
      .fetch()
 const tags = await $content('tags')
    .only(['name','slug'])
    .fetch()
   return {
      movies
    }
  }
}