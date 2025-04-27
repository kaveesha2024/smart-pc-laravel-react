<?php

namespace App\Http\Controllers\UserControlls;

use App\Actions\users\UserSignIn\UserSignInAction;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class UserSignInController extends Controller
{
    public function userSignIn(Request $request, UserSignInAction $UserSignInAction): JsonResponse
    {
        return response()->json($UserSignInAction($request));
    }
}
