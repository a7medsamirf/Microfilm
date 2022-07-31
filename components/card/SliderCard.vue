<template>
  <div>
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


  </div>
</template>

<script>
export default {
  name: "SliderCard",
  components: {
    Slick: () => import('vue-slick'),
  },
    data() {
    return {
      movies,
      slickOptions: {
        slidesToShow: 5,
        centerMode: true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 3000,
        autoplay: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
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
  .slick-slide.slick-current.slick-active.slick-center
  {
    transform: scale(1);
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
