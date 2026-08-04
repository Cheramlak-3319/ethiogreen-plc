<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'parent_id', 'created_by', 'updated_by', 'sort_order'];

    protected $guarded = ['id'];

    protected $table = 'categories';

    $protected $casts = [
        'is_active' => 'boolean',
    ];

    protected $primaryKey = 'id';

    protected $timestamp = true;

    protected $hidden = [
        'parent_id',
        'created_by',
        'updated_by',
        'sort_order',
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    public function products()
    {
        return $this->hasMany(Product::class, 'category_id');
    }
}
