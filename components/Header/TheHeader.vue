<template>
  <div>

    <!---------- Start Navigation Drawer ---------->
  <v-navigation-drawer dense class="hidden-md-and-up" v-model="drawer"  fixed :right="$vuetify.rtl">
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
    <v-app-bar dense app height="85px" fixed  elevation="0">
      <v-container class="pa-0 fill-height">
        <v-app-bar-nav-icon class="hidden-md-and-up"  @click.stop="drawer = !drawer" />
        <NuxtLink to="/">
         <v-img max-height="50" max-width="180" :src="require('static/images/logo.png')" ></v-img>
        </NuxtLink>

        <v-spacer />
<!--              <AppSearchInput />-->

           <v-toolbar-items
         class="hidden-md-and-down DesktopNav"
        v-for="(item, i) in items" :key="i">
           <v-btn text v-if="!item.subitems" :to="item.to" router>
                     <v-icon dense class="ml-3">{{ item.icon }}</v-icon>

           {{ item.title }}

           </v-btn>




       <v-menu open-on-hover :close-on-content-click="false"
          transition="slide-y-transition"
          content-class="nav-menu rounded-0"
          min-width="200"
          v-else
          :key="item.title"
          :value="false"
          exact
          active-class="primary--text"
        >
<!--       open-on-hover bottom offset-y transition="scroll-y-reverse-transition" -->

            <template v-slot:activator="{ on, attrs }">
              <v-btn  :to="items.to" :ripple="false" text v-bind="attrs" v-on="on">
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
import AppSearchInput from "../widget/AppSearchInput.vue";
export default {
  components: { Sidebar, NavSearch, AppSearchInput },
  data () {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      fixed: false,
            items: [
           {icon: 'fa-thin fa-house', title: 'الرئيسية', to: '/'},
           { icon: 'fa-thin fa-camcorder', title: 'الأفلام', to: '/Movies',
            subitems: [
              {title: 'أفلام عربى', to: '/category/Arabic-Movies'},
              {title: 'أفلام اجنبى', to: '/category/English-Movies'},
              {title: 'أفلام هندي', to: '/category/Indian-Movies'},
            ]
          },
          {title: 'أفلام', to: '/movies'},
          {title: 'المسلسلات', to: '/Series'},

        {title: 'قريبا', to: '/coming-soon'},
      ],
    }

  },

}
</script>

<style scoped lang="scss">
</style>
