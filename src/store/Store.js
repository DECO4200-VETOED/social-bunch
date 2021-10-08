import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {}
    },
    mutations: {
        loadState(state) {
            Vue.set(state)
        }

    },
    actions: {

    },
    getters: {
        // wholeSurvey: state => state.survey,
    }
})