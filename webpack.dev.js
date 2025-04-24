// Import the `merge` function from the `webpack-merge` package to combine multiple webpack configurations.
const { merge } = require('webpack-merge');

// Import the common webpack configuration file.
const common = require('./webpack.common');

// Import the React Refresh Webpack Plugin for enabling fast refresh during development.
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// Export the merged webpack configuration for development mode.
module.exports = merge(common, {
  // Set the mode to 'development' for better debugging and unminified output.
  mode: 'development',

  // Use a source map type optimized for development to aid in debugging.
  devtool: 'cheap-module-source-map',

  // Configure the webpack-dev-server for local development.
  devServer: {
    // Enable Hot Module Replacement (HMR) for live updates without a full page reload.
    hot: true,

    // Automatically open the application in the default browser when the server starts.
    open: true,

    // Serve the index.html file for all routes to support client-side routing.
    historyApiFallback: true,
  },

  // Add plugins to enhance the development experience.
  plugins: [
    // Enable React Fast Refresh for instant feedback during development.
    new ReactRefreshWebpackPlugin(),
  ],
});
