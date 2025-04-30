<?php

namespace Tests\Feature\users;



use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetAllUsersTest extends TestCase
{
    use RefreshDatabase;
    public function test_it_gets_all_users_when_call_endpoint()
    {
        User::factory()->count(20)->make();
        $response = $this->get('/api/users');
        $response->assertStatus(200);
    }
}
