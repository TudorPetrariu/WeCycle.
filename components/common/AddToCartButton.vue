<template>
  <b-row>
    <b-col sm="12">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <b-button size="sm" :disabled="quantity === 0" @click="quantity--">
            -
          </b-button>
          <span class="p-5">{{ quantity }}</span>

          <b-button size="sm" @click="quantity++"> + </b-button>
        </div>

        <b-button size="sm" class="add-to-cart-button" @click="addItemToCart">
          Add 1 for ${{ price }}
        </b-button>
      </div>
    </b-col>
  </b-row>
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
