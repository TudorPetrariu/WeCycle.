<template>
  <section class="landing-page">
    <h1>Home</h1>
  </section>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('containers/fetchRecycleProducts')
  }
}
</script>

<style></style>
