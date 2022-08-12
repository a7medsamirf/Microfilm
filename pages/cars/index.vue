<template>
  <div>
    <ul class="max-w-4xl mt-8">
      <li
        v-for="car of cars"
        :key="car.slug"
        class="py-4 pl-4 my-4 border border-gray-500 border-opacity-25 shadow-md rounded-xl"
      >
        <NuxtLink :to="{ name: 'cars-slug', params: { slug: car.slug } }">
          <p>{{ car.slug }}</p>
          <p>{{ car.title }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    // fetch our article here
    const cars = await $content("cars", params.slug).fetch();

    return { cars };
  },
};
</script>

<style>
</style>