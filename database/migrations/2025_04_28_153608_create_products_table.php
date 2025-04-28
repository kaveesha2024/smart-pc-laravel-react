<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id()->primary();
            $table->uuid('user_id');
            $table->string('product_name');
            $table->json('product_description')->nullable();
            $table->string('product_image')->nullable();
            $table->float('product_price');
            $table->integer('product_quantity');
            $table->string('product_status'); //out of stock || in stock
            $table->string('product_category');
            $table->string('product_brand');
            $table->string('product_id')->unique(); // SPP000000
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
