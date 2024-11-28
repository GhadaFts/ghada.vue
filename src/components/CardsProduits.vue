<template>
  <div class="flex flex-col items-center  bg-white shadow-md hover:scale-105 duration-300" 
    v-for="produit in produits" :key="produit.id">
    <RouterLink :to="{name :'ProductDetail' , params:{id: produit.id}}">
      <a>
        <img class=" w-56 h-auto object-cover" :src="produit.image1" alt="produit Poster" />
      </a>
      <div class="flex flex-col items-center justify-center my-4">
        <span class="text-gray-400 uppercase text-sm">{{ produit.title }}</span>
        <p class="text-lg  font-bold block truncate capitalize">{{ produit.price }}</p>
        <del>
          <p class="text-sm text-gray-600 ml-2">20Dt</p>
        </del>
      </div>
    </RouterLink>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      produits: {
        type: Array,
        required: true,
      },
    },
    data() {
            return {
            };
    },
  };
  </script>
  