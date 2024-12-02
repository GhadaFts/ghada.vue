<template>
  <div>
    <img :src="require('@/assets/images/couverture1.jpg')" class=" w-screen h-72">
    <ListeProducts :categories="All"/>
  </div>
</template>
<script>

  import ListeProducts from "@/components/ListeProducts.vue";
  export default {
    name: "ProductsAllView",
    components: {
      ListeProducts,
    },
    data() {
      return {}
    }
  };

</script>
