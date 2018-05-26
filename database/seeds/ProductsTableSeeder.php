<?php

use Illuminate\Database\Seeder;
use \Faker\Factory;
use App\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Factory::create();
        // create 50 products records
        for($i=0; $i < 5 ; $i++ ){
            Product::create([
                'title'=> $faker->title,
                'description' => $faker->paragraph,
                'price' => $faker->randomNumber(2),
                'availability'=> $faker->boolean(50),
                'user_id'=>1
            ]);
        }
    }
}
