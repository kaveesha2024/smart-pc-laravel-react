<?php

namespace Tests\Feature\users;



use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

final class UpdateUserTest extends TestCase
{
    use RefreshDatabase;
    public function test_is_gets_a_good_response_if_user_updated_successfully()
    {
        $credentials = User::factory()->create([
            'email' => 'test@gmail.com',
            'password' => Hash::make('Kaveesha123'),
            'role' => 'admin',
        ])->toArray();
        $res = $this->post('/api/users/user-signin', [
            'email' => $credentials['email'],
            'password' => 'Kaveesha123',
        ]);
        $token = $res->json()['token'];

        $response = $this->withHeaders(['Authorization' => 'Bearer '.$token])->put("/api/users/user-update?id={$credentials['id']}", [
            'first_name' => 'sashen',
            'last_name' => 'himasara',
            'email' => 'testing@test.com',
            'role' => 'admin',
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            'status' => Response::HTTP_OK,
            'message' => 'user updated successfully',
        ]);
    }
}
