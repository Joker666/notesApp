<?php

// Composer: "fzaninotto/faker": "v1.4.0"
use Faker\Factory as Faker;

class NotesTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, 300) as $index)
		{
			Note::create([
                'board_id' => $faker->numberBetween(1,30),
                'description' => $faker->paragraph(1),
                'background' => '#F5FFFA'
			]);
		}
	}

}
