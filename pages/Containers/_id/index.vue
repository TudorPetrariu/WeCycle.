<template>
  <div>
    {{ $route.params.id }}
    <hr />
    <div>
      {{ currentProduct.type }}
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
