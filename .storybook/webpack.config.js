module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
      {
        test: /\.(woff|woff2|ttf|svg)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ]
      },
      {
        test: /\.(otf|eot|jpe?g|png|gif|svg)(\?.*)?$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              modules: true,
            },
          },
        ]
      },
    ]
  }
}
