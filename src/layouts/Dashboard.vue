<template>
  <div
    class="bg-gradient-to-r from-primary-500 to-primary-800 h-screen min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="rounded-full mx-auto h-40 w-auto" src="~/assets/img/logo.png" alt="Workfow" />
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <slot />
    </div>
  </div>
</template>
