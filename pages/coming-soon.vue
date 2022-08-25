<template>
  <v-app dark>
    <v-main  class="coming-area">
      <v-container fluid fill-height>
        <v-layout align-center justify-center text-center>
          <v-flex xs12 sm8 md4>


                         <v-img
                    max-height="500"
                       max-width="500"
                alt=""
                :src="require(`~/static/images/coming-soon.png`)"
              ></v-img>
                 
      
    
             <v-btn class="mt-5" to="/" depressed color="default"> الصفحة الرئيسية</v-btn>

          </v-flex>
        </v-layout>
      </v-container>
    </v-main>



  </v-app>
</template>

<script>
export default {
  layout: 'empty',
}
</script>
<style lang="scss">

</style>
