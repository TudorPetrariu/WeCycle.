<template>
  <div>
    <div>
      <h1>Home</h1>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch('containers/fetchRecycleProducts')
  }
}
</script>

<style></style>
