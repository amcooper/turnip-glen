const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.jsx"
  },
  plugins: [
    new CleanWebpackPlugin(["public"]),
    new HtmlWebpackPlugin({ template: "index.html" })
  ],
  output: {
    filename: "[name].bundle.js",
	  path: path.resolve(__dirname, "public"),
	  publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
