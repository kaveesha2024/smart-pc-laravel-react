<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class UserSignupController extends Controller
{
    public function userSignup(Request $request): JsonResponse
    {
        Log::info($request['first_name']);
        $response = User::create([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'email_verified_at' => now(),
        ]);

        if (!$response) {
            return response()->json([
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
                'message' => 'User not created',
            ]);
        }

        return response()->json([
            'status' => Response::HTTP_OK,
            'message' => 'User created successfully',
        ]);
    }
}
