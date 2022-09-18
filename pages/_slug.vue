<template>
  <article class="slug-wrap">
    <div class="breadcrumb">
      <v-container>
        <div class="col-full">
          <div class="d-flex justify-center mb-6">
            <div class="text-center">
              <h1 class="breadcrumb-heading white--text"> <i class="fa-regular fa-circle-play fa-xl default--text"></i>
                {{ article.title }} {{ article.year }}

              </h1>
              <nav class="woocommerce-breadcrumb">
                <nuxt-link class="white--text ml-3" to="/">الرئيسية</nuxt-link>

                <span class="breadcrumb-separator ml-3" v-for="category of categories" :key="category.slug"> /
                  <NuxtLink :to="`/category/${category.slug}`" class="white--text">

                    {{ category.name }}
                  </NuxtLink>

                </span>

                <span class="breadcrumb-separator ml-3"> / {{article.title }}</span>
              </nav>
              <v-chip class="ma-2" color="primary" label>

                <v-icon left small>
                  fa-light fa-bug
                </v-icon>
                تبليغ عن رابط لا يعمل
              </v-chip>

            </div>

          </div>

        </div>
      </v-container>
      <div class="breadcrumb-bg">
        <v-img class="breadcrumb-img ml-auto" max-height="320px" max-width="100%" alt=""
          :src="require(`~/static/images/poster/${article.img}`)"></v-img>
      </div>



    </div>

    <div class="inner-content">
      <v-container>
        <div class="post-content">
          <v-row>
            <v-col cols="12" lg="3" md="4" sm="6">
              <div class="blog-poster">
                <v-card>
                  <v-img :src="require(`~/static/images/poster/${article.img}`)" height="400" alt="article.img">
                    <template>
                      <v-row class="fill-height" justify="center" align="center">
                        <div class="icon-abs">
                          <div class="images-wrapper">
                          </div>
                          <a target="_blank" class="icon pulse expand popup-youtube" :href="article.youtube"
                            data-fancybox data-type="iframe" data-preload="true">
                            <i class="fa-solid fa-play white--text"></i>
                          </a>

                        </div>
                      </v-row>
                    </template>
                  </v-img>

                  <v-btn class="microfilm-color" block x-large><i class="fa-regular fa-circle-play fa-xl ml-2"></i>
                    مشاهدة وتحميل </v-btn>
                </v-card>

              </div>

            </v-col>
            <v-col class="" cols="12" lg="6" md="8" sm="6">
              <div class="post-content">
                <div class="post-description microfilm-card-bg pa-5 rounded-lg">
                  <h3 class="warning--text"><i class="fa-solid fa-quote-right"></i> القصة</h3>
                  <p class="">{{ article.description }}</p>
                </div>

                <tag-box :tags="tags" />


              </div>
            </v-col>
            <v-col cols="12" md="3" sm="12" class="">

              <div class="details">
                <h3 class="warning--text text-center pa-5"><i class="fa-light fa-list-radio ml-3"></i> المزيد من
                  التفاصيل </h3>

                <ul class="details-list pa-0">
                  <li class="pa-3"><i class="fa-light fa-tv ml-3"></i><span> الجودة : {{ article.quality }}</span></li>
                  <li class="pa-3"><i class="fa-light fa-calendar ml-3"></i><span> سنة الإصدار
                      :{{ article.year }}</span></li>
                  <li class="pa-3"><i class="fa-light fa-clock ml-3"></i><span> مدة العرض :
                      {{ article.time }}دقيقة</span></li>
                  <li class="pa-3"><i class="fa-solid fa-earth-americas ml-3"></i><span> انتاج :
                      {{ article.Produce }}</span></li>

                  <li class="pa-1 mt-5 imdb-box">
                    <a class="imdb-link" target="_blank" :href="article.imdb.link">
                      <span class="imdb-text">imdb</span>
                      <span class="imdb-ra"> {{ article.imdb.rating }}</span>
                      <span class="imdb-text">{{ article.imdb.Votes }}</span>
                    </a>

                  </li>



                </ul>

              </div>







            </v-col>
          </v-row>

        </div>
      </v-container>

    </div>

    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="title-Section rounded-lg">
            <v-toolbar-title class="right-Title-Section">
              <i class="fa-solid fa-tv  default title-icon rounded-lg"></i>
              <span> عروض ذات صلة </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="left-Title-Section">
              <a href="" class="MoreFromSection HoverAfter rounded-xl"><span>المزيد</span>
                <div class="title-loader"></div>
              </a>
            </div>
          </div>

        </v-col>
      </v-row>


      <HomeCard :articles="articles" />

    </v-container>



  </article>
</template>
<script>
  import { Fancybox } from "@fancyapps/ui";
  import "@fancyapps/ui/dist/fancybox.css";
  
    import TagBox from '~/components/widget/Tag-box.vue';
    import imgAPI from '~/static/images/imgAPI'
    import HomeCard from "~/components/card/HomeCard";
    export default {
  
      components: {
      HomeCard,
      TagBox,
      Fancybox,
  },
      data() {
  
        return {
          imgAPI: imgAPI,
          SocialIcon: [{
              Icon: imgAPI.social[0],
              title: 'Facebook',
              to: '#'
            },
            {
              Icon: imgAPI.social[1],
              title: 'Twitter',
              to: '#'
            },
            {
              Icon: imgAPI.social[2],
              title: 'Instagram',
              to: '#'
            },
            {
              Icon: imgAPI.social[3],
              title: 'Whatsapp',
              to: '#'
            },
            {
              Icon: imgAPI.social[4],
              title: 'Google Plus',
              to: '#'
            },
          ]
        };
      },
      async asyncData({$content, params}) {
        const article = await $content('articles', params.slug).fetch()
        const tags = await $content('tags')
          .only(['name', 'slug'])
          .where({ name: {$containsAny: article.tags}})
          .fetch()
        const categories = await $content('categories')
          .only(['name', 'slug'])
          .where({name: {$containsAny: article.categories}
          })
          .fetch()
        return {
          article,
          tags,
          categories,
  
        }
      },
      methods: {
  
        formatDate(date) {
          const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
          return new Date(date).toLocaleDateString('en', options)
        },
  
      },
      head() {
        return {
          title: this.article.title,
  
        };
      },
    }
  
  </script>