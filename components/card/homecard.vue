<template>
<div>
  <v-container>
            <h1>أفلام</h1>
 <no-ssr placeholder="Loading...">
    <carousel-3d :autoplay="false" :height="500"  :autoplay-timeout="3000" :controls-visible="true"   :controls-width="10" :controls-height="30" :clickable="false">
         

      <slide    v-for="(movie, i) in movies" :index="i"
            :key="movie.slug"
          class="item">
      
        <nuxt-link :to="`/${movie.slug}`">
        <v-card
              outlined
              elevation-0
            >
                 <div class="blog-img">
                  <v-img
                    :src="require(`~/static/images/poster/${movie.img}`)"
                    height="500"
                    :alt="movies.alt"
                  >
                    <template slot="placeholder">
                      <v-row
                        class="fill-height"
                        justify="center"
                        align="center"
                      >
                        <v-progress-circular
                          width="2"
                          size="100"
                          color="default"
                          indeterminate
                        ></v-progress-circular>
                      </v-row>
                    </template>

                  </v-img>

                </div>


       

                    <h5>{{ movie.title }}</h5>

              <div  class="quality default">
                  {{movie.quality}}
              </div>
              


            </v-card>
            </nuxt-link>

      </slide>


  </carousel-3d>
 </no-ssr>

  </v-container>

      </div>



</template>

<script>
export default {
    props: {
    movies: {
      type: Array,
      required: true
    },
  },


}
</script>

<style lang="scss">
  .slick-slide.slick-current.slick-center
  {
  -moz-transform: scale(1.08);
    -ms-transform: scale(1.08);
    -o-transform: scale(1.08);
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
    margin-top: 0;
    transition: .4s ease-in-out;
    cursor: pointer;
    .comment-block{
      &:before{
        opacity: 1;
        transition-delay: .4s;
        transform: translateY(0);
      }
      &:after{
        opacity: 1;
        transition-delay: .4s;
        transform: translateY(0);
      }
    }

  }


</style>