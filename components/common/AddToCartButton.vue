<template>
  <div class="d-flex">
    <b-form-input v-model="quantity" class="col" size="sm" type="number" />
    <b-button size="sm" @click="addItemToCart"> Add to Cart </b-button>
  </div>
</template>

<script>
export default {
  props: ['item', 'price'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    addItemToCart() {
      const order = {
        name: this.item.name,
        description: this.item.description,
        sizes: this.item.sizes,
        id: this.item.stream_product_id,
        quantity: this.quantity || 1,
        price: this.price
      }
      this.$store.commit('cart/setProductToCart', order)
    }
  }
}
</script>

<style></style>
