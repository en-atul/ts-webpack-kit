const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader",
        ],
      },
      // Load Image Assets:
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
      },
      // Load Fonts: Always copies font files into your output directory and returns the URL.
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // By default, dotenv-webpack will look for a .env file in the current directory
    new Dotenv(),
    /**
     * @see https://github.com/mrsteele/dotenv-webpack
     * This can be configured for different environments
     */
    // new Dotenv({
    //   path: "./.env.development",
    // }),
  ],
};


