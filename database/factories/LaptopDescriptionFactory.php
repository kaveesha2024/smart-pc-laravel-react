<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class LaptopDescriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'long_description' => $this->faker->text(),
            'ram' => $this->faker->randomElement(['4GB', '8GB', '16GB', '32GB']),
            'processor' => $this->faker->randomElement(['Intel', 'AMD']),
            'storage' => $this->faker->randomElement(['1TB', '2TB', '4TB', '8TB']),
            'graphics' => $this->faker->randomElement(['Nvidia', 'AMD']),
            'storage_type' => $this->faker->randomElement(['SSD', 'HDD']),
            'display' => $this->faker->randomElement(['IPS', 'LED', 'LCD', 'OLED']),
            'color' => $this->faker->randomElement(['Black', 'White', 'Blue', 'Red']),
            'screen_size' => $this->faker->randomElement(['15.6', '17', '19.5', '22']),
            'operating_system' => $this->faker->randomElement(['Windows', 'Linux', 'Mac OS']),
            'battery' => $this->faker->randomElement(['10000mAh', '15000mAh', '20000mAh']),
        ];
    }
}
