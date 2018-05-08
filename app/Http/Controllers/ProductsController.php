<?php

namespace App\Http\Controllers;
use App\Product;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index(){
        return Product::all();
    }

    public function show(Product $product){
        return $product;
    }

    public function store(Request $request){

        $validate = $this->validate($request, [
        'title' => 'required|unique:products|max:255',
        'description'=>'required',
        'price' => 'integer',
        'availability' => 'boolean',
        ]);
        $p= new Product;
        $p->title =$request->title;
        $p->description= $request->description;
        $p->price=$request->price;
        $p->availability=$request->availability;
        $p->save();
        
        //$product = Product::create($request->all());
        return response()->json($p, 201);
    }

    public function update(Request $request, $id){
        redirectTo("/");
        $product = Product::find($id);
        $product->save();
        //$product->update($request->all());
        return response()->json($product, 200);
    }

    public function delete(Product $product){
        $product->delete();
        return response()->json(null, 204);
    }
}
