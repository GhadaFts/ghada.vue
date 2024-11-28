<template>
    <section class=" bg-white py-12" v-if="product">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <img 
                        :src="require(`@/assets/images/${product.image1}`)" 
                        alt="Product Image" 
                        class=" mx-10 w-96 h-auto object-contain rounded-lg shadow-lg"
                    />
                </div>
                <div class="flex flex-col justify-center">
                    <h1 class="text-3xl font-bold text-gray-900">Nom du produit</h1>
                    <p class="mt-4 text-lg text-gray-700">
                        Découvrez ce produit de qualité exceptionnelle conçu pour améliorer votre quotidien. Fabriqué avec soin, il combine style et fonctionnalité.
                    </p>
                    <p class="mt-6 text-2xl font-semibold text-green-600">{{ product.prix }}</p>
                    <div class="mt-6 flex items-center gap-4">
                        <button 
                        class="rounded-md bg-green-600 px-6 py-3 text-black text-sm font-medium hover:bg-green-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Acheter maintenant
                        </button>
                        <button 
                            class="rounded-md bg-gray-200 px-6 py-3 text-gray-700 text-sm font-medium hover:bg-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        >
                            Ajouter au panier
                        </button>
                    </div>

            
                    <div class="mt-8">
                        <h2 class="text-xl font-semibold text-gray-800">Caractéristiques :</h2>
                            <ul class="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                                <li>Matériau de haute qualité</li>
                                <li>Design moderne et élégant</li>
                                <li>Durable et facile à entretenir</li>
                                <li>Disponible en plusieurs couleurs</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import ProduitService from '@/services/ProduitService.js'        

    export default {
        props: ['id'],
        data() {
            return {
                product: null
            }
        },
        created(){
            ProduitService.getProduit(this.id)
            .then(response => {
                this.product = response.data
            })
            .catch(error => {
                console.log('There was an error:', error.response)
            })
        }
    }
    

</script>