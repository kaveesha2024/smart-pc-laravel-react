<?php

namespace Tests\Feature\users;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
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
        $response = $this->post('/api/users/user-signin', $user );

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
            'token',
        ]);
    }
}
