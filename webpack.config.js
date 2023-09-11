const path = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const writeFileWebpackPlugin = require("write-file-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        clean: true,        
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
            serveIndex: true,
        },
        hot: 'only',
        port: 3000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },     
        ],
    },       
    plugins: [
        new writeFileWebpackPlugin(),
        new copyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, "src/assets"), to: path.resolve(__dirname, "dist/assets")}
            ]
        }),
    ]
};
