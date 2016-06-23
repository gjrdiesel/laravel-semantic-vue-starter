# Laravel Browserify/Vueify/SemanticUI/BrowserSync

Just a rough starting point with a gulpfile setup. I'll most likely often use it as a starting point,
figured making it public might help some others.

## Getting started

Clone this repo

1) `git clone https://github.com/gjrdiesel/laravel-semantic-vue-starter`

Install PHP dependencies

2) `composer install`

Install npm dependencies

3) `npm install`

Run gulp

4) `gulp`

Setup environment

5) `cp -v .env.example .env`

6) `php artisan key:generate`

7) Set your development url in the gulpfile ( e.g. using valet [ laravel-semantic-vue-starter.dev ] )

Start browsersync

8) `gulp watch`

Start hacking! Edit/add any vue components in `resources/assets/js`.