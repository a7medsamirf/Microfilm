<template>

<div>
  <div class="tag breadcrumb d-flex align-center">
      <v-container class="pa-0">
        <div class="col-full">
        <v-row align="center" >
          <v-col cols="12" md="3" class="px-0">
            <h2 class="use-text-title2 white--text mb-3"> بحث الأقسام :     </h2>
          </v-col>
          <v-col cols="12" md="6" class="px-0">
            <v-divider
  vertical
></v-divider>
            أنت هنا
            /
            قسم   {{ tag.name }} 
          
      
          <nav class="woocommerce-breadcrumb ">

            <span class="breadcrumb-separator white--text"> / hjjgh</span>
          </nav>
          </v-col>
        </v-row>
       
        
  
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
