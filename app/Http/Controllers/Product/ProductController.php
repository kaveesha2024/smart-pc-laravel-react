<?php

namespace App\Http\Controllers\Product;

use App\Actions\product\AddProduct\AddProductAction;
use App\Actions\product\GetAllProducts\GetAllProductsAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Product\AddProductRequest;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class ProductController extends Controller
{
    public function addProduct(AddProductRequest $request, AddProductAction $addProductAction): JsonResponse
    {
        $validatedAddProductRequests = $request->validated();
        return response()->json($addProductAction($validatedAddProductRequests));
    }

    public function getAllProducts(GetAllProductsAction $getAllProductsAction): JsonResponse
    {
        return response()->json($getAllProductsAction());
    }

    public function updateProduct(Request $request): JsonResponse
    {
        $response = Product::where("product_id", $request['product_id'])->update([
            'product_name' => $request['product_name'],
            'description' => $request['description'],
            'card_description' => $request['card_description'],
            'price' => $request['price'],
            'labelled_price' => $request['labelled_price'],
            'quantity' => $request['quantity'],
            'product_images' => $request['product_images'],
        ]);
        if (!$response) {
        return response()->json([
            'status' => Response::HTTP_NOT_FOUND,
            'message' => 'product not found'
        ]);
    }
        return response()->json([
            'status' => Response::HTTP_OK,
            'message' => 'product updated successfully'
        ]);
    }
}

