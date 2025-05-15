<?php

namespace App\Http\Controllers\UserControlls;

use App\Actions\users\UserSignIn\UserSignInAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\user\UserSignInRequest;
use Illuminate\Http\JsonResponse;

class UserSignInController extends Controller
{
    public function userSignIn(UserSignInRequest $request, UserSignInAction $UserSignInAction): JsonResponse
    {
        $validated = $request->validated();
        return response()->json($UserSignInAction($validated));
    }
}
