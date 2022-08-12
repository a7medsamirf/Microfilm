<template>
  <dir>
    {{ car.slug }}
  </dir>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // fetch our article here
    const car = await $content("cars", params.slug).fetch();

    return { car };
  },
};
</script>

<style>
</style>