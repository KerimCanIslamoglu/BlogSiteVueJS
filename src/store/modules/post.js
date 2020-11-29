import api from '../../api/api'


const state = () => ({
    posts: []
})

// getters
const getters = {}

// actions
const actions = {
    getAllPosts({ commit }) {
        api.getAllPosts(posts => {
            commit('setPosts', posts)
        })
    }
}

// mutations
const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}