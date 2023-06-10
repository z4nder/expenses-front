<template>
  <div>
    <div class="flex items-center justify-between py-5">
      <h1 class="text-xl">Despsesas</h1>
      <router-link :to="{ name: 'expense.create' }">
        <v-button>Criar</v-button>
      </router-link>
    </div>

    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-5">
      <li
        v-for="expense in expenses"
        :key="expense.id"
        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="truncate text-sm font-medium text-gray-900">
                {{ expense.description }}
              </h3>
              <span
                class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                >{{ expense.formatted_value }}</span
              >
            </div>
            <p class="mt-1 truncate text-sm text-gray-500">{{ expense.date }}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a
                href="#"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <PencilIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
                Editar
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                href="#"
                class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <TrashIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
                Remover
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import useExpense from '../../composables/useExpense'
const { index, expenses } = useExpense()
import { onMounted, reactive } from 'vue'
import { PencilIcon, TrashIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/24/outline'

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

onMounted(async () => {
  await index()
})
</script>
