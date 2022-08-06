<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function checkSlug(Request $request)
    {
        $user = User::where('slug',$request->slug)->first();

        if($user) return response(true, 200);
        
        return response(false, 404);
    }
}