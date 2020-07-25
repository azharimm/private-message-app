<template>
	<div>
		<div v-if="loading" class="loader">
	        <loader></loader>
	    </div>
		<div v-else-if="conversation">
			<ul class="list-inline" v-if="conversation.users.data.length">
				<li class="list-inline-item"><strong>In Conversation</strong></li>
				<li class="list-inline-item" v-for="(user, index) in conversation.users.data" :key="index">{{user.name}}</li>
			</ul>
			<conversation-add-form-user></conversation-add-form-user>
			<hr>
			<conversation-reply-form></conversation-reply-form>
			<div class="media" v-for="(reply, index) in conversation.replies.data" :key="index">
				<div class="media-left" style="margin-right: 10px;">
					<img :src="reply.user.data.avatar" :alt="reply.user.data.name">
				</div>
				<div class="media-body">
					<p>{{reply.user.data.name}} &bull; {{reply.created_at_human}}</p>
					<div class="card">
						<div class="card-body">
							{{reply.body}}
						</div>
					</div>
				</div>
			</div>

			<div class="media">
				<div class="media-left" style="margin-right: 10px;">
					<img :src="conversation.user.data.avatar" :alt="conversation.user.data.name">
				</div>
				<div class="media-body">
					<p>{{conversation.user.data.name}} &bull; {{conversation.created_at_human}}</p>
					<div class="card">
						<div class="card-body">
							{{conversation.body}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>Select a conversation</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	export default {
		props: ['id'],
		computed: mapGetters({
            conversation: 'currentConversation',
            loading: 'loadingConversation'
        }),
        mounted() {
        	if(this.id !== null) {
        		this.getConversation(this.id);
        	}
        },
        methods: {
        	...mapActions({
        		getConversation: 'getConversation'
        	})
        }
	}
</script>