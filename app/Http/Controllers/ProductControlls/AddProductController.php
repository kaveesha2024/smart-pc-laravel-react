<?php

namespace App\Http\Controllers\ProductControlls;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class AddProductController extends Controller
{
    public function addProduct(Request $request): JsonResponse
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json([
                'status' => Response::HTTP_UNAUTHORIZED,
                'message' => "You haven't logged in yet, please login to add product",
            ]);
        }
        if ($user['role'] !== 'admin') {
            return response()->json([
                'status' => Response::HTTP_UNAUTHORIZED,
                'message' => "You are not authorized to add product",
            ]);
        }

        $response1 = DB::table('products')->insert([
            'product_name' => $request['product_name'],
            'description' => $request['description'],
            'image' => $request['image'],
            'price' => $request['price'],
            'category' => $request['category'],
            'brand' => $request['brand'],
            'quantity' => $request['quantity'],
            'status' => $request['status'],
        ]);

        if (!$response1) {
            return response()->json([
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
                'message' => 'Error occurred while adding product',
            ]);
        }
        $productId = DB::getPdo()->lastInsertId();

        $response2 = DB::table('laptop_description')->insert([
            'product_id' => $productId,
            'long_description' => $request['long_description'],
            'ram' => $request['ram'],
            'processor' => $request['processor'],
            'storage' => $request['storage'],
            'graphics' => $request['graphics'],
            'storage_type' => $request['storage_type'],
            'display' => $request['display'],
            'color' => $request['color'],
            'screen_size' => $request['screen_size'],
            'operating_system' => $request['operating_system'],
            'battery' => $request['battery'],
        ]);
        if (!$response2) {
            return response()->json([
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
            ]);
        }
        return response()->json([
            'status' => Response::HTTP_OK,
            'message' => 'product added successfully',
        ]);
    }
}
