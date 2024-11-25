<template>
  <!--
    Heads up! 👋
  
    This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  -->
  
  <section
    class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
          Let us find your
  
          <strong class="block font-extrabold green"> FAVORITE PLANT. </strong>
        </h1>
  
        <p class="mt-4 max-w-lg text-white sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
          numquam ea!
        </p>
  
        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            class="block w-full rounded bg-green px-12 py-3 text-sm font-medium text-white shadow hover:bg-dark-green focus:outline-none focus:ring active:bg-dark-green sm:w-auto"
          >
            Get Started
          </a>
  
          <a
            href="#"
            class="block w-full rounded bg-white px-12 py-3 text-sm font-medium green shadow hover:text-dark-green focus:outline-none focus:ring active:text-dark-green sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  <Grid3Produits></Grid3Produits>

</template>

<style scoped>
.green {
  color: #10b981;
}
.dark-green {
  color: #047857;
}
</style>

<script>
  import Grid3Produits from '@/components/Grid3Produits.vue';
  export default {
    name: "HomeView",
    components: {
      Grid3Produits,
    },
  };

</script>
