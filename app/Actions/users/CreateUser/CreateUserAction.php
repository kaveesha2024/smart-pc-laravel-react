<?php

namespace App\Actions\users\CreateUser;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class CreateUserAction
{
    public function __invoke($request): array
    {
        $response = User::create([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'email_verified_at' => now(),
        ]);

        if (!$response) {
            return [
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
                'message' => 'User not created',
            ];
        }

        return [
            'status' => Response::HTTP_OK,
            'message' => 'User created successfully',
        ];
    }
}
