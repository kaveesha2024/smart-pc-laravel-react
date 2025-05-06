<?php

namespace App\Actions\dashboard;

use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class DashboardAction
{
    public function __invoke(): array
    {
        $role = Auth()->user()['role'];
        if ($role === 'admin') {
            $allUsers = DB::table('users')->get();
            $allProducts = DB::table('products')->get();
            $users = DB::table('users')->orderBy('created_at', 'desc')->limit(20)->get();

            return [
                'status' => Response::HTTP_OK,
                'total_users' => count($allUsers),
                'total_products' => count($allProducts),
                'latest_signup_users' => $users,
            ];
        }else {
            return [
                'status' => Response::HTTP_UNAUTHORIZED,
                'message' => 'you are not authorized to access this page',
            ];
        }
    }
}
