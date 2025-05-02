<?php

namespace App\Actions\products\AddProduct;

use App\Models\LaptopDescription;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class AddProductAction
{
    public function __invoke($request): array
    {
        $user = Auth::user();
        if (!$user) {
            return [
                'status' => Response::HTTP_UNAUTHORIZED,
                'message' => "You haven't logged in yet, please login to add product",
            ];
        }
        if ($user['role'] !== 'admin') {
            return [
                'status' => Response::HTTP_UNAUTHORIZED,
                'message' => "You are not authorized to add product",
            ];
        }

        $response1 = Product::create([
            'product_name' => $request['product_name'],
            'description' => $request['description'],
            'image' => $request['image'],
            'price' => $request['price'],
            'category' => $request['category'],
            'brand' => $request['brand'],
            'quantity' => $request['quantity'],
        ]);

        if (!$response1) {
            return [
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
                'message' => 'Error occurred while adding product',
            ];
        }
        $productId = DB::getPdo()->lastInsertId();

        $response2 = LaptopDescription::create([
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
            return [
                'status' => Response::HTTP_INTERNAL_SERVER_ERROR,
            ];
        }
        return [
            'status' => Response::HTTP_OK,
            'message' => 'product added successfully',
        ];
    }
}
