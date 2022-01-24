const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin").default;
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",

    output: {
        clean: true,
        filename: 'main.[fullhash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                    options: {
                        sources: false,
                    },
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ],
    },
    optimization: {
        minimizer: true,
        minimizer: [
          new CssMinimizerPlugin(),
          new TerserWebpackPlugin()
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Initial',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            ignoreOrder: false,
            filename: '[name].[fullhash].css'
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets", to: "assets" }
            ]
          }),
    ],
}