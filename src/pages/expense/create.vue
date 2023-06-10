<template>
  <div>
    <div class="flex items-center justify-between py-5">
      <h1 class="text-xl">Criar despesa</h1>
      <router-link :to="{ name: 'expense.index' }">
        <v-button>Voltar</v-button>
      </router-link>
    </div>
    <div class="px-10">
      <form class="space-y-6" @submit.prevent="submit">
        <v-input
          id="description"
          v-model="form.description"
          :value="form.description"
          :error="errors?.description"
          class="mt-10"
          label="Descricão"
          type="text"
        />
        <v-input
          id="data"
          v-model="form.date"
          :value="form.date"
          :error="errors?.date"
          class="mt-10"
          label="Data"
          type="date"
        />
        <v-money
          id="value"
          v-model="form.value"
          :value="form.value"
          :error="errors?.value"
          class="mt-10"
          label="Valor R$"
          type="number"
        />
        <div>
          <v-button type="submit">Criar</v-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import useExpense from '../../composables/useExpense'
const { store, errors } = useExpense()
import { reactive } from 'vue'

const form = reactive({
  description: '',
  date: '',
  value: ''
})

const submit = async () => {
  await store(form)
}
</script>
