(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  background-color: white;\n}\n.dark {\n  background-color: black;\n  color: white;\n}\n.title {\n  color: #fca308;\n}\n.div-margin-top {\n  margin-top: 10px;\n}\n.margin-bottom {\n  margin-bottom: 10px;\n}\n.margin-left {\n  margin-left: 10px;\n}\nnav {\n  height: 40px;\n  padding-bottom: 0;\n}\n.border-bottom-orange {\n  border-bottom: 10px;\n  border-bottom: solid;\n  border-color: #fca308;\n}\n.icon {\n  max-width: 30px;\n}\n.mini-icon {\n  max-width: 10px;\n}\n.right {\n  float: right;\n  width: 50px;\n}\n.big {\n  font-size: x-large;\n}\n.fast-note {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  max-width: 400px;\n  vertical-align: baseline;\n  z-index: 99999;\n  left: 20px;\n}\n.image-error {\n  max-width: 400px;\n  margin-top: 40px;\n}\n.my-navbar-container {\n  background-color: #fca308;\n}\n/* --------------------------------RESPONSIVE------------------------------- */\n@media only screen and (max-width: 768px) {\n  .responsive-hide {\n    display: none;\n  }\n\n  .my-navbar {\n    z-index: 99999;\n    background-color: #fca308;\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    top: 20;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    font-size: 100%;\n    vertical-align: baseline;\n    animation-duration: 0.3s;\n    animation-name: slidein;\n  }\n\n  @keyframes slidein {\n    from {\n      margin-right: 100%;\n      width: 0;\n    }\n    to {\n      margin-left: 0%;\n      width: 100%;\n    }\n  }\n  .my-nav-link {\n    font-size: xx-large;\n  }\n\n  .navbar-toggler {\n    position: fixed;\n    top: 0%;\n    left: 10;\n  }\n\n  .image-error {\n    max-width: 300px;\n  }\n\n  .big {\n    font-size: medium;\n  }\n\n  li:active {\n    font-size: 100%;\n    background: #a3f2e1;\n  }\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"AAAQ,8EAAA;AAIA;EACI,wIAAA;EACA,uBAAA;AAFZ;AAKQ;EACI,uBAAA;EACA,YAAA;AAFZ;AAKQ;EACI,cAbW;AAWvB;AAKQ;EACI,gBAAA;AAFZ;AAKQ;EACI,mBAAA;AAFZ;AAKQ;EACI,iBAAA;AAFZ;AAKQ;EACI,YAAA;EACA,iBAAA;AAFZ;AAKQ;EACI,mBAAA;EACA,oBAAA;EACA,qBApCW;AAkCvB;AAKQ;EACI,eAAA;AAFZ;AAKQ;EACI,eAAA;AAFZ;AAKQ;EACI,YAAA;EACA,WAAA;AAFZ;AAKQ;EACI,kBAAA;AAFZ;AAKQ;EACI,eAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,wBAAA;EACA,cAAA;EACA,UAAA;AAFZ;AAKQ;EACI,gBAAA;EACA,gBAAA;AAFZ;AAKQ;EACI,yBAxEW;AAsEvB;AAIQ,8EAAA;AAEA;EACI;IACI,aAAA;EAFd;;EAIU;IACI,cAAA;IACA,yBAlFO;IAmFP,eAAA;IACA,QAAA;IACA,SAAA;IACA,OAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,eAAA;IACA,wBAAA;IACA,wBAAA;IACA,uBAAA;EADd;;EAGU;IACI;MACI,kBAAA;MACA,QAAA;IAAhB;IAEY;MACI,eAAA;MACA,WAAA;IAAhB;EACF;EAEU;IACI,mBAAA;EAAd;;EAEU;IACI,eAAA;IACA,OAAA;IACA,QAAA;EACd;;EACU;IACI,gBAAA;EAEd;;EAAU;IACI,iBAAA;EAGd;;EADU;IACI,eAAA;IACA,mBAxHI;EA4HlB;AACF","sourcesContent":["        /* You can add global styles to this file, and also import other style files */\r\n        \r\n        $color-orange: rgb(252, 163, 8);\r\n        $color-sky: rgba(163, 242, 225);\r\n        body {\r\n            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n            background-color: white;\r\n        }\r\n        \r\n        .dark {\r\n            background-color: black;\r\n            color: white;\r\n        }\r\n        \r\n        .title {\r\n            color: $color-orange;\r\n        }\r\n        \r\n        .div-margin-top {\r\n            margin-top: 10px;\r\n        }\r\n        \r\n        .margin-bottom {\r\n            margin-bottom: 10px;\r\n        }\r\n        \r\n        .margin-left {\r\n            margin-left: 10px;\r\n        }\r\n        \r\n        nav {\r\n            height: 40px;\r\n            padding-bottom: 0;\r\n        }\r\n        \r\n        .border-bottom-orange {\r\n            border-bottom: 10px;\r\n            border-bottom: solid;\r\n            border-color: $color-orange;\r\n        }\r\n        \r\n        .icon {\r\n            max-width: 30px;\r\n        }\r\n        \r\n        .mini-icon {\r\n            max-width: 10px;\r\n        }\r\n        \r\n        .right {\r\n            float: right;\r\n            width: 50px;\r\n        }\r\n        \r\n        .big {\r\n            font-size: x-large;\r\n        }\r\n        \r\n        .fast-note {\r\n            position: fixed;\r\n            bottom: 20px;\r\n            right: 20px;\r\n            max-width: 400px;\r\n            vertical-align: baseline;\r\n            z-index: 99999;\r\n            left: 20px;\r\n        }\r\n        \r\n        .image-error {\r\n            max-width: 400px;\r\n            margin-top: 40px;\r\n        }\r\n        \r\n        .my-navbar-container {\r\n            background-color: $color-orange;\r\n        }\r\n        /* --------------------------------RESPONSIVE------------------------------- */\r\n        \r\n        @media only screen and (max-width: 768px) {\r\n            .responsive-hide {\r\n                display: none;\r\n            }\r\n            .my-navbar {\r\n                z-index: 99999;\r\n                background-color: $color-orange;\r\n                position: fixed;\r\n                right: 0;\r\n                bottom: 0;\r\n                top: 20;\r\n                width: 100%;\r\n                height: 100%;\r\n                text-align: center;\r\n                font-size: 100%;\r\n                vertical-align: baseline;\r\n                animation-duration: 0.3s;\r\n                animation-name: slidein;\r\n            }\r\n            @keyframes slidein {\r\n                from {\r\n                    margin-right: 100%;\r\n                    width: 0;\r\n                }\r\n                to {\r\n                    margin-left: 0%;\r\n                    width: 100%;\r\n                }\r\n            }\r\n            .my-nav-link {\r\n                font-size: xx-large;\r\n            }\r\n            .navbar-toggler {\r\n                position: fixed;\r\n                top: 0%;\r\n                left: 10;\r\n            }\r\n            .image-error {\r\n                max-width: 300px;\r\n            }\r\n            .big {\r\n                font-size: medium;\r\n            }\r\n            li:active {\r\n                font-size: 100%;\r\n                background: $color-sky;\r\n            }\r\n        }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\ikaru-na\ikaruna\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map