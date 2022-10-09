import { createStore } from 'vuex'
import firedb from '../firebase/firebaseinit'

// create store
const store = createStore({
  state: {
    expcsFB: [],
    graphicDesignFB: [],
    pdfFB: [],
    uiFB: [],
    uxFB: [],
    prototypeFB: [],
    webFB: [],
    expcsLoaded: null,
    graphicDesignLoaded: null,
    webLoaded: null,
    uiLoaded: null,
    uxLoaded: null,
    prototypeLoaded: null,
    pdfLoaded: null,
    slidesLength: null
  },
  getters: {
    slideLength (state) {
      return state.graphicDesignFB.length
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
    SET_UI_DATA (state, payload) {
      state.uiFB.push(payload)
      // console.log(state.uiFB)
    },
    UI_LOADED (state) {
      state.uiLoaded = true
    },
    SET_UX_DATA (state, payload) {
      state.uxFB.push(payload)
    },
    UX_LOADED (state) {
      state.uxLoaded = true
    },
    SET_PROTOTYPE_DATA (state, payload) {
      state.prototypeFB.push(payload)
    },
    PROTOTYPE_LOADED (state) {
      state.prototypeLoaded = true
    },
    SET_PDF_DATA (state, payload) {
      state.pdfFB.push(payload)
    },
    PDF_LOADED (state) {
      state.pdfLoaded = true
    },
    SET_WEB_DATA (state, payload) {
      state.webFB.push(payload)
    },
    WEB_LOADED (state) {
      state.webLoaded = true
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
    async GET_UI ({ commit, state }) {
      const getData = firedb.collection('ui')
      const result = await getData.get()
      result.forEach(doc => {
        if (!state.uiFB.some(uiSet => uiSet.id === doc.id)) {
          const data = {
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            tab: doc.data().tab,
            arrayImg: doc.data().arrayImg
          }
          commit('SET_UI_DATA', data)
        }
      })
      commit('UI_LOADED')
    },
    async GET_UX ({ commit, state }) {
      const getData = firedb.collection('ux')
      const result = await getData.get()
      result.forEach(doc => {
        if (!state.uxFB.some(uxSet => uxSet.id === doc.id)) {
          const data = {
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            tab: doc.data().tab,
            arrayImg: doc.data().arrayImg
          }
          commit('SET_UX_DATA', data)
        }
      })
      commit('UX_LOADED')
    },
    async GET_PROTOTYPE ({ commit, state }) {
      const getData = firedb.collection('prototype')
      const result = await getData.get()
      result.forEach(doc => {
        if (!state.prototypeFB.some(prototypeSet => prototypeSet.id === doc.id)) {
          const data = {
            id: doc.id,
            title: doc.data().title,
            img: doc.data().img,
            tab: doc.data().tab,
            url: doc.data().url,
            arrayImg: doc.data().arrayImg
          }
          commit('SET_PROTOTYPE_DATA', data)
        }
      })
      commit('PROTOTYPE_LOADED')
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
    },
    async GET_WEB ({ commit, state }) {
      const getData = firedb.collection('web')
      const result = await getData.get()
      result.forEach(doc => {
        if (!state.webFB.some(webSet => webSet.id === doc.id)) {
          const data = {
            id: doc.id,
            title: doc.data().title,
            thumb: doc.data().thumb,
            url: doc.data().url
          }
          commit('SET_WEB_DATA', data)
        }
      })
      commit('WEB_LOADED')
    }
  }
})
export default store
