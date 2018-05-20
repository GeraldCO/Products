<!doctype html>
<html lang="{{ app()->getLocale() }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React application</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body>
    
    <div class="container">
        <h2 style="text-align: center"> Laravel and React application </h2>
        <div id="root"></div>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>