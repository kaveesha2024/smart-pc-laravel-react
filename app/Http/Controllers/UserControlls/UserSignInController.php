<?php

namespace App\Http\Controllers\UserControlls;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class UserSignInController extends Controller
{
    public function userSignIn(Request $request): JsonResponse
    {
        return response()->json([
            'status' => Response::HTTP_OK,
            'message' => 'User logged in successfully',
        ]);
    }
}
