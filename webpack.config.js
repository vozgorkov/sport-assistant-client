const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"), // output folder
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
  },
  resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // base html
    }),
  ],
};
