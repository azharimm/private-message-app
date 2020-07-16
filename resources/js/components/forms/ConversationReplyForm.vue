<template>
    <form action="#" @submit.prevent="reply">
        <div class="form-group">
            <textarea name="" class="form-control" rows="4" placeholder="Reply.." v-model="body"></textarea>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-secondary">Reply</button>
        </div>
    </form>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
            body: null
        }
    },
    computed: {
        ...mapGetters({
            conversation: 'currentConversation'
        })
    },
    methods: {
        ...mapActions([
            'createConversationReply'
        ]),
        reply() {
            this.createConversationReply({
                id: this.conversation.id,
                body: this.body
            }).then(() => {
                this.body = null;
            })
        }
    }
}
</script>