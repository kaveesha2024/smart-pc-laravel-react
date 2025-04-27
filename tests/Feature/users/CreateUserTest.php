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
}
