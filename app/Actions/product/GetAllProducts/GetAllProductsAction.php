<?php

namespace App\Actions\product\GetAllProducts;

use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class GetAllProductsAction
{
    public function __invoke(): array
    {
        $response = DB::table('products')->select([
            'product_id',
            'product_name',
            'description',
            'price',
            'labelled_price',
            'discount',
            'quantity',
            'card_description',
            'product_images',
        ])->get()->map(function ($product) {
            $product->product_images = explode(',', $product->product_images);
            return $product;
        });
        if (!$response) {
            return [
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
                'message' => 'could not get products',
            ];
        }
        return [
            'status' => Response::HTTP_OK,
            'products' => $response,
        ];
    }
}
