<template>
  <div>
    <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-right" title="Menu" right shadow>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/containers">Containers</nuxt-link>
        </li>
      </ul>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
