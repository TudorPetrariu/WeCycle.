<template>
  <b-container>
    <nuxt-link :to="'containers/' + id">
      <b-card
        v-for="item in container"
        class="ss my-5"
        @click="seeCurrentProduct"
      >
        {{ item.size }}
        <!-- <p>{{ container }}</p>
        <p>Unit Weight {{ container.unit_weight }}</p>
        <div v-for="size in container" :key="size._id">
          <p>Size {{ size }}</p>
          <p>Unit Price Placement{{ size.unit_price_placement }}</p>
        </div>
        <p>{{ container.description }}</p> -->
      </b-card>
    </nuxt-link>
  </b-container>
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

<style>
.ss {
  box-shadow: 10px 5px 5px teal;
}
</style>
