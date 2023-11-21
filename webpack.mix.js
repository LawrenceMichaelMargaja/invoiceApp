const mix=require('laravel-mix');

/*
|--------------------------------------------------------------------------
|MixAssetManagement
|--------------------------------------------------------------------------
|
|Mixprovidesaclean,fluentAPIfordefiningsomeWebpackbuildsteps
|foryourLaravelapplications.Bydefault,wearecompilingtheCSS
|filefortheapplicationaswellasbundlingupalltheJSfiles.
|
*/

mix.js('resources/js/app.js','public/js')
    .postCss('resources/css/app.css','public/css',[

    ])
    .vue();
