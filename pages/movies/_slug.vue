<template>
  <article class="slug-wrap">
    <div class="breadcrumb">
      <v-container>
        <div class="col-full">
          <div

            class="d-flex justify-center mb-6"

          >
            <div class="text-center">
              <h1 class="breadcrumb-heading white--text">  <i class="fa-regular fa-circle-play default--text"></i> {{ article.title }} </h1>

              <v-chip
                class="ma-2"
              >
                Default
              </v-chip>

              <v-chip
                class="ma-2"
                color="primary"
              >
                Primary
              </v-chip>

              <v-chip
                class="ma-2"
                color="secondary"
              >
                Secondary
              </v-chip>

              <v-chip
                class="ma-2"
                color="red"
                text-color="white"
              >
                Red Chip
              </v-chip>

              <v-chip
                class="ma-2"
                color="green"
                text-color="white"
              >
                Green Chip
              </v-chip>


            </div>

          </div>

        </div>
      </v-container>
      <div class="breadcrumb-bg">
        <v-img class="breadcrumb-img ml-auto"
               max-height="400px"
               max-width="100%"
               alt=""
               :src="require(`~/static/images/poster/${article.img}`)"
        ></v-img>
      </div>

      <div class="inner-content">
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
                      height="400"
                      alt="article.img"
                    >
                      <template>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >

                          <div class="icon-abs">

                            <div class="images-wrapper">

                            </div>

                            <a href="https://youtu.be/oMqiS_H14Y0" data-fancybox="video" class="icon pulse expand popup-youtube">

                              <i class="fa-solid fa-play "></i>
                            </a>



                          </div>
                        </v-row>
                      </template>
                    </v-img>

                    <v-btn class="microfilm-color" block  x-large><i class="fa-regular fa-circle-play fa-xl ml-2"></i> مشاهدة وتحميل </v-btn>

                  </v-card>

                </div>

              </v-col>
              <v-col class="layout align-center" cols="12" md="6">
                <div class="post-content pa-3">
                  <div>
                    <h3 class="warning--text"><i class="fa-solid fa-quote-right"></i> قصة الفيلم</h3>
                    <p class="">{{ article.description }}</p>
                  </div>

                  <div class="">
                    <v-chip
                      class="ma-2"
                      label
                    >
                      Label
                    </v-chip>

                    <v-chip
                      class="ma-2"
                      color="pink"
                      label
                      text-color="white"
                    >
                      <v-icon left>
                        mdi-label
                      </v-icon>
                      Tags
                    </v-chip>

                    <v-chip
                      class="ma-2"
                      color="primary"
                      label
                    >
                      <v-icon left>
                        mdi-account-circle-outline
                      </v-icon>
                      John Leider
                    </v-chip>

                    <v-chip
                      class="ma-2"
                      close
                      color="cyan"
                      label
                      text-color="white"
                    >
                      <v-icon left>
                        mdi-twitter
                      </v-icon>
                      New Tweets
                    </v-chip>
                  </div>
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
                  <div class="details microfilm-color  mt-5">
                    <p> <i class="fa-light fa-tv ml-5"></i>الجودة 1080HD</p>
                  </div>
                  <div class="details microfilm-color mt-5">
                    <p> <i class="fa-light fa-eye ml-5"></i>المشاهدات 200</p>
                  </div>
                  <div class="details microfilm-color  mt-5">
                    <p> <i class="fa-light fa-calendar ml-5"></i>سنة الإصدار 2022</p>
                  </div>
                  <div class="details microfilm-color  mt-5">
                    <p> <i class="fa-light fa-clock ml-5"></i>مدة العرض 180min</p>
                  </div>
                </div>



              </v-col>

            </v-row>

          </div>
        </v-container>

      </div>

    </div>




  </article>
</template>

<script>
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
.inner-content {
  position: relative;
  z-index: 2;
  background-image: url(#{$GroupPath}/Group.png);
  background-size: cover;
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
}


.theme--light.v-application .slug-wrap
{
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
    padding: 18px;
    clip-path: polygon(10px 0px, 100% 0px, 90% 100%, 13% 70%);
    background: linear-gradient(270deg, #F00B51 0, #730062 100%);
  }
}
</style>
