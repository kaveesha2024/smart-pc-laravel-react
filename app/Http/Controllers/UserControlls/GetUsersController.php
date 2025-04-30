<?php

namespace App\Http\Controllers\UserControlls;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GetUsersController extends Controller
{
    public function getAllUsers(): JsonResponse
    {
        $response = DB::table('users')->get();
        return response()->json($response);
    }
}
