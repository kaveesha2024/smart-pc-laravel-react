<?php

namespace Tests\Feature\products;

use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class AddProductTest extends TestCase
{
    use RefreshDatabase;
    public function test_it_gets_a_successful_response_if_product_added_successfully()
    {
        $user = User::factory()->create([
            'password' => bcrypt('Kaveesha123'),
            'role' => 'admin'
        ]);
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

        $product = Product::factory()->make()->toArray();
        $productResponse = $this->withHeaders([
            'Authorization' => 'Bearer '.$token,
        ])->post('/api/products/add-product', $product);
        $productResponse->assertStatus(200);
        $productResponse->assertJsonStructure([
            'status',
            'message',
        ]);
        $productResponse->assertSimilarJson([
            'status' => 200,
            'message' => 'product added successfully',
        ]);
        $this->assertDatabaseHas('products', $product);
    }
}
