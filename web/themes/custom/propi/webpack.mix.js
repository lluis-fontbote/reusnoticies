// webpack.mix.js

let mix = require('laravel-mix');

mix.js('resources/js/custom.js', 'public/js/custom.js')
   .js('resources/js/bootstrap.js', 'public/js/bootstrap.js')
   .postCss('resources/css/custom.css', 'public/css/custom.css')
   .sass('resources/scss/bootstrap.scss', 'public/css/bootstrap.css');