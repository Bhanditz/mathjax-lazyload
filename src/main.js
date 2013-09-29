// Generated by CoffeeScript 1.6.3
(function(window) {
  requirejs.config({
    enforceDefine: true,
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
      'lodash': 'libs/lodash.custom',
      'xregexp': 'libs/xregexp-amd',
      'async': 'libs/async'
    },
    shim: {
      lodash: {
        exports: '_'
      },
      "app": {
        deps: ['lodash', 'xregexp', 'async'],
        exports: "_LazyLoad"
      }
    }
  });
  require(["app"], function(_LazyLoad) {
    _LazyLoad.get(window);
  });
})(window || (1, eval)("this"));