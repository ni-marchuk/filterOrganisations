export const state = () => ({
    ORGANISATIONS: [],
    RENDER_ORGANISATIONS: [],
});

export const getters = {
    ORGANISATIONS: state => {
        return state.ORGANISATIONS;
    },
    RENDER_ORGANISATIONS: state => {
        return state.RENDER_ORGANISATIONS;
    },
};

export const mutations = {

    SET_ORGANISATIONS(state, organisations) {
        state.ORGANISATIONS = organisations;
    },

    RENDER_ORGANISATIONS(state, renderOrganisations) {
        state.RENDER_ORGANISATIONS = renderOrganisations;
    },

};

export const actions = {

    async getOrganisations({state, commit}) {
        try {
            const url = 'http://an67.pythonanywhere.com/api/organisations/';
            const response = await this.$axios.$get(url);
            if (response) {
                commit('SET_ORGANISATIONS', response);
            }
        } catch (err) {
            console.log('organisations' + err)
        }
    },

};


