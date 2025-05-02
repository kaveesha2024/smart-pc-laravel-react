<?php

namespace Tests\Feature\products;

use App\Models\Laptop_description;
use App\Models\LaptopDescription;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
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
        $productDescription = LaptopDescription::factory()->make()->toArray();
        $request = array_merge($product, $productDescription);
        $productResponse = $this->withHeaders([
            'Authorization' => 'Bearer '.$token,
        ])->post('/api/products/add-product', $request);
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
        $this->assertDatabaseHas('laptop_description', $productDescription);
    }

    public function test_it_gets_a_add_response_if_a_user_try_to_add_a_product()
    {
        $user = User::factory()->create([
            'password' => bcrypt('Kaveesha123'),
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
            'status' => Response::HTTP_UNAUTHORIZED,
            'message' => 'You are not authorized to add product',
        ]);
    }
}
