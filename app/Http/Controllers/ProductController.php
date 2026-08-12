<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    
    public function index(Request $request): Response
    
    {
        // $products = Product::with('category')
        //     ->latest()
        //     ->paginate(12);

        // $product = Product::latest()->paginate(10);

        $products = Product::query()->when($request->search, fn($query, $search)=>
            $query -> where('name', 'like', "%{$search}%")
        ) -> when($request->category_id, fn($query, $categoryId)=>
            $query -> where('category_id', $categoryId)
        )-> when($request->states, fn($query, $status)=>
            $query -> where('status', $status)
        )->with('category')->latest()->paginate()->withQueryString();

        return Inertia::render('Products/Index', [
            'products' => $products,
            'filter' => $request->only(['search', 'category_id', 'status']),
        ]);
    }
    

    public function create(): Response{
            
    }

    public function store(){}

    public function show(){}

    public function edit(){}

    public function update(){}

    public function destroy(){}
}
