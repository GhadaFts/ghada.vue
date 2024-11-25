<template>
    <div class=" mx-10 my-24">
        <h1 class=" text-5xl text-center my-7 text-dark-green">Best products</h1>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <CardsProduits></CardsProduits>
                <CardsProduits></CardsProduits>
                <CardsProduits></CardsProduits>
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
    };
</script>