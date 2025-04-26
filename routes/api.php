<?php

use App\Http\Controllers\UserSignupController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::get('/user', function (Request $request) {
//    return [
//        'message' => 'Hello Laravel !'
//    ];
//});
Route::post('/users/user-signup', [UserSignupController::class, 'userSignup']);
