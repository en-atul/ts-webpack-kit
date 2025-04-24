// Import the `merge` function from `webpack-merge` to combine configurations
const { merge } = require('webpack-merge');

// Import the common configuration file
const common = require('./webpack.common');

// Import the MiniCssExtractPlugin to extract CSS into separate files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Import the CleanWebpackPlugin to clean the output directory before each build
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Export the production configuration by merging it with the common configuration
module.exports = merge(common, {
  // Set the mode to 'production' for optimizations like minification
  mode: 'production',

  // Generate source maps for debugging production code
  devtool: 'source-map',

  // Configure the output settings
  output: {
    // Use content hashes in filenames for cache busting
    /**
     * Browsers cache JS/CSS files to avoid re-downloading them on every visit. But that causes issues if the file changes and the browser still loads the old one.
     * Using contenthash solves that:

          - If the file content changes → hash changes → browser downloads new file.
          - If the file content doesn't change → hash stays the same → browser uses cached version.

          Example: 
          main.83adf9c.js     ← initial build
          main.a1b2c3d.js     ← after code changes

     */
    filename: '[name].[contenthash].js',

    // Specify the output directory for bundled files
    path: __dirname + '/dist',

    // Set the public path for assets
    publicPath: '/',
  },

  // Define module rules for handling different file types
  module: {
    rules: [
      {
        // Match `.css` and `.scss` files
        test: /\.s?css$/,

        // Use these loaders to process CSS and SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader',               // Resolve CSS imports
          'sass-loader',              // Compile SCSS to CSS
        ],
      },
    ],
  },

  // Add plugins to extend Webpack's functionality
  plugins: [
    // Extract CSS into files with content hashes in their names
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),

    // Clean the output directory before each build
    new CleanWebpackPlugin(),
  ],
});
