<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

    public function run()
    {
        //$faker = Faker::create();

        foreach(range(1, 1) as $index)
        {
            User::create([
                'email' => 'john@doe.com',
                'username' => 'john',
                'first_name' => 'John',
                'last_name' => 'Doe',
                'password' => Hash::make('johndoe'),
                'active' => '1'
            ]);

            User::create([
                'email' => 'jane@doe.com',
                'username' => 'jane',
                'first_name' => 'Jane',
                'last_name' => 'Doe',
                'password' => Hash::make('janedoe'),
                'active' => '1'
            ]);

            User::create([
                'email' => 'jina@doe.com',
                'username' => 'jina',
                'first_name' => 'Jina',
                'last_name' => 'Doe',
                'password' => Hash::make('jinadoe'),
                'active' => '1'
            ]);
        }
    }
}