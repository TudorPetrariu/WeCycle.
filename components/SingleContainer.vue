<template>
  <b-container>
    <b-card
      @click="seeCurrentProduct"
      no-body
      class="d-flex align-items-center justify-content-center"
    >
      <b-card-img
        class="p-3 rounded-circle"
        :src="filterSelectedSize[0].image"
        alt="container-Image"
      ></b-card-img>

      <b-card-body v-if="productDetails.sizes">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h4 class="text-secondary">
              {{ productDetails.name['en-gb'] }} Container
            </h4>
          </div>
          <b-button
            v-if="$route.name !== 'ourProducts'"
            class="d-flex align-items-center info-button"
            v-b-tooltip.hover
            title="View more details"
            size="sm"
            :to="'ourProducts/' + id"
          >
            <b-icon-info-square font-scale="2" scale="1"
              >Details</b-icon-info-square
            >
          </b-button>
        </div>
        <b-card-text class="mt-2">
          <div
            class="d-flex justify-content-between align-items-center card-list-select"
          >
            <b-form-select
              :disabled="productDetails.sizes.length === 1"
              class="w-25"
              v-model="selectedSize"
            >
              <template #first>
                <b-form-select-option :value="selectedSize" disabled>{{
                  selectedSize
                }}</b-form-select-option>
              </template>
              <b-form-select-option
                v-for="productSize in productDetails.sizes"
                :value="productSize.size"
                :key="productSize.size"
                v-show="productSize.size !== filterSelectedSize[0].size"
                >{{ productSize.size }} L</b-form-select-option
              >
            </b-form-select>

            <h1
              class="d-flex text-info justify-content-center align-items-center"
            >
              <img
                class="euro-symbol"
                style="height: 0.6rem; box-shadow: none"
                :src="euroSVG"
                alt="euro-symbol"
              />
              {{ filterSelectedSize[0].unit_price_pickup }}
            </h1>
          </div>
        </b-card-text>
        <div>
          <hr class="mt-1 mb-1" />

          <div class="d-flex flex-column details-card-text">
            <span class="d-flex justify-content-between align-items-center">
              Rent
              <b-badge variant="primary text-white px-4 py-2 w-25">{{
                filterSelectedSize[0].unit_price_rent | replaceNull
              }}</b-badge>
            </span>
            <hr class="mt-1 mb-1" />
            <span class="d-flex justify-content-between align-items-center">
              Placement
              <b-badge variant="primary text-white px-4 py-2 w-25">
                {{
                  filterSelectedSize[0].unit_price_placement | replaceNull
                }}</b-badge
              >
            </span>
            <hr class="mt-1 mb-1" />
            <span class="d-flex justify-content-between align-items-center">
              Rent
              <b-badge variant="primary text-white px-3 py-2 w-25">{{
                filterSelectedSize[0].unit_price_pickup | replaceNull
              }}</b-badge>
            </span>
          </div>

          <hr class="mt-1" />
        </div>
        <div>
          <AddToCartButton
            :item="productDetails"
            :price="filterSelectedSize[0].unit_price_pickup"
            :itemSize="
              selectedSize === 'Size'
                ? filterSelectedSize[0].size
                : selectedSize
            "
          />
        </div>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import AddToCartButton from './common/AddToCartButton'
export default {
  props: ['productDetails', 'id'],
  components: {
    AddToCartButton
  },
  data() {
    return {
      selectedSize: 'Size',
      // eslint-disable-next-line no-undef
      euroSVG: require('../assets/icons/euro-currency-symbol.svg')
    }
  },
  methods: {
    seeCurrentProduct() {
      this.$store.commit('products/saveProductDetails', this.productDetails)
    }
  },
  computed: {
    filterSelectedSize() {
      if (this.selectedSize === 'Size') {
        return this.productDetails.sizes
      }
      return this.productDetails.sizes.filter((product) => {
        return product.size === this.selectedSize
      })
    }
  }
}
</script>
