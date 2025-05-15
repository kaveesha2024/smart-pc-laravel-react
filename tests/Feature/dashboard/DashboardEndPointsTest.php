<?php

namespace Tests\Feature\dashboard;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;
final class DashboardEndPointsTest extends TestCase

{
    use refreshDatabase;
    public function test_it_get_correct_data_when_calling_dashboard_api()
    {
        $user = User::factory()->create([
            'role' => 'admin'
        ]);
        Sanctum::actingAs($user);
        $response = $this->get('/api/dashboard');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'total_users',
            'total_products',
            'latest_signup_users'
        ]);
    }

    public function test_it_gets_a_bad_response_if_a_user_try_to_call_dashboard_api()
    {
        $user = User::factory()->create()->toArray();

        $loginResponse = $this->post('/api/users/user-signin', [
            'email' => $user['email'],
            'password' => 'Kaveesha123',
        ]);
        $response = $this->withHeaders([
            'Authorization' => 'Bearer '.$loginResponse->json()['token'],
        ])->get('/api/dashboard');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            'status' => Response::HTTP_UNAUTHORIZED,
            'message' => 'you are not authorized to access this page',
        ]);
    }
}
