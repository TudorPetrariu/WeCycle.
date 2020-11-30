<template>
  <section class="landing-page">
    <b-button :to="'/ourProducts'">Explore out products</b-button>
  </section>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('containers/fetchRecycleProducts')
  }
}
</script>
