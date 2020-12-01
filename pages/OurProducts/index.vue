<template>
  <b-container>
    <div
      class="select-all-sizes d-flex justify-content-center align-items-center"
    >
      <b-form-select v-model="selected">
        <template>
          <b-form-select-option class="text-white" :value="null" disabled
            >-- Filter by size --</b-form-select-option
          >
        </template>
        <b-form-select-option value="All Products"
          >All Products</b-form-select-option
        >
        <b-form-select-option
          v-for="config in options"
          :value="config"
          :key="config"
          >{{ config }} L</b-form-select-option
        >
      </b-form-select>
    </div>
    <div class="singleProduct justify-content-center align-items-center">
      <SingleContainer
        v-for="product in filteredProducts"
        :key="product._id"
        :id="product._id"
        :productDetails="product"
        c
      />
    </div>
  </b-container>
</template>

<script>
import SingleContainer from '../../components/SingleContainer'
export default {
  data() {
    return {
      selected: 'All Products',
      options: []
    }
  },
  components: {
    SingleContainer
  },
  computed: {
    getAllProducts() {
      return this.$store.getters['products/getProductsList']
    },
    filteredProducts() {
      if (this.selected === 'All Products') {
        return this.getAllProducts
      }
      return this.getAllProducts.filter((product) => {
        const filtered = product.sizes.filter((elem) => {
          return elem.size === this.selected
        })
        return filtered.length > 0
      })
    }
  },
  methods: {
    populateDropdownSelect() {
      const filteredDropdown = []
      return this.getAllProducts.filter((product) => {
        product.sizes.filter((item) => {
          filteredDropdown.push(item.size)
        })
        this.options = [...new Set(filteredDropdown)].sort((a, b) => a - b)
      })
    }
  },
  mounted() {
    this.populateDropdownSelect()
  },
  async created() {
    this.$store.dispatch('products/fetchRecycleProducts')
  },
  head() {
    return {
      title: 'Explore our products',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place to ReCycle'
        }
      ]
    }
  }
}
</script>
