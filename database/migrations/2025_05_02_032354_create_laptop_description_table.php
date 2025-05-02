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
        Schema::create('laptop_description', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->longText('description');
            $table->string('ram');
            $table->string('processor');
            $table->string('storage');
            $table->string('graphics');
            $table->string('storage_type');
            $table->string('display');
            $table->string('color');
            $table->string('screen_size');
            $table->string('operating_system');
            $table->string('battery');
            $table->timestamps();
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laptop_description');
    }
};
