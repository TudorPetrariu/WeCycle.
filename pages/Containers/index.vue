<template>
  <div>
    <p>COntainers List</p>
    <SingleContainer
      v-for="container in fetchContainers"
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
    fetchContainers() {
      return this.$store.getters['containers/getContainersList']
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
