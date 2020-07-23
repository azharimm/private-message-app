<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                New Message
            </div>
            <div class="card-body">
                <div class="form-group">
                    <input type="text" id="users" placeholder="Start typing to find users" class="form-control">
                </div>
                <ul v-if="recipients.length" class="list-inline">
                    <li><strong>To:</strong></li>
                    <li class="list-inline-item" v-for="(recipient, index) in recipients" :key="index">
                        {{recipient.name}} [<a href="#" @click.prevent="removeRecipient(recipient)">x</a>]
                    </li>
                </ul>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" cols="30" rows="4" class="form-control" v-model="body"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-secondary">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { userautocomplete } from '../../helpers/autocomplete'
export default {
    data() {
        return {
            body: null,
            recipients: []
        }
    },
    mounted() {
        var users = userautocomplete("#users").on('autocomplete:selected', (e, selection) => {
            this.addRecipient(selection)
            users.autocomplete.setVal('')
        })
    },
    methods: {
        addRecipient(recipient) {
            var existing = this.recipients.find(r => {
                return r.id === recipient.id
            })

            if(typeof existing != 'undefined') {
                return 
            }

            this.recipients.push(recipient)
        },
        removeRecipient(recipient) {
            this.recipients = this.recipients.filter(r => {
                return r.id !== recipient.id
            })
        }
    }
}
</script>