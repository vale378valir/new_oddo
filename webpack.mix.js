// const mix = require('laravel-mix');

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css')
//     .copy('node_modules/admin-lte/dist/css/adminlte.min.css', 'public/css/adminlte.min.css')
//     .copy('node_modules/admin-lte/dist/js/adminlte.min.js', 'public/js/adminlte.min.js')
//     .copy('node_modules/admin-lte/plugins', 'public/plugins');

const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

// Menyalin CSS AdminLTE dan dependencies terkait ke direktori publik
mix.copy('node_modules/admin-lte/dist/css/adminlte.min.css', 'public/css/adminlte.min.css')
    .copy('node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css', 'public/css/fontawesome.min.css');

// Menyalin JS AdminLTE dan dependencies terkait ke direktori publik
mix.copy('node_modules/admin-lte/dist/js/adminlte.min.js', 'public/js/adminlte.min.js')
    .copy('node_modules/admin-lte/plugins/jquery/jquery.min.js', 'public/js/jquery.min.js')
    .copy('node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js', 'public/js/bootstrap.bundle.min.js');

// Menggabungkan file CSS tambahan jika diperlukan
mix.styles([
    'public/css/adminlte.min.css',
    'public/css/fontawesome.min.css',
    // Tambahkan file CSS lainnya jika diperlukan
], 'public/css/all.css');

// Menggabungkan file JS tambahan jika diperlukan
mix.scripts([
    'public/js/jquery.min.js',
    'public/js/bootstrap.bundle.min.js',
    'public/js/adminlte.min.js',
    // Tambahkan file JS lainnya jika diperlukan
], 'public/js/all.js');

// Versiing file untuk cache busting
if (mix.inProduction()) {
    mix.version();
}