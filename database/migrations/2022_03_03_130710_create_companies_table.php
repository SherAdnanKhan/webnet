<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('manufacture')->nullable();
            $table->string('products')->nullable();
            $table->string('number_of_employeer')->nullable();
            $table->string('country')->nullable();
            $table->string('property')->nullable();
            $table->string('certification')->nullable();
            $table->string('main_market')->nullable();
            $table->string('contact_link')->nullable();
            $table->bigInteger('distance')->nullable();
            $table->string('extra_info')->nullable();
            $table->string('news')->nullable();
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
        Schema::dropIfExists('companies');
    }
}
