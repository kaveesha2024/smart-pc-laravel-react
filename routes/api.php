<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\UserControlls\GetUsersController;
use App\Http\Controllers\UserControlls\UserSignInController;
use App\Http\Controllers\UserControlls\UserSignupController;
use App\Http\Controllers\UserControlls\UserUpdateController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;


Route::post('/users/user-signup', [UserSignupController::class, 'userSignup']);
Route::post('/users/user-signin', [UserSignInController::class, 'userSignIn']);
Route::get('/users', [GetUsersController::class, 'getAllUsers'])->middleware(AdminMiddleware::class)->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->get('/dashboard', [DashboardController::class, 'dashboard']);
Route::middleware('auth:sanctum')->put('/users/user-update', [UserUpdateController::class, 'updateUser']);
Route::post('/products/add-product', [ProductController::class, "addProduct"])->middleware(AdminMiddleware::class)->middleware('auth:sanctum');
