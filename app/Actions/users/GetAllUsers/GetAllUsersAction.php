<?php

namespace App\Actions\users\GetAllUsers;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class GetAllUsersAction
{
    public function __invoke(): Collection
    {
        return DB::table('users')->get();
    }
}
