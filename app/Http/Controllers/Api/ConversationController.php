<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Transformers\ConversationTransformer;
use Illuminate\Http\Request;
use App\Conversation;

class ConversationController extends Controller
{
    public function __construct()
    {
    	$this->middleware('auth');
    }

    public function index(Request $request)
    {
    	$conversations = $request->user()->conversations()->get();

    	return fractal()
    			->collection($conversations)
    			->parseIncludes(['user', 'users'])
    			->transformWith(new ConversationTransformer)
    			->toArray();
    }
}
