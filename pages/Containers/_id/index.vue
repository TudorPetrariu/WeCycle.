<template>
  <b-container
    id="card_details_page"
    class="d-flex justify-content-center align-items-center"
  >
    <div
      class="details-card-item d-flex justify-content-center flex-column align-items-center"
    >
      <div class="details-card-img">
        <img :src="filterSelectedSize[0].image" alt="" />
      </div>
      <div class="details-card-info">
        <div class="details-card-date">
          <span>Sunday</span>
          <span>October 21</span>
        </div>
        <h1 class="details-card-title">Container name</h1>
        <p class="details-card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          animi nisi accusamus. Quibusdam sapiente quos non veritatis totam quo
          et, ab porro labore! Earum, libero blanditiis. Fuga facilis cum odio?
        </p>
        <AddToCartButton
          :item="currentProduct"
          :price="filterSelectedSize[0].unit_price_pickup"
        />
        <b-form-select class="w-50 details-card-actions" v-model="selectedSize">
          <template #first>
            <b-form-select-option :value="selectedSize" disabled>{{
              selectedSize
            }}</b-form-select-option>
          </template>
          <b-form-select-option
            v-for="size in currentProduct.sizes"
            :value="size.size"
            :key="size.size"
            >{{ size.size }} L</b-form-select-option
          >
        </b-form-select>
      </div>
    </div>
  </b-container>
</template>

<script>
import AddToCartButton from '../../../components/common/AddToCartButton'
export default {
  components: {
    AddToCartButton
  },
  data() {
    return {
      selectedSize: 'Size'
    }
  },
  computed: {
    currentProduct() {
      return this.$store.getters['containers/getCurrentProduct']
    },
    filterSelectedSize() {
      if (this.selectedSize === 'Size') {
        return this.currentProduct.sizes
      }
      return this.currentProduct.sizes.filter((product) => {
        return product.size === this.selectedSize
      })
    }
  }
}
</script>
