const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCSSExtractPlugin.loader
                    }
                    , 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}


