<?php

namespace Tests\Feature\products;



use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetAllProductsTest extends TestCase
{
    use RefreshDatabase;
    public function test_it_gets_all_the_products_when_call_get_all_product_api()
    {
        $product = Product::factory()->count(20)->create()->toArray();
        $response = $this->get('api/products');
        $response->assertJsonStructure([
            'status',
            'products'
        ]);
    }
}
