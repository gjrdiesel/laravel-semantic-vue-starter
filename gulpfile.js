var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix)
{
    mix.sass('app.scss')
        .scripts([
            'semantic-ui/dist/semantic.js'
        ])
        .styles([
            '../js/semantic-ui/dist/semantic.css'
        ])
        .browserify('app.js')
        .browserSync({
            proxy: 'laravel-semantic-vue-starter.dev'
        })
        .version(['css/app.css','css/all.css','js/all.js','js/app.js'])
});
