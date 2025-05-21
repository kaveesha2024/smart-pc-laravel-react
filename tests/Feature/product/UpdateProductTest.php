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
        $res = $this->put('api/product/update/?productId=SMP00000000', [
            "product_name" => "testProduct",
            "description" => "testDescription",
            "card_description" => "testCardDescription",
            "price" => 1000.99,
            "labelled_price" => 1000.99,
            "quantity" => 2,
            "product_images" => $product['product_images']
        ]);
        $res->assertStatus(200);
        $res->assertJsonStructure([
            'status',
            'message',
        ]);
        $res->assertSimilarJson([
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
}
