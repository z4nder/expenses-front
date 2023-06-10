<template>
  <div>
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        :id="id"
        ref="input"
        :class="computedClass"
        class="block w-full pr-10 focus:outline-none sm:text-sm rounded-md"
        :name="name"
        :type="type"
        :value="value"
        :required="required"
        step="0.01"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div
        v-if="error"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
      </div>
    </div>
    <p v-if="error" :id="`${id}-error`" class="mt-2 text-sm text-red-600">
      {{ error }}
    </p>
  </div>
</template>

<script>
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'
export default {
  components: { ExclamationCircleIcon },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-id`
      }
    },
    name: {
      type: String,
      default() {
        return `text-input-name`
      }
    },
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    label: String,
    error: String,
    required: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    computedClass() {
      if (this.error)
        return 'border-red-300 text-red-900 placeholder-red-300  focus:ring-red-500 focus:border-red-500'
      if (this.disabled)
        return 'border-gray-300 text-gray-900 placeholder-gray-300  focus:ring-gray-500 focus:border-gray-500 cursor-not-allowed '
      return 'border-gray-300 text-primary-900 placeholder-primary-300  focus:ring-primary-500 focus:border-primary-500'
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end)
    }
  }
}
</script>
