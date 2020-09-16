module.exports = {
  entry: __dirname + "/app/index.jsx",
  output: {
    filename: "plugin-sidebar.js",
    path: __dirname, // + "/build",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
