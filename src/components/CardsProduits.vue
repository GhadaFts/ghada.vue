<template>
    <div class="flex flex-col items-center justify-center bg-white shadow-md hover:scale-105 duration-300" 
      v-for="event in sliceTab" :key="event.id">
      <a>
        <img :src="event.poster" alt="Event Poster" />
      </a>
      <div class="px-4 py-3 flex flex-col items-center justify-center">
        <span class="text-gray-400 uppercase text-sm">{{ event.title }}</span>
        <p class="text-lg  font-bold block truncate capitalize">Ma7bes</p>
        <del>
          <p class="text-sm text-gray-600 ml-2">20Dt</p>
        </del>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nombreProduit: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        events: [
          {
            id: 123,
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
    computed: {
            sliceTab(){
                return this.events.slice(0,this.nombreProduit);
      },
    },
  };
  </script>
  