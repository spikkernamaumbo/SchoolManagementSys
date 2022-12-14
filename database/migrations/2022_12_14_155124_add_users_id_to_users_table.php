<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
        
            $table->foreign('class_id')
            ->references('id')
            ->on('levels')
            ->onDelete('CASCADE');

            
            $table->foreign('role_id')
            ->references('id')
            ->on('roles')
            ->onDelete('CASCADE');

            
            $table->foreign('department_id')
            ->references('id')
            ->on('departments')
            ->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
