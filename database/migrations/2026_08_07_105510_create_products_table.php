<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('short_description', 300)->nullable();
            $table->string('sku')->unique();
            $table->foreignId('category_id')->constrained()->restrictOnDelete();
            $table->decimal('selling_price', 10, 2)->default(0);
            $table->decimal('cost_price', 10, 2)->default(0);
            $table->unsignedInteger('quantity')->default(0);
            $table->unsignedInteger('min_stock')->default(5);
            $table->enum('status', ['Draft', 'Published', 'Archived'])->default('Draft');
            $table->decimal('weight', 10, 2)->default(0);
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('updated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('published_at')->nullable();
            $table->SoftDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
