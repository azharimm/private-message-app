export default {
	getConversations(page) {
		return new Promise((resolve, reject) => {
			axios.get('/webapi/conversations?page='+page).then(response => {
				resolve(response)
			})
		})
	}
}