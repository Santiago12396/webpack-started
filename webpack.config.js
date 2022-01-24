const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin").default;
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",

    output: {
        clean: true
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
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Initial',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets", to: "assets" }
            ]
          }),
    ],
}