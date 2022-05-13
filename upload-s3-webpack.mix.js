const mix = require('laravel-mix');
const s3Plugin = require('webpack-s3-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let webpackPlugins = [];
if (mix.inProduction() && process.env.UPLOAD_S3) {
  webpackPlugins = [
    new s3Plugin({
      include: /.*\.(css|js)$/,
      s3Options: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
        region: 'ap-northeast-1',
      },
      s3UploadOptions: {
        Bucket: process.env.ASSETS_S3_BUCKET,
        CacheControl: 'public, max-age=31536000'
      },
      basePath: 'app',
      directory: 'public'
    })
  ]
}

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
  plugins: webpackPlugins
});

if (mix.inProduction()) {
  mix.version();
}