<?php

namespace Tests\Feature\users;



use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

final class GetAllUsersTest extends TestCase
{
    use RefreshDatabase;
    public function test_it_gets_a_bad_response_if_user_is_not_authorized_to_call_getAllUsers_endpoint()
    {
        $user = User::factory()->create([
            'password' => bcrypt('Kaveesha123'),
        ]);
        Sanctum::actingAs($user);
        $res = $this->get('/api/users');
        $res->assertStatus(200);
        $res->assertJsonStructure([
            'message',
            'status'
        ]);
        $res->assertSimilarJson([
            'status' => 401,
            "message" => "You are not authorized"
        ]);
    }

    public function test_it_gets_all_users_if_admin_user_call_getAllUsers_endpoint()
    {
        $user = User::factory()->create([
            'password' => bcrypt('Kaveesha123'),
            'role' => 'admin'
        ]);
        User::factory()->count(20)->create();
        $response = $this->post('/api/users/user-signin', [
            'email' => $user->email,
            'password' => 'Kaveesha123',
        ] );
        $response->assertStatus(200);

        $response->assertJsonStructure([
            'status',
            'message',
            'token',
            'user'
        ]);
        $token = $response->json()['token'];
        $res = $this->withHeaders([
            'Authorization' => 'Bearer '.$token,
        ])->get('/api/users');
        $res->assertStatus(200);
        $res->assertJsonStructure([[
            'id',
            'first_name',
            "last_name",
            "role" ,
            "email" ,
            "email_verified_at" ,
            "password" ,
            "remember_token",
            "created_at" ,
            "updated_at" ,
        ]]);
    }
}
