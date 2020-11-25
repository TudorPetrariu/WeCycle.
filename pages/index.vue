<template>
  <div>
    <div>
      <h1>Home</h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('containers/fetchRecycleContainers')
  }
}
</script>

<style></style>
