<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['filter-selected']);

const selectCategory = (category) => {
  emit('filter-selected', category);
}
</script>


<template>
  <button @click="selectCategory('')" class="flex flex-wrap justify-center gap-6 cursor-pointer">
    <input id="filter-mobile-color-1" type="checkbox" name="color[]" value="beige"
      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
    <a class="relative" href="#">
      <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
      <span
        class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-gray-400 hover:text-white">Toutes
        les catégories</span>
    </a>
  </button>

  <button @click="selectCategory('beauty')" class="flex flex-wrap justify-center gap-6 cursor-pointer mt-5">
    <input id="filter-mobile-color-1" type="checkbox" name="color[]" value="beige"
      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
    <a class="relative w-[180px] text-center" href="#">
      <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
      <span
        class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-gray-400 hover:text-white">Beauty</span>
    </a>
  </button>

  <button @click="selectCategory('fragrances')" class="flex flex-wrap justify-center gap-6 cursor-pointer mt-5">
    <input id="filter-mobile-color-1" type="checkbox" name="color[]" value="beige"
      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
    <a class="relative w-[180px] text-center" href="#">
      <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
      <span
        class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-gray-400 hover:text-white">Fragrances</span>
    </a>
  </button>

  <button @click="selectCategory('furniture')" class="flex flex-wrap justify-center gap-6 cursor-pointer mt-5">
    <input id="filter-mobile-color-1" type="checkbox" name="color[]" value="beige"
      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
    <a class="relative w-[180px] text-center" href="#">
      <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
      <span
        class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-gray-400 hover:text-white">Furnitures</span>
    </a>
  </button>

  <button @click="selectCategory('groceries')" class="flex flex-wrap justify-center gap-6 cursor-pointer mt-5">
    <input id="filter-mobile-color-1" type="checkbox" name="color[]" value="beige"
      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
    <a class="relative w-[180px] text-center" href="#">
      <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
      <span
        class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-gray-400 hover:text-white">Groceries</span>
    </a>
  </button>

</template>


<style scoped></style>
