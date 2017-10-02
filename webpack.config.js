// module.exports = {
//   entry: "./lib/tprime.js",
//   output: {
//   	filename: "./lib/bundle.js"
//   },
//   devtool: 'source-map',
// };





module.exports = {
  context: __dirname,
  entry: "./frontend/bench_bnb.jsx",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
