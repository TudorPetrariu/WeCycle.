<template>
  <b-container
    id="card_details_page"
    class="d-flex justify-content-center align-items-center"
  >
    <div
      class="details-card-item d-flex flex-column flex-md-row justify-content-center align-items-center"
    >
      <div class="details-card-img">
        <img :src="filterSelectedSize[0].image" alt="card-img" />
      </div>
      <div class="details-card-info">
        <div
          class="details-card-date d-flex align-items-center justify-content-between card-list-select"
        >
          <h3 class="text-secondary">{{ currentProduct.name['en-gb'] }}</h3>
          <div class="d-flex justify-content-center align-items-center">
            <b-form-select
              :disabled="currentProduct.sizes.length === 1"
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
        </div>
        <h1
          class="details-card-title text-info d-flex justify-content-start align-items-center"
        >
          <img :src="euroSVG" alt="euro-symbol" />{{
            filterSelectedSize[0].unit_price_pickup
          }}
        </h1>
        <div class="d-flex flex-column details-card-text">
          <span class="d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <b-badge variant="primary text-white px-4 py-2">2</b-badge>
          </span>
          <hr class="mt-1" />
          <span class="d-flex justify-content-between align-items-center">
            Morbi leo risus
            <b-badge variant="primary text-white px-4 py-2">1</b-badge>
          </span>
          <hr class="mt-1" />
          <span
            class="d-flex justify-content-between align-items-start card-description"
          >
            <!-- <b-badge variant="secondary text-white px-3 py-1 ">Usage</b-badge> -->
            {{ currentProduct.description['en-gb'] }}
          </span>
        </div>
        <hr class="m" />

        <!-- <b-list-group class="details-card-text">

        </b-list-group> -->
        <!-- <ul class="details-card-text">
          <li>

          </li>

          <li class="d-flex justify-content-between">
            <span> Placement </span>
            <strong class="text-secondary">{{
              filterSelectedSize[0].unit_price_placement | replaceNull
            }}</strong>
          </li>
          <li class="d-flex justify-content-between">
            Rent
            <strong class="text-secondary">{{
              filterSelectedSize[0].unit_price_rent | replaceNull
            }}</strong>
          </li>
          <li class="d-flex justify-content-between">
            Price
            <strong class="text-secondary"
              >${{ filterSelectedSize[0].unit_price_pickup }}</strong
            >
          </li>
        </ul>
        <hr /> -->

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
      selectedSize: 'Size',
      // eslint-disable-next-line no-undef
      euroSVG: require('../../../assets/icons/euro-currency-symbol.svg')
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
