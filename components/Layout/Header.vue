<template>
  <div class="container">
    <div class="columns is-vcentered py-4">
      <div class="column is-6">
        <nuxt-link :to="{ path: '/' }" tag="a">
          <img src="~/static/logo.png" alt="Logo">
        </nuxt-link>
      </div>
      <div class="column is-6">
        <button class="button is-success is-pulled-right" type="button" @click="goToFormPage">
          <span>Dodaj notatkę</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LayoutHeader',
  data: () => ({}),

  methods: {
    goToFormPage() {
      this.$router.push({
        path: '/form',
      })
    },
  },

})
</script>
<style lang="scss" scoped>
a {
  outline: 0 none;
}
img {
  margin-left: -15/16 + rem;
}
</style>
