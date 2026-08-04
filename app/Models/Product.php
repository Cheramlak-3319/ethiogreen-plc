<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'short_description',
        'sku',
        'category_id',
        'brand_id',
        'merchant_id',
        'selling_price',
        'cost_price',
        'quantity',
        'min_stock',
        'status',
        'weight',
        'created_by',
        'updated_by',
        'published_at'
    ];

    protected $guarded = ['id'];

    protected $table = 'products';

    protected $casts = [
        'selling_price' => 'decimal:2',
        'cost_price' => 'decimal:2',
        'weight' => 'decimal:2',
    ];

    protected $primaryKey = 'id';

    protected $timestamps = true;

    public function category()
    {
        return $this->belongsTo(Categorie::class, 'category_id');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    public function merchant()
    {
        return $this->belongsTo(User::class, 'merchant_id');
    }
}
