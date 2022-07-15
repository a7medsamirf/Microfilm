<template>
<div class="mt-16">

     <v-btn
      depressed
      color="default"
    >
      الرئيسية
    </v-btn>


    <TestiCard />


</div>
</template>

<script>
import TestiCard from '~/components/TestiCard.vue';
export default {
    name: "IndexPage",
    components: { TestiCard }
}
</script>
