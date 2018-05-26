<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function test(Request $request){
        $user_id = Auth::id();
        return $user_id;
    }

    public function test2(Request $request){
        $user_id = Auth::id();
        return "the id user is".$user_id;
    }
}
