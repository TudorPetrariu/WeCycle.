<template>
  <nuxt-link :to="'containers/' + id">
    <div>{{ container }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['container', 'id']
}
</script>

<style></style>
