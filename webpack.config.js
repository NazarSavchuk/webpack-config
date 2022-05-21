const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebplackPlugin = require('css-minimizer-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }
    if (isProd) {
        config.minimizer = [
            new CssMinimizerWebplackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

const fileName = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {}        
        },  
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}



module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill','./index.js'],
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 4200,
        hot: isDev
    },
    optimization: optimization(),
    devtool: isDev ? 'source-map' : false,
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd,
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/icon.png'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: fileName('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            }, 
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            }, 
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource' 
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource' 
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource' 
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript'
                    ]
                  }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                  }
                }
            }
        ],
    }
}