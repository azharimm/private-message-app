export default {
	getConversation(id) {
		return new Promise((resolve, reject) => {
			axios.get('/webapi/conversations/'+id).then(response => {
				resolve(response)
			})
		})
	},
	getConversations(page) {
		return new Promise((resolve, reject) => {
			axios.get('/webapi/conversations?page='+page).then(response => {
				resolve(response)
			})
		})
	},
	storeConversationReply(id, {body}) {
		return new Promise((resolve, reject) => {
			axios.post('/webapi/conversations/'+id+'/reply', {body}).then(response => {
				resolve(response)
			})
		})
	},
	storeConversation({body, recipientIds}) {
		return new Promise((resolve, reject) => {
			axios.post('/webapi/conversations/', {
				body,
				recipients: recipientIds
			}).then(response => {
				resolve(response)
			})
		})
	}
}