<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\ProductControlls\AddProductController;
use App\Http\Controllers\ProductControlls\GetAllProductsController;
use App\Http\Controllers\UserControlls\GetUsersController;
use App\Http\Controllers\UserControlls\UserSignInController;
use App\Http\Controllers\UserControlls\UserSignupController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

//Route::get('/user', function (Request $request) {
//    return [
//        'message' => 'Hello Laravel !'
//    ];
//});
Route::post('/users/user-signup', [UserSignupController::class, 'userSignup']);
Route::post('/users/user-signin', [UserSignInController::class, 'userSignIn']);
Route::middleware([
    EnsureFrontendRequestsAreStateful::class,
    'auth:sanctum',
    IsAdmin::class,
])->get('/users', [GetUsersController::class, 'getAllUsers']);
Route::middleware('auth:sanctum')->post('/products/add-product',[AddProductController::class, 'addProduct'] );
Route::middleware('auth:sanctum')->get('/dashboard', [DashboardController::class, 'dashboard']);
Route::get('/products', [GetAllProductsController::class, 'getAllProducts']);;
