import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store= new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },

    getters: {
        doubleCounter : state => {
            return state.counter * 2;
        },

        tripleCounter : state => {
            return state.counter * 3;
        },

        stringCounter : state => {
            return state.counter + ' Clicks..!';
        },

        value: state => {
            return state.value;
        }
    },

    mutations : {
        increment : (state, payload) => {
            return state.counter += payload;
        },
        decrement : (state, payload) => {
            return state.counter -= payload;
        },
        updatedValue: (state, payload) => {
            return state.value = payload;
        }
    },

    actions: {
        increment : ({ commit }, payload) => {
            commit('increment', payload);
        },
        
        decrement : ({ commit }, payload) => {
            commit('decrement', payload);
        },
        
        asyncIncrement : ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            }, payload.duration);
        },

        asyncDecrement : ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            }, payload.duration);
        },

        updatedValue({commit}, payload){
            commit('updatedValue', payload);
        }
    }
});