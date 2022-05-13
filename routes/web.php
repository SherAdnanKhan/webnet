<?php

use App\Http\Controllers\Account\SettingsController;
use App\Http\Controllers\Auth\SocialiteLoginController;
use App\Http\Controllers\Companies\CompanyController;
use App\Http\Controllers\Documentation\ReferencesController;
use App\Http\Controllers\Logs\AuditLogsController;
use App\Http\Controllers\Logs\SystemLogsController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\UsersController;
use App\Models\Company;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return redirect('index');
// });

$menu = theme()->getMenu();
array_walk($menu, function ($val) {
    if (isset($val['path'])) {
        $route = Route::get($val['path'], [PagesController::class, 'index']);

        // Exclude documentation from auth middleware
        if (!Str::contains($val['path'], 'documentation')) {
            $route->middleware('auth');
        }
    }
});
Route::get('/guest-company', [CompanyController::class, 'guestCompany'])->name('guest-company');
Route::get('/get-product_key', [CompanyController::class, 'getProductkey']);

Route::middleware('auth')->group(function () {
    // Account pages
    Route::prefix('account')->group(function () {
        Route::get('settings', [SettingsController::class, 'index'])->name('settings.index');
        Route::put('settings', [SettingsController::class, 'update'])->name('settings.update');
        Route::put('settings/email', [SettingsController::class, 'changeEmail'])->name('settings.changeEmail');
        Route::put('settings/password', [SettingsController::class, 'changePassword'])->name('settings.changePassword');
    });
    Route::group(['middleware' => ['role:admin']], function () {
        Route::get('/companies', [CompanyController::class, 'index']);
        Route::get('import/companies', [CompanyController::class, 'create']);
        Route::get('/companies/{company}/delete', [CompanyController::class, 'destroy'])->name('company.delete');
        Route::post('companies/import', [CompanyController::class, 'import'])->name('company.import');
        Route::post('companies/store', [CompanyController::class, 'store'])->name('company.store');
        Route::get('companies/edit/{draw}', [CompanyController::class, 'edit'])->name('company.edit');
        Route::post('companies/update/{id}', [CompanyController::class, 'update'])->name('company.update');
        Route::get('companies/destroy/{draw}', [CompanyController::class, 'destroy'])->name('company.delete');
        Route::get('/download', [CompanyController::class, 'getDownload'])->name('company.download');
    });
    // Logs pages
    Route::get('/get-companies', [CompanyController::class, 'getCompanies'])->name('get-companies');
   
    Route::prefix('log')->name('log.')->group(function () {
        Route::resource('system', SystemLogsController::class)->only(['index', 'destroy']);
        Route::resource('audit', AuditLogsController::class)->only(['index', 'destroy']);
    });
});

Route::resource('users', UsersController::class);


require __DIR__ . '/auth.php';
