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
}
