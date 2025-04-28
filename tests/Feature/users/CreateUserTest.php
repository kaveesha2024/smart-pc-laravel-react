<?php

namespace Tests\Feature\users;



use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

final class CreateUserTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_gets_a_successful_response_when_creating_a_new_user()
    {
        $user = [
            'first_name' => 'Kaveesha',
            'last_name' => 'Sashen',
            'email' => 'sanaakaveesha@gmail.com',
            'password' => 'Kaveesha123',
        ];
        $response = $this->post('/api/users/user-signup', $user);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            'status' => Response::HTTP_OK,
            'message' => 'User created successfully',
        ]);
        $this->assertDatabaseHas('users',
            [
            'first_name' => 'Kaveesha',
            'last_name' => 'Sashen',
            'email' => 'sanaakaveesha@gmail.com',
            ]
        );
    }

    public function test_it_gets_a_bad_response_if_request_validations_are_failed()
    {
        $user = [
            'first_name' => 'k',
            'last_name' => 'Sashen',
            'email' => 'sanaakaveeshagmail.com',
            'password' => 'K',
        ];
        $response = $this->post('/api/users/user-signup', $user);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => Response::HTTP_UNPROCESSABLE_ENTITY,
            'errors' => [
                'first_name' => ['The first name field must be at least 3 characters.'],
                'email' => ['The email field must be a valid email address.'],
                'password' => [
                    'The password field must be at least 8 characters.',
                    'The password field must contain at least one uppercase and one lowercase letter.',
                    'The password field must contain at least one number.',
                ],
            ]
        ]);
    }
}
