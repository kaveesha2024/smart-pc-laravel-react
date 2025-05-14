<?php

namespace App\Http\Controllers\UserControlls;

use App\Actions\users\UpdateUser\UpdateUserAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\user\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class UserUpdateController extends Controller
{
    public function updateUser(UpdateUserRequest $request, UpdateUserAction $UpdateUserAction): JsonResponse
    {
        $validatedUserDetails = $request->validated();
        return response()->json($UpdateUserAction($validatedUserDetails));
    }
}
