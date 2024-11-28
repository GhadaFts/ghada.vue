<template>
  <div class="about">
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
