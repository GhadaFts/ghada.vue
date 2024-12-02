<template>
    <section class="bg-white py-12" v-if="product">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Section image -->
                <div class="flex flex-col items-center">
                    <!-- Image principale avec transition -->
                    <div class="relative w-96 h-96">
                        <img :key="product.indice" :src="productImage" alt="Product Image"
                            class="w-full h-full object-contain rounded-lg shadow-lg transition-opacity duration-500 ease-in-out opacity-100" />
                    </div>

                    <!-- Miniatures -->
                    <div class="flex mt-6 space-x-4">
                        <img v-for="(image, index) in product.images" :key="index"
                            :src="require(`@/assets/images/${image}`)" alt="Miniature"
                            class="w-20 h-20 object-contain border border-gray-300 rounded-lg cursor-pointer hover:opacity-80 transition-all duration-300"
                            @mouseover="changeImage(index)" />
                    </div>
                </div>

                <!-- Section détails du produit -->
                <div class="flex flex-col justify-center">
                    <h1 class="text-3xl font-bold text-gray-900">{{ product.nom }}</h1>
                    <p class="mt-4 text-lg text-gray-700">
                        {{ product.description }}
                    </p>
                    <p class="mt-6 text-2xl font-semibold text-green-600">{{ product.prix }} TND</p>
                    <input class="rounded-md px-3 py-3 bg-gray-200 w-16" min="0" type="number" />
                    <div class="my-4">
                        <p v-if="product.quantité > 10" class=" text-green">En Stock</p>
                        <p v-else-if="product.quantité > 0 && product.quantité <= 10" class="text-yellow-500">
                            Presque épuisé
                        </p>
                        <p v-else class="text-red-500">En Rupture de Stock</p>
                    </div>
                    <!-- Boutons -->
                    <div class="mt-6 flex items-center gap-4">
                        <button
                            class="rounded-md bg-white px-6 py-3 text-black text-sm font-medium hover:bg-green-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            buy now
                        </button>
                        <button
                            class="rounded-md bg-gray-200 px-6 py-3 text-gray-700 text-sm font-medium hover:bg-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                            @click="addToCart()">
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <p class="mt-4 text-lg text-gray-700">
            {{ product.astuce }}
        </p>
    </section>
    <div v-else class="text-center py-12">
        <p class="text-lg text-gray-700">Chargement...</p>
    </div>
    <!--modale-->
    <!-- Modale -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 class="text-lg font-bold">{{ product.nom }} a été ajouté au panier</h2>
            <p class="mt-2">Vous pouvez continuer vos achats ou consulter votre panier.</p>
            <div class="mt-4 flex justify-end gap-4">
                <button class="bg-green  px-4 py-2 rounded-md" @click="closeModal">Fermer</button>
            </div>
        </div>
    </div>
</template>

<script>
import ProduitService from "@/services/ProduitService.js";

export default {
    props: ["id"],
    data() {
        return {
            product: null,
            showModal: false,  // Contrôle l'affichage de la modale

        };
    },
    computed: {
        productImage() {
            if (this.product) {
                return require(`@/assets/images/${this.product.images[this.product.indice]}`) || '';
            }
            return "";
        },
        enStock() {
            if (!this.product || this.product.quantité <= 0) {
                return false;
            }
            return true;
        }
    },
    methods: {
        addToCart() {
            this.$emit("add-to-cart"); // Notifie App.vue
            this.showModal = true;
        },
        changeImage(indice) {
            if (this.product) {
                this.product.indice = indice;
            }
        },
        closeModal() {
            this.showModal = false;
        }
    },
    created() {
        ProduitService.getProduit(this.id)
            .then((response) => {
                this.product = response.data;
                this.product.indice = 0;
            })
            .catch((error) => {
                console.log("There was an error:", error.response);
            });
    },
};
</script>

<style>
/* Aucun style personnalisé nécessaire avec Tailwind CSS */
</style>
