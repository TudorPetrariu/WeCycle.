<template>
  <nuxt-link :to="'containers/' + id">
    <b-card @click="seeCurrentProduct">
      <p>{{ container.name['nl-nl'] }}</p>
      <p>{{ container.sizes[0] }}</p>
      <p>{{ container.description['en-gb'] }}</p>
    </b-card>
  </nuxt-link>
</template>

<script>
export default {
  props: ['container', 'id'],
  methods: {
    seeCurrentProduct() {
      this.$store.commit('containers/saveProductDetails', this.container)
    }
  }
}
</script>

<style></style>
