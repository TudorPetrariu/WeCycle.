<template>
  <b-container>
    <b-card
      @click="seeCurrentProduct"
      no-body
      class="my-5 d-flex justify-content-between"
      style="min-height: 300px; max-width: 700px"
    >
      <b-row no-gutters>
        <b-col md="5" class="d-flex justify-content-center align-items-center">
          <b-card-img
            style="min-width: 15rem; max-width: 15rem; height: 15rem"
            class="p-3 rounded-circle"
            :src="filterSelectedSize[0].image"
            alt="container-Image"
          ></b-card-img>
        </b-col>

        <b-col md="7">
          <b-card-body v-if="productDetails.sizes">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-betwee">
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
                <b-icon-info-square-fill
                  role="img"
                  font-scale="2"
                  variant="primary"
                  scale="1"
                  >Details</b-icon-info-square-fill
                >
              </b-button>
            </div>
            <b-card-text class="mt-2">
              <div
                class="d-flex justify-content-between align-items-center card-list-select"
              >
                <div>
                  <b-form-select
                    :disabled="productDetails.sizes.length === 1"
                    class=""
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
                </div>
                <h2 class="text-muted d-flex align-items-center card-lis-price">
                  <img
                    class="euro-symbol"
                    style="height: 0.9rem; box-shadow: none"
                    :src="euroSVG"
                    alt="euro-symbol"
                  />
                  <span>
                    {{ filterSelectedSize[0].unit_price_pickup }}
                  </span>
                </h2>
              </div>
            </b-card-text>
            <div>
              <hr class="my-1" />

              <div class="d-flex flex-column details-card-text">
                <span class="d-flex justify-content-between align-items-center">
                  Rent
                  <b-badge variant="primary text-white px-4 py-2 w-25">{{
                    filterSelectedSize[0].unit_price_rent | replaceNull
                  }}</b-badge>
                </span>
                <hr class="my-1" />
                <span class="d-flex justify-content-between align-items-center">
                  Placement
                  <b-badge variant="primary text-white px-4 py-2 w-25">
                    {{
                      filterSelectedSize[0].unit_price_placement | replaceNull
                    }}</b-badge
                  >
                </span>
                <hr class="my-1" />
                <span class="d-flex justify-content-between align-items-center">
                  Rent
                  <b-badge variant="primary text-white px-3 py-2 w-25">{{
                    filterSelectedSize[0].unit_price_pickup | replaceNull
                  }}</b-badge>
                </span>
                <hr class="my-1" />
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
        </b-col>
      </b-row>
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
      this.$store.commit('containers/saveProductDetails', this.productDetails)
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
