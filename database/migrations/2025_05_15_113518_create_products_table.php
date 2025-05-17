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
            $table->id();
            $table->string('product_id')->default('SMP00000000');
            $table->string('product_name');
            $table->longText('description');
            $table->decimal('price');
            $table->decimal('labelled_price');
            $table->decimal('discount')->default(0);
            $table->integer('quantity');
            $table->string('card_description');
            $table->longText('product_images');
            $table->timestamps();
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
