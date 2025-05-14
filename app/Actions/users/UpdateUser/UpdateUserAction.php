<?php

namespace App\Actions\users\UpdateUser;

use App\Models\User;
use Symfony\Component\HttpFoundation\Response;

class UpdateUserAction
{
    public function __invoke($request): array
    {
        if (Auth()->user()['role'] !== 'admin') {
            return [
                'status' => Response::HTTP_UNAUTHORIZED,
                'message' => 'you are not authorized to update user',
            ];
        }
        $user = User::where('id', $request['id']);
        if (!$user) {
            return [
                'status' => Response::HTTP_NOT_FOUND,
                'message' => 'user not found',
            ];
        }
        $user->update([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $request['email'],
            'role' => $request['role'],
        ]);
        return [
            'status' => Response::HTTP_OK,
            'message' => 'user updated successfully',
        ];
    }
}
