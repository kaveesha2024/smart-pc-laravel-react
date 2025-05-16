<?php

namespace App\Http\Controllers\Product;

use App\Actions\product\AddProduct\AddProductAction;
use App\Actions\product\GetAllProducts\GetAllProductsAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Product\AddProductRequest;
use Illuminate\Http\JsonResponse;

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
}
