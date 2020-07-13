<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Conversation;

class ConversationController extends Controller
{
    public function index()
    {
    	return view('conversation.index');
    }

    public function show(Conversation $conversation)
    {
    	$this->authorize('show', $conversation);
    	return view('conversation.index', compact('conversation'));
    }
}
