require('dotenv').config();
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const sveltePreprocess = require("svelte-preprocess");
const { VueLoaderPlugin } = require('vue-loader')
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'webpack-dist'),
    filename: 'app.js',
  },

  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: [
          { loader: "babel-loader" },
          {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                dev: !prod
              },
              emitCss: prod,
              hotReload: !prod,
              preprocess: sveltePreprocess({})
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          { loader: "ts-loader",
            options: { appendTsSuffixTo: [/\.vue$/] }
        }
        ]
        ,
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "" },
      ],
    })
  ],
  resolve: {
    extensions: ['.jsx', '.tsx', '.ts', '.js'],
  },
};