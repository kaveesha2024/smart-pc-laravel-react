<?php

namespace App\Responses;

use Symfony\Component\HttpFoundation\Response;

class CommonResponses
{
    public function invalidEmailAddress(): array
    {
        return [
            'status' => Response::HTTP_UNAUTHORIZED,
            'message' => 'Invalid email address',
        ];
    }

    public function invalidPassword(): array
    {
        return [
            'status' => Response::HTTP_UNAUTHORIZED,
            'message' => 'Invalid password',
        ];
    }

    public function userNotCreated(): array
    {
        return [
            'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
            'message' => 'User not created',
        ];
    }

    public function userCreatedSuccessfully(): array
    {
        return [
            'status' => Response::HTTP_OK,
            'message' => 'User created successfully',
        ];
    }
}
