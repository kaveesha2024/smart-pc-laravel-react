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
        Schema::create('mobile_descriptions', function (Blueprint $table) {
            $table->id()->primary()->autoIncrement();
            $table->unsignedBigInteger('product_id');
            $table->longText('description');
            $table->integer('ram');
            $table->string('chipset');
            $table->string('storage');
            $table->integer('camera');
            $table->integer('battery');
            $table->string('operating_system');
            $table->string('display');
            $table->string('weight');
            $table->string('color');
            $table->string('screen_size');
            $table->integer('sim_slot');
            $table->string('warranty');
            $table->timestamps();
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mobile_descriptions');
    }
};
