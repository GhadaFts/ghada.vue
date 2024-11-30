<template>
  <div class="flex flex-col items-center bg-white shadow-md hover:scale-105 duration-300" 
    v-for="produit in produits" :key="produit.id">
    <RouterLink :to="{name :'ProductDetail', params: {id: produit.id}}">
      <div>
        <img 
          class="w-56 h-64 object-cover" 
          :src="require(`@/assets/images/${produit.images[produit.indice]}`)"
          alt="produit Poster"
        />
      </div>
      <div class="flex flex-col items-center justify-center my-4">
        <span class="text-gray-500 uppercase text-sm">{{ produit.nom }}</span>
        <p class="text-lg font-bold block truncate capitalize">{{ produit.description1 }}</p>
        <p class="text-sm text-gray-600 ml-2">{{ produit.prix }} TND</p>
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
    return {};
  },
};
</script>
