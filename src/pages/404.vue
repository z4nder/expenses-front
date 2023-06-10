<template>
  <div class="py-10 px-10 flex flex-col">
    <h1 class="text-xl text-center">Página não encontrada volte para home</h1>
    <div class="py-10">
      <router-link :to="{ name: 'home' }">
        <v-button>Home</v-button>
      </router-link>
    </div>
  </div>
</template>
