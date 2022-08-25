<template>
  <div>
    <!---------- Start Navigation Drawer ---------->
    <v-list nav dense >
      <div v-for="(link, i) in links" :key="i">

        <v-list-item
          v-if="!link.subLinks"
          :to="link.to"
           active-class="default--text "
          
        >
          <v-list-item-icon>
            <v-icon dense>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="link.title" />
        </v-list-item>

        <v-list-group
          v-else
          
          :key="link.title"
          :prepend-icon="link.icon"
          active-class="default--text"
        >
          <template v-slot:activator >
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="sublink in link.subLinks"
            :to="sublink.to"
            :key="sublink.title"
          >
            <v-list-item-icon>
              <v-icon dense>{{ sublink.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ sublink.title }}</v-list-item-title>

          </v-list-item>

        </v-list-group>

      </div>

    </v-list>
    <!---------- End Navigation Drawer ---------->
  </div>
</template>
<script>

export default {
  name: "Sidebar",
  data () {
    return {
        links: [
          {icon: 'fa-thin fa-house', title: 'الرئيسية', to: '/'},
           { icon: 'fa-regular fa-camera-movie', title: 'الأفلام', to: '/movies'},
          { icon: 'fa-regular fa-camera-movie', title: 'الأفلام',
            subLinks: [
              {icon: 'fa-regular fa-camera-movie', title: 'أفلام عربى', to: '/'},
              {title: 'أفلام اجنبى', to: '/faq'},
              {title: 'أفلام هندي', to: '/TestPage'},
            ]
          },
          {title: 'المسلسلات', to: '/'},
          {title: 'البرامج التلفزيونية', to: '/'},
          {title: 'المسلسلات', to: '/Series'},
          {title: 'رمضان', to: '/TestPage'},

        {title: 'قريبا', to: '/coming-soon'},
      ],
 

    }

  },


}
</script>
<style scoped lang="scss">

</style>