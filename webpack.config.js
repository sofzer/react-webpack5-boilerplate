const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleTracker = require("webpack-bundle-tracker");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

webpackConfig = (env) => {
  const devMode = env && env == "development" ? true : false; 

  return {
    mode: devMode ? "development" : "production",
    devtool: devMode ? "source-map" : false, // How sourcemap is generated,
    entry: {
      // Add the entry points of the component that could be exported
      index: ["./src/index.js"],
    },
    output: {
      path: path.resolve(__dirname, "dist/bundles"),
      filename: "[name].js",
      chunkFilename: "[id].js",
      publicPath: "/",
    },

    resolve: {
      extensions: [".js", ".jsx", ".scss", "*"],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/, /.+\.test\.js$/, /.+\.tests\.js$/],
          use: {
            loader: "babel-loader",
          },
        },

        //  Fonts and logos
        {
          test: /\.(otf|ttf|eot|svg|woff(?:2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },

        //  Image files
        {
          test: /\.(jpe?g|png|gif|cur)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },

        // Style files
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: devMode,
              },
            },
            {
              loader: "sass-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      devMode ? new BundleAnalyzerPlugin() : false,
      new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        filename: "index.html",
        inject: "body",
      }),
      new BundleTracker({
        path: require("path").resolve("./dist"),
        filename: "webpack-stats.json",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[name].[chunkhash].css",
      }),
    ].filter(Boolean),
    devServer: {
      port: 9000,
      historyApiFallback: true,
      contentBase: "./dist/bundles",
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};

module.exports = webpackConfig;
