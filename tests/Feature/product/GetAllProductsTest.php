<?php

namespace Tests\Feature\product;



use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

final class GetAllProductsTest extends TestCase
{
    use RefreshDatabase;
    public function test_it_gets_all_the_records_in_the_product_table()
    {
        $products1 = Product::factory()->create([
            'price' => 1000.54,
        ])->toArray();
        $products2 = Product::factory()->create([
            'price' => 2000.67,
        ])->toArray();
        $response = $this->getJson('api/products');
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'products',
        ]);
        $response->assertJsonCount(2);
        $response->assertJsonStructure([
            'status',
            'products',
        ]);
        $response->assertSimilarJson([
            'status' => Response::HTTP_OK,
            'products' => [
                [

                    'product_id' => $products1['product_id'],
                    'product_name' => $products1['product_name'],
                    'description' => $products1['description'],
                    'price' => (string) $products1['price'],
                    'labelled_price' => (string) $products1['labelled_price'],
                    'discount' => '0.00',
                    'quantity' => $products1['quantity'],
                    'card_description' => $products1['card_description'],
                    'product_images' => explode(',', $products1['product_images']),

                ],
                [
                    'product_id' => $products2['product_id'],
                    'product_name' => $products2['product_name'],
                    'description' => $products2['description'],
                    'price' => (string)$products2['price'],
                    'labelled_price' => (string) $products2['labelled_price'],
                    'discount' => '0.00',
                    'quantity' => $products2['quantity'],
                    'card_description' => $products2['card_description'],
                    'product_images' => explode(',', $products2['product_images']),
                ]
            ]
        ]);
    }
}
