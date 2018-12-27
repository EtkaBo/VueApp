const state = {
    showLoader: false,
    loggedIn: false
}

const mutations = {
    setLoader (state, showLoader) {
        state.showLoader = showLoader
      },
    setLoggedIn (state, loggedIn) {
        state.loggedIn = loggedIn
    }
}

const getters = {
    showLoader: (state) => {
        return state.showLoader
      },
      loggedIn: (state) => {
        return state.loggedIn
    }  
}

export default {
    namespaced: true,
    state,
    mutations,
    getters
  }
