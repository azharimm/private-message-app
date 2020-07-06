import api from '../api/all';
import conversation from './conversation';

const state = {
	conversations: [],
	loadingConversations: false
}

const getters = {
	//
}

const actions = {
	getConversations({dispatch, commit}, page) {
		//
	}
}

const mutations = {
	//
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