<template>
  <div>
    <v-container>
      <v-row>
        <v-col lg="4">
          <v-autocomplete
            :items="tags"
            label="Select"
            item-value="name"
          >
            <template v-slot:item="{ item }">

              <v-list-item  v-for="tag in tags" :key="tag.slug">

                <NuxtLink :to="`/tag/${tag.slug}`" class="white--text">
                  <span class="ml-3">#</span>{{ item.name }}
                </NuxtLink>


              </v-list-item>

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
