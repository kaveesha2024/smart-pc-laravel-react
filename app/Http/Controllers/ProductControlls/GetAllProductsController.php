<?php

namespace App\Http\Controllers\ProductControlls;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GetAllProductsController extends Controller
{
    public function getAllProducts()
    {
        $response = DB::table('products')->get();
        return response()->json([
            'status' => 200,
            'products' => $response,
        ]);
    }
}
