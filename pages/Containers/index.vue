<template>
  <div>
    <p>COntainers List</p>
    <SingleContainer
      v-for="container in getAllProducts"
      :key="container._id"
      :id="container._id"
      :container="container"
    />
  </div>
</template>

<script>
import SingleContainer from '../../components/SingleContainer'
export default {
  components: {
    SingleContainer
  },
  computed: {
    getAllProducts() {
      return this.$store.getters['containers/getProductsList']
    }
  },
  head() {
    return {
      title: 'Explore tools',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place to ReCycle'
        }
      ]
    }
  }
}
</script>
