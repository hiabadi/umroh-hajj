<?php

namespace App\Providers;

use App\Models\Setting;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Carbon\Carbon;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Carbon::setLocale('id');
        // Paginator::useBootstrap();

        // Share settings data with all website views
        View::composer('website.*', function ($view) {
            if (Schema::hasTable('settings')) {
                $setting = Setting::all();
                $view->with('setting', $setting);
            }
        });
    }
}
