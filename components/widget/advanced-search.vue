<template>
  <div>
    <v-container>
      <v-row>
        <v-col lg="4">
          <v-autocomplete
            v-model="friends"
            :disabled="isUpdating"
            :items="tags"
            label="Select"
            item-value="name"
            :item-text="item => `${item.slug}`"
  >
 <template v-slot:item="{ item }">
  <NuxtLink :to="`/tag/${item.slug}`" class="white--text">
                  <span class="ml-3">#</span>{{ item.name }}
                </NuxtLink>


 </template>
</v-autocomplete>

       
        </v-col>
      </v-row>
    </v-container>




  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
