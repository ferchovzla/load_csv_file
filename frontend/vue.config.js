module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 3820,
    host: '0.0.0.0',
    hot: true,
  },

  transpileDependencies: ['vuetify'],
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
