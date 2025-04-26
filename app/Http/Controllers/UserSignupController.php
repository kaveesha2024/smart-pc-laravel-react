<?php

namespace App\Http\Controllers;

use App\Actions\users\CreateUser\CreateUserAction;
use App\Http\Requests\CreateUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class UserSignupController extends Controller
{
    public function userSignup(CreateUserRequest $request, CreateUserAction $CreateUserAction): JsonResponse
    {
        $validated = $request->validated();
        return response()->json($CreateUserAction($validated));
    }
}
