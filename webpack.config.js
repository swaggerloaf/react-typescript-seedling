module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    
  resolve: {
      extensions: ['.ts', '.js', '.tsx']
  },
  module: {
      rules: [
          { test: /\.tsx$/, use: 'awesome-typescript-loader'}
      ]
  },
  devServer: {
      port: 3000,
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
}
};
