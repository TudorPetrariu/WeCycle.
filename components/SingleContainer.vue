<template>
  <b-container>
    <b-card
      v-for="item in filterSelectedSize"
      :key="item.size"
      @click="seeCurrentProduct"
      no-body
      class="ss my-5"
      style="min-height: 300px; max-width: 700px"
    >
      <b-row no-gutters>
        <b-col md="5" class="d-flex justify-content-center align-items-center">
          <b-card-img
            style="min-height: 250px; max-width: 220px"
            class="p-3 rounded-circle"
            :src="item.image"
            alt="container-Image"
          ></b-card-img>
        </b-col>

        <b-col md="7">
          <b-card-body v-if="container.sizes">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex justify-content-between">
                <h4>
                  {{ container.name['en-gb'] }} Container
                  <small>{{ item.size }} L</small>
                </h4>
              </div>
              <b-icon-share variant="primary"></b-icon-share>
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <b-form-select class="card-select" v-model="selectedSize">
                <b-form-select-option :value="selectedSize"
                  >Choose Size</b-form-select-option
                >
                <b-form-select-option
                  v-for="config in container.sizes"
                  :value="config.size"
                  :key="config.size"
                  >{{ config.size }}</b-form-select-option
                >
              </b-form-select>
              <div>
                <h5 class="text-muted">
                  <strong> ${{ item.unit_price_pickup }} </strong>
                </h5>
              </div>
            </div>
            <div>
              <hr />

              <!-- <nuxt-link :to="'containers/' + container.type">
                <b-card-text>
                  Usage - {{ container.description['en-gb'].slice(0, 35) }}
                </b-card-text>
              </nuxt-link> -->
              <li class="d-flex justify-content-between">
                <span> Placement </span>
                <strong>{{ item.unit_price_placement | replaceNull }}</strong>
              </li>
              <hr />
              <li class="d-flex justify-content-between m-0">
                Rent
                <strong>{{ item.unit_price_rent | replaceNull }}</strong>
              </li>
              <hr />
            </div>
            <div>
              <AddToCartButton
                :item="container"
                :price="item.unit_price_pickup"
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
  props: ['container', 'id'],
  components: {
    AddToCartButton
  },
  data() {
    return {
      selectedSize: 'Current Product'
    }
  },
  methods: {
    seeCurrentProduct() {
      this.$store.commit('containers/saveProductDetails', this.container)
    }
  },
  computed: {
    filterSelectedSize() {
      if (this.selectedSize === 'Current Product') {
        return this.container.sizes.slice(0, 1)
      }
      return this.container.sizes.filter((product) => {
        return product.size === this.selectedSize
      })
    }
  }
}
</script>
