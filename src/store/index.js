import Vue from 'vue'
import Vuex from 'vuex'
import Books from '../data/books'


Vue.use(Vuex)

const state = {
    books: Books,
    currents: {
        chapter: 1,
        bookName: 'GEN'
    },
    chapters: 50,
    fontSize: 26
}

const getters = {
    getAllBooksInfo: (state) => state.books,
    getCurrents: (state) => state.currents,
    getChapters: (state) => state.chapters,
    getFontSize: (state) => state.fontSize
}

const mutations = {
    setCurrents(state, val){
        let book = _.find(state.books, o => o.bookName == val.bookName)
        if(book != null){
            if(book.firstChapter == 0){
                if(val.chapter <= book.chapters - 1){
                    state.currents = val
                    state.chapters = book.chapters - 1
                }
            }else{
                if(val.chapter <= book.chapters){
                    state.currents = val
                    state.chapters = book.chapters
                }
            }
        }
    },

    setFontSize(state, val){
        state.fontSize = val
    }
}

const actions = {
    setCurrents({commit, dispatch}, val){
        commit('setCurrents', val)
    },

    setFontSize({commit}, val){
        commit('setFontSize', val)
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})