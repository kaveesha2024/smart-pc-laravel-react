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

    public function test_it_gets_a_bad_response_if_a_user_try_to_add_a_product()
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
            'status' => Response::HTTP_UNAUTHORIZED,
            'message' => 'You are not authorized to add product',
        ]);
    }

    public function test_it_gets_bad_errors_if_request_validations_are_failed()
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

        $product = Product::factory()->make([
            'product_name' => 'a',
            'description' => 'a',
            'price' => 'a',
        ])->toArray();
        $productDescription = LaptopDescription::factory()->make()->toArray();
        $request = array_merge($product, $productDescription);

        $productResponse = $this->withHeaders([
            'Authorization' => 'Bearer '.$token,
        ])->post('/api/products/add-product', $request);
        $productResponse->assertStatus(200);
        $productResponse->assertJsonStructure([
            'status',
            'errors',
        ]);
        $productResponse->assertSimilarJson([
            'status' => Response::HTTP_UNPROCESSABLE_ENTITY,
            "errors" => [
                "product_name" => ["The product name field must be at least 2 characters."],
                "price" => ["The price field must have 0-2 decimal places."]
            ]
        ]);
    }
}
