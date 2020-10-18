import { Module, ActionTree, GetterTree, MutationTree } from 'vuex'
import { MainState } from '.'

interface NoteState {
    note: {},
    notes: []
}

interface Note {
    id: string, 
    title: string,
    note: string, 
    date: Date,
}

export const state: NoteState = {
    note: {},
    notes: [],
}

const mutations: MutationTree<NoteState> = {
    setNotes(state, payload) {
        state.notes = payload
    },
}

const actions: ActionTree<NoteState, MainState> = {
    async saveNote({ state, commit}, payload) {
        await (this as any).$localForage.setItem('key', JSON.stringify(payload))
        commit('setNotes', [...state.notes, payload]);
    },
    removeNote() {},
    async getNotes() {
        this.commit('setNotes', []);
        const keys = await (this as any).$localForage.keys()
        keys.map(async (key: string) => {
            const note = await (this as any).this.$localForage.getItem(key)
            this.commit('setNotes', [...state.notes, JSON.parse(note)])
        }) 
    },

}

const getters: GetterTree<NoteState, MainState> = {
    notes: ({ notes}) => notes
}

const namespaced: boolean = true

export const note: Module<NoteState, MainState> = {
    namespaced, 
    state, 
    actions, 
    mutations, 
    getters
}