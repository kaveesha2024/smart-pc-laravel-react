<?php

namespace App\Http\Controllers\ProductControlls;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AddProductController extends Controller
{
    public function addProduct(Request $request): JsonResponse
    {
        $response =  Product::create([
            'product_name' => $request['product_name'],
            'description' => $request['description'],
            'image' => $request['image'],
            'price' => $request['price'],
            'category' => $request['category'],
            'brand' => $request['brand'],
            'quantity' => $request['quantity'],
            'status' => $request['status'],
        ]);
        if (!$response) {
            return response()->json([
                'status' => '500',
                'message' => 'Error occurred while adding product',
            ]);
        }
        return response()->json([
            'status' => '200',
            'message' => 'product added successfully',
        ]);
    }
}
