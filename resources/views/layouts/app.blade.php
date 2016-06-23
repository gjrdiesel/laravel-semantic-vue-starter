<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel w/ Vueify/Browserify/Browsersync/SemanticUI</title>
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet">
    <link href="{{ elixir('css/all.css') }}" rel="stylesheet">
</head>
<body>

@yield('content')

<script src="{{ elixir('js/app.js') }}"></script>
<script src="{{ elixir('js/all.js') }}"></script>
</body>
</html>
