<template>
  <div>
    <v-modal
      title="Deseja realmente deletar ?"
      :open="showDeleteExpense"
      @onClose="showDeleteExpense = false"
    >
      <ExpenseDelete
        :expense="selectedExpense"
        @onDelete="refresh"
        @onCancel="showDeleteExpense = false"
      />
    </v-modal>

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
              <router-link
                :to="{ name: 'expense.edit', params: { id: expense.id } }"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <PencilIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
                Editar
              </router-link>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <button
                @click="openDelete(expense)"
                class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <TrashIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
                Remover
              </button>
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
import { onMounted, ref } from 'vue'
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline'
import ExpenseDelete from '../../components/expense/delete.vue'

onMounted(async () => {
  await index()
})

const selectedExpense = ref()
const showDeleteExpense = ref(false)
const openDelete = (expense: any) => {
  showDeleteExpense.value = true
  selectedExpense.value = expense
}
const refresh = async () => {
  showDeleteExpense.value = false
  await index()
}
</script>
