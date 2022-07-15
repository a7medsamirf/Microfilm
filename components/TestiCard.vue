<template>
  <div class="testimonial-wrap">

      <div class="carousel" v-if="loaded">
        <slick ref="c1" :options="slickOptions">
          <v-card  height="250" v-for="(burger, index) in burger" :key="index"
                  class="mx-auto my-12 item"
          >
            <v-img
              v-if="burger.image"
              :src="require(`~/static/images/shop/${burger.image}`)"
              :alt="burger.alt"
              height="250"
            ></v-img>

          </v-card>

        </slick>
      </div>

      <div class="carousel" v-if="loaded">
        <slick ref="c2" :options="Syncing">
          <v-card v-for="(burger, index) in burger" :key="index"
                  class="mx-auto my-12 item"
          >
            <v-img
              v-if="burger.image"
              :src="require(`~/static/images/shop/${burger.image}`)"
              :alt="burger.alt"
              height="250"
            ></v-img>

          </v-card>

        </slick>
      </div>

  </div>
</template>
<script>
import  burger from '~/api/burger'
export default {
  name: "about-Us",
  components: {
    Slick: () => import('vue-slick'),
    
  },
  data() {
    return {
      loaded: false,
      burger :burger.burger,
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
        slidesToShow: 4,
         asNavFor: this.$refs.c1,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
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

<style>

</style>
