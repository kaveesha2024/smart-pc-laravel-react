<?php

namespace Tests\Feature\product;


use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

final class AddProductTest extends TestCase
{
    use RefreshDatabase;
    public function test_add_product_is_working_and_gets_a_good_response_if_an_admin_added_a_product_successfully()
    {
        $product = Product::factory()->make()->toArray();

        $response = $this->postJson('api/products/add-product', $product);

        $response->assertStatus(200);

    }
}
