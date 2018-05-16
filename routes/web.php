<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;
use App\Product;

Route::get('/', function () {
    return view('welcome');
});

Route::put('/products/{id}', function(Request $request, $id){
    //return Product::findOrFail($id);
    return "gerald";
});


Route::post('/products', function(Request $request){
    $validate = $this->validate($request, [
        'title' => 'required|unique:products|max:255',
        'description'=>'required',
        'price' => 'integer',
        'availability' => 'boolean',
        ]);

        dd($reques->all());
        $p= new Product;
        $p->title =$request->title;
        $p->description= $request->description;
        $p->price=$request->price;
        $p->availability=$request->availability;
        $p->save();
        
        //$product = Product::create($request->all());
        //return response()->json($p, 201);

});