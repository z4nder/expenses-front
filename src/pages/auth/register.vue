<template>
  <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <div class="text-center py-2 text-red-600">
      {{ errors?.general }}
    </div>
    <form class="space-y-6" @submit.prevent="submit">
      <v-input
        id="name"
        v-model="form.name"
        :value="form.name"
        :error="errors?.name"
        class="mt-10"
        label="Nome"
        type="text"
      />
      <v-input
        id="email"
        v-model="form.email"
        :value="form.email"
        :error="errors?.email"
        class="mt-10"
        label="Email"
        type="email"
      />
      <v-input
        id="password"
        v-model="form.password"
        :value="form.password"
        :error="errors?.password"
        class="mt-10"
        label="Senha"
        type="password"
      />
      <v-input
        id="password"
        v-model="form.password_confirmation"
        :value="form.password_confirmation"
        :error="errors?.password_confirmation"
        class="mt-10"
        label="Confirmar senha"
        type="password"
      />
      <div>
        <v-button type="submit">Registrar</v-button>
      </div>
    </form>

    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300" />
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500">
            Já possui uma conta ?
            <v-a href="/login">Acesse agora</v-a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAuth from '../../composables/useAuth'
const { register, errors } = useAuth()
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const submit = async () => {
  await register(form)
}
</script>
