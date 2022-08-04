<template>
  <div>

    <!---------- Start Navigation Drawer ---------->
  <v-navigation-drawer class="hidden-md-and-up" v-model="drawer"  fixed :right="$vuetify.rtl">
    <v-list-item class="pa-3">
      <div class="logo">
        <NuxtLink to="/">
          <v-img max-height="50" max-width="150" :src="require('static/images/logo.png')" ></v-img>

        </NuxtLink>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="close-icon" icon @click="drawer = !drawer"> <v-icon>mdi-close</v-icon></v-btn>
    </v-list-item>
  <sidebar />
  </v-navigation-drawer>
  <!---------- End Navigation Drawer ---------->

   <!---------- Start App Bar ---------->
    <v-app-bar app height="85px" fixed  elevation="0">
      <v-container class="pa-0 fill-height">
        <v-app-bar-nav-icon class="hidden-md-and-up"  @click.stop="drawer = !drawer" />
        <NuxtLink to="/">
         <v-img max-height="50" max-width="180" :src="require('static/images/logo.png')" ></v-img>

        </NuxtLink>
        <v-spacer />
           <v-toolbar-items
         class="hidden-md-and-down DesktopNav"
        v-for="(item, i) in items" :key="i">
           <v-btn text v-if="!item.subitems" :to="item.to" router>
           {{ item.title }}
           </v-btn>

       <v-menu

          transition="slide-x-transition"
          content-class="nav-menu"
          min-width="200"
          v-else
          :key="item.title"
          :value="false"
          exact
          active-class="primary--text"
        >
<!--       open-on-hover bottom offset-y transition="scroll-y-reverse-transition" -->

            <template v-slot:activator="{ on, attrs }">
              <v-btn :ripple="false" text v-bind="attrs" v-on="on">
               {{ item.title }}
                  <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
              v-for="subitem in item.subitems"
              :to="subitem.to"
              :key="subitem.title"
              active-class="primary--text"
              >
                <v-list-item-title>{{ subitem.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>


        </v-toolbar-items>





<nav-search />
      </v-container>
    </v-app-bar>
   <!---------- End App Bar ---------->




  </div>

</template>

<script>
import NavSearch from "~/components/Header/NavSearch";
import Sidebar from "~/components/Header/Sidebar";
export default {
  components: {Sidebar, NavSearch},
  data () {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      fixed: false,
            items: [
          {title: 'الرئيسية', to: '/'},
           {title: 'الأفلام', to: '/movies'},
          { title: 'الأفلام',
            subitems: [
              {title: 'أفلام عربى', to: '/gallery'},
              {title: 'أفلام اجنبى', to: '/faq'},
              {title: 'أفلام هندي', to: '/TestPage'},
            ]
          },
          {title: 'المسلسلات', to: '/blog'},
          {title: 'البرامج التلفزيونية', to: '/products'},
          {title: 'المسلسلات', to: '/المسلسلات'},
          {title: 'رمضان', to: '/TestPage'},

        {title: 'قريبا', to: '/contact'},
      ],
    }

  },

}
</script>

<style scoped lang="scss">
</style>
