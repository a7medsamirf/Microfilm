<template>
  <div class="hero-wrap">
      <div class="carousel" >
        <slick class="slickOptions"  :options="slickOptions">
          <div v-for="(movies, index) in movies" :key="index" class="item">
            <v-img
              v-if="movies.image"
              :src="require(`~/static/images/banner/${movies.image}`)"
              :alt="movies.alt"
              height="100vh"
            ></v-img>
            
          </div>
        </slick>
      </div>



        <slick class="Syncing justify-space-between" :options="Syncing">
          <div  class="item" v-for="(movies, index) in movies" :key="index">
            <img
              class="gallery-thumbnails"
              :src="require(`~/static/images/logo/${movies.logo}`)"
              v-if="movies.image"
              :alt="movies.alt">
          </div>


        </slick>


  </div>
</template>
<script>
import  movies from '~/api/movies.json'
export default {
  name: "about-Us",
  components: {
    Slick: () => import('vue-slick'),
  },
  data() {
    return {
      movies,
    slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.Syncing',
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
      },
      Syncing: {
        arrows: true,
        slidesToShow: 9,
        slidesToScroll: 1,
        asNavFor: '.slickOptions',
        focusOnSelect: true,
        infinite: true,
        autoplay: false,
        dots: true,
        autoplaySpeed: 5000,
        rtl: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }
    }
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
    margin: 0 0 -12vw;
  }
.Syncing{
  position: relative;
  align-items: center;
  top: -16.8vw;
  padding: 0 5vw;
  animation: fadein 2s;
}
.slick-slide.slick-current.slick-active .item:after
{
  width: 3.75vw;
}
 .Syncing  .item:after {
      content: "";
      display: block;
      width: 0;
      height: 0.156vw;
      margin: 0 auto;
      background-color: #f44336;
      -webkit-transition: all .5s ease-in-out;
      -o-transition: all .5s ease-in-out;
      transition: all .5s ease-in-out;
    }
.gallery-thumbnails
{
  cursor: pointer;
  max-width: 8.5vw;
  height: 3.7vw;
  filter: drop-shadow(2px 4px 6px #00000024);
}
</style>
