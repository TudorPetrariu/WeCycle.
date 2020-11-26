<template>
  <b-container>
    <b-card
      v-for="item in filterSelectedSize"
      :key="item.size"
      @click="seeCurrentProduct"
      no-body
      class="overflow-hidden ss my-5"
      style="min-height: 300px"
    >
      <b-row no-gutters class="d-flex align-items-center">
        <b-col
          md="6"
          class="d-flex justify-content-center align-items-center p-5"
        >
          <nuxt-link :to="'containers/' + id">
            <b-card-img
              style="min-height: 200px; max-width: 250px"
              class="p-3"
              :src="item.image"
              alt="Image"
            ></b-card-img>
          </nuxt-link>
        </b-col>
        <b-col md="6">
          <b-card-body
            v-if="container.sizes"
            :title="`${container.type.toUpperCase()} Container`"
          >
            <b-form-select v-model="selectedSize" class="mb-3 w-25">
              <b-form-select-option value="selectedSize"
                >Change Size</b-form-select-option
              >
              <b-form-select-option
                v-for="config in container.sizes"
                :value="config.size"
                :key="config.size"
                >{{ config.size }}</b-form-select-option
              >
            </b-form-select>
            <b-card-text>
              {{ item.unit_price_pickup }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      selectedSize: 'Current Product'
    }
  },
  props: ['container', 'id'],
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

<style>
.ss {
  box-shadow: 10px 5px 5px teal;
}
/* .card {
  border-radius: 40px;
} */
.card img {
  background-color: rgb(247, 247, 247);
  box-shadow: 8px 5px 4px teal;

  border: 5px solid teal;
}
</style>
