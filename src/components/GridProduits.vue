<template>
    <div class="mx-10 my-24">
      <h1 class="text-5xl text-center my-8 text-green">Best Produits</h1>
      <div class="grid grid-cols-1 gap-4  lg:grid-cols-3 lg:gap-8">
        <CardsProduits :nombreProduit="3"/>
      </div>
    </div>
  </template>
  
  <script>
  import CardsProduits from './CardsProduits.vue';
  
  export default {
    name: "Grid3Produits",
    components: {
      CardsProduits,
    },
    data() {
      return {
        events: [
          {
            id: 13,
            title: "Cat Adoption Day",
            poster: "https://tonusol.com/img/cms/Sansevieria-pot.jpg",
          },
          {
            id: 456,
            title: "Community Gardening",
            poster: "https://tonusol.com/img/cms/Sansevieria-pot.jpg",
          },
          {
            id: 789,
            title: "Beach Cleanup",
            poster: "https://tonusol.com/img/cms/Sansevieria-pot.jpg",
          },
          {
            id: 789,
            title: "Beach Cleanup",
            poster: "https://tonusol.com/img/cms/Sansevieria-pot.jpg",
          },
          {
            id: 789,
            title: "Beach Cleanup",
            poster: "https://tonusol.com/img/cms/Sansevieria-pot.jpg",
          },
          {
            id: 789,
            title: "Beach Cleanup",
            poster: "https://tonusol.com/img/cms/Sansevieria-pot.jpg",
          },
        ],
      };
    },
  };
  </script>
  