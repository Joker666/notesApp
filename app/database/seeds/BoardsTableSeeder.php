<?php

// Composer: "fzaninotto/faker": "v1.4.0"
use Faker\Factory as Faker;

class BoardsTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, 30) as $index)
		{
			Board::create([
                'user_id' => $faker->numberBetween(1,3),
                'title' => $faker->word(10),
                'description' => $faker->paragraph(1),
			]);
		}
	}

}
