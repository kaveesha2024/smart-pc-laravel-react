<?php

namespace Tests\Feature\products;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class AddProductTest extends TestCase
{
    use RefreshDatabase;
    public function test_it_gets_a_successful_response_if_product_added_successfully()
    {
        $product = Product::factory()->make()->toArray();
        $response = $this->post('/api/products/add-product', $product);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'message',
        ]);
        $this->assertDatabaseHas('products', $product);
    }
}
