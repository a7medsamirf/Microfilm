<template>
  <div class="my-5">

    <title-section :link="link" :head="head" />

    <v-container fluid>
      <v-row>
        <v-col  v-for="Movie in Movies"
                :key="Movie.slug"
                cols="12"
                lg="2"
                md="3"
                sm="4"
                xs="6"
                col="5"

                class="pa-1 "
        >
          <div class="BlockItem">
            <nuxt-link :to="`/${Movie.slug}`">
              <v-card
                outlined
                elevation-0
              >
                <div class="blog-img BlockImageItem">

                  <v-img
                    :src="require(`~/static/images/poster/${Movie.img}`)"
                    height="350"
                    :alt="Movie.alt"
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

                  <div class="StarsIMDB warning">
                    <span>IMDB</span>
                    <strong>{{ Movie.imdb.rating }}</strong>
                  </div>

                  <div class="categories success">
                    <span>{{ Movie.categories }}</span>
                  </div>

                  <a href="" class="fa-solid fa-play play-btn white--text"></a>
                  <ul class="RestInformation">
                    <li v-for="tag in Movie.tags" :key="tag">
                      <span >
                        <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">
                        {{ tag }}
                      </NuxtLink>
                      </span>

                    </li>
                    <li>{{ Movie.quality }}</li>
                  </ul>

                  <h5 class="BlockTitle">{{ Movie.title }}</h5>
                  <div  class="quality default">{{Movie.quality}}</div>

                </div>

              </v-card>
            </nuxt-link>

          </div>



        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import TitleSection from "~/components/widget/Title-Section";
export default {
  name: "Movies",
  components: {TitleSection},
  props: {
    Movies: {
      type: Array,
      required: true
    },
  },
  data () {
    return {
      head: ' جديد الأفلام',
      link: '/movies',
    }
  },
}
</script>

<style>
.categories+ul.RestInformation {
  max-width: 103px
}
.BlockItem:hover .BlockImageItem .categories {
  top: 12px
}

.BlockItem:hover .categories {
  right: 7px;
}
.BlockItem .categories {
  right: 73px;
}
.BlockItem:hover .BlockImageItem .categories {
  transition: .3s .2s all ease;
  top: 65px;
  opacity: 1;
}
.categories{
  position: absolute;
  top: -56px;
  opacity: 0;
  z-index: 10;
  right: 7px;
  transition: .2s all ease;
  padding: 3px 0;
  width: 60px;
  border-radius: 3px;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
}

</style>
