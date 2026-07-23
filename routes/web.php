<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
     return Inertia::render(
        'features/website/home/HomePage'
    );
});


Route::get('/about', function () {
     return Inertia::render(
        'features/website/about/AboutPage'
    );
});


require __DIR__.'/auth.php';
