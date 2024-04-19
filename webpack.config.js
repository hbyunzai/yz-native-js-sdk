const pkg = require("./package.json");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const banner = new webpack.BannerPlugin({
    banner: `
  YzPlatForm v${pkg.version}
  provide the native function call API of yunzai mobile platform for the third party.
  Copyright (c) 2019 河北云在, ${pkg.repository.url}
  `,
    entryOnly: true
});
module.exports = {
    watch: false,
    mode: "production",
    entry: "./src/umd.ts",
    output: {
        path: path.resolve(__dirname, "dist/yz-native-js-sdk/"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        libraryTarget: "umd",
        library: "YzDevice",
        libraryExport: "default"
    },
    resolve: {
        extensions: [".js", ".ts", ".svg", ".png", ".scss", "less", "jpeg", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name]",
                            publicPath: "./assets/image/",
                            outputPath: "assets/image/"
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
            },
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/env",
                                {
                                    targets: {
                                        browsers: [
                                            "last 2 Chrome major versions",
                                            "last 2 Firefox major versions",
                                            "last 2 Safari major versions",
                                            "last 2 Edge major versions",
                                            "last 2 iOS major versions",
                                            "last 2 ChromeAndroid major versions"
                                        ]
                                    }
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
        banner,
        new CopyPlugin([
                {from: "./src/sdk.js", to: "sdk.js"},
                {from: "package.json", to: "package.json"},
                {from: 'README.md', to: "README.md"}
            ]
        ),
        new HtmlWebpackPlugin({
            title: "APP_NATIVE_SCRIPT",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        port: 4200,
        host: "0.0.0.0",
        historyApiFallback: true,
        hot: true
    }
};
