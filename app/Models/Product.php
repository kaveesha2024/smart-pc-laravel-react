<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = [
        'product_id',
        'product_name',
        'description',
        'price',
        'labelled_price',
        'discount',
        'quantity',
        'card_description',
        'product_images'
    ];
}
