<?php

use App\Http\Controllers\UserControlls\UserSignInController;
use App\Http\Controllers\UserControlls\UserSignupController;
use Illuminate\Support\Facades\Route;

//Route::get('/user', function (Request $request) {
//    return [
//        'message' => 'Hello Laravel !'
//    ];
//});
Route::post('/users/user-signup', [UserSignupController::class, 'userSignup']);
Route::post('/users/user-signin', [UserSignInController::class, 'userSignIn']);;
