const state = {
    token : null
};

const getters = {
    isLoggedIn : (state) =>{
        return !!state.token
    }
};

const actions = {
    logout : ({ commit }) =>{
        commit('setToken', null);
    }
    
};

const mutations = {
    setToken : (state, token)=>{
        state.token = token;
    }
};