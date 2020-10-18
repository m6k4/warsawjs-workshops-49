import Vuex from 'vuex'
import { note } from '~/store/note'

export interface MainState {
  version: string
}

const Store = () => {
  return new Vuex.Store<MainState>({
    state: {
      version: '1.0',
    },
    modules: {
      note,
    },
  })
}

export default Store