<template>
  <div class="landing-page d-flex justify-content-center align-items-center">
    <h1>WeCycle.</h1>
    <b-button class="" :to="'/ourProducts'">Explore our products</b-button>
  </div>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('products/fetchRecycleProducts')
  }
}
</script>
