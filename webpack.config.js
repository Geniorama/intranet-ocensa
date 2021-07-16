const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.js']
    },

    entry: './src/app.js',
    output: {
        filename: 'js/bundle.js',
        path: path.join(__dirname, 'dist')
    },

    optimization: {
        // We no not want to minimize our code.
        minimize: false,
    },

    devServer: {
        contentBase: "dist",
        compress: true,
        port: 8000
    },

    optimization: {
        minimize: false,
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.handlebars',
            minify: false,
            templateParameters: require('./src/submenu-index.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'noticias.html',
            template: './src/noticias.handlebars',
            minify: false
        }),

        new HtmlWebpackPlugin({
            filename: 'single-noticias.html',
            template: './src/single-noticias.handlebars',
            minify: false
        }),

        new HtmlWebpackPlugin({
            filename: 'search-results.html',
            template: './src/search-results.handlebars',
            minify: false,
            templateParameters: require('./src/submenu-buscador.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'nosotros.html',
            template: './src/nosotros.handlebars',
            minify: false,
            templateParameters: require('./src/submenu-nosotros.json'),
        }),

        new HtmlWebpackPlugin({
            filename: 'casanare/casanare.html',
            template: './src/casanare/casanare.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-casanare.json')
        }),
        
        // Estaciones
        new HtmlWebpackPlugin({
            filename: 'casanare/estacion-cupiagua.html',
            template: './src/casanare/estacion-cupiagua.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-casanare.json'),
        }),

        new HtmlWebpackPlugin({
            filename: 'casanare/estacion-porvenir.html',
            template: './src/casanare/estacion-porvenir.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-casanare.json'),
        }),

        
        new HtmlWebpackPlugin({
            filename: 'casanare/estacion-cusiana.html',
            template: './src/casanare/estacion-cusiana.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-casanare.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'casanare/noticia-mujeres-cup.html',
            template: './src/casanare/noticia-mujeres-cup.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-casanare.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'perfil-ocensa.html',
            template: './src/perfil-ocensa.handlebars',
            minify: false,
            templateParameters: require('./src/submenu-nosotros.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'perfil-ocensa-02.html',
            template: './src/perfil-ocensa-02.handlebars',
            minify: false,
            templateParameters: require('./src/submenu-nosotros.json')
        }),

        // Boyaca
        new HtmlWebpackPlugin({
            filename: 'boyaca/boyaca.html',
            template: './src/boyaca/boyaca.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-boyaca.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'boyaca/base-soraca.html',
            template: './src/boyaca/base-soraca.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-boyaca.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'boyaca/estacion-paez.html',
            template: './src/boyaca/estacion-paez.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-boyaca.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'boyaca/estacion-vasconia.html',
            template: './src/boyaca/estacion-vasconia.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-boyaca.json')
        }),


        new HtmlWebpackPlugin({
            filename: 'boyaca/estacion-miraflores.html',
            template: './src/boyaca/estacion-miraflores.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-boyaca.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'boyaca/noticia-tradicion-boyaca.html',
            template: './src/boyaca/noticia-tradicion-boyaca.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-casanare.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'boyaca/noticia-mejorar-boyaca.html',
            template: './src/boyaca/noticia-mejorar-boyaca.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-casanare.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'boyaca/noticia-vecindad-boyaca.html',
            template: './src/boyaca/noticia-vecindad-boyaca.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-casanare.json')
        }),

        // Santander
        new HtmlWebpackPlugin({
            filename: 'santander/santander.html',
            template: './src/santander/santander.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-santander.json')
        }),

        new HtmlWebpackPlugin({
            filename: 'santander/estacion-la-belleza.html',
            template: './src/santander/estacion-la-belleza.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-santander.json')
        }),

        // Antioquia
        new HtmlWebpackPlugin({
            filename: 'antioquia/antioquia.html',
            template: './src/antioquia/antioquia.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-antioquia.json')
        }),

         //Estacion caucasia            
        new HtmlWebpackPlugin({
            filename: 'antioquia/estacion-caucasia.html',
            template: './src/antioquia/estacion-caucasia.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-antioquia.json')
        }),

        //Estacion chiquillo            
        new HtmlWebpackPlugin({
            filename: 'antioquia/estacion-chiquillo.html',
            template: './src/antioquia/estacion-chiquillo.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-antioquia.json')
        }),

        // Noticia reactivacion
        new HtmlWebpackPlugin({
            filename: 'antioquia/noticia-reactivacion-antioquia.html',
            template: './src/antioquia/noticia-reactivacion-antioquia.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-antioquia.json')
        }),

        //Base Puerto Berrio
        new HtmlWebpackPlugin({
            filename: 'antioquia/base-puerto-berrio.html',
            template: './src/antioquia/base-puerto-berrio.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-antioquia.json')
        }),

        // Noticia Alianzas
        new HtmlWebpackPlugin({
            filename: 'antioquia/noticia-alianzas-jac-antioquia.html',
            template: './src/antioquia/noticia-alianzas-jac-antioquia.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-antioquia.json')
        }),

        // Noticia Los Peces
        new HtmlWebpackPlugin({
            filename: 'cordoba/noticia-los-peces-cordoba.html',
            template: './src/cordoba/noticia-los-peces-cordoba.handlebars',
            minify: false,
            templateParameters: require('./src/sumenuEstaciones/submenu-antioquia.json')
        }),

        // Widgets page
        new HtmlWebpackPlugin({
            filename: 'widgets-page.html',
            template: './src/widgets-page.handlebars',
            minify: false
        }),

        // CSS
        new MiniCssExtractPlugin({
            filename: 'css/app.css'
        }),
    ],


    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },

            { test: /\.handlebars/, loader: "handlebars-loader" },

            {
                test: /\.(eot|woff|woff2|ttf)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options:{
                    publicPath: '../',
                    name: 'fonts/[name].[ext]',
                    limit: 1000
                }
            },

            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                        },
                    },
                    'postcss-loader',
                    'resolve-url-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img',
                        }
                    }
                ]
            },

            {
                test: /\.(mp4|webm)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'video'
                        }
                    }
                ]
            },

            {
                test: /\.(pdf|xls|xlsx|docx)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'docs'
                        }
                    }
                ]
            },

            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: true,
                    },
                    pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                        quality: 75
                    }
                }
            }
        ]
    }
}