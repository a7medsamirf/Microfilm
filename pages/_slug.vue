<template>
  <article class="slug-wrap">
    <div class="breadcrumb">
      <v-container>
        <div class="col-full">
          <div class="d-flex justify-center mb-6">
            <div class="text-center">
              <h1 class="breadcrumb-heading white--text"> <i class="fa-regular fa-circle-play default--text"></i>
                {{ article.title }}  ( {{ article.year }})

                </h1>
      <nav class="woocommerce-breadcrumb">
             <nuxt-link class="white--text ml-3" to="/">الرئيسية</nuxt-link>

        <span class="breadcrumb-separator ml-3" v-for="category of categories"
        :key="category.slug"> /
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
        <v-container fluid>
          <div class="post-content">
            <v-row>
              <v-col cols="12" lg="3" md="4" sm="6">
                <div class="blog-poster">
                  <!--          <div class="imdb">
                    <v-list-item-title class="text-h5 mb-1">
                      IMDB
                    </v-list-item-title>
                    <v-list-item-subtitle>8.6</v-list-item-subtitle>



                  </div> -->

                  <v-card>

                    <v-img :src="require(`~/static/images/poster/${article.img}`)" height="400" alt="article.img">
                      <template>
                        <v-row class="fill-height" justify="center" align="center">

                          <div class="icon-abs">

                            <div class="images-wrapper">

                            </div>

        <!--              <nuxt-link class="icon pulse expand popup-youtube" :src"{{ article.youtube }}">
                               <i class="fa-solid fa-play white--text"></i>
                          </nuxt-link> -->

                                 

                                      <a target="_blank" class="icon pulse expand popup-youtube"
                                       :href="article.youtube">
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

                  <tag-box :tags="tags"  />

                 <div class="post-description rounded-lg mt-3">
                    <h3 class="warning--text"><i class="fa-solid fa-users"></i> فريق العمل</h3>


<!--               <v-img :src="require(`~/static/images/avatars/${article.team}`)" height="400" alt="article.img"></v-img>-->
                  </div>

                </div>
              </v-col>
              <v-col cols="12" md="3" sm="12" class="">

                <div class="details">
                  <h3 class="warning--text text-center pa-5"><i class="fa-light fa-list-radio ml-3"></i> المزيد من
                    التفاصيل </h3>

                  <ul class="details-list pa-0">
                    <li class="pa-3"><i class="fa-light fa-tv ml-3"></i><span> الجودة : {{ article.quality }}</span>
                    </li>
                    <li class="pa-3"><i class="fa-light fa-calendar ml-3"></i><span> سنة الإصدار :
                        {{ article.year }}</span></li>
                    <li class="pa-3"><i class="fa-light fa-clock ml-3"></i><span> مدة العرض : {{ article.time }}
                        دقيقة</span></li>

            <li class="pa-1 mt-5 imdb-box">
                    <span class="imdb-text">imdb</span>
                    <span class="imdb-ra"> {{ article.imdb }}</span>
                    <span class="imdb-text">{{ article.Votes }}</span>

                  </li>



                  </ul>

                </div>







              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
     <div dense class="title-Section">
        <v-toolbar-title class="right-Title-Section">
                  <i class="fas fa-camera-movie default title-icon">  </i>
                    <span>  عروض ذات صلة </span>
            </v-toolbar-title>
        <v-spacer></v-spacer>
     <div class="left-Title-Section">
      <a href="" class="MoreFromSection HoverAfter"><span>المزيد</span><div class="title-loader"></div></a>
    </div>
      </div>

              </v-col>
              <v-col cols="12">
                <home-card :articles="articles" />
              </v-col>
            </v-row>

          </div>
        </v-container>

      </div>


  </article>
</template>
<script>
  import TagBox from '~/components/widget/Tag-box.vue';
  import imgAPI from '~/static/images/imgAPI'
  import HomeCard from "~/components/card/HomeCard";
  export default {
    components: {
      HomeCard,
      TagBox,
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
      }
    },
    head() {
      return {
        title: this.article.title,

      };
    },
  }

</script>

<style lang="scss">
  .inner-content {
    position: relative;
    z-index: 2;

    .blog-poster {
      cursor: pointer;
      position: relative;

      .imdb {
        position: absolute;
        top: -20px;
        width: 65px;
        height: 75px;
        font-size: 20px;
        z-index: 4;
        background: linear-gradient(180deg, #D8AE15 0, #FFE27A 100%);
        left: 35px;
        text-align: center;
        border-radius: 5px 0px 5px 5px;

        &::before {
          position: absolute;
          content: "";
          top: 0px;
          right: -10px;
          border-right: 10px solid transparent;
          border-bottom: 20px solid #a88300;
        }
      }
    }
  }


  .theme--light.v-application .slug-wrap {
    background: #faf7f2;

    .post-content {
      background-color: #fff;
    }
  }

  .icon-abs .icon {
    background: rgba(0, 0, 0, 0.41);
    display: inline;
    font-size: 25px;
    padding: 20px 30px;
    border-radius: 50%;
  }

  .pulse {
    -webkit-animation: pulse 1s linear infinite;
    animation: pulse 1s linear infinite;
  }



  .social-box {
    position: absolute;
    top: 0;
    left: 9px;
  }

  .details {
    .v-chip {
      position: relative;
      text-align: center;
      background: rgba(87, 118, 146, 0.07059);
      padding: 6px;

    }

  }

  .details {
    background: rgba(255, 255, 255, 0.05882);
    padding: 10px;
    position: relative;
    border-radius: 10px;

    .details-list {
      li {
        color: #ffffff;
        padding: 8px;
        display: block;
        font-size: 14px;
        border-radius: 5px;
        background: linear-gradient(#ffffff1f, #cccccc26);
        margin-bottom: 3px;
        font-weight: bold;
      }

      ;
    }

  }

  .post-tag {
    ul {
      li {
        display: inline-block
      }
    }
  }




  .imdb-box {
    text-align: center;
    color: #000 !important;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    width: 100%;
    background: linear-gradient(#f5c518, #d08906) !important;
    -webkit-box-reflect: below 3px linear-gradient(transparent, #ff000029);

    span.imdb-ra {
      background: #fdcd20;
      padding: 18px;
      border-radius: 50%;
      position: relative;
      z-index: 2;
      font-size: 25px;
      box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 35%), 0px 2px 2px 0px rgb(0 0 0 / 0%), 0px 1px 5px 0px rgb(0 0 0 / 11%);
    }

    span.imdb-text {
    font-size: 18px;
    line-height: 10px;

}

  }

</style>
