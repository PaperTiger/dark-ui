// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleDarkUI = toggleDarkUI;

var _style = _interopRequireDefault(require("../css/style.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO:
// MAY NEED TO REFINE COLOR PALETTE VARIABLE
// ALIGN THOSE TO THE ONE USED BY FIGMA
// MAKE CODE MORE COMPACT (CASE COMPACTED)
// BOTTOM BORDER ON PAGE ACCORDIN PANEL
// Figma Panel Code HERE?
function toggleDarkUI() {
  var palette = {
    bgLightest: '#676C70',
    bgLight: '#333536',
    bgBase: '#262829',
    bgDark: '#1B1C1C',
    bgActive: '#30c2ff',
    txtLabelSection: '#EBF0F5',
    txtLabel: '#C1C5C9',
    txtDisabled: '#525558',
    txtSymbol: '#907cff',
    stActivePressed: '#25b5f1'
  };

  if (document.getElementById('f-ui') === null) {
    var style = document.createElement('style');
    var cssNode = document.createTextNode(_style.default);
    style.id = 'f-ui';
    style.appendChild(cssNode);
    setTheme();
    document.head.appendChild(style);
  } else {
    if (confirm('Figma needs a refresh in order to restore the default theme. Continue?')) {
      location.reload();
    }
  }

  function setTheme() {
    var css = '';
    var cssStack = document.styleSheets;
    Object.keys(cssStack).forEach(function (key) {
      var cssName = cssStack[key].href;

      if (cssName && cssName.includes('figma_app')) {
        css = cssStack[key];
      }
    });
    var rules = css.cssRules;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        if (item.style != undefined) {
          changeTextColor(item);
          changeBackground(item);
          changeFill(item);
          changeStroke(item);
          changeBorderBottomColor(item);
          changeBorderRightColor(item);
          changeBorderLeftColor(item);
          changeBorderTopColor(item);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function changeTextColor(item) {
    if (item.style.color != "") {
      switch (item.style.color) {
        case 'rgb(0, 0, 0)':
          item.style.color = palette.txtLabelSection;
          break;

        case 'rgba(0, 0, 0, 0.5)':
          item.style.color = palette.bgLightest;
          break;

        case 'rgb(5, 5, 5)':
          item.style.color = palette.txtLabelSection;
          break;

        case 'rgb(44, 44, 44)':
          item.style.color = palette.txtLabel;
          break;

        case 'rgb(68, 68, 68)':
          item.style.color = palette.txtLabel;
          break;

        case 'rgba(68, 68, 68, 0.3)':
          item.style.color = palette.txtDisabled;
          break;

        case 'rgb(170, 170, 170)':
          item.style.color = palette.bgLightest;
          break;

        case 'rgb(212, 212, 212)':
          item.style.color = palette.bgLightest;
          break;
      }
    }
  }

  function changeBackground(item) {
    if (item.style.backgroundColor != "") {
      switch (item.style.backgroundColor) {
        case 'rgb(44, 44, 44)':
          item.style.backgroundColor = palette.bgLight;
          break;

        case 'rgb(212, 212, 212)':
          item.style.backgroundColor = palette.bgLight;
          break;

        case 'rgb(229, 229, 229)':
          item.style.backgroundColor = palette.bgDark;
          break;

        case 'rgb(239, 239, 239)':
          item.style.backgroundColor = palette.bgLight;
          break;

        case 'rgb(248, 248, 248)':
          item.style.backgroundColor = palette.bgBase;
          break;

        case 'rgb(252, 252, 252)':
          item.style.backgroundColor = palette.bgBase;
          break;

        case 'rgb(255, 255, 255)':
        case '#FFF':
        case 'rgba(255, 255, 255, 0.95)':
        case 'rgba(255, 255, 255, 0.953)':
          item.style.backgroundColor = palette.bgBase;
          break;
      }
    }
  }

  function changeFill(item) {
    if (item.style.fill != "") {
      switch (item.style.fill) {
        case 'rgb(0, 0, 0)':
          item.style.fill = palette.txtLabelSection;
          break;

        case 'rgb(5, 5, 5)':
          item.style.fill = palette.txtLabelSection;
          break;

        case 'rgb(44, 44, 44)':
          item.style.fill = palette.txtLabelSection;
          break;

        case 'rgb(68, 68, 68)':
          item.style.fill = palette.txtLabelSection;
          break;

        case 'hsla(0,0%,67%,0.3)':
          item.style.fill = palette.txtDisabled;
          break;

        case 'rgb(170, 170, 170)':
          item.style.fill = palette.bgLightest;
          break;

        case 'rgb(212, 212, 212)':
          item.style.fill = palette.bgLightest;
          break;

        case 'rgb(229, 229, 229)':
          item.style.fill = palette.bgDark;
          break;

        case 'rgb(239, 239, 239)':
          item.style.fill = palette.bgLight;
          break;

        case 'rgb(252, 252, 252)':
          item.style.fill = palette.bgBase;
          break;
      }
    }
  }

  function changeStroke(item) {
    if (item.style.stroke != "") {
      switch (item.style.stroke) {
        case 'rgb(170, 170, 170)':
          item.style.stroke = palette.bgLightest;
          break;
      }
    }
  }

  function changeBorderBottomColor(item) {
    if (item.style.borderBottomColor != "") {
      switch (item.style.borderBottomColor) {
        case 'rgb(239, 239, 239)':
          item.style.borderBottomColor = palette.bgDark;
          break;

        case 'rgb(212, 212, 212)':
          item.style.borderBottomColor = palette.bgDark;
          break;

        case 'rgb(217, 217, 217)':
          item.style.borderBottomColor = palette.bgDark;
          break;

        case 'rgb(229, 229, 229)':
          item.style.borderBottomColor = palette.bgDark;
          break;
      }
    }
  }

  function changeBorderRightColor(item) {
    if (item.style.borderRightColor != "") {
      switch (item.style.borderRightColor) {
        case 'rgb(239, 239, 239)':
          item.style.borderRightColor = palette.bgDark;
          break;

        case 'rgb(212, 212, 212)':
          item.style.borderRightColor = palette.bgDark;
          break;

        case 'rgb(217, 217, 217)':
          item.style.borderRightColor = palette.bgDark;
          break;

        case 'rgb(229, 229, 229)':
          item.style.borderRightColor = palette.bgDark;
          break;
      }
    }
  }

  function changeBorderLeftColor(item) {
    if (item.style.borderLeftColor != "") {
      switch (item.style.borderLeftColor) {
        case 'rgb(239, 239, 239)':
          item.style.borderLeftColor = palette.bgDark;
          break;

        case 'rgb(212, 212, 212)':
          item.style.borderLeftColor = palette.bgDark;
          break;

        case 'rgb(217, 217, 217)':
          item.style.borderLeftColor = palette.bgDark;
          break;

        case 'rgb(229, 229, 229)':
          item.style.borderLeftColor = palette.bgDark;
          break;
      }
    }
  }

  function changeBorderTopColor(item) {
    if (item.style.borderTopColor != "") {
      switch (item.style.borderTopColor) {
        case 'rgb(212, 212, 212)':
          item.style.borderTopColor = palette.bgDark;
          break;

        case 'rgb(217, 217, 217)':
          item.style.borderTopColor = palette.bgDark;
          break;

        case 'rgb(229, 229, 229)':
          item.style.borderTopColor = palette.bgDark;
          break;

        case 'rgb(239, 239, 239)':
          item.style.borderTopColor = palette.bgDark;
          break;

        case 'rgb(252, 252, 252)':
          item.style.borderTopColor = palette.bgBase;
          break;
      }
    }
  }
} // color
// background
// background-color
// border
// border-color
// border-left
// border-top
// border-right
// border-bottom
// stroke
// fill
},{"../css/style.css":"../css/style.css"}],"../../../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49705" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.map