<template>
    <div class="container">
        <div class="card">
            <div class="card-header">All Conversations</div>

            <div class="card-body">
                <div class="media" v-for="conversation in conversations" :key="conversation.id">
                    <div class="media-body">
                        <a href="">{{ conversation.body }}</a>
                        <p class="text-muted">You and {{ conversation.participant_count }} others</p>
                        <ul class="list-inline">
                            <li>
                                <img :src="user.avatar" :title="user.name" :alt="user.name+' avatar'" v-for="user in conversation.users.data"> <span class="text-muted"><small>Last reply {{conversation.last_reply_human_date}}</small></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        mounted() {
            this.getConversations(1);
        },
        computed: mapGetters({
            conversations: 'allConversations'
        }),
        methods: {
            ...mapActions([
                'getConversations'
            ])
        }
    }
</script>
