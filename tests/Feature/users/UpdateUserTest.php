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
    public function test_is_gets_a_good_response_if_an_admin_updated_a_user_successfully()
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

    public function test_it_gets_a_bad_response_if_request_validations_failed()
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
            'first_name' => '',
            'last_name' => 'a',
            'email' => 'test',
            'role' => 'test',
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => Response::HTTP_UNPROCESSABLE_ENTITY,
            'errors' => [
                "first_name" => [
                    0 => "The first name field is required."
                 ],
                "last_name" =>  [
                    0 => "The last name field must be at least 3 characters."
                ],
                "email" => [
                    0 => "The email field must be a valid email address."
                ],
                "role" => [
                    0 => "The selected role is invalid."
                ]
            ]
        ]);
    }

    public function test_it_gets_a_bad_response_if_a_user_tried_to_update_a_user()
    {
        $credentials = User::factory()->create([
            'email' => 'test111@gmail.com',
            'password' => Hash::make('Kaveesha123'),
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
            "status" => Response::HTTP_UNAUTHORIZED,
            "message" => "you are not authorized to update user",
        ]);
    }
}
