<template>
  <div>
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
  </div>


</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  name: "TestPage",
  components: {CoolLightBox},
  data: function () {
    return {
      items: [
        {
          thumb: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
          src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
        },
        {
          src: 'https://vimeo.com/43338103',
          thumb: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        },
      ],
      index: null
    };
  },

}
</script>

<style scoped>

</style>
