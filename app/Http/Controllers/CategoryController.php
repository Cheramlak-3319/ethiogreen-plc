<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        $categories = Category::whereNull('parent_id')
            ->where('is_active', true)
            ->with('children')
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Categories/Index', [
            'categories' => $categories,
        ]);
    }

    public function show(Category $category): Response
    {
        $category->load([
            'products' => fn ($query) => $query->where('is_active', true),
            'children',
        ]);

        return Inertia::render('Categories/Show', [
            'category' => $category,
        ]);
    }
}