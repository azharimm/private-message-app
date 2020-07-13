<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::group(['prefix' => 'webapi', 'namespace' => 'Api'], function() {
	Route::get('/conversations', 'ConversationController@index');
	Route::get('/conversations/{conversation}', 'ConversationController@show');
});

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/conversations', 'ConversationController@index');
Route::get('/conversations/{conversation}', 'ConversationController@show');
