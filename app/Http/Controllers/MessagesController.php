<?php

namespace App\Http\Controllers;

use App\Models\Messages;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Messages::where('user_id',Auth::id())->get();

        // return response($msgs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'slug' => 'size:7|required',
            'message' => 'string|required'
        ]);

        try {
            $user = User::where('slug',$validated['slug'])->first();
        } catch(\Throwable $ex) {
            return response('No such user exists', 404);
        }

        // return $validated['message'];

        return Messages::create([
            'user_id' => $user->id,
            'message' => $validated['message'],
        ]);
    }
}
