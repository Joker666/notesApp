<?php

class DatabaseSeeder extends Seeder {

    private $tables = ['boards', 'notes', 'users'];

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
        //$this->cleanDatabase();
		Eloquent::unguard();

		$this->call('UsersTableSeeder');
        //$this->call('BoardsTableSeeder');
        //$this->call('NotesTableSeeder');
        $this->command->info('Tables seeded!');
	}

    private function cleanDatabase()
    {
        foreach($this->tables as $tableName){
            DB::table($tableName)->truncate();
        }
    }

}
