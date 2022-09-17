<template>
  <div class="">
     <v-text-field
        class="pa-0 ma-0"
        v-model="searchQuery"
        autocomplete="on"
        :loading="loading"
        placeholder=" ابحث بأسم الفيلم او المسلسل"
        hide-details
          hide-no-data
          hide-selected
          outlined
      >
       <v-icon
         slot="append"
         color="primary"
       >
         mdi-magnify
       </v-icon>

       <template v-slot:item="{ articles }">
        <v-list  v-if="articles.length">
        <v-list-item-group
          v-model="selectedItem"
        color="primary">
          <v-list-item v-for="article of articles" :key="article.slug">
            <v-list-item-content  >
                      <NuxtLink :to="`/${article.slug}`" class="white--text">
            {{ article.title }}
              </NuxtLink>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
       </template>
     </v-text-field>






  </div>
</template>
<script>
  import fetchPostsMixin from '@/utils/fetchPostsMixin'
export default {
  mixins: [fetchPostsMixin],
  data() {
    return {
      searchQuery: '',
      articles: [],
      loading: false,
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  },
    methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
}
</script>
