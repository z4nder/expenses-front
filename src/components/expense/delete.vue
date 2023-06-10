<template>
  <div class="flex flex-col">
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <button
        type="button"
        class="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        @click="submit"
      >
        Delete
      </button>
      <button
        @click="emit('onDelete')"
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  expense: { type: Object, required: true }
})

import useExpense from '../../composables/useExpense'
const { destroy } = useExpense()

const emit = defineEmits(['onDelete'])

const submit = async () => {
  await destroy(props.expense)
  emit('onDelete')
}
</script>
