<template>
  <div>
    <div v-for="item in currentProduct.sizes" class="details-card-item">
      <div class="details-card-img">
        <img :src="item.image" alt="" />
      </div>
      <div class="details-card-info">
        <div class="details-card-date">
          <span>Sunday</span>
          <span>October 21</span>
        </div>
        <h1 class="details-card-title"></h1>
        <p class="details-card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          animi nisi accusamus. Quibusdam sapiente quos non veritatis totam quo
          et, ab porro labore! Earum, libero blanditiis. Fuga facilis cum odio?
        </p>
        <a class="details-card-actions" href="#"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentProduct() {
      return this.$store.getters['containers/getCurrentProduct']
    }
  }
}
</script>
