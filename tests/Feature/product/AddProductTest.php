<?php

namespace Tests\Feature\product;


use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

final class AddProductTest extends TestCase
{
    use RefreshDatabase;
    public function test_admin_can_add_a_product()
    {
        $user = User::factory()->create([
            'role' => 'admin'
        ]);
        Sanctum::actingAs($user);
        $product = Product::factory()->make()->toArray();
        $response = $this->postJson('api/products/add-product', $product);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            'status' => 200,
            'message' => 'product added successfully',
        ]);
        $this->assertDatabaseHas('products', [
            'product_id' => $product['product_id'],
            'product_name' => $product['product_name'],
            'description' => $product['description'],
            'price' => $product['price'],
            'labelled_price' => $product['labelled_price'],
            'quantity' => $product['quantity'],
            'card_description' => $product['card_description'],
            'product_images' => $product['product_images'],

        ]);
    }
    public function test_it_gets_a_bad_request_if_user_tried_to_add_a_product()
    {
        $user = User::factory()->create([]);
        Sanctum::actingAs($user);
        $product = Product::factory()->make()->toArray();
        $response = $this->postJson('api/products/add-product', $product);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            "status" => 401,
            "message" => "You are not authorized"
        ]);
    }

    public function test_it_gets_error_responses_for_failed_validation_requests()
    {
        $user = User::factory()->create([
            'role' => 'admin'
        ]);
        Sanctum::actingAs($user);
        $product = Product::factory()->make([
            'product_id' => '',
            'product_name' => '',
            'description' => '',
            'price' => '',
        ])->toArray();
        $response = $this->postJson('api/products/add-product', $product);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => Response::HTTP_UNPROCESSABLE_ENTITY,
            'errors' => [
                'product_id' => ["The product id field is required."],
                'product_name' => ["The product name field is required."],
                'description' => ["The description field is required."],
                'price' => ["The price field is required."],
            ]
        ]);
    }
}
