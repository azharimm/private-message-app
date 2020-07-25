<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Transformers\ConversationTransformer;
use App\Http\Requests\StoreConversationUserRequest;
use App\Conversation;

class ConversationUserController extends Controller
{
    public function store(StoreConversationUserRequest $request, Conversation $conversation)
    {
        $this->authorize('affect', $conversation);

        $conversation->users()->syncWithoutDetaching($request->recipients);

        $conversation->load(['users']);

        return fractal()
            ->item($conversation)
            ->parseIncludes(['user', 'users'])
            ->transformWith(new ConversationTransformer)
            ->toArray();
    }

}
