<template>
  <div
    class="d-flex justify-content-between align-items-center add-to-cart-btns"
  >
    <b-button
      class="add-to-cart-button d-flex justify-content-center align-items-center"
      size="sm"
      @click="addItemToCart"
    >
      Add {{ quantity === 0 ? '1' : quantity }} for ${{
        cartItemsPrice === 0 ? this.price : cartItemsPrice
      }}
    </b-button>
    <div class="d-flex align-items-center add-quantity-to-cart-btns">
      <b-button
        class="substraction-button d-flex justify-content-center align-items-center mr-1"
        :disabled="quantity === 1"
        @click="getCartCurrentPrice('substraction')"
      >
        <small> - </small>
      </b-button>
      <b-button
        class="addition-button d-flex justify-content-center align-items-center"
        @click="getCartCurrentPrice('addition')"
      >
        <small> + </small>
      </b-button>
    </div>
    <b-button
      v-if="$route.name !== 'OurProducts'"
      :to="'/ourProducts'"
      class="go-back-button d-flex justify-content-center align-items-center"
    >
      <BIconArrowReturnLeft font-scale="1.8" />
    </b-button>
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
