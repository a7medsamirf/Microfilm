<template>
  <article class="slug-wrap">
    <div class="breadcrumb">
      <v-container>
        <div class="col-full">
          <h1 class="breadcrumb-heading white--text">  <i class="fa-regular fa-circle-play default--text"></i> {{ article.title }} </h1>
        </div>
      </v-container>
      <div class="breadcrumb-bg">
        <v-img class="breadcrumb-img ml-auto"
               max-height="400px"
               max-width="100%"
               alt=""
               :src="require(`~/static/images/banner/${article.banner}`)"
        ></v-img>
      </div>

      <div class="inner-content ">
        <v-container >
          <div class="post-content">
            <v-row>
              <v-col cols="12" md="3">
                <div class="blog-poster">
                  <div class="imdb">
                    <v-list-item-title class="text-h5 mb-1">
                      IMDB
                    </v-list-item-title>
                    <v-list-item-subtitle>8.6</v-list-item-subtitle>



                  </div>
                  <v-card>

                    <v-img
                      :src="require(`~/static/images/poster/${article.img}`)"
                      height="350"
                      alt="article.img"
                    >
                      <template>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >

                          <div class="icon-abs">
                            <CoolLightBox
                              :items="items"
                              :index="index"
                              @close="index = null">
                            </CoolLightBox>

                            <div class="images-wrapper">
                              <div
                                class="image"
                                v-for="(image, imageIndex) in items"
                                :key="imageIndex"
                                @click="index = imageIndex"
                                :style="{ backgroundImage: 'url(' + image.thumb + ')' }"
                              ></div>
                            </div>

                            <a href="https://youtu.be/oMqiS_H14Y0" data-fancybox="video" class="icon pulse expand popup-youtube">

                              <i class="fa-solid fa-play "></i>
                            </a>



                          </div>
                        </v-row>
                      </template>
                    </v-img>

                    <v-btn class="moving-btn" block  x-large><i class="fa-regular fa-circle-play fa-xl ml-2"></i> مشاهدة وتحميل </v-btn>

                  </v-card>

                </div>

              </v-col>
              <v-col class="layout align-center" cols="12" md="6">
                <div class="post-content pa-3">

                  <h3>قصة الفيلم</h3>
                  <p class="">
                    {{ article.description }}
                  </p>
                </div>
              </v-col>
              <v-col cols="12" md="3">
                <div class="social-box">
                  <v-btn
                    v-for="(social, index) in SocialIcon"
                    :key="index"
                    :to="social.to"
                    class="mx-1"
                    router
                    icon
                    exact
                  >
                    <img
                      :src="social.Icon"
                      :alt="social.title"
                      height="35"
                      width="35"
                    >
                  </v-btn>
                </div>
                <div class="details">
                    <p> <i class="fa-light fa-tv ml-5"></i>الجودة 1080HD</p>
                </div>
                <div class="details mt-5">
                  <p> <i class="fa-light fa-eye ml-5"></i>المشاهدات 200</p>
                </div>
                <div class="details mt-5">
                  <p> <i class="fa-light fa-calendar ml-5"></i>سنة الإصدار 2022</p>
                </div>
                <div class="details mt-5">
                  <p> <i class="fa-light fa-clock ml-5"></i>مدة العرض 180min</p>
                </div>

              </v-col>

              <v-col cols="12" md="12">
                <!-- content from markdown -->
                <nuxt-content :document="article" />
              </v-col>


            </v-row>

          </div>


        </v-container>
      </div>

    </div>




  </article>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import imgAPI from '~/static/images/imgAPI'
export default {
  data(){
    return {
      imgAPI: imgAPI,
      SocialIcon: [
        { Icon: imgAPI.social[0], title: 'Facebook', to: '#'},
        { Icon: imgAPI.social[1], title: 'Twitter', to: '#'},
        { Icon: imgAPI.social[2], title: 'Instagram', to: '#'},
        { Icon: imgAPI.social[3], title: 'Whatsapp', to: '#'},
        { Icon: imgAPI.social[4], title: 'Google Plus', to: '#'},
      ]
    };
  },
    components: {CoolLightBox},
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
   return {
      article,
      tags,
      prev,
      next
    }
  },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: this.article.title,
      link: [
        {
          href: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
        },
      ],
    };
  },
}
</script>

<style lang="scss">

.blog-poster{
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

.theme--light.v-application .slug-wrap
{
  background: #faf7f2;
  .post-content {
    background-color: #fff;
  }
}
/* .inner-content
{
  position: relative;
  margin-top: -350px;
} */
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

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1);
  }

  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0);
  }
}

@keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1);
  }

  100% {
    -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0);
  }
}
.moving-btn{
  background: linear-gradient(90deg, #F00B51 0, #730062 100%);
}

.inner-content {
  position: relative;
  z-index: 2;
}
.social-box {
  position: absolute;
  top: 151px;
  left: 9px;
}

.details {
  position: relative;
  text-align: center;
  background: linear-gradient(90deg, #1C164C 0, #2E358E 100%);
  padding: 6px;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 10% 80%);
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(90deg, #F00B51 0, #730062 100%);
    padding: 18px;
    clip-path: polygon(10px 0px, 100% 0px, 90% 100%, 13% 70%);
  }
}


</style>
