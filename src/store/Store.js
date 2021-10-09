import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {}
    },
    mutations: {
        loadState(state) {
            Vue.set(state, 'data', {
                members: ["Hello 1", "Hello 2", "Forris Byrne", "Margaux Thwaites", "Veronica Mars", "Thelma Louise", "Thelma Louise", "Thelma Louise", "Thelma Louise", "Thelma Louise Thelma Louise Thelma Louise"]
            })
        }

    },
    actions: {

    },
    getters: {
        members: state => state.data.members,
    }
})