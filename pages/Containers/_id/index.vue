<template>
  <div>
    {{ $route.params.id }}
    <hr />
    <div>
      {{ currentProduct }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentProduct() {
      return this.$store.getters['containers/getCurrentProduct']
    }
  }
}
</script>
