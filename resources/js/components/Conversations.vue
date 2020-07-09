<template>
    <div class="container">
        <div class="card">
            <div class="card-header">All Conversations</div>
            <div class="card-body">
                <div v-if="loading" class="loader">
                    <loader></loader>
                </div>
                <div class="media" v-for="conversation in conversations" :key="conversation.id" v-else-if="conversations.length">
                    <div class="media-body">
                        <a href="#" @click.prevent="getConversation(conversation.id)">{{ trunc(conversation.body, 50) }}</a>
                        <p class="text-muted">You and {{ conversation.participant_count }} {{pluralize('other', conversation.participant_count)}}</p>
                        <ul class="list-inline">
                            <li>
                                <img :src="user.avatar" :title="user.name" :alt="user.name+' avatar'" v-for="user in conversation.users.data"> <span class="text-muted"><small>Last reply {{conversation.last_reply_human_date}}</small></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div v-else>No Conversations</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import trunc from '../helpers/trunc'
    import pluralize from 'pluralize'
    export default {
        mounted() {
            this.getConversations(1);
        },
        computed: mapGetters({
            conversations: 'allConversations',
            loading: 'loadingConversations'
        }),
        methods: {
            ...mapActions([
                'getConversations',
                'getConversation'
            ]),
            trunc: trunc,
            pluralize: pluralize
        }
    }
</script>
