const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development', // Set to 'production' for minified builds
    entry: {
        main: './app/js/custom/main.js',
        vendor: './app/js/vendor/vendor.js',
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'app/sass/print.scss',
                    to: 'print.scss',
                },
            ],
        }),
        new TerserPlugin({
            // Enable minification in production mode
            terserOptions: {
                compress: {
                    drop_console: true, // Remove console logs in production
                },
            },
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname),
        },
        port: 3000,
        proxy: {
            '^/((?!^$).*)$': {
                target: 'https://polys', // Replace with your MAMP URL
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path,
            },
        },
    },
};