<template>
  <div id="footer">
    <v-footer
      color="footercolor"
    >
      <v-container>
        <v-row>


          <v-col
            class="lighten-2 text-center white--text"
            cols="12">

                <div class="py-4" >
                   <strong> جميع الحقوق محفوظة</strong> <strong>© {{ new Date().getFullYear() }} <nuxt-link to="/">ميكروفيلم — MicroFilm</nuxt-link></strong>
                </div>
              <div class="social-icons">
                <a><i class="fa-brands fa-facebook-f"></i></a>
                <a><i class="fa-brands fa-youtube"></i></a>
                <a><i class="fa-brands fa-twitter"></i></a>
                <a><i class="fa-brands fa-instagram"></i></a>
                <a><i class="fa-solid fa-square-rss"></i></a>
                <a><i class="fa-brands fa-google-play"></i></a>
                <a> <i class="fa-brands fa-app-store-ios"></i></a>
              </div>
          </v-col>

        </v-row>
      </v-container>
    </v-footer>

  </div>

</template>


<script>
export default {
  name: "The-Footer",
}

</script>

<style lang="scss">
.social-icons:nth-of-type(1)>a::after
    {
      content: '';
      display: inline-block;
      width: 120%;
      height: 80%;
      background: rgba(255,0,0,.2);
      position: absolute;
      border-radius: 50%;
      filter: blur(15px);
      top: -5px;
      left: 0;
    }

.social-icons a i
{
  font-size: 25px;
  margin: 10px;
  box-shadow: 0px 0px 0px 0px rgba(255, 0, 0, 0.2);
}

</style>
