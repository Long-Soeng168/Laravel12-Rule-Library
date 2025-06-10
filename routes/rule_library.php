<?php

use App\Http\Controllers\RuleLibraryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [RuleLibraryController::class, 'index']);
Route::get('/about', [RuleLibraryController::class, 'about']);
Route::get('/resources', [RuleLibraryController::class, 'resources']);
Route::get('/databases', [RuleLibraryController::class, 'databases']);
Route::get('/contact_us', [RuleLibraryController::class, 'contact']);
Route::get('/collections', [RuleLibraryController::class, 'collections']);
Route::get('/collections/{id}', [RuleLibraryController::class, 'collection_show']);
Route::get('/news/{id}', [RuleLibraryController::class, 'news_show']);
