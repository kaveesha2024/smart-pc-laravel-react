<?php

namespace App\Http\Controllers\UserControlls;

use App\Actions\users\CreateUser\CreateUserAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\user\CreateUserRequest;
use Illuminate\Http\JsonResponse;

class UserSignupController extends Controller
{
    public function userSignup(CreateUserRequest $request, CreateUserAction $CreateUserAction): JsonResponse
    {
        $validated = $request->validated();
        return response()->json($CreateUserAction($validated));
    }
}
