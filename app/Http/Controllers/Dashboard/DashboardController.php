<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class DashboardController extends Controller
{
    public function dashBoard(): JsonResponse
    {
        $role = Auth()->user()['role'];
        if ($role === 'admin') {
            $allUsers = DB::table('users')->get();
            $allProducts = DB::table('products')->get();
            $users = DB::table('users')->orderBy('created_at', 'desc')->limit(20)->get();

            return response()->json([
                'status' => Response::HTTP_OK,
                'total_users' => count($allUsers),
                'total_products' => count($allProducts),
                'latest_signup_users' => $users,
            ]);
        }else {
            return response()->json([
                'status' => Response::HTTP_UNAUTHORIZED,
                'message' => 'you are not authorized to access this page',
            ]);
        }
    }
}
