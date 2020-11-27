<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex align-items-center">
      <b-button
        variant="outline-primary"
        :disabled="quantity === 0"
        @click="quantity--"
      >
        -
      </b-button>
      <span class="mx-2">{{ quantity }}</span>

      <b-button variant="outline-primary" @click="quantity++"> + </b-button>
    </div>

    <b-button size="sm" variant="outline-primary" @click="addItemToCart">
      Add 1 for ${{ price }}
    </b-button>
    <b-button
      variant="outline-primary"
      class="d-flex align-items-center details-button"
      v-b-tooltip.hover
      title="View more details"
      size="sm"
      :to="'containers/' + item.type"
    >
      <b-icon-info-square-fill scale="2">Details</b-icon-info-square-fill>
    </b-button>
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
      this.$bvToast.toast(
        `Added ${this.item.name['en-gb']} Container to Cart`,
        {
          title: 'All set !',
          toaster: 'b-toaster-bottom-right',
          appendToast: true,
          autoHideDelay: 500
        }
      )
    }
  }
}
</script>

<style></style>
