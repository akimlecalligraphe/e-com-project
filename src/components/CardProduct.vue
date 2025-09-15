<script setup>
import { ref, watchEffect, defineProps, computed } from 'vue';


const props = defineProps({
  selectedCategory: String,
  id: Number,
})

// Reactive variables
const data = ref([]);
const error = ref(null);

// Fetch data function
watchEffect(async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    data.value = await response.json();
    // console.log(data.value.products);

  } catch (err) {
    error.value = err.message;
  }
});

const filteredProducts = computed(() => {
  if (!props.selectedCategory) {
    return data.value.products;
  }
  return data.value.products.filter((product) => product.category === props.selectedCategory)
})

// const emit = defineEmits(['item-selected']);

// const route = useRoute()

// const emitClickEvent = () => {
//   const id = computed(() => parseInt(route.params.id));
//   emit('item-selected', id.value);
// }

// Fetch data when the component is mounted
// onMounted(() => {
//   fetchData();
// });


</script>


<template>
  <section v-for="item in filteredProducts" :key="item.id"
    class="flex justify-center items-center md:mx-10 py-8 antialiased dark:bg-gray-900 md:py-12">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="relative w-70 mb-4 grid sm:grid-cols-2 md:mb-8 lg:grid-cols-4 xl:grid-cols-2 ">
        <div
          class="w-80 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div class="h-40 w-full">

            <div class="relative overflow-hidden">
              <img class="object-cover ml-14 w-40 h-45 p-2" :src="item.images[0]" alt="Product">
              <div class="absolute inset-0 bg-black opacity-40"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <RouterLink :to="{name: 'products.show', params: {id: item.id}}"
                  class="text-sm absolute top-0 right-0 bg-white text-gray-900 font-bold py-2 px-4 mt-3 mr-3 rounded-md w-32 text-center hover:bg-gray-300  transition duration-500 ease-in-out">View
                  Product</RouterLink>
                <div class="flex items-center justify-end gap-1 capitalize">
                  <span
                    class="absolute bottom-0 left-0 bg-gray-900 px-4 py-2 text-white text-sm hover:bg-gray-700 hover:text-white transition duration-500 ease-in-out">
                    {{ item.category }}
                  </span>
                </div>

              </div>
            </div>
          </div>
          <div class="pt-6">
            <div class="mb-4 flex items-center justify-between gap-4">
              <span class="me-2 rounded  text-white px-2.5 py-0.5 text-xs font-medium">
                Up to {{ item.discountPercentage }}% off </span>
              <div class="flex items-center justify-end gap-1">
                <!-- <span class="me-2 rounded bg-gray-400 text-white px-2.5 py-0.5 text-xs font-medium "></span> -->
              </div>
            </div>
            <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{{
              item.title }}</a>
            <div class="mt-2 flex items-center gap-2">
              <div class="flex items-center">
                <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>

                <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>

                <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>

                <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>

                <svg class="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>
              </div>

              <p class="text-sm font-medium text-gray-900 dark:text-white">{{ item.rating }}</p>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">({{ item.stock }})</p>
            </div>

            <ul class="mt-2 flex items-center gap-4">
              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
              </li>

              <li class="flex items-center gap-2">
                <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
              </li>
            </ul>

            <div class="mt-4 flex items-center justify-between gap-4">
              <span class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">${{ item.price }}</span>

              <!-- <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> -->
              <button type="button"
                class="inline-flex items-center rounded-lg bg-primary-700  text-sm font-medium text-white bg-gray-900 hover:bg-gray-600 focus:ring-4 focus:outline-none px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                </svg>
                Add to cart
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped></style>
