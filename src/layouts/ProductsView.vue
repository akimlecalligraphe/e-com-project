<script setup>
import { onMounted, ref } from 'vue'
import CardProduct from '@/components/CardProduct.vue';
import Category from '@/components/Category.vue';
import ProductDetails from './ProductDetails.vue';

const activeCategory = ref('')

const handleFilterSelected = (category) => {
  activeCategory.value = category
}

const displayData = ref(false);
const apiData = ref(null);
const error = ref(null);

const handleItemSelected = async (id) => {
  try {
    apiData.value = await fetch(`https://dummyjson.com/products/${id}`);
    if (!apiData.value.ok) {
      throw new Error('Failed to fetch data');
    }
    displayData.value = await apiData.value.json();
    console.log(displayData.value.products);

  } catch (err) {
    error.value = err.message;
  }
}

onMounted(() => {
  handleItemSelected()
});


</script>


<template>

  <section class="flex flex-row">
    <article class="relative left-70 mt-32">
      <Category @filter-selected="handleFilterSelected" />
      <ProductDetails v-if="displayData" :data="apiData" />
    </article>
    <article class="grid grid-cols-3 mx-2 px-30 my-20 relative ml-[200px]">
      <CardProduct :selectedCategory="activeCategory" @item-selected="handleItemSelected" />
    </article>
  </section>

</template>


<style scoped>


</style>
