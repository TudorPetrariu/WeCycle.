<template>
  <div>
    <div>
      <div
        class="select-all-sizes d-flex justify-content-center align-items-center"
      >
        <b-form-select v-model="selected" class="mb-3">
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
    </div>
    <main>
      <SingleContainer
        v-for="product in filteredProducts"
        :key="product._id"
        :id="product._id"
        :productDetails="product"
      />
    </main>
  </div>
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
      return this.$store.getters['containers/getProductsList']
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
