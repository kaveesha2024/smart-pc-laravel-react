<?php

namespace App\Actions\users\UserSignIn;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserSignInAction
{
    public function __invoke($request): array
    {
        $user = User::where('email', $request['email'])->first();
        if (!$user) {
            return [
                'status' => Response::HTTP_UNAUTHORIZED,
                'message' => 'Invalid email address',
            ];
        }
        if ($this->isUserAuthenticated($user, $request)) {
            $token = $user->createToken('auth_token', ['view-users'] )->plainTextToken;
            return [
                'status' => Response::HTTP_OK,
                'message' => 'User logged in successfully',
                'token' => $token,
                'user' => $user,
            ];
        }
        return [
            'status' => Response::HTTP_UNAUTHORIZED,
            'message' => 'Invalid password',
        ];
    }
    private function isUserAuthenticated($user, $request): bool
    {
        return $request['email'] === $user->email && Hash::check($request['password'], $user->password);
    }
}
