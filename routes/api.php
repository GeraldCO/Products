<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('productr', 'ProductController');

Route::get('products', 'ProductsController@index');

Route::post('products', 'ProductsController@store');

Route::get('products/{product}', 'ProductsController@show');

Route::put('products/{product}', 'ProductsController@update');

Route::delete('products/{products}', 'ProductsController@delete');

Route::get('test', 'UserController@test2');

Route::get('/user', function (Request $request) {  $user_id = Auth::id();
    return "the id user is".$user_id; });