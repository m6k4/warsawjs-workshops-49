<template>
 <layout-container >
     <template v-slot:content>
         <app-form /> 
     </template>
 </layout-container>
</template>

<script lang="ts">
import Vue from 'vue'
import LayoutContainer from '~/components/Layout/Container.vue'
import AppForm from '~/components/Notes/Form.vue'

export default Vue.extend({
  name:'PageForm',
  components: {
      LayoutContainer,
      AppForm
  },
})
</script>

<style lang="scss" scoped>

</style>
