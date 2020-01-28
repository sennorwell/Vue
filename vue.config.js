module.exports = {
    devServer: {
        /* 跨域的解决办法 */
        proxy: 'https://module-script-tests-gkecnwbwkb.now.sh/no-cors',
    },
    productionSourceMap: false, // 关闭生产环境下的map
};
