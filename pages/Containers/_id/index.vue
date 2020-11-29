<template>
  <b-container
    id="card_details_page "
    class="d-flex justify-content-center align-items-center"
  >
    <div
      class="details-card-item d-flex flex-column flex-md-row justify-content-center align-items-center"
    >
      <div class="details-card-img">
        <img :src="filterSelectedSize[0].image" alt="" />
      </div>
      <div class="details-card-info">
        <div
          class="details-card-date d-flex align-items-center justify-content-between"
        >
          <span>{{ currentProduct.name['en-gb'] }} </span>
          <b-form-select
            class="details-card-actions w-50 single-product-dropdown"
            v-model="selectedSize"
          >
            <template #first>
              <b-form-select-option :value="selectedSize" disabled>{{
                selectedSize
              }}</b-form-select-option>
            </template>
            <b-form-select-option
              v-for="size in currentProduct.sizes"
              :value="size.size"
              :key="size.size"
              v-show="size.size !== filterSelectedSize[0].size"
              >{{ size.size }} L</b-form-select-option
            >
          </b-form-select>
        </div>
        <h1 class="details-card-title">
          $ {{ filterSelectedSize[0].unit_price_pickup }}
        </h1>
        <ul class="details-card-text">
          <spa>
            {{ currentProduct.description['en-gb'] }}
          </spa>

          <li class="d-flex justify-content-between">
            <span> Placement </span>
            <strong>{{
              filterSelectedSize[0].unit_price_placement | replaceNull
            }}</strong>
          </li>
          <li class="d-flex justify-content-between">
            Rent
            <strong>{{
              filterSelectedSize[0].unit_price_rent | replaceNull
            }}</strong>
          </li>
          <li class="d-flex justify-content-between">
            Price <strong>{{ filterSelectedSize[0].unit_price_pickup }}</strong>
          </li>
        </ul>
        <hr />

        <AddToCartButton
          :item="currentProduct"
          :price="filterSelectedSize[0].unit_price_pickup"
        />
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
