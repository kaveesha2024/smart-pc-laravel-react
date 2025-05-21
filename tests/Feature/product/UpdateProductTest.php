<?php

namespace Tests\Feature\product;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

final class UpdateProductTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;
    public function test_admin_user_can_update_product(): void
    {
        $product = Product::factory()->create()->toArray();
        $user = User::factory()->create([
            'role' => 'admin'
        ]);
        Sanctum::actingAs($user);
        $response = $this->put('api/product/update/?productId=SMP00000000', [
            "product_name" => "testProduct",
            "description" => "testDescription",
            "card_description" => "testCardDescription",
            "price" => 1000.99,
            "labelled_price" => 1000.99,
            "quantity" => 2,
            "product_images" => $product['product_images']
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            'status' => 200,
            'message' => 'product updated successfully',
        ]);
        $this->assertDatabaseHas('products', [
            "product_name" => "testProduct",
            "description" => "testDescription",
            "card_description" => "testCardDescription",
            "price" => 1000.99,
            "labelled_price" => 1000.99,
            "quantity" => 2,
            "product_images" => $product['product_images']
        ]);
    }
    public function test_it_gets_a_bad_response_if_request_validations_failed()
    {
        $product = Product::factory()->create()->toArray();
        $user = User::factory()->create([
            'role' => 'admin'
        ]);
        Sanctum::actingAs($user);
        $response = $this->put('api/product/update/?productId=SMP00000000', [
            "product_name" => "",
            "description" => 21,
            "card_description" => "",
            "price" => 1000.99,
            "labelled_price" => 1000.99,
            "quantity" => 2,
            "product_images" => $product['product_images']
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'errors',
        ]);
        $response->assertSimilarJson([
            'status' => 422,
            'errors' => [
                'product_name' => ['The product name field is required.'],
                'description' => ['The description field must be a string.'],
                'card_description' => ['The card description field is required.']
            ]
        ]);
    }
    public function test_normal_user_is_unable_to_update_a_product()
    {
        $product = Product::factory()->create()->toArray();
        $user = User::factory()->create();
        Sanctum::actingAs($user);
        $response = $this->put('api/product/update/?productId=SMP00000000', [
            "product_name" => "",
            "description" => 21,
            "card_description" => "",
            "price" => 1000.99,
            "labelled_price" => 1000.99,
            "quantity" => 2,
            "product_images" => $product['product_images']
        ]);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $response->assertSimilarJson([
            'status' => 401,
            'message' => 'You are not authorized'
        ]);
    }
}
