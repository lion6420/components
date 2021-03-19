module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/components'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
      ],
    },
  }
};