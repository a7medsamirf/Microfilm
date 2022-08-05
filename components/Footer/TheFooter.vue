<template>
  <div id="footer">
    <v-footer
      dark
      padless
    >
      <v-row>
        <v-col class="pb-0" lg="12">
          <v-card
            class="flex"
            flat
            tile
          >
            <v-card-title class="microfilm-color use-text-subtitle">


              <nuxt-link class="py-2 white--text" to="">شرح استخدام الموقع</nuxt-link>
              <nuxt-link class="py-2 white--text" to="">سياسة الخصوصية</nuxt-link>
              <nuxt-link class="py-2 white--text" to="">شروط الاستخدام</nuxt-link>
              <v-spacer></v-spacer>

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
            </v-card-title>
          </v-card>
          <v-card
            class="flex"
            flat
            tile
          >
            <v-card-title class="copyright use-text-subtitle">

              <strong> جميع الحقوق محفوظة</strong> <strong>© {{ new Date().getFullYear() }} <nuxt-link to="/">ميكروفيلم — MicroFilm</nuxt-link></strong>
              <v-spacer></v-spacer>
              <strong> جميع الحقوق محفوظة</strong> <strong>© {{ new Date().getFullYear() }} <nuxt-link to="/">ميكروفيلم — MicroFilm</nuxt-link></strong>

            </v-card-title>

          </v-card>
        </v-col>
      </v-row>




    </v-footer>



  </div>

</template>


<script>
import imgAPI from '~/static/images/imgAPI'
export default {
  name: "The-Footer",
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
}

</script>

<style lang="scss">

.copyright{
  background: linear-gradient(90deg,#4F00BC 0,#29ABE2 100%);
}

</style>














