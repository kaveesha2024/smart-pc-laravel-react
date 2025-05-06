<?php

namespace Tests\Feature\dashboard;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
final class DashboardEndPointsTest extends TestCase

{
    use refreshDatabase;
    public function test_it_get_correct_data_when_calling_dashboard_api()
    {
        $user = User::factory()->create([
            'role' => 'admin'
        ])->toArray();
        User::factory()->count(500)->create()->toArray();
        Product::factory()->count(356)->create()->toArray();

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
            'total_users',
            'total_products',
            'latest_signup_users'
        ]);
    }
}
