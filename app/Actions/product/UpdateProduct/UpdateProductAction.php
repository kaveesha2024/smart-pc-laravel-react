<?php

namespace App\Actions\product\UpdateProduct;

use App\Models\Product;
use Symfony\Component\HttpFoundation\Response;

class UpdateProductAction
{
    public function __invoke($request): array
    {
        $response = Product::where('product_id', $request['productId'])->update([
            'product_name' => $request['product_name'],
            'description' => $request['description'],
            'card_description' => $request['card_description'],
            'price' => $request['price'],
            'labelled_price' => $request['labelled_price'],
            'quantity' => $request['quantity'],
            'product_images' => $request['product_images'],
        ]);
        if (!$response) {
            return [
                'status' => Response::HTTP_NOT_FOUND,
                'message' => "product not found"
            ];
        }
        return [
            'status' => Response::HTTP_OK,
            'message' => 'product updated successfully'
        ];
    }
}
