import { createStore } from 'vuex'
import firedb from '../firebase/firebaseinit'

// create store
const store = createStore({
  state: {
    expcsFB: [],
    graphicDesignFB: [],
    pdfFB: [],
    uiuxFB: [],
    expcsLoaded: null,
    graphicDesignLoaded: null,
    uiuxLoaded: null,
    pdfLoaded: null,
    slidesLength: null
  },
  getters: {
    slideLength (state) {
      return state.graphicDesignFB.length
    },
    uiuxTabArray (state) {
      return state.uiuxFB.map(uiuxTab => { return uiuxTab.title })
    }
  },
  mutations: {
    SET_EXPCS_DATA (state, payload) {
      state.expcsFB.push(payload)
      // console.log(state.expcsFB);  check if data is retrieved from firebase
    },
    EXPCS_LOADED (state) {
      state.expcsLoaded = true
    },
    SET_GRAPHIC_DESIGN_DATA (state, payload) {
      state.graphicDesignFB.push(payload)
      // console.log(state.graphicDesignFB);
    },
    GRAPHIC_DESIGN_LOADED (state) {
      state.graphicDesignLoaded = true
      state.slidesLength = state.graphicDesignFB.length
    },
    SET_UIUX_DATA (state, payload) {
      state.uiuxFB.push(payload)
      // console.log(state.uiuxFB)
    },
    UIUX_LOADED (state) {
      state.uiuxLoaded = true
    },
    SET_PDF_DATA (state, payload) {
      state.pdfFB.push(payload)
      // console.log(state.expcsFB);  check if data is retrieved from firebase
    },
    PDF_LOADED (state) {
      state.pdfLoaded = true
    }
  },
  actions: {
    async GET_EXPCS ({ commit, state }) {
      const getData = firedb.collection('expcs')
      const result = await getData.get()
      result.forEach(doc => {
        if (!state.expcsFB.some(expcSet => expcSet.id === doc.id)) {
          const data = {
            id: doc.id,
            comp: doc.data().comp,
            dept: doc.data().dept,
            date: doc.data().date,
            icon: doc.data().icon,
            list: doc.data().list,
            title: doc.data().title,
            loc: doc.data().loc
          }
          commit('SET_EXPCS_DATA', data)
        }
      })
      commit('EXPCS_LOADED')
    },
    async GET_GRAPHIC_DESIGN ({ commit, state }) {
      const getData = firedb.collection('graphicDesign')
      const result = await getData.get()
      result.forEach(doc => {
        if (!state.graphicDesignFB.some(graphicDesignSet => graphicDesignSet.id === doc.id)) {
          const data = {
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            thumb: doc.data().thumb
          }
          commit('SET_GRAPHIC_DESIGN_DATA', data)
        }
      })
      commit('GRAPHIC_DESIGN_LOADED')
    },
    async GET_UIUX ({ commit, state }) {
      const getData = firedb.collection('uiux')
      const result = await getData.get()
      result.forEach(doc => {
        if (!state.uiuxFB.some(uiuxSet => uiuxSet.id === doc.id)) {
          const data = {
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            tab: doc.data().tab
          }
          commit('SET_UIUX_DATA', data)
        }
      })
      commit('UIUX_LOADED')
    },
    async GET_PDF ({ commit, state }) {
      const getData = firedb.collection('pdf')
      const result = await getData.get()
      result.forEach(doc => {
        if (!state.pdfFB.some(pdfSet => pdfSet.id === doc.id)) {
          const data = {
            id: doc.id,
            title: doc.data().title,
            file: doc.data().file,
            des: doc.data().des,
            thumb: doc.data().thumb
          }
          commit('SET_PDF_DATA', data)
        }
      })
      commit('PDF_LOADED')
    }
  }
})
export default store
