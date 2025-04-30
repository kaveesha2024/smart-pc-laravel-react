<?php

namespace App\Http\Controllers\UserControlls;

use App\Actions\users\GetAllUsers\GetAllUsersAction;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GetUsersController extends Controller
{
    public function getAllUsers(GetAllUsersAction $GetAllUsers): JsonResponse
    {
        return response()->json($GetAllUsers());
    }
}
