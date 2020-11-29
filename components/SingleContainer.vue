<template>
  <b-container>
    <b-card
      @click="seeCurrentProduct"
      no-body
      class="ss my-5 d-flex justify-content-between"
      style="min-height: 300px; max-width: 700px"
    >
      <b-row no-gutters>
        <b-col md="5" class="d-flex justify-content-center align-items-center">
          <b-card-img
            style="min-height: 250px; max-width: 220px"
            class="p-3 rounded-circle"
            :src="filterSelectedSize[0].image"
            alt="container-Image"
          ></b-card-img>
        </b-col>

        <b-col md="7">
          <b-card-body v-if="productDetails.sizes">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-between">
                <h4>
                  {{ productDetails.name['en-gb'] }} Container
                  <small>{{ filterSelectedSize[0].size }} L</small>
                </h4>
              </div>
              <b-icon-share variant="primary"></b-icon-share>
            </div>
            <b-card-text>
              <div class="d-flex justify-content-between align-items-center">
                <b-form-select
                  :disabled="productDetails.sizes.length === 1"
                  class="w-50"
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
                <div>
                  <h5 class="text-muted">
                    <strong>
                      ${{ filterSelectedSize[0].unit_price_pickup }}
                    </strong>
                  </h5>
                </div>
              </div>
            </b-card-text>
            <div>
              <hr />

              <!-- <nuxt-link :to="'containers/' + container.type">
                <b-card-text>
                  Usage - {{ container.description['en-gb'].slice(0, 35) }}
                </b-card-text>
              </nuxt-link> -->
              <li class="d-flex justify-content-between">
                <span> Placement </span>
                <strong>{{
                  filterSelectedSize[0].unit_price_placement | replaceNull
                }}</strong>
              </li>
              <hr />
              <li class="d-flex justify-content-between m-0">
                Rent
                <strong>{{
                  filterSelectedSize[0].unit_price_rent | replaceNull
                }}</strong>
              </li>
              <hr />
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <AddToCartButton
                :item="productDetails"
                :price="filterSelectedSize[0].unit_price_pickup"
              />
              <b-button
                v-if="$route.name !== 'containers'"
                variant="outline-primary"
                class="d-flex align-items-center info-button"
                v-b-tooltip.hover
                title="View more details"
                size="sm"
                :to="'containers/' + id"
              >
                <b-icon-info-square-fill scale="2"
                  >Details</b-icon-info-square-fill
                >
              </b-button>
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
      selectedSize: 'Size'
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
