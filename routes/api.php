<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\UserControlls\GetUsersController;
use App\Http\Controllers\UserControlls\UserSignInController;
use App\Http\Controllers\UserControlls\UserSignupController;
use App\Http\Controllers\UserControlls\UserUpdateController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;


Route::post('/users/user-signup', [UserSignupController::class, 'userSignup']);
Route::post('/users/user-signin', [UserSignInController::class, 'userSignIn']);
Route::middleware([
    EnsureFrontendRequestsAreStateful::class,
    'auth:sanctum',
    IsAdmin::class,
])->get('/users', [GetUsersController::class, 'getAllUsers']);
Route::middleware('auth:sanctum')->get('/dashboard', [DashboardController::class, 'dashboard']);
Route::middleware('auth:sanctum')->put('/users/user-update', [UserUpdateController::class, 'updateUser']);
