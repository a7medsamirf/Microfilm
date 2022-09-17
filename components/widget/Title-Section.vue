<template>
  <div class="title-Section rounded-lg">
    <v-toolbar-title class="right-Title-Section">
      <i class="fas fa-camera-movie default title-icon rounded-lg">  </i>
      <span>{{ head }} </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="left-Title-Section">
      <nuxt-link :to="link" class="MoreFromSection HoverAfter rounded-xl"><span>المزيد</span><div class="title-loader"></div></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title-Section",
  props: {
    head: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  }
}
</script>
