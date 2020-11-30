<template>
  <div>
    <nav>
      <div class="nav-menu" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <ul class="nav-links" @click="toggleMenu">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/ourProducts">Products</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  data() {
    return {}
  },
  methods: {
    toggleMenu() {
      const navLinks = this.$el.querySelector('.nav-links')
      navLinks.classList.toggle('open')
      console.log(navLinks)
    }
  }
}
</script>
