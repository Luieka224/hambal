<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getSlug(Request $request)
    {
        $user = array();

        try {
            $user = User::where('slug',$request->slug)->first();
        } catch(\Throwable $ex) {
            return response('User not found', 404);
        }

        return response($user->id, 200);
    }
}