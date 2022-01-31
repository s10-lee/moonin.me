module.exports = {
    assetsDir: 'assets',
    publicPath: '/',
    runtimeCompiler: true,
    lintOnSave: false,
    productionSourceMap: false,
    css: {
        extract: true
    },
    chainWebpack: (config) => {
        config.resolve.modules.add('./src');
    }
};