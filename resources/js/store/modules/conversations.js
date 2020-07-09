import api from '../api/all';
import conversation from './conversation';

const state = {
	conversations: [],
	loadingConversations: false
}

const getters = {
	allConversations: state => {
		return state.conversations;
	}
}

const actions = {
	getConversations({dispatch, commit}, page) {
		api.getConversations(page).then(response => {
			commit('setConversations', response.data.data);
		});
	}
}

const mutations = {
	setConversations(state, conversations) {
		state.conversations = conversations;
	}
}

const modules = {
	conversation: conversation
}

export default {
	state,
	getters,
	actions,
	mutations,
	modules
}