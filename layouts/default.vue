<template>
  <div id="bulma-container" style="margin-left: 510px;
                                   margin-right: 510px;">
    <layout-header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutHeader from '~/components/Layout/Header.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    LayoutHeader,
  },
  data: () => ({}),
})
</script>