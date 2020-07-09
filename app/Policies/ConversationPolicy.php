<?php

namespace App\Policies;

use App\User;
use App\Conversation;
use Illuminate\Auth\Access\HandlesAuthorization;

class ConversationPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function show(User $user, Conversation $conversation)
    {
        return $this->affect($user, $conversation);
    }

    public function affect(User $user, Conversation $conversation)
    {
        return $user->isInConversation($conversation);
    }
}
