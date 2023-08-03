const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const OptimizeCssWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name]-[contenthash].bundle.js",
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    // watchContentBase: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].bundle.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: { localIdentName: "[name]-[local]-[hash]" },
            },
          },
          "sass-loader",
        ],
        sideEffects: true,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name]-[hash].[ext]",
              outputPath: "imgs",
            },
          },
        ],
        type: "javascript/auto",
      },
      { test: /\.json$/, loader: "json-loader" },
    ],
  },
  // optimization: {
  //   minimizer: [new OptimizeCssWebpackPlugin(), new TerserPlugin()],
  // },
};
