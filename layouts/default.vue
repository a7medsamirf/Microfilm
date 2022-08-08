<template>
  <v-app dark>

    <the-header />

      <v-main class="pt-0">
        <Nuxt  />
      </v-main>



<mobile-bar />
    <the-footer />
    <on-scroll />
  </v-app>
</template>

<script>
import TheFooter from "~/components/Footer/TheFooter";
import TheHeader from "~/components//Header/TheHeader";
import OnScroll from "~/components/onScroll";
import MobileBar from '~/components/Header/MobileBar.vue';
export default {
  components: { OnScroll, TheHeader, TheFooter,MobileBar},
  transition: 'slide-bottom'
}
</script>
