<?php

namespace App\Http\Controllers\ProductControlls;

use App\Actions\products\AddProduct\AddProductAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\product\AddProductRequest;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class AddProductController extends Controller
{
    public function addProduct(AddProductAction $AddProductAction, AddProductRequest $request): JsonResponse
    {
        $validated = $request->validated();
        return response()->json($AddProductAction($validated));
    }
}
