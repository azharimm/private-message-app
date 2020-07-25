import api from '../api/all';

const state = {
	conversation: null,
	loadingConversation: false
}

const getters = {
	currentConversation: state => {
		return state.conversation;
	},
	loadingConversation: state => {
		return state.loadingConversation;
	}
}

const actions = {
	getConversation({dispatch, commit}, id) {
		commit('setConversationLoading', true);
		api.getConversation(id).then(response => {
			commit('setConversation', response.data.data)
			commit('setConversationLoading', false);

			window.history.pushState(null, null, '/conversations/'+id);
		});
	},
	createConversationReply({dispatch, commit}, {id, body}) {
		return api.storeConversationReply(id, {body}).then((response) => {
			commit('appendToConversation', response.data.data);
			commit('prependToConversations', response.data.data.parent.data);
		})
	},
	createConversation({dispatch, commit}, {body, recipientIds}) {
		return api.storeConversation({
			body, recipientIds
		}).then((response) => {
			dispatch('getConversation', response.data.data.id)
			commit('prependToConversations', response.data.data);
		})
	},
	addConversationUsers({dispatch, commit}, {id, recipientIds}) {
		return api.storeConversationUsers(id, {
			recipientIds
		}).then(response => {
			// commit('addUsersToConversation')
			// commit('updateConversationInList')
		})
	}
}

const mutations = {
	setConversation(state, conversation) {
		state.conversation = conversation;
	},
	setConversationLoading(state, status) {
		state.loadingConversation = status;
	},
	appendToConversation(state, reply) {
		state.conversation.replies.data.unshift(reply);
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}