<template>
  <div>
    <div class="py-5">
      <dl
        class="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0"
      >
        <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
          <dt class="text-base font-normal text-gray-900">{{ item.name }}</dt>
          <dd class="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div class="flex items-baseline text-2xl font-semibold text-primary-600">
              {{ item.stat }}
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script setup lang="ts">
const stats = [
  {
    name: 'Ultimos 30 dias',
    stat: 'R$ 500'
  },
  {
    name: 'Ultimos 15 dias',
    stat: 'R$ 200'
  },
  {
    name: 'Ultimos 7 dias',
    stat: 'R$ 300'
  }
]
</script>
