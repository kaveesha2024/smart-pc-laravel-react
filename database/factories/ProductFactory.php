<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_name' => fake()->name(),
            'description' => $this->faker->text(),
            'card_description' => $this->faker->name(),
            'price' => $this->faker->randomFloat(2, 100, 10000),
            'labelled_price' => $this->faker->randomFloat(2, 100, 10000),
            'quantity' => $this->faker->numberBetween(0, 100),
            'product_images' => $this->faker->imageUrl(),
        ];
    }
}
