<template>
    <form class="mt-4" @submit.prevent="submit">
        <fieldset class="py-2">
            <label>
                <input 
                    v-model="formData.title"
                    class="input is-normal" 
                    type="text" 
                    placeholder="Note title" 
                    minlength="1" 
                    required 
                /> 
            </label>
        </fieldset>
          <fieldset class="py-2">
            <label>
                <textarea 
                    v-model="formData.note"
                    class="textarea is-normal" 
                    placeholder="Note"
                    minlength="1" 
                    required 
                /> 
            </label>
        </fieldset>
        <div class="columns at-1 is-vcentered">
            <div class="column is-8"> 
                <span v-if="submitted" class="is-info size-5">  Notatka dodana poprawnie</span>
            </div>
            <div class="column is-4"> 
                <button 
                    type="submit" 
                    class="button is-link is-normal is-pulled-right"
                    :class="{ 'is-loading': submitting }"
                >
                    <span> Save </span>
                </button> 
            </div>
        </div>
    </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

interface DataTypes {
    formData: {
    id: string, 
    title: string,
    note: string, 
    date: Date,
    }
    submitting: boolean, 
    submitted: boolean,
}

export default Vue.extend({
  name: 'AppForm',
  data: (): DataTypes => ({
      formData: {
          id: '',
          title: '',
          note: '',
          date: new Date(),
      },
      submitting: false, 
      submitted: false,
  }),
  computed: {
      ...mapGetters({
        notes: 'note/notes',
      })
  },
  methods: {
      ...mapActions({
          saveNote: 'note/saveNote'
      }),
    async submit(): Promise<void> {
        this.submitting = true;

        try {
            await this.saveNote({
                ...(this as any).formData,
                id: (Date.now() + Math.random()).toString().replace('.', '')
            });
        }catch(error) {
            console.log('error', error);
            this.submitted = false;
        } finally {
            this.submitted = true;
        }
        this.submitting = false;
    },
  },
})

</script>

<style lang="scss" scoped>
.is-info {
    color: green
}
</style>