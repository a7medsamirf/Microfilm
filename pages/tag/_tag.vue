<template>

<div>
  <div class="tag breadcrumb d-flex align-center">
      <v-container class="pa-0">
        <div class="col-full">
          <v-Card class="tag-card rounded-0">
        <div class="d-flex  flex-wrap flex-md-nowrap flex-column flex-md-row">
          <div class="pa-10">
            <v-card-title class="use-text-title2">بحث الأقسام :</v-card-title>
          </div>

          <v-Divider vertical/>

          <div class="pa-5">
        <v-card-title> أنت هنا / قسم   {{ tag.name }} </v-card-title> 

            <nav class="woocommerce-breadcrumb px-3">
                <nuxt-link class="white--text " to="/">الرئيسية</nuxt-link>
                <span class="breadcrumb-separator ml-3 mr-3"> /</span>
                <span class="breadcrumb-separator active"> {{ tag.name }} </span>
              </nav>


    
          </div>
        </div>
      </v-Card>
      
        
  
        </div>
      </v-container>

      <div class="breadcrumb-bg"></div>


    </div>
    


    <div class="tag-content">
      <v-container fluid>

          <HomeCard :articles="articles"/>

 
      </v-container>
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
