const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
        },
    }),
    new MiniCssExtractPlugin({
        filename: "estilo.css"
    })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //adicionar CSS dentro da DOM injetando a tag <style>
                'css-loader', //interpreta os imports e urls...
                'sass-loader',
            ]
        }, {
            test:/\.(png|svg|jpg|gif)$/,
            use: ['fil-loader']
        }]
    }
}