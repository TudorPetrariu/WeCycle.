<template>
  <b-container>
    <b-card @click="seeCurrentProduct" no-body class="overflow-hidden ss my-5">
      <b-row no-gutters>
        <b-col md="6">
          <nuxt-link :to="'containers/' + id">
            <b-card-img
              :src="container.sizes[0].image"
              alt="Image"
              class="rounded"
            ></b-card-img>
          </nuxt-link>
        </b-col>
        <b-col md="6">
          <b-card-body v-if="container.sizes" title="Horizontal Card">
            <!-- <b-form-select
              v-model="selected"
              :options="options"
              size="sm"
              class="mt-3"
            ></b-form-select> -->

            <b-card-text>
              <span>Type: {{ container.type }}</span>
              <br />
              <span>Rent: {{ container.sizes[0].unit_price_rent }}</span>
              <br />
              <span
                >Placement: {{ container.sizes[0].unit_price_placement }}</span
              >
              <br />
              <span
                >Pickup Price {{ container.sizes[0].unit_price_pickup }}</span
              >
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
export default {
  props: ['container', 'id'],
  methods: {
    seeCurrentProduct() {
      this.$store.commit('containers/saveProductDetails', this.container)
    }
  }
}
</script>

<style>
.ss {
  box-shadow: 10px 5px 5px teal;
}
</style>
