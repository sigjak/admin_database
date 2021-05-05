module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
    //publicPath: process.env.NODE_ENV === 'production' ? '/test/' : '/',
    transpileDependencies: ['vuetify'],
    productionSourceMap: false,
}
