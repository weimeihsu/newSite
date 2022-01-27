import { createStore } from 'vuex'
import firedb from '../firebase/firebaseinit'

// create store
const store = createStore({
  state: {
    expcsFB: [],
    graphicDesignFB: [],
    uiuxFB: [],
    expcsLoaded: null,
    graphicDesignLoaded: null,
    uiuxLoaded: null,
    uiuxImages: [
      {
        id: 1,
        title: 'SingleSignOn',
        path: '/Uiux/sso',
        images: [
          { url: require('@/assets/img/uiux/csp/sso/sso-1.jpg'), alt: 'img-1' },
          { url: require('@/assets/img/uiux/csp/sso/sso-2.jpg'), alt: 'img-2' }
        ]
      },
      {
        id: 2,
        title: 'Charts',
        path: '/Uiux/chart',
        images: [
          { url: require('@/assets/img/uiux/csp/chart/charts.png'), alt: 'img-1' },
          { url: require('@/assets/img/uiux/csp/chart/chart property.jpg'), alt: 'img-2' },
          { url: require('@/assets/img/uiux/csp/chart/chart data.jpg'), alt: 'img-2' }
        ]
      },
      {
        id: 3,
        title: 'App Studio',
        path: '/Uiux/AppStudio',
        images: [
          { url: require('@/assets/img/uiux/csp/chart/charts.png'), alt: 'img-1' },
          { url: require('@/assets/img/uiux/csp/chart/chart property.jpg'), alt: 'img-2' },
          { url: require('@/assets/img/uiux/csp/chart/chart data.jpg'), alt: 'img-2' }
        ]
      }
    ],
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
    SET_UIUX_DATA (state, payload) {
      state.uiuxFB.push(payload)
      // console.log(state.uiuxFB)
    },
    UIUX_LOADED (state) {
      state.uiuxLoaded = true
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
            img: doc.data().img
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
            path: doc.data().path,
            img: doc.data().img
          }
          commit('SET_UIUX_DATA', data)
        }
      })
      commit('UIUX_LOADED')
    }
  }
})
export default store
