<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Transformers\ConversationTransformer;
use App\Http\Requests\StoreConversationReplyRequest;
use App\Conversation;

class ConversationReplyController extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');
	}

    public function store(StoreConversationReplyRequest $request, Conversation $conversation)
    {
    	$this->authorize('reply', $conversation);

    	$reply = new Conversation;
    	$reply->body = $request->body;
    	$reply->user()->associate($request->user());

    	$conversation->replies()->save($reply);
    	$conversation->touchLastReply();

    	return fractal()
                ->item($reply)
                ->parseIncludes(['user'])
                ->transformWith(new ConversationTransformer)
                ->toArray();
    }
}
