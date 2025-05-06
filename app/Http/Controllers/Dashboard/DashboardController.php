<?php

namespace App\Http\Controllers\Dashboard;

use App\Actions\dashboard\DashboardAction;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class DashboardController extends Controller
{
    public function dashBoard(DashboardAction $DashboardAction): JsonResponse
    {
        return response()->json($DashboardAction());
    }
}
