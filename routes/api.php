<?php

use App\Http\Controllers\MessagesController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:sanctum')->group(function() {
    Route::get('user', fn() => Auth::user());
    Route::get('/messages', [MessagesController::class, 'index']);
});

Route::get('/check-auth', fn() => Auth::check());
Route::post('/check-slug', [UserController::class, 'checkSlug']);
Route::post('/messages', [MessagesController::class, 'store']);