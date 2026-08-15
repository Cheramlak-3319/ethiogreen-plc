<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [PageController::class, 'home'])->name('dashboard');

Route::get('/about', [PageController::class, 'about'])->name('about');

Route::get('/contact', [PageController::class, 'contact'])->name('contact');

Route::get('/products', [PageController::class, 'products'])->name('products');

Route::get('/news', [PageController::class, 'news'])->name('news');

Route::get('/carrier', [PageController::class, 'carrier'])->name('carrier');


// Route::resource('products', ProductController::class);

Route::resource('categories', CategoryController::class)->only(['index', 'show']);



require __DIR__.'/auth.php';
