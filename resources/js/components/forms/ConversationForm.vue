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
            </div>
        </div>
    </div>
</template>

<script>
import { userautocomplete } from '../../helpers/autocomplete'
export default {
    mounted() {
        userautocomplete("#users");
    }
}
</script>