<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::get('/', function(){
    return View::make('index');
});
Route::post('/auth/login', 'UserController@login');
Route::get('/auth/logout', 'UserController@logout');
Route::resource('boards', 'BoardController', ['except' => ['create', 'show']]);
Route::resource('boards/{boardId}/notes', 'NoteController', ['except' => ['create', 'show']]);