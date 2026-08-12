<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
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
})->name('about');


Route::get('/contact', function () {
     return Inertia::render(
        'features/website/contact/ContactPage'
    );
})->name('contact');


Route::get('/products', [ProductController::class, 'index']);


require __DIR__.'/auth.php';
