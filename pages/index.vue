<template>
  <section class="landing-page">
    <h1>WeCicle.</h1>
    <b-button class="p-5 text-white" :to="'/ourProducts'"
      >Explore out products</b-button
    >
  </section>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('products/fetchRecycleProducts')
  }
}
</script>
