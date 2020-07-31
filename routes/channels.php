<?php


Broadcast::channel('user.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});


Broadcast::channel('conversations.*', function ($user, $conversationId) {
    return $user->isInConversation(\App\Conversation::find($conversationId));
});