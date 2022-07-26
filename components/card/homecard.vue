<template>

        <v-card
              class="moving"
              outlined
              elevation-0
            >
      
                <div class="blog-img">
                  <v-img
                    v-if="img"
                    :src="require(`~/static/images/poster/${img}`)"
                    :alt="alt"
                    height="350"
                  >
                    <template slot="placeholder">
                      <v-row
                        class="fill-height"
                        justify="center"
                        align="center"
                      >
                        <v-progress-circular
                          width="2"
                          size="100"
                          color="default"
                          indeterminate
                        ></v-progress-circular>
                      </v-row>
                    </template>

                  </v-img>

                </div>

                    <h5>{{ title }}</h5>

              <div  class="quality default">
                  10000
              </div>
              


            </v-card>

</template>

<script>
export default {

  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
   quality: {
      type: Number,
      required: true
    },

  }
}
</script>

<style>

</style>