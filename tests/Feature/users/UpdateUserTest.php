<?php

namespace Tests\Feature\users;



use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

final class UpdateUserTest extends TestCase
{
    use RefreshDatabase;
    public function test_is_gets_a_good_response_if_user_updated_successfully()
    {
        $user = User::factory()->create([
            'email' => 'test@gmail.com',
            'password' => Hash::make('Kaveesha123'),
        ])->toArray();
        $res = $this->post('/api/users/user-signin', [
            'email' => $user['email'],
            'password' => 'Kaveesha123',
        ]);
        $token = $res->json()['token'];

        $response = $this->put('/api/users/user-update');
        $response->assertStatus(200);
    }
}
