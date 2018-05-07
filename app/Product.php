<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    /* Add the fillable property into the Product Model */
 
    protected $filleable = ['title', 'description', 'price', 'availability'];

    
}
