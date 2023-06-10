<template>
  <div>
    <div class="flex items-center justify-between py-5">
      <h1 class="text-xl">Editar despesa</h1>
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
          <v-button type="submit">Atualizar</v-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import useExpense from '../../composables/useExpense'
const { update, errors, show } = useExpense()
import { onMounted, reactive } from 'vue'
const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const form = reactive({
  description: '',
  date: '',
  value: ''
})

onMounted(async () => {
  let product = await show(props.id)

  form.description = product?.description
  form.date = product?.default_date_format
  form.value = product?.value
})

const submit = async () => {
  await update(props.id, form)
}
</script>
