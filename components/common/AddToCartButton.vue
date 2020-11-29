<template>
  <div
    class="d-flex justify-content-between align-items-center add-multiple-to-cart-btn"
  >
    <b-button
      class="px-3 py-2 add-to-cart-button"
      size="sm"
      @click="addItemToCart"
    >
      Add {{ quantity === 0 ? '1' : quantity }} for ${{
        cartItemsPrice === 0 ? this.price : cartItemsPrice
      }}
    </b-button>
    <div class="d-flex align-items-center">
      <b-button
        class="substraction-button px-3"
        :disabled="quantity === 1"
        @click="getCartCurrentPrice('substraction')"
      >
        -
      </b-button>
      <span class="mx-2">{{ quantity }} </span>
      <b-button @click="getCartCurrentPrice('addition')"> + </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemSize', 'item', 'price'],
  data() {
    return {
      quantity: 1,
      cartItemsPrice: 0
    }
  },
  methods: {
    addItemToCart() {
      const order = {
        name: this.item.name,
        description: this.item.description,
        itemSize: this.itemSize,
        id: this.item.stream_product_id,
        quantity: this.quantity || 1,
        price: this.price
      }

      this.$store.commit('cart/setProductToCart', order)
    },
    getCartCurrentPrice(para) {
      para === 'addition' ? this.quantity++ : this.quantity--
      this.cartItemsPrice = this.quantity * this.price
    }
  }
}
</script>

<style></style>
