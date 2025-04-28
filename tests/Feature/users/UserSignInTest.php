<?php

namespace Tests\Feature\users;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class UserSignInTest extends TestCase
{
    use RefreshDatabase;
    public function test_it_gets_a_sanctum_token_if_user_login_successfully()
    {
        $userDetails = User::factory()->create()->toArray();
        $user = [
            'email' => $userDetails['email'],
            'password' => 'Kaveesha123',
        ];
        $response = $this->post('/api/users/user-signin', $user);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
            'token',
        ]);
    }

    public function test_it_gets_bad_response_if_request_validations_failed()
    {
        User::factory()->create();
        $user = [
            'email' => 'test123.com',
            'password' => 'test'
        ];
        $response =  $this->post('/api/users/user-signin', $user);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => Response::HTTP_UNAUTHORIZED,
            'errors' => [
                'email' => ['The email field must be a valid email address.'],
                'password' => ['The password field must be at least 8 characters.'],
            ],
        ]);

    }

}
