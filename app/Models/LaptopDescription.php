<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LaptopDescription extends Model
{
    use HasFactory;
    protected $table = 'laptop_description';
    protected $fillable = [
        'product_id',
        'long_description',
        'ram',
        'processor',
        'storage',
        'graphics',
        'storage_type',
        'display',
        'color',
        'screen_size',
        'operating_system',
        'battery',
    ];
}
