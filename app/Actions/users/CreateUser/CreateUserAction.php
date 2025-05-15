<?php

namespace App\Actions\users\CreateUser;

use App\Models\User;
use App\Responses\CommonResponses;
use Illuminate\Support\Facades\Hash;

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
            return (new CommonResponses)->userNotCreated();
        }

        return (new CommonResponses)->userCreatedSuccessfully();
    }
}
