<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('email');
            $table->string('username');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('password');
            $table->string('remember_token')->nullable();
            $table->string('password_temp')->nullable();
            $table->string('code')->nullable();
            $table->tinyInteger('active')
                ->default(0);
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }

}