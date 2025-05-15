<?php

namespace Tests\Feature\product;


use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

final class AddProductTest extends TestCase
{
    use RefreshDatabase;
    public function test_add_product_is_working_and_gets_a_good_response_if_an_admin_added_a_product_successfully()
    {
        $user = User::factory()->create([
            'role' => 'admin'
        ]);
        Sanctum::actingAs($user);
        $product = Product::factory()->make()->toArray();
        Log::info($product);
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
}
