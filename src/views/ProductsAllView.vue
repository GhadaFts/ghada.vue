<template>
  <img src="../assets/images/pp1.png" class="image" >
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
<style>
.image{
  width: 100%;
}
</style>
