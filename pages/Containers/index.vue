<template>
  <div>
    <p>COntainers List</p>
    <div>
      <b-form-select v-model="selected" class="mb-3">
        <template>
          <b-form-select-option :value="null" disabled
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
          >{{ config }}</b-form-select-option
        >
      </b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </div>
    <SingleContainer
      v-for="container in filterProducts"
      :key="container._id"
      :id="container._id"
      :container="container"
    />
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
    filterProducts() {
      return this.getAllProducts.map((product) => {
        return product.sizes.filter((size) => {
          return size.size === this.selected || this.selected === 'All Products'
        })
      })
    }
  },
  methods: {
    populateDropdownSelect() {
      const allSizes = []
      return this.getAllProducts.map((product) => {
        product.sizes.filter((item) => {
          allSizes.push(item.size)
        })
        this.options = [...new Set(allSizes)].sort((a, b) => a - b)
      })
    }
  },
  mounted() {
    this.populateDropdownSelect()
  },
  head() {
    return {
      title: 'Explore Products',
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
