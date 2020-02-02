const path = require('path');
module.exports = {
    productionSourceMap: false, // 关闭生产环境下的map
    publicPath: '/', // 设置统一的url地址, BASE_URL == publicPath
    devServer: {
        contentBase: path.join(__dirname, 'output.js'),
        compress: true,
        port: 9000,
        open: true,
        overlay: { // 显示遮罩层 warnings and errors
            warnings: true,
            errors: true
        }
    },
    assetsDir: 'assets', //build的静态文件目录
};