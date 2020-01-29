module.exports = {
    productionSourceMap: false, // 关闭生产环境下的map
    publicPath: '/', // 设置统一的url地址, BASE_URL == publicPath
    devServer: {
        /* 跨域的解决办法 */
        proxy: 'https://module-script-tests-gkecnwbwkb.now.sh/no-cors',
    },
    pwa: {
        name: 'My App',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // 配置 workbox 插件
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // InjectManifest 模式下 swSrc 是必填的。
            swSrc: 'dev/sw.js',
            // ...其它 Workbox 选项...
        }
    }
};