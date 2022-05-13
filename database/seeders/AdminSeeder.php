<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::where('name', 'admin')->first();
        if (!$user) {
            $user = User::create(['name' => 'admin', 'email' => 'admin@admin.com',
                'password' => Hash::make('admin'),
                'email_verified_at' => now()]);
        }
        $user->assignRole('admin');
    }
}
