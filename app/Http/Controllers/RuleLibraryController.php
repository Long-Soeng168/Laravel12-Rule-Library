<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RuleLibraryController extends Controller
{
    public function index(){
        return Inertia::render('rule-library/Index');
    }
    public function about(){
        return Inertia::render('rule-library/About');
    }
    public function resources(){
        return Inertia::render('rule-library/Resources');
    }
    
    public function databases(){
        return Inertia::render('rule-library/Databases');
    }
    public function collections(){
        return Inertia::render('rule-library/Collection');
    }

    public function contact(){
        return Inertia::render('rule-library/Contact');
    }

     public function detail($id){
        return Inertia::render('rule-library/Detail',[
            'id' => $id,
        ]);
    }
    
}
