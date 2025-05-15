<?php

namespace App\Http\Controllers\Dashboard;

use App\Actions\dashboard\DashboardAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    public function dashBoard(DashboardAction $DashboardAction): JsonResponse
    {
        return response()->json($DashboardAction());
    }
}
