<?php

namespace App\Actions\product\AddProduct;

use App\Models\Product;
use Symfony\Component\HttpFoundation\Response;

class AddProductAction
{
    public function __invoke($request): array
    {
        $response = Product::create([
            'product_id' => $request['product_id'],
            'product_name' => $request['product_name'],
            'description' => $request['description'],
            'price' => $request['price'],
            'labelled_price' => $request['labelled_price'],
            'discount' => $this->getTheDiscount($request['price'], $request['labelled_price']),
            'quantity' => $request['quantity'],
            'card_description' => $request['card_description'],
            'product_images' => $request['product_images'],
        ]);
        if (!$response) {
            return [
                'message' => 'could not add product',
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
            ];
        }
        return [
            'message' => 'product added successfully',
            'status' => Response::HTTP_OK,
        ];
    }
    public function getTheDiscount($price, $labelled_price)
    {
        return $labelled_price - $price ;
    }
}
