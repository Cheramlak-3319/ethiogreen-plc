<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductImage;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home():Response
    {
        return inertia('features/website/home/HomePage');
    }

    public function about():Response
    {
        return inertia('features/website/about/AboutPage');
    }

    public function contact():Response
    {
        return inertia('features/website/contact/ContactPage');
    }

    public function products():Response
    {
         $products = Product::query()
        ->select([
            'id',
            'name',
            'slug',
            'description',
            'short_description',
            'category_id',
            'selling_price',
            'weight',
            'status',
        ])
        ->with('images')
        ->where('status', 'Published')
        ->latest()
        ->get();

        return inertia('features/website/products/ProductsPage', [
            'products' => $products,
        ]);
    }

    public function news():Response
    {
        return inertia('features/website/news/NewsPage');
    }

    public function carrier():Response
    {
        return inertia('features/website/carrier/CarrierPage');
    }
}
