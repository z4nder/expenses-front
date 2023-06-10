<template>
  <a :href="href" class="font-medium text-primary-500 hover:text-primary-500">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>
