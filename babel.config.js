module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      polyfills: [
        'es.symbol' // https://github.com/zloirock/core-js
      ]
    }]
  ]
};
