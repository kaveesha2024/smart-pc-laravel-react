<?php

namespace Tests\Feature\users;



use App\Models\User;
use Database\Factories\UserFactory;
use Tests\TestCase;

class CreateUserTest extends TestCase
{
    public function test_it_gets_a_successful_response_when_creating_a_new_user()
    {
        $user = User::factory()->make()->toArray();

        $response = $this->post('/api/users/user-signup', $user);

        $response->assertStatus(200);


    }
}
