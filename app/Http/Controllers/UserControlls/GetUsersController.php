<?php

namespace App\Http\Controllers\UserControlls;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetUsersController extends Controller
{
    public function getAllUsers(): JsonResponse
    {
        return response()->json([]);
    }
}
