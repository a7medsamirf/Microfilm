<template>
  <div class="hero-wrap">

      <div class="carousel" v-if="loaded">
        <slick ref="c1" :options="slickOptions">
          <v-card v-for="(movies, index) in movies" :key="index"
                  class="item"
          >
            <v-img
              v-if="movies.image"
              :src="require(`~/static/images/banner/${movies.image}`)"
              :alt="movies.alt"
              height="100vh"
            ></v-img>

          </v-card>

        </slick>
      </div>

      <div class="carousel logo" v-if="loaded">
        <slick ref="c2" :options="Syncing">
        <div  class="item" v-for="(movies, index) in movies" :key="index">

        <img
        class="responsive"
        :src="require(`~/static/images/logo/${movies.logo}`)"
         v-if="movies.image"
        :alt="movies.alt"
        width="50%" height="50">

        </div>


        </slick>
      </div>

  </div>
</template>
<script>
import  movies from '~/api/movies'
export default {
  name: "about-Us",
  components: {
    Slick: () => import('vue-slick'),
    
  },
  data() {
    return {
      loaded: false,
      movies :movies.movies,
    slickOptions: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
         asNavFor: this.$refs.c2,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      },
      Syncing: {
        arrows: true,
        slidesToShow: 6,
         asNavFor: this.$refs.c1,
        focusOnSelect: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },

    prev() {
      this.$refs.slick.prev()
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  },

}
</script>

<style lang="scss">
    .hero-wrap{
  position: relative;
  }
.carousel.logo {
    position: absolute;
    bottom: 100px;
    z-index: 9;
    width: 100%;
}
</style>
