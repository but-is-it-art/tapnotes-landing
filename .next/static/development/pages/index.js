(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5CDesktop%5Ctapnotes-landing%5Cpages%5Cindex.js!./":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5CDesktop%5Ctapnotes-landing%5Cpages%5Cindex.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/checkIndexBounds.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/checkIndexBounds.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var checkIndexBounds = function checkIndexBounds(props) {
  var index = props.index,
      children = props.children;

  var childrenCount = _react.default.Children.count(children);

   true ? (0, _warning.default)(index >= 0 && index <= childrenCount, "react-swipeable-view: the new index: ".concat(index, " is out of bounds: [0-").concat(childrenCount, "].")) : undefined;
};

var _default = checkIndexBounds;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/computeIndex.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/computeIndex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeIndex;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/react-swipeable-views-core/lib/constant.js"));

function computeIndex(params) {
  var children = params.children,
      startIndex = params.startIndex,
      startX = params.startX,
      pageX = params.pageX,
      viewLength = params.viewLength,
      resistance = params.resistance;
  var indexMax = _react.default.Children.count(children) - 1;
  var index = startIndex + (startX - pageX) / viewLength;
  var newStartX;

  if (!resistance) {
    // Reset the starting point
    if (index < 0) {
      index = 0;
      newStartX = (index - startIndex) * viewLength + pageX;
    } else if (index > indexMax) {
      index = indexMax;
      newStartX = (index - startIndex) * viewLength + pageX;
    }
  } else if (index < 0) {
    index = Math.exp(index * _constant.default.RESISTANCE_COEF) - 1;
  } else if (index > indexMax) {
    index = indexMax + 1 - Math.exp((indexMax - index) * _constant.default.RESISTANCE_COEF);
  }

  return {
    index: index,
    startX: newStartX
  };
}

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/constant.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/constant.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  RESISTANCE_COEF: 0.6,
  // This value is closed to what browsers are using internally to
  // trigger a native scroll.
  UNCERTAINTY_THRESHOLD: 3 // px

};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var getDisplaySameSlide = function getDisplaySameSlide(props, nextProps) {
  var displaySameSlide = false;

  var getChildrenKey = function getChildrenKey(child) {
    return child ? child.key : 'empty';
  };

  if (props.children.length && nextProps.children.length) {
    var oldKeys = _react.default.Children.map(props.children, getChildrenKey);

    var oldKey = oldKeys[props.index];

    if (oldKey !== null && oldKey !== undefined) {
      var newKeys = _react.default.Children.map(nextProps.children, getChildrenKey);

      var newKey = newKeys[nextProps.index];

      if (oldKey === newKey) {
        displaySameSlide = true;
      }
    }
  }

  return displaySameSlide;
};

var _default = getDisplaySameSlide;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "checkIndexBounds", {
  enumerable: true,
  get: function get() {
    return _checkIndexBounds.default;
  }
});
Object.defineProperty(exports, "computeIndex", {
  enumerable: true,
  get: function get() {
    return _computeIndex.default;
  }
});
Object.defineProperty(exports, "constant", {
  enumerable: true,
  get: function get() {
    return _constant.default;
  }
});
Object.defineProperty(exports, "getDisplaySameSlide", {
  enumerable: true,
  get: function get() {
    return _getDisplaySameSlide.default;
  }
});
Object.defineProperty(exports, "mod", {
  enumerable: true,
  get: function get() {
    return _mod.default;
  }
});

var _checkIndexBounds = _interopRequireDefault(__webpack_require__(/*! ./checkIndexBounds */ "./node_modules/react-swipeable-views-core/lib/checkIndexBounds.js"));

var _computeIndex = _interopRequireDefault(__webpack_require__(/*! ./computeIndex */ "./node_modules/react-swipeable-views-core/lib/computeIndex.js"));

var _constant = _interopRequireDefault(__webpack_require__(/*! ./constant */ "./node_modules/react-swipeable-views-core/lib/constant.js"));

var _getDisplaySameSlide = _interopRequireDefault(__webpack_require__(/*! ./getDisplaySameSlide */ "./node_modules/react-swipeable-views-core/lib/getDisplaySameSlide.js"));

var _mod = _interopRequireDefault(__webpack_require__(/*! ./mod */ "./node_modules/react-swipeable-views-core/lib/mod.js"));

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/lib/mod.js":
/*!************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/lib/mod.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Extended version of % with negative integer support.
function mod(n, m) {
  var q = n % m;
  return q < 0 ? q + m : q;
}

var _default = mod;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views-core/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-swipeable-views/lib/SwipeableViews.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-swipeable-views/lib/SwipeableViews.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomTreeShapes = getDomTreeShapes;
exports.findNativeHandler = findNativeHandler;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

var _reactSwipeableViewsCore = __webpack_require__(/*! react-swipeable-views-core */ "./node_modules/react-swipeable-views-core/lib/index.js");

function addEventListener(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return {
    remove: function remove() {
      node.removeEventListener(event, handler, options);
    }
  };
}

var styles = {
  container: {
    direction: 'ltr',
    display: 'flex',
    willChange: 'transform'
  },
  slide: {
    width: '100%',
    WebkitFlexShrink: 0,
    flexShrink: 0,
    overflow: 'auto'
  }
};
var axisProperties = {
  root: {
    x: {
      overflowX: 'hidden'
    },
    'x-reverse': {
      overflowX: 'hidden'
    },
    y: {
      overflowY: 'hidden'
    },
    'y-reverse': {
      overflowY: 'hidden'
    }
  },
  flexDirection: {
    x: 'row',
    'x-reverse': 'row-reverse',
    y: 'column',
    'y-reverse': 'column-reverse'
  },
  transform: {
    x: function x(translate) {
      return "translate(".concat(-translate, "%, 0)");
    },
    'x-reverse': function xReverse(translate) {
      return "translate(".concat(translate, "%, 0)");
    },
    y: function y(translate) {
      return "translate(0, ".concat(-translate, "%)");
    },
    'y-reverse': function yReverse(translate) {
      return "translate(0, ".concat(translate, "%)");
    }
  },
  length: {
    x: 'width',
    'x-reverse': 'width',
    y: 'height',
    'y-reverse': 'height'
  },
  rotationMatrix: {
    x: {
      x: [1, 0],
      y: [0, 1]
    },
    'x-reverse': {
      x: [-1, 0],
      y: [0, 1]
    },
    y: {
      x: [0, 1],
      y: [1, 0]
    },
    'y-reverse': {
      x: [0, -1],
      y: [1, 0]
    }
  },
  scrollPosition: {
    x: 'scrollLeft',
    'x-reverse': 'scrollLeft',
    y: 'scrollTop',
    'y-reverse': 'scrollTop'
  },
  scrollLength: {
    x: 'scrollWidth',
    'x-reverse': 'scrollWidth',
    y: 'scrollHeight',
    'y-reverse': 'scrollHeight'
  },
  clientLength: {
    x: 'clientWidth',
    'x-reverse': 'clientWidth',
    y: 'clientHeight',
    'y-reverse': 'clientHeight'
  }
};

function createTransition(property, options) {
  var duration = options.duration,
      easeFunction = options.easeFunction,
      delay = options.delay;
  return "".concat(property, " ").concat(duration, " ").concat(easeFunction, " ").concat(delay);
} // We are using a 2x2 rotation matrix.


function applyRotationMatrix(touch, axis) {
  var rotationMatrix = axisProperties.rotationMatrix[axis];
  return {
    pageX: rotationMatrix.x[0] * touch.pageX + rotationMatrix.x[1] * touch.pageY,
    pageY: rotationMatrix.y[0] * touch.pageX + rotationMatrix.y[1] * touch.pageY
  };
}

function adaptMouse(event) {
  event.touches = [{
    pageX: event.pageX,
    pageY: event.pageY
  }];
  return event;
}

function getDomTreeShapes(element, rootNode) {
  var domTreeShapes = [];

  while (element && element !== rootNode) {
    // We reach a Swipeable View, no need to look higher in the dom tree.
    if (element.hasAttribute('data-swipeable')) {
      break;
    }

    var style = window.getComputedStyle(element);

    if ( // Ignore the scroll children if the element is absolute positioned.
    style.getPropertyValue('position') === 'absolute' || // Ignore the scroll children if the element has an overflowX hidden
    style.getPropertyValue('overflow-x') === 'hidden') {
      domTreeShapes = [];
    } else if (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) {
      // Ignore the nodes that have no width.
      // Keep elements with a scroll
      domTreeShapes.push({
        element: element,
        scrollWidth: element.scrollWidth,
        scrollHeight: element.scrollHeight,
        clientWidth: element.clientWidth,
        clientHeight: element.clientHeight,
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      });
    }

    element = element.parentNode;
  }

  return domTreeShapes;
} // We can only have one node at the time claiming ownership for handling the swipe.
// Otherwise, the UX would be confusing.
// That's why we use a singleton here.


var nodeWhoClaimedTheScroll = null;

function findNativeHandler(params) {
  var domTreeShapes = params.domTreeShapes,
      pageX = params.pageX,
      startX = params.startX,
      axis = params.axis;
  return domTreeShapes.some(function (shape) {
    // Determine if we are going backward or forward.
    var goingForward = pageX >= startX;

    if (axis === 'x' || axis === 'y') {
      goingForward = !goingForward;
    }

    var scrollPosition = shape[axisProperties.scrollPosition[axis]];
    var areNotAtStart = scrollPosition > 0;
    var areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];

    if (goingForward && areNotAtEnd || !goingForward && areNotAtStart) {
      nodeWhoClaimedTheScroll = shape.element;
      return true;
    }

    return false;
  });
}

var SwipeableViews =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SwipeableViews, _React$Component);

  function SwipeableViews(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SwipeableViews);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SwipeableViews).call(this, props));
    _this.rootNode = null;
    _this.containerNode = null;
    _this.ignoreNextScrollEvents = false;
    _this.viewLength = 0;
    _this.startX = 0;
    _this.lastX = 0;
    _this.vx = 0;
    _this.startY = 0;
    _this.isSwiping = undefined;
    _this.started = false;
    _this.startIndex = 0;
    _this.transitionListener = null;
    _this.touchMoveListener = null;
    _this.activeSlide = null;
    _this.indexCurrent = null;
    _this.firstRenderTimeout = null;

    _this.setRootNode = function (node) {
      _this.rootNode = node;
    };

    _this.setContainerNode = function (node) {
      _this.containerNode = node;
    };

    _this.setActiveSlide = function (node) {
      _this.activeSlide = node;

      _this.updateHeight();
    };

    _this.handleSwipeStart = function (event) {
      var axis = _this.props.axis;
      var touch = applyRotationMatrix(event.touches[0], axis);
      _this.viewLength = _this.rootNode.getBoundingClientRect()[axisProperties.length[axis]];
      _this.startX = touch.pageX;
      _this.lastX = touch.pageX;
      _this.vx = 0;
      _this.startY = touch.pageY;
      _this.isSwiping = undefined;
      _this.started = true;
      var computedStyle = window.getComputedStyle(_this.containerNode);
      var transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');

      if (transform && transform !== 'none') {
        var transformValues = transform.split('(')[1].split(')')[0].split(',');
        var rootStyle = window.getComputedStyle(_this.rootNode);
        var tranformNormalized = applyRotationMatrix({
          pageX: parseInt(transformValues[4], 10),
          pageY: parseInt(transformValues[5], 10)
        }, axis);
        _this.startIndex = -tranformNormalized.pageX / (_this.viewLength - parseInt(rootStyle.paddingLeft, 10) - parseInt(rootStyle.paddingRight, 10)) || 0;
      }
    };

    _this.handleSwipeMove = function (event) {
      // The touch start event can be cancel.
      // Makes sure we set a starting point.
      if (!_this.started) {
        _this.handleTouchStart(event);

        return;
      } // We are not supposed to hanlde this touch move.


      if (nodeWhoClaimedTheScroll !== null && nodeWhoClaimedTheScroll !== _this.rootNode) {
        return;
      }

      var _this$props = _this.props,
          axis = _this$props.axis,
          children = _this$props.children,
          ignoreNativeScroll = _this$props.ignoreNativeScroll,
          onSwitching = _this$props.onSwitching,
          resistance = _this$props.resistance;
      var touch = applyRotationMatrix(event.touches[0], axis); // We don't know yet.

      if (_this.isSwiping === undefined) {
        var dx = Math.abs(touch.pageX - _this.startX);
        var dy = Math.abs(touch.pageY - _this.startY);
        var isSwiping = dx > dy && dx > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD; // We let the parent handle the scroll.

        if (!resistance && (axis === 'y' || axis === 'y-reverse') && (_this.indexCurrent === 0 && _this.startX < touch.pageX || _this.indexCurrent === _react.default.Children.count(_this.props.children) - 1 && _this.startX > touch.pageX)) {
          _this.isSwiping = false;
          return;
        } // We are likely to be swiping, let's prevent the scroll event.


        if (dx > dy) {
          event.preventDefault();
        }

        if (isSwiping === true || dy > _reactSwipeableViewsCore.constant.UNCERTAINTY_THRESHOLD) {
          _this.isSwiping = isSwiping;
          _this.startX = touch.pageX; // Shift the starting point.

          return; // Let's wait the next touch event to move something.
        }
      }

      if (_this.isSwiping !== true) {
        return;
      } // We are swiping, let's prevent the scroll event.


      event.preventDefault(); // Low Pass filter.

      _this.vx = _this.vx * 0.5 + (touch.pageX - _this.lastX) * 0.5;
      _this.lastX = touch.pageX;

      var _computeIndex = (0, _reactSwipeableViewsCore.computeIndex)({
        children: children,
        resistance: resistance,
        pageX: touch.pageX,
        startIndex: _this.startIndex,
        startX: _this.startX,
        viewLength: _this.viewLength
      }),
          index = _computeIndex.index,
          startX = _computeIndex.startX; // Add support for native scroll elements.


      if (nodeWhoClaimedTheScroll === null && !ignoreNativeScroll) {
        var domTreeShapes = getDomTreeShapes(event.target, _this.rootNode);
        var hasFoundNativeHandler = findNativeHandler({
          domTreeShapes: domTreeShapes,
          startX: _this.startX,
          pageX: touch.pageX,
          axis: axis
        }); // We abort the touch move handler.

        if (hasFoundNativeHandler) {
          return;
        }
      } // We are moving toward the edges.


      if (startX) {
        _this.startX = startX;
      } else if (nodeWhoClaimedTheScroll === null) {
        nodeWhoClaimedTheScroll = _this.rootNode;
      }

      _this.setIndexCurrent(index);

      var callback = function callback() {
        if (onSwitching) {
          onSwitching(index, 'move');
        }
      };

      if (_this.state.displaySameSlide || !_this.state.isDragging) {
        _this.setState({
          displaySameSlide: false,
          isDragging: true
        }, callback);
      }

      callback();
    };

    _this.handleSwipeEnd = function () {
      nodeWhoClaimedTheScroll = null; // The touch start event can be cancel.
      // Makes sure that a starting point is set.

      if (!_this.started) {
        return;
      }

      _this.started = false;

      if (_this.isSwiping !== true) {
        return;
      }

      var indexLatest = _this.state.indexLatest;
      var indexCurrent = _this.indexCurrent;
      var delta = indexLatest - indexCurrent;
      var indexNew; // Quick movement

      if (Math.abs(_this.vx) > _this.props.threshold) {
        if (_this.vx > 0) {
          indexNew = Math.floor(indexCurrent);
        } else {
          indexNew = Math.ceil(indexCurrent);
        }
      } else if (Math.abs(delta) > _this.props.hysteresis) {
        // Some hysteresis with indexLatest.
        indexNew = delta > 0 ? Math.floor(indexCurrent) : Math.ceil(indexCurrent);
      } else {
        indexNew = indexLatest;
      }

      var indexMax = _react.default.Children.count(_this.props.children) - 1;

      if (indexNew < 0) {
        indexNew = 0;
      } else if (indexNew > indexMax) {
        indexNew = indexMax;
      }

      _this.setIndexCurrent(indexNew);

      _this.setState({
        indexLatest: indexNew,
        isDragging: false
      }, function () {
        if (_this.props.onSwitching) {
          _this.props.onSwitching(indexNew, 'end');
        }

        if (_this.props.onChangeIndex && indexNew !== indexLatest) {
          _this.props.onChangeIndex(indexNew, indexLatest, {
            reason: 'swipe'
          });
        } // Manually calling handleTransitionEnd in that case as isn't otherwise.


        if (indexCurrent === indexLatest) {
          _this.handleTransitionEnd();
        }
      });
    };

    _this.handleTouchStart = function (event) {
      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }

      _this.handleSwipeStart(event);
    };

    _this.handleTouchEnd = function (event) {
      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }

      _this.handleSwipeEnd(event);
    };

    _this.handleMouseDown = function (event) {
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }

      event.persist();

      _this.handleSwipeStart(adaptMouse(event));
    };

    _this.handleMouseUp = function (event) {
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }

      _this.handleSwipeEnd(adaptMouse(event));
    };

    _this.handleMouseLeave = function (event) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      } // Filter out events


      if (_this.started) {
        _this.handleSwipeEnd(adaptMouse(event));
      }
    };

    _this.handleMouseMove = function (event) {
      if (_this.props.onMouseMove) {
        _this.props.onMouseMove(event);
      } // Filter out events


      if (_this.started) {
        _this.handleSwipeMove(adaptMouse(event));
      }
    };

    _this.handleScroll = function (event) {
      if (_this.props.onScroll) {
        _this.props.onScroll(event);
      } // Ignore events bubbling up.


      if (event.target !== _this.rootNode) {
        return;
      }

      if (_this.ignoreNextScrollEvents) {
        _this.ignoreNextScrollEvents = false;
        return;
      }

      var indexLatest = _this.state.indexLatest;
      var indexNew = Math.ceil(event.target.scrollLeft / event.target.clientWidth) + indexLatest;
      _this.ignoreNextScrollEvents = true; // Reset the scroll position.

      event.target.scrollLeft = 0;

      if (_this.props.onChangeIndex && indexNew !== indexLatest) {
        _this.props.onChangeIndex(indexNew, indexLatest, {
          reason: 'focus'
        });
      }
    };

    _this.updateHeight = function () {
      if (_this.activeSlide !== null) {
        var child = _this.activeSlide.children[0];

        if (child !== undefined && child.offsetHeight !== undefined && _this.state.heightLatest !== child.offsetHeight) {
          _this.setState({
            heightLatest: child.offsetHeight
          });
        }
      }
    };

    if (true) {
      (0, _reactSwipeableViewsCore.checkIndexBounds)(props);
    }

    _this.state = {
      indexLatest: props.index,
      // Set to true as soon as the component is swiping.
      // It's the state counter part of this.isSwiping.
      isDragging: false,
      // Help with SSR logic and lazy loading logic.
      renderOnlyActive: !props.disableLazyLoading,
      heightLatest: 0,
      // Let the render method that we are going to display the same slide than previously.
      displaySameSlide: true
    };

    _this.setIndexCurrent(props.index);

    return _this;
  }

  (0, _createClass2.default)(SwipeableViews, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this2 = this;

      return {
        swipeableViews: {
          slideUpdateHeight: function slideUpdateHeight() {
            _this2.updateHeight();
          }
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      // Subscribe to transition end events.
      this.transitionListener = addEventListener(this.containerNode, 'transitionend', function (event) {
        if (event.target !== _this3.containerNode) {
          return;
        }

        _this3.handleTransitionEnd();
      }); // Block the thread to handle that event.

      this.touchMoveListener = addEventListener(this.rootNode, 'touchmove', function (event) {
        // Handling touch events is disabled.
        if (_this3.props.disabled) {
          return;
        }

        _this3.handleSwipeMove(event);
      }, {
        passive: false
      });

      if (!this.props.disableLazyLoading) {
        this.firstRenderTimeout = setTimeout(function () {
          _this3.setState({
            renderOnlyActive: false
          });
        }, 0);
      } // Send all functions in an object if action param is set.


      if (this.props.action) {
        this.props.action({
          updateHeight: this.updateHeight
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var index = nextProps.index;

      if (typeof index === 'number' && index !== this.props.index) {
        if (true) {
          (0, _reactSwipeableViewsCore.checkIndexBounds)(nextProps);
        }

        this.setIndexCurrent(index);
        this.setState({
          // If true, we are going to change the children. We shoudn't animate it.
          displaySameSlide: (0, _reactSwipeableViewsCore.getDisplaySameSlide)(this.props, nextProps),
          indexLatest: index
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.transitionListener.remove();
      this.touchMoveListener.remove();
      clearTimeout(this.firstRenderTimeout);
    }
  }, {
    key: "setIndexCurrent",
    value: function setIndexCurrent(indexCurrent) {
      if (!this.props.animateTransitions && this.indexCurrent !== indexCurrent) {
        this.handleTransitionEnd();
      }

      this.indexCurrent = indexCurrent;

      if (this.containerNode) {
        var axis = this.props.axis;
        var transform = axisProperties.transform[axis](indexCurrent * 100);
        this.containerNode.style.WebkitTransform = transform;
        this.containerNode.style.transform = transform;
      }
    }
  }, {
    key: "handleTransitionEnd",
    value: function handleTransitionEnd() {
      if (!this.props.onTransitionEnd) {
        return;
      } // Filters out when changing the children


      if (this.state.displaySameSlide) {
        return;
      } // The rest callback is triggered when swiping. It's just noise.
      // We filter it out.


      if (!this.state.isDragging) {
        this.props.onTransitionEnd();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          action = _this$props2.action,
          animateHeight = _this$props2.animateHeight,
          animateTransitions = _this$props2.animateTransitions,
          axis = _this$props2.axis,
          children = _this$props2.children,
          containerStyleProp = _this$props2.containerStyle,
          disabled = _this$props2.disabled,
          disableLazyLoading = _this$props2.disableLazyLoading,
          enableMouseEvents = _this$props2.enableMouseEvents,
          hysteresis = _this$props2.hysteresis,
          ignoreNativeScroll = _this$props2.ignoreNativeScroll,
          index = _this$props2.index,
          onChangeIndex = _this$props2.onChangeIndex,
          onSwitching = _this$props2.onSwitching,
          onTransitionEnd = _this$props2.onTransitionEnd,
          resistance = _this$props2.resistance,
          slideStyleProp = _this$props2.slideStyle,
          slideClassName = _this$props2.slideClassName,
          springConfig = _this$props2.springConfig,
          style = _this$props2.style,
          threshold = _this$props2.threshold,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["action", "animateHeight", "animateTransitions", "axis", "children", "containerStyle", "disabled", "disableLazyLoading", "enableMouseEvents", "hysteresis", "ignoreNativeScroll", "index", "onChangeIndex", "onSwitching", "onTransitionEnd", "resistance", "slideStyle", "slideClassName", "springConfig", "style", "threshold"]);
      var _this$state = this.state,
          displaySameSlide = _this$state.displaySameSlide,
          heightLatest = _this$state.heightLatest,
          indexLatest = _this$state.indexLatest,
          isDragging = _this$state.isDragging,
          renderOnlyActive = _this$state.renderOnlyActive;
      var touchEvents = !disabled ? {
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      } : {};
      var mouseEvents = !disabled && enableMouseEvents ? {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseMove: this.handleMouseMove
      } : {}; // There is no point to animate if we are already providing a height.

       true ? (0, _warning.default)(!animateHeight || !containerStyleProp || !containerStyleProp.height, "react-swipeable-view: You are setting animateHeight to true but you are\nalso providing a custom height.\nThe custom height has a higher priority than the animateHeight property.\nSo animateHeight is most likely having no effect at all.") : undefined;
      var slideStyle = (0, _extends2.default)({}, styles.slide, slideStyleProp);
      var transition;
      var WebkitTransition;

      if (isDragging || !animateTransitions || displaySameSlide) {
        transition = 'all 0s ease 0s';
        WebkitTransition = 'all 0s ease 0s';
      } else {
        transition = createTransition('transform', springConfig);
        WebkitTransition = createTransition('-webkit-transform', springConfig);

        if (heightLatest !== 0) {
          var additionalTranstion = ", ".concat(createTransition('height', springConfig));
          transition += additionalTranstion;
          WebkitTransition += additionalTranstion;
        }
      }

      var containerStyle = {
        height: null,
        WebkitFlexDirection: axisProperties.flexDirection[axis],
        flexDirection: axisProperties.flexDirection[axis],
        WebkitTransition: WebkitTransition,
        transition: transition
      }; // Apply the styles for SSR considerations

      if (!renderOnlyActive) {
        var transform = axisProperties.transform[axis](this.indexCurrent * 100);
        containerStyle.WebkitTransform = transform;
        containerStyle.transform = transform;
      }

      if (animateHeight) {
        containerStyle.height = heightLatest;
      }

      return _react.default.createElement("div", (0, _extends2.default)({
        ref: this.setRootNode,
        style: (0, _extends2.default)({}, axisProperties.root[axis], style)
      }, other, touchEvents, mouseEvents, {
        onScroll: this.handleScroll
      }), _react.default.createElement("div", {
        ref: this.setContainerNode,
        style: (0, _extends2.default)({}, containerStyle, styles.container, containerStyleProp),
        className: "react-swipeable-view-container"
      }, _react.default.Children.map(children, function (child, indexChild) {
        if (renderOnlyActive && indexChild !== indexLatest) {
          return null;
        }

         true ? (0, _warning.default)(_react.default.isValidElement(child), "react-swipeable-view: one of the children provided is invalid: ".concat(child, ".\nWe are expecting a valid React Element")) : undefined;
        var ref;
        var hidden = true;

        if (indexChild === indexLatest) {
          hidden = false;

          if (animateHeight) {
            ref = _this4.setActiveSlide;
            slideStyle.overflowY = 'hidden';
          }
        }

        return _react.default.createElement("div", {
          ref: ref,
          style: slideStyle,
          className: slideClassName,
          "aria-hidden": hidden,
          "data-swipeable": "true"
        }, child);
      })));
    }
  }]);
  return SwipeableViews;
}(_react.default.Component); // Added as an ads for people using the React dev tools in production.
// So they know, the tool used to build the awesome UI they
// are looking at/retro engineering.


SwipeableViews.displayName = 'ReactSwipableView';
SwipeableViews.propTypes =  true ? {
  /**
   * This is callback property. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updateHeight() action.
   *
   * @param {object} actions This object contains all posible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * If `true`, the height of the container will be animated to match the current slide height.
   * Animating another style property has a negative impact regarding performance.
   */
  animateHeight: _propTypes.default.bool,

  /**
   * If `false`, changes to the index prop will not cause an animated transition.
   */
  animateTransitions: _propTypes.default.bool,

  /**
   * The axis on which the slides will slide.
   */
  axis: _propTypes.default.oneOf(['x', 'x-reverse', 'y', 'y-reverse']),

  /**
   * Use this property to provide your slides.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * This is the inlined style that will be applied
   * to each slide container.
   */
  containerStyle: _propTypes.default.object,

  /**
   * If `true`, it will disable touch events.
   * This is useful when you want to prohibit the user from changing slides.
   */
  disabled: _propTypes.default.bool,

  /**
   * This is the config used to disable lazyloding,
   * if `true` will render all the views in first rendering.
   */
  disableLazyLoading: _propTypes.default.bool,

  /**
   * If `true`, it will enable mouse events.
   * This will allow the user to perform the relevant swipe actions with a mouse.
   */
  enableMouseEvents: _propTypes.default.bool,

  /**
   * Configure hysteresis between slides. This value determines how far
   * should user swipe to switch slide.
   */
  hysteresis: _propTypes.default.number,

  /**
   * If `true`, it will ignore native scroll container.
   * It can be used to filter out false positive that blocks the swipe.
   */
  ignoreNativeScroll: _propTypes.default.bool,

  /**
   * This is the index of the slide to show.
   * This is useful when you want to change the default slide shown.
   * Or when you have tabs linked to each slide.
   */
  index: _propTypes.default.number,

  /**
   * This is callback prop. It's call by the
   * component when the shown slide change after a swipe made by the user.
   * This is useful when you have tabs linked to each slide.
   *
   * @param {integer} index This is the current index of the slide.
   * @param {integer} indexLatest This is the oldest index of the slide.
   * @param {object} meta Meta data containing more information about the event.
   */
  onChangeIndex: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseLeave: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onScroll: _propTypes.default.func,

  /**
   * This is callback prop. It's called by the
   * component when the slide switching.
   * This is useful when you want to implement something corresponding
   * to the current slide position.
   *
   * @param {integer} index This is the current index of the slide.
   * @param {string} type Can be either `move` or `end`.
   */
  onSwitching: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchEnd: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchStart: _propTypes.default.func,

  /**
   * The callback that fires when the animation comes to a rest.
   * This is useful to defer CPU intensive task.
   */
  onTransitionEnd: _propTypes.default.func,

  /**
   * If `true`, it will add bounds effect on the edges.
   */
  resistance: _propTypes.default.bool,

  /**
   * This is the className that will be applied
   * on the slide component.
   */
  slideClassName: _propTypes.default.string,

  /**
   * This is the inlined style that will be applied
   * on the slide component.
   */
  slideStyle: _propTypes.default.object,

  /**
   * This is the config used to create CSS transitions.
   * This is useful to change the dynamic of the transition.
   */
  springConfig: _propTypes.default.shape({
    delay: _propTypes.default.string,
    duration: _propTypes.default.string,
    easeFunction: _propTypes.default.string
  }),

  /**
   * This is the inlined style that will be applied
   * on the root component.
   */
  style: _propTypes.default.object,

  /**
   * This is the threshold used for detecting a quick swipe.
   * If the computed speed is above this value, the index change.
   */
  threshold: _propTypes.default.number
} : undefined;
SwipeableViews.defaultProps = {
  animateHeight: false,
  animateTransitions: true,
  axis: 'x',
  disabled: false,
  disableLazyLoading: false,
  enableMouseEvents: false,
  hysteresis: 0.6,
  ignoreNativeScroll: false,
  index: 0,
  threshold: 5,
  springConfig: {
    duration: '0.35s',
    easeFunction: 'cubic-bezier(0.15, 0.3, 0.25, 1)',
    delay: '0s'
  },
  resistance: false
};
SwipeableViews.childContextTypes = {
  swipeableViews: _propTypes.default.shape({
    slideUpdateHeight: _propTypes.default.func
  })
};
var _default = SwipeableViews;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-swipeable-views/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SwipeableViews = _interopRequireDefault(__webpack_require__(/*! ./SwipeableViews */ "./node_modules/react-swipeable-views/lib/SwipeableViews.js"));

var _default = _SwipeableViews.default;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/extends.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/extends.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/inherits.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-swipeable-views/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./pages/components/Community.js":
/*!***************************************!*\
  !*** ./pages/components/Community.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\Community.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Community() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-3637604257",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: "jsx-3637604257" + " " + "text-center pt-12 md:pt-20 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Join the Aura community"), __jsx("h3", {
    className: "jsx-3637604257" + " " + "text-center pb-12 md:pb-24 comm-subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "Say goodbye to the digitised version of pen and paper and meet Aura AI. The 360\xBA practice management system that ", __jsx("span", {
    className: "jsx-3637604257" + " " + "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 177
    }
  }, "truly takes the stress out of practice management"), " to free up your time, prevent litigation, reduce compliance costs and increase revenue."), __jsx("div", {
    className: "jsx-3637604257" + " " + "grid gap-10 grid-cols-1 md:grid-cols-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3637604257" + " " + "md:col-start-1 md:col-span-6 md:pt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/community/com-1.svg",
    alt: "StockRoom Dental Stock Management Solution",
    className: "jsx-3637604257" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-3637604257",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/assets/community/com-2.svg",
    alt: "StockRoom Dental Stock Management Solution",
    className: "jsx-3637604257" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3637604257" + " " + "md:col-start-7 md:col-span-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3637604257" + " " + "pb-5 text-left sm:text-center lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, " Shape the ", __jsx("br", {
    className: "jsx-3637604257",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 78
    }
  }), " future with us! "), __jsx("h2", {
    className: "jsx-3637604257" + " " + "pb-5 hidden lg:block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, " Shape the future with us! "), __jsx("p", {
    className: "jsx-3637604257",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, " Aura AI is built with the help of a growing community of dentists who want to change the game."), "\xA0", __jsx("p", {
    className: "jsx-3637604257",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Bryant Dental has been working alongside the dental community for 3 years listening to the concerns and issues of 5000+ UK dentists to date and we have heard you. It's time for change. It's time for the next quantum leap into the future of dentistry. "), "\xA0", __jsx("p", {
    className: "jsx-3637604257",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, " We value your opinion more than anything.  Tell us more about the issues you struggle with or just call us for a chat. We're here either way and not going anywhere. "), __jsx("form", {
    className: "jsx-3637604257" + " " + "pt-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "Your e-mail, we will never spam you",
    className: "jsx-3637604257" + " " + "mt-2 appearance-none border border-aurablue rounded w-full py-2 px-3 text-mediumgray leading-tight focus:outline-none focus:shadow-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 14
    }
  }), __jsx("input", {
    id: "practiceName",
    type: "text",
    placeholder: "Optionally, name your dental practice",
    className: "jsx-3637604257" + " " + "mt-2 appearance-none border border-aurablue rounded w-full py-2 px-3 text-mediumgray leading-tight focus:outline-none focus:shadow-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 14
    }
  }), __jsx("textarea", {
    rows: "4",
    id: "practiceName",
    type: "text",
    placeholder: "Optionally, share your struggle with your ancient app, tells us what you are interested in, ask us questions.",
    className: "jsx-3637604257" + " " + "mt-2 appearance-none border border-aurablue rounded w-full py-2 px-3 text-mediumgray leading-tight focus:outline-none focus:shadow-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("button", {
    className: "jsx-3637604257" + " " + "bg-aurablue hover:bg-blue-700 text-white mt-2 rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Submit"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3637604257",
    __self: this
  }, "button.jsx-3637604257{padding:8px 35px 8px 35px;font-weight:500;font-size:11px;line-height:14px;-webkit-letter-spacing:0.06em;-moz-letter-spacing:0.06em;-ms-letter-spacing:0.06em;letter-spacing:0.06em;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcQ29tbXVuaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDZ0IsQUFHNkIsMEJBQ1osZ0JBQ0QsZUFDRSxpQkFDSyx5R0FDRyx5QkFDekIiLCJmaWxlIjoiRTpcXERlc2t0b3BcXHRhcG5vdGVzLWxhbmRpbmdcXHBhZ2VzXFxjb21wb25lbnRzXFxDb21tdW5pdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBDb21tdW5pdHkoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgPHNlY3Rpb24+XG4gICAgICBcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC0xMiBtZDpwdC0yMCBwYi0yXCI+Sm9pbiB0aGUgQXVyYSBjb21tdW5pdHk8L2gxPiBcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwYi0xMiBtZDpwYi0yNCBjb21tLXN1YnRpdGxlXCI+U2F5IGdvb2RieWUgdG8gdGhlIGRpZ2l0aXNlZCB2ZXJzaW9uIG9mIHBlbiBhbmQgcGFwZXIgYW5kIG1lZXQgQXVyYSBBSS4gVGhlIDM2MMK6IHByYWN0aWNlIG1hbmFnZW1lbnQgc3lzdGVtIHRoYXQgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+dHJ1bHkgdGFrZXMgdGhlIHN0cmVzcyBvdXQgb2YgcHJhY3RpY2UgbWFuYWdlbWVudDwvc3Bhbj4gdG8gZnJlZSB1cCB5b3VyIHRpbWUsIHByZXZlbnQgbGl0aWdhdGlvbiwgcmVkdWNlIGNvbXBsaWFuY2UgY29zdHMgYW5kIGluY3JlYXNlIHJldmVudWUuPC9oMz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xMCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3RhcnQtMSBtZDpjb2wtc3Bhbi02IG1kOnB0LTRcIj4gXG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvY29tbXVuaXR5L2NvbS0xLnN2ZycgY2xhc3NOYW1lPVwibXgtYXV0b1wiIGFsdD1cIlN0b2NrUm9vbSBEZW50YWwgU3RvY2sgTWFuYWdlbWVudCBTb2x1dGlvblwiIC8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy9jb21tdW5pdHkvY29tLTIuc3ZnJyBjbGFzc05hbWU9XCJteC1hdXRvXCIgYWx0PVwiU3RvY2tSb29tIERlbnRhbCBTdG9jayBNYW5hZ2VtZW50IFNvbHV0aW9uXCIgLz4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zdGFydC03IG1kOmNvbC1zcGFuLTZcIj4gXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTUgdGV4dC1sZWZ0IHNtOnRleHQtY2VudGVyIGxnOmhpZGRlblwiPiBTaGFwZSB0aGUgPGJyLz4gZnV0dXJlIHdpdGggdXMhIDwvaDI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTUgaGlkZGVuIGxnOmJsb2NrXCI+IFNoYXBlIHRoZSBmdXR1cmUgd2l0aCB1cyEgPC9oMj5cbiAgICAgICAgICA8cD4gQXVyYSBBSSBpcyBidWlsdCB3aXRoIHRoZSBoZWxwIG9mIGEgZ3Jvd2luZyBjb21tdW5pdHkgb2YgZGVudGlzdHMgd2hvIHdhbnQgdG8gY2hhbmdlIHRoZSBnYW1lLjwvcD5cbiAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICA8cD5CcnlhbnQgRGVudGFsIGhhcyBiZWVuIHdvcmtpbmcgYWxvbmdzaWRlIHRoZSBkZW50YWwgY29tbXVuaXR5IGZvciAzIHllYXJzIGxpc3RlbmluZyB0byB0aGUgY29uY2VybnMgYW5kIGlzc3VlcyBvZiA1MDAwKyBVSyBkZW50aXN0cyB0byBkYXRlIGFuZCB3ZSBoYXZlIGhlYXJkIHlvdS4gSXQncyB0aW1lIGZvciBjaGFuZ2UuIEl0J3MgdGltZSBmb3IgdGhlIG5leHQgcXVhbnR1bSBsZWFwIGludG8gdGhlIGZ1dHVyZSBvZiBkZW50aXN0cnkuIDwvcD5cbiAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICA8cD4gV2UgdmFsdWUgeW91ciBvcGluaW9uIG1vcmUgdGhhbiBhbnl0aGluZy4gIFRlbGwgdXMgbW9yZSBhYm91dCB0aGUgaXNzdWVzIHlvdSBzdHJ1Z2dsZSB3aXRoIG9yIGp1c3QgY2FsbCB1cyBmb3IgYSBjaGF0LiBXZSdyZSBoZXJlIGVpdGhlciB3YXkgYW5kIG5vdCBnb2luZyBhbnl3aGVyZS4gPC9wPlxuICAgICAgIFxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB0LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibXQtMiBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1hdXJhYmx1ZSByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1tZWRpdW1ncmF5IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlLW1haWwsIHdlIHdpbGwgbmV2ZXIgc3BhbSB5b3VcIi8+XG4gICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm10LTIgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItYXVyYWJsdWUgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtbWVkaXVtZ3JheSBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIGlkPVwicHJhY3RpY2VOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk9wdGlvbmFsbHksIG5hbWUgeW91ciBkZW50YWwgcHJhY3RpY2VcIi8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjRcIiBjbGFzc05hbWU9XCJtdC0yIGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLWF1cmFibHVlIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LW1lZGl1bWdyYXkgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBpZD1cInByYWN0aWNlTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJPcHRpb25hbGx5LCBzaGFyZSB5b3VyIHN0cnVnZ2xlIHdpdGggeW91ciBhbmNpZW50IGFwcCwgdGVsbHMgdXMgd2hhdCB5b3UgYXJlIGludGVyZXN0ZWQgaW4sIGFzayB1cyBxdWVzdGlvbnMuXCIvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1hdXJhYmx1ZSBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIG10LTIgcm91bmRlZC1mdWxsXCI+XG4gIFN1Ym1pdFxuPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgXG4gICAgPC9zZWN0aW9uPlxuICAgIFxuICAgIFxuICAgIFxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBidXR0b24ge1xuICBwYWRkaW5nOiA4cHggMzVweCA4cHggMzVweDtcbmZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDExcHg7XG5saW5lLWhlaWdodDogMTRweDtcbmxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuICAgIGB9PC9zdHlsZT5cbiAgIDwvPiBcbiAgKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDb21tdW5pdHk7Il19 */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\Community.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Community);

/***/ }),

/***/ "./pages/components/Hero.js":
/*!**********************************!*\
  !*** ./pages/components/Hero.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function HeroSubSection(_ref) {
  var text = _ref.text;
  return __jsx("div", {
    className: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, text));
}

function Hero() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "top-hero mt-4 md:mt-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: "text-center pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Tapnote"), __jsx("h3", {
    className: "text-center pb-16 section-subhead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "The reimagined Dental Record"), __jsx("div", {
    className: "grid gap-5 grid-cols-1 pb-12 md:gap-10 md:grid-cols-12 md:pb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "col-start-3 col-end-7 max-w-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }
  }, "Fully indemnifiable notes for the ultimate defense against litigation in just seconds through patient-personalised suggestions that don't require a single keystroke."), __jsx("p", {
    className: "col-start-7 col-end-11 column  max-w-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "TapNote is an intelligent system that helps you get your ", __jsx("span", {
    className: "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 121
    }
  }, "notes done 80% faster with legal accuracy"), " while fully educating the patient.")), __jsx("div", {
    className: "w-4/5 h-64 mx-auto shadow-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  })));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./pages/components/Standalone.js":
/*!****************************************!*\
  !*** ./pages/components/Standalone.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\Standalone.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Standalone() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-3142847984" + " " + "mt-4 md:mt-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "jsx-3142847984" + " " + "bg-lightestgray grid gap-5 grid-cols-1 pb-12 md:gap-10 md:grid-cols-12 md:pb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3142847984" + " " + "col-start-3 col-end-7 max-w-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/standalone.svg",
    alt: "tapnotes-module",
    className: "jsx-3142847984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 58
    }
  })), __jsx("div", {
    className: "jsx-3142847984" + " " + "col-start-7 col-end-11 column  max-w-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }, __jsx("h3", {
    className: "jsx-3142847984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }, "Part of a greater, more complex practice management software (Aura AI), TapNote will be released first as a ", __jsx("span", {
    className: "jsx-3142847984" + " " + "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 124
    }
  }, "standalone app"), "."), __jsx("div", {
    className: "jsx-3142847984" + " " + "bg-white shadow-card rounded-lg py-4 px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }, __jsx("p", {
    className: "jsx-3142847984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Join the Aura AI community and shape the future with us!"), __jsx("button", {
    className: "jsx-3142847984" + " " + "bg-aurablue hover:bg-blue-700 text-white rounded-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Sign Up"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3142847984",
    __self: this
  }, "button.jsx-3142847984{padding:8px 35px 8px 35px;font-weight:500;font-size:11px;line-height:14px;-webkit-letter-spacing:0.06em;-moz-letter-spacing:0.06em;-ms-letter-spacing:0.06em;letter-spacing:0.06em;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcU3RhbmRhbG9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQlksQUFHNkIsMEJBQ1osZ0JBQ0QsZUFDRSxpQkFDSyx5R0FDRyx5QkFDekIiLCJmaWxlIjoiRTpcXERlc2t0b3BcXHRhcG5vdGVzLWxhbmRpbmdcXHBhZ2VzXFxjb21wb25lbnRzXFxTdGFuZGFsb25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU3RhbmRhbG9uZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcblxyXG48c2VjdGlvbiBjbGFzc05hbWU9XCJtdC00IG1kOm10LTEyXCI+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodGVzdGdyYXkgZ3JpZCBnYXAtNSBncmlkLWNvbHMtMSBwYi0xMiBtZDpnYXAtMTAgbWQ6Z3JpZC1jb2xzLTEyIG1kOnBiLTE2XCI+XHJcbiAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMyBjb2wtZW5kLTcgbWF4LXctbWRcIj48aW1nIHNyYz0nL2Fzc2V0cy90YXBub3Rlc3ZnL3N0YW5kYWxvbmUuc3ZnJyBhbHQ9XCJ0YXBub3Rlcy1tb2R1bGVcIiAvPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC03IGNvbC1lbmQtMTEgY29sdW1uICBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgIDxoMz5QYXJ0IG9mIGEgZ3JlYXRlciwgbW9yZSBjb21wbGV4IHByYWN0aWNlIG1hbmFnZW1lbnQgc29mdHdhcmUgKEF1cmEgQUkpLCBUYXBOb3RlIHdpbGwgYmUgcmVsZWFzZWQgZmlyc3QgYXMgYSA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5zdGFuZGFsb25lIGFwcDwvc3Bhbj4uPC9oMz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1jYXJkIHJvdW5kZWQtbGcgcHktNCBweC04XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Kb2luIHRoZSBBdXJhIEFJIGNvbW11bml0eSBhbmQgc2hhcGUgdGhlIGZ1dHVyZSB3aXRoIHVzITwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYXVyYWJsdWUgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+ICAgIFxyXG48L3NlY3Rpb24+XHJcbiAgIFxyXG5cclxuPHN0eWxlIGpzeD57YFxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDhweCAzNXB4IDhweCAzNXB4O1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5mb250LXNpemU6IDExcHg7XHJcbmxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5sZXR0ZXItc3BhY2luZzogMC4wNmVtO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG5cclxuICAgIDwvPiBcclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFsb25lOyJdfQ== */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\Standalone.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Standalone);

/***/ }),

/***/ "./pages/components/StockRoom.js":
/*!***************************************!*\
  !*** ./pages/components/StockRoom.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _h2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h2 */ "./pages/components/h2.js");
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\StockRoom.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function HeroSubSection(_ref) {
  var text = _ref.text,
      Img = _ref.Img,
      cols = _ref.cols,
      svgWidth = _ref.svgWidth;
  return __jsx("div", {
    className: "jsx-717675310" + " " + (cols || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-717675310" + " " + "pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }, Img && __jsx("img", {
    src: Img,
    style: {
      maxWidth: svgWidth
    },
    alt: "StockRoom Dental Stock Management Solution",
    className: "jsx-717675310" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 24
    }
  })), __jsx("p", {
    className: "jsx-717675310",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "717675310",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcU3RvY2tSb29tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFtQiIsImZpbGUiOiJFOlxcRGVza3RvcFxcdGFwbm90ZXMtbGFuZGluZ1xccGFnZXNcXGNvbXBvbmVudHNcXFN0b2NrUm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIMiBmcm9tICcuL2gyJztcblxuZnVuY3Rpb24gSGVyb1N1YlNlY3Rpb24oeyB0ZXh0ICwgSW1nLGNvbHMsIHN2Z1dpZHRoIH0pe1xuICByZXR1cm4oXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtjb2xzfT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi01XCI+ICAgXG4gICAgICAgICAgICAgIHsgSW1nICYmIDxpbWcgc3JjPXtJbWd9IGNsYXNzTmFtZT1cIm14LWF1dG9cIiBzdHlsZT17eyBtYXhXaWR0aDpzdmdXaWR0aCB9fSBhbHQ9XCJTdG9ja1Jvb20gRGVudGFsIFN0b2NrIE1hbmFnZW1lbnQgU29sdXRpb25cIiAvPn1cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgIFxuICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMntcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gU3RvY2tSb29tKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgXG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvcC1oZXJvXCIgaWQ9XCJzdG9ja3Jvb21cIj5cbiAgICBcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC0xNiBtZDpwdC0yMCBwYi0yXCI+IFN0b2NrUm9vbTwvaDE+IFxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBiLTMyIHNlY3Rpb24tc3ViaGVhZFwiPllvdSBvbmx5IG5lZWQgdG8gd2FsayB0aHJvdWdoIHRoZSBkb29yIHRvIHVwZGF0ZSB5b3VyIHN0b2NrLiA8YnIvPiBUaGF0IGlzIGl0LiBObyBCYXJjb2Rlcy4gTm8gU2Nhbm5pbmcuPC9oMz5cbiAgICBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xMCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMTJcIj5cbiAgICAgICBcbiAgICAgIDxIZXJvU3ViU2VjdGlvbiB0ZXh0PVwiMS4gU21hcnRUcmFjayBpdGVtcyBkZWxpdmVyZWQuXCJcbiAgICAgICAgICAgICAgSW1nPScvYXNzZXRzL3N0b2Nrc3ZnL3N0b2NrMS5zdmcnXG4gICAgICAgICAgICAgIGNvbHM9XCJjb2wtc3RhcnQxIGNvbC1zcGFuLTUgbWQ6Y29sLXN0YXJ0LTIgbWQ6Y29sLXNwYW4tNCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgIHN2Z1dpZHRoPVwiOTElXCJcbiAgICAgIC8+XG4gICAgICBcbiAgICAgIDxIZXJvU3ViU2VjdGlvbiB0ZXh0PXsgXCIyLiBTbWFydEdhdGUgZGV0ZWN0cyBpdGVtcyBnb2luZyBpbnRvIFN0b2NrUm9vbVwifSAgICAgICAgICAgIFxuICAgICAgICAgICAgIEltZz0nL2Fzc2V0cy9zdG9ja3N2Zy9zdG9jazIuc3ZnJ1xuICAgICAgICAgICAgIHN2Z1dpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgY29scz1cImNvbC1zdGFydDEgY29sLXNwYW4tNSBtZDpjb2wtc3RhcnQtNiBtZDpjb2wtc3Bhbi0zIHRleHQtY2VudGVyIFwiXG4gICAgICAvPlxuICAgICAgXG4gICAgICA8SGVyb1N1YlNlY3Rpb24gdGV4dD17XCIzLiBTbWFydEdhdGUgZGV0ZWN0cyBpdGVtcyBnb2luZyBvdXQgb2YgdGhlIFN0b2NrUm9vbVwifSAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIEltZz0nL2Fzc2V0cy9zdG9ja3N2Zy9zdG9jazMuc3ZnJ1xuICAgICAgICAgICAgICBzdmdXaWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBjb2xzPVwiY29sLXN0YXJ0MSBjb2wtc3Bhbi01IG1kOmNvbC1zdGFydC05IG1kOmNvbC1zcGFuLTMgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgLz5cbiAgICAgIFxuXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDxkaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMTAgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTEyIHB0LTEyXCI+XG4gICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0gIGNsYXNzTmFtZT1cInBiLTUgbWQ6Y29sLXN0YXJ0LTIgbWQ6Y29sLXNwYW4tMTBcIiBzcmM9Jy9hc3NldHMvc3RvY2tzdmcvc3RvY2s0LTIuc3ZnJyBhbHQ9XCJTdG9ja1Jvb20gRGVudGFsIFN0b2NrIE1hbmFnZW1lbnQgU29sdXRpb25cIiAvPlxuICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTMgZ3JpZC1jb2xzLTYgbWQ6Z3JpZC1jb2xzLTEyXCI+XG4gICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBjb2wtc3RhcnQtMSBjb2wtc3Bhbi0xIG1kOmNvbC1zdGFydC0zIG1kOmNvbC1zcGFuLTFcIj40LjwvcD5cbiAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wtc3RhcnQtMiBjb2wtc3Bhbi01IG1kOmNvbC1zdGFydC00IG1kOmNvbC1zcGFuLTcgcHItMTBcIj5JZiB5b3UgcnVuIGEgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+Z3JvdXAgcHJhY3RpY2VzPC9zcGFuPiwgU3RvY2tyb29tIGNhbiBvcHRpbWlzZSB5b3VyIHB1cmNoYXNpbmcgdGltZXMgYW5kIGFtb3VudHMgdG8gaGVscCBjYXNoZmxvdyBhbmQgZW5zdXJlIHlvdSBuZXZlciBydW4gb3V0IG9mIHN0b2NrLiBJZiB5b3UgcnVuIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPmEgc2luZ2xlIHByYWN0aWNlPC9zcGFuPiwgU3RvY2tyb29tIGNhbiBoZWxwIGRyaXZlIGRvd24geW91ciBwcmljZXMgYnkgZ3JvdXBpbmcgb3JkZXJzIGluIHRoZSBiYWNrLWVuZCB3aXRob3V0IHlvdSBldmVuIHJlYWxpc2luZy48L3A+XG4gICAgIDwvZGl2PiBcbiAgICAgIFxuXG4gICAgPC9kaXY+ICBcbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgPC9zZWN0aW9uPlxuICAgIFxuICAgIFxuICAgIFxuICAgPC8+IFxuICApXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFN0b2NrUm9vbTtcblxuIl19 */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\StockRoom.js */"));
}

function StockRoom() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "top-hero",
    id: "stockroom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: "text-center pt-16 md:pt-20 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, " StockRoom"), __jsx("h3", {
    className: "text-center pb-32 section-subhead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "You only need to walk through the door to update your stock. ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 118
    }
  }), " That is it. No Barcodes. No Scanning."), __jsx("div", {
    className: "grid gap-10 grid-cols-1 md:grid-cols-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(HeroSubSection, {
    text: "1. SmartTrack items delivered.",
    Img: "/assets/stocksvg/stock1.svg",
    cols: "col-start1 col-span-5 md:col-start-2 md:col-span-4 text-center",
    svgWidth: "91%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(HeroSubSection, {
    text: "2. SmartGate detects items going into StockRoom",
    Img: "/assets/stocksvg/stock2.svg",
    svgWidth: "100%",
    cols: "col-start1 col-span-5 md:col-start-6 md:col-span-3 text-center ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(HeroSubSection, {
    text: "3. SmartGate detects items going out of the StockRoom",
    Img: "/assets/stocksvg/stock3.svg",
    svgWidth: "100%",
    cols: "col-start1 col-span-5 md:col-start-9 md:col-span-3 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "grid gap-10 grid-cols-1 md:grid-cols-12 pt-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }, __jsx("img", {
    style: {
      width: '100%'
    },
    className: "pb-5 md:col-start-2 md:col-span-10",
    src: "/assets/stocksvg/stock4-2.svg",
    alt: "StockRoom Dental Stock Management Solution",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "grid gap-3 grid-cols-6 md:grid-cols-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "text-right col-start-1 col-span-1 md:col-start-3 md:col-span-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }
  }, "4."), __jsx("p", {
    className: "col-start-2 col-span-5 md:col-start-4 md:col-span-7 pr-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }, "If you run a ", __jsx("span", {
    className: "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 94
    }
  }, "group practices"), ", Stockroom can optimise your purchasing times and amounts to help cashflow and ensure you never run out of stock. If you run ", __jsx("span", {
    className: "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 270
    }
  }, "a single practice"), ", Stockroom can help drive down your prices by grouping orders in the back-end without you even realising.")))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (StockRoom);

/***/ }),

/***/ "./pages/components/Structure.js":
/*!***************************************!*\
  !*** ./pages/components/Structure.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\Structure.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function HeroSubSection(_ref) {
  var text = _ref.text,
      Img = _ref.Img,
      cols = _ref.cols,
      title = _ref.title,
      svgWidth = _ref.svgWidth;
  return __jsx("div", {
    className: cols,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "pb-5 corrected",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }, Img && __jsx("img", {
    src: Img,
    className: "corrected",
    style: {
      maxWidth: svgWidth
    },
    alt: "StockRoom Dental Stock Management Solution",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 23
    }
  })), __jsx("h2", {
    className: "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "  ", title, "  "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, text));
}

function Structure() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    id: "structure",
    className: "jsx-520569615" + " " + "top-hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-520569615" + " " + "titles-desktop hidden lg:block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-520569615" + " " + "text-center pt-8 md:pt-16 pb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, " Structure: Your personalised, ", __jsx("br", {
    className: "jsx-520569615",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 85
    }
  }), " super-intelligent ", __jsx("span", {
    className: "jsx-520569615" + " " + "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 109
    }
  }, "practice manager"), " on 24/7"), __jsx("h3", {
    className: "jsx-520569615" + " " + "text-center pb-12 md:pb-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, " Sit back and relax. Aura AI will do it for you and provide ", __jsx("br", {
    className: "jsx-520569615",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 110
    }
  }), " valuable and actionable insights on the way.  ")), __jsx("div", {
    className: "jsx-520569615" + " " + "titles-mobile lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-520569615" + " " + "text-center pt-8 md:pt-16 pb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, " Structure: Your personalised, ", __jsx("br", {
    className: "jsx-520569615",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 85
    }
  }), " super-intelligent ", __jsx("span", {
    className: "jsx-520569615" + " " + "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 109
    }
  }, "practice manager"), " ", __jsx("br", {
    className: "jsx-520569615",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 161
    }
  }), " on 24/7"), __jsx("h3", {
    className: "jsx-520569615" + " " + "text-center pb-12 md:pb-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, " Sit back and relax. Aura AI will do it ", __jsx("br", {
    className: "jsx-520569615",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 90
    }
  }), " for you and provide valuable and actionable insights on the way.  ")), __jsx("div", {
    className: "jsx-520569615" + " " + "grid gap-5 grid-cols-1 pb-12 md:gap-10 md:grid-cols-10 md:pb-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(HeroSubSection, {
    title: "Smart scheduler \n will keep your diary filled",
    text: "Dental Associate off sick? No problem. Aura will reschedule all the appointments at a click of a button based on dentist preferences, patient availability and clinical circumstances. Aura knows that a 'crown fit' without a temporary could be prioritised over the 19th denture adjustment. \n\nThis booking system will optimise the patient and dentist experience as well as maximise practice revenue.",
    Img: "/assets/structuresvg/smartschedule2.svg",
    cols: "col-span-5 mt-6 column",
    svgWidth: "83%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(HeroSubSection, {
    title: "Universal referral platform",
    text: "Allows community of private and NHS practices to manage referrals seamlessly and share clinical notes and media for real-time bi-directional updates and communication. \n\n                   Easily migrate referral information to your colleague with medical grade encryption. No more retaking of X-rays simply due to poor access to the correct information. \n \n                   Structure instantly validates your request against claim criterias to show how likely it is to be accepted to make the best decisions for your patient without delays.",
    Img: "/assets/structuresvg/universalref2.svg",
    svgWidth: "100%",
    cols: "col-span-5 column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "jsx-520569615" + " " + "grid gap-5 grid-cols-1 pb-12 md:gap-10 md:grid-cols-10 md:pb-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(HeroSubSection, {
    title: "Receptionist dashboard \n puts you on the right track",
    text: "Aura AI learns and remembers how you like your practice to be run and will optimise daily tasks to the fullest. Requests are organised by time and priority so your receptionist can stay organised and remain free to be a welcoming first-sight for all your patients and not simply the human face of a computer screen.",
    Img: "/assets/structuresvg/receptionistdash2.svg",
    cols: "col-span-5 -m-2 column",
    svgWidth: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx(HeroSubSection, {
    title: "Lab case loop management",
    text: "TapNote automatically creates the required lab management pathways and Structure will then take over to schedule appointments and track labwork status. If labwork is delayed, Aura can reschedule for you. \n\nStructure will also allow real-time collaboration with your technicians for valuable bi-directional feedback with complete integration with the Bryant Dental Camera range.",
    Img: "/assets/structuresvg/lab-case.svg",
    svgWidth: "100%",
    cols: "col-span-5 column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "jsx-520569615" + " " + "flex flex-wrap items-start flex-col-reverse xl:flex-row xl:items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "jsx-520569615" + " " + "flex-1 xl:pr-28 flexitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }
  }, __jsx("h2", {
    className: "jsx-520569615" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, " Real-time analytics ", __jsx("br", {
    className: "jsx-520569615",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 55
    }
  }), " with actionable insight "), __jsx("p", {
    className: "jsx-520569615",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 12
    }
  }, "Aura AI won't show you a random string of incomprehensible gibberish but rather fully actionable performance optimisation reccommendations based on sound evidence that is learned over time from the aura community.")), __jsx("div", {
    className: "jsx-520569615" + " " + "flex-2 flexitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: "/assets/structuresvg/analytics.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-520569615" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 12
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "520569615",
    __self: this
  }, "@media (min-width:1280px){.resize.jsx-520569615{border:1px red;width:83%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcU3RydWN0dXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGa0IsQUFLZ0IsZUFDTCxVQUNWIiwiZmlsZSI6IkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcU3RydWN0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBIZXJvU3ViU2VjdGlvbiggeyB0ZXh0ICwgSW1nLCBjb2xzLCB0aXRsZSAsIHN2Z1dpZHRoIH0gKXtcbiAgcmV0dXJuKFxuXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtjb2xzfT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi01IGNvcnJlY3RlZFwiPiAgIFxuICAgICAgICAgICAgIHsgSW1nICYmIDxpbWcgc3JjPXtJbWd9IGNsYXNzTmFtZT1cImNvcnJlY3RlZFwiIHN0eWxlPXt7IG1heFdpZHRoOnN2Z1dpZHRoIH19IGFsdD1cIlN0b2NrUm9vbSBEZW50YWwgU3RvY2sgTWFuYWdlbWVudCBTb2x1dGlvblwiIC8+IH0gXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItM1wiPiAge3RpdGxlfSAgPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L3A+XG4gICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gU3RydWN0dXJlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgXG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvcC1oZXJvXCIgaWQ9XCJzdHJ1Y3R1cmVcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlcy1kZXNrdG9wIGhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTggbWQ6cHQtMTYgcGItNFwiPiBTdHJ1Y3R1cmU6IFlvdXIgcGVyc29uYWxpc2VkLCA8YnIvPiBzdXBlci1pbnRlbGxpZ2VudCA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5wcmFjdGljZSBtYW5hZ2VyPC9zcGFuPiBvbiAyNC83PC9oMT4gXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGItMTIgbWQ6cGItMjRcIj4gU2l0IGJhY2sgYW5kIHJlbGF4LiBBdXJhIEFJIHdpbGwgZG8gaXQgZm9yIHlvdSBhbmQgcHJvdmlkZSA8YnIvPiB2YWx1YWJsZSBhbmQgYWN0aW9uYWJsZSBpbnNpZ2h0cyBvbiB0aGUgd2F5LiAgPC9oMz5cbiAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXMtbW9iaWxlIGxnOmhpZGRlblwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTggbWQ6cHQtMTYgcGItNFwiPiBTdHJ1Y3R1cmU6IFlvdXIgcGVyc29uYWxpc2VkLCA8YnIvPiBzdXBlci1pbnRlbGxpZ2VudCA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5wcmFjdGljZSBtYW5hZ2VyPC9zcGFuPiA8YnIvPiBvbiAyNC83PC9oMT4gXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGItMTIgbWQ6cGItMjRcIj4gU2l0IGJhY2sgYW5kIHJlbGF4LiBBdXJhIEFJIHdpbGwgZG8gaXQgPGJyLz4gZm9yIHlvdSBhbmQgcHJvdmlkZSB2YWx1YWJsZSBhbmQgYWN0aW9uYWJsZSBpbnNpZ2h0cyBvbiB0aGUgd2F5LiAgPC9oMz5cbiAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC01IGdyaWQtY29scy0xIHBiLTEyIG1kOmdhcC0xMCBtZDpncmlkLWNvbHMtMTAgbWQ6cGItMzJcIj5cbiAgICAgICBcbiAgICAgIDxIZXJvU3ViU2VjdGlvbiB0aXRsZT17YFNtYXJ0IHNjaGVkdWxlciBcXG4gd2lsbCBrZWVwIHlvdXIgZGlhcnkgZmlsbGVkYH1cbiAgICAgICAgICAgICAgdGV4dD17YERlbnRhbCBBc3NvY2lhdGUgb2ZmIHNpY2s/IE5vIHByb2JsZW0uIEF1cmEgd2lsbCByZXNjaGVkdWxlIGFsbCB0aGUgYXBwb2ludG1lbnRzIGF0IGEgY2xpY2sgb2YgYSBidXR0b24gYmFzZWQgb24gZGVudGlzdCBwcmVmZXJlbmNlcywgcGF0aWVudCBhdmFpbGFiaWxpdHkgYW5kIGNsaW5pY2FsIGNpcmN1bXN0YW5jZXMuIEF1cmEga25vd3MgdGhhdCBhICdjcm93biBmaXQnIHdpdGhvdXQgYSB0ZW1wb3JhcnkgY291bGQgYmUgcHJpb3JpdGlzZWQgb3ZlciB0aGUgMTl0aCBkZW50dXJlIGFkanVzdG1lbnQuIFxcblxuVGhpcyBib29raW5nIHN5c3RlbSB3aWxsIG9wdGltaXNlIHRoZSBwYXRpZW50IGFuZCBkZW50aXN0IGV4cGVyaWVuY2UgYXMgd2VsbCBhcyBtYXhpbWlzZSBwcmFjdGljZSByZXZlbnVlLmB9XG4gICAgICAgIFxuICAgICAgICAgICAgICBJbWc9Jy9hc3NldHMvc3RydWN0dXJlc3ZnL3NtYXJ0c2NoZWR1bGUyLnN2ZydcbiAgICAgICAgICAgICAgY29scz1cImNvbC1zcGFuLTUgbXQtNiBjb2x1bW5cIlxuICAgICAgICAgICAgICBzdmdXaWR0aD1cIjgzJVwiXG4gICAgICAvPlxuICAgICAgXG4gICAgICA8SGVyb1N1YlNlY3Rpb24gdGl0bGU9eyBcIlVuaXZlcnNhbCByZWZlcnJhbCBwbGF0Zm9ybVwifSAgICAgICAgICAgIFxuICAgICAgICAgICAgIHRleHQ9e2BBbGxvd3MgY29tbXVuaXR5IG9mIHByaXZhdGUgYW5kIE5IUyBwcmFjdGljZXMgdG8gbWFuYWdlIHJlZmVycmFscyBzZWFtbGVzc2x5IGFuZCBzaGFyZSBjbGluaWNhbCBub3RlcyBhbmQgbWVkaWEgZm9yIHJlYWwtdGltZSBiaS1kaXJlY3Rpb25hbCB1cGRhdGVzIGFuZCBjb21tdW5pY2F0aW9uLiBcXG5cbiAgICAgICAgICAgICAgICAgICBFYXNpbHkgbWlncmF0ZSByZWZlcnJhbCBpbmZvcm1hdGlvbiB0byB5b3VyIGNvbGxlYWd1ZSB3aXRoIG1lZGljYWwgZ3JhZGUgZW5jcnlwdGlvbi4gTm8gbW9yZSByZXRha2luZyBvZiBYLXJheXMgc2ltcGx5IGR1ZSB0byBwb29yIGFjY2VzcyB0byB0aGUgY29ycmVjdCBpbmZvcm1hdGlvbi4gXFxuIFxuICAgICAgICAgICAgICAgICAgIFN0cnVjdHVyZSBpbnN0YW50bHkgdmFsaWRhdGVzIHlvdXIgcmVxdWVzdCBhZ2FpbnN0IGNsYWltIGNyaXRlcmlhcyB0byBzaG93IGhvdyBsaWtlbHkgaXQgaXMgdG8gYmUgYWNjZXB0ZWQgdG8gbWFrZSB0aGUgYmVzdCBkZWNpc2lvbnMgZm9yIHlvdXIgcGF0aWVudCB3aXRob3V0IGRlbGF5cy5gfSBcbiAgICAgICAgICAgICBJbWc9Jy9hc3NldHMvc3RydWN0dXJlc3ZnL3VuaXZlcnNhbHJlZjIuc3ZnJ1xuICAgICAgICAgICAgIHN2Z1dpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgY29scz1cImNvbC1zcGFuLTUgY29sdW1uXCJcbiAgICAgIC8+XG4gICAgICBcbiAgICAgXG5cbiAgICAgIDwvZGl2PlxuICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC01IGdyaWQtY29scy0xIHBiLTEyIG1kOmdhcC0xMCBtZDpncmlkLWNvbHMtMTAgbWQ6cGItMzJcIj5cbiAgICAgICBcbiAgICAgIDxIZXJvU3ViU2VjdGlvbiB0aXRsZT17YFJlY2VwdGlvbmlzdCBkYXNoYm9hcmQgXFxuIHB1dHMgeW91IG9uIHRoZSByaWdodCB0cmFja2B9XG4gICAgICAgICAgICAgIHRleHQ9XCJBdXJhIEFJIGxlYXJucyBhbmQgcmVtZW1iZXJzIGhvdyB5b3UgbGlrZSB5b3VyIHByYWN0aWNlIHRvIGJlIHJ1biBhbmQgd2lsbCBvcHRpbWlzZSBkYWlseSB0YXNrcyB0byB0aGUgZnVsbGVzdC4gUmVxdWVzdHMgYXJlIG9yZ2FuaXNlZCBieSB0aW1lIGFuZCBwcmlvcml0eSBzbyB5b3VyIHJlY2VwdGlvbmlzdCBjYW4gc3RheSBvcmdhbmlzZWQgYW5kIHJlbWFpbiBmcmVlIHRvIGJlIGEgd2VsY29taW5nIGZpcnN0LXNpZ2h0IGZvciBhbGwgeW91ciBwYXRpZW50cyBhbmQgbm90IHNpbXBseSB0aGUgaHVtYW4gZmFjZSBvZiBhIGNvbXB1dGVyIHNjcmVlbi5cIlxuICAgICAgICAgICAgICBJbWc9Jy9hc3NldHMvc3RydWN0dXJlc3ZnL3JlY2VwdGlvbmlzdGRhc2gyLnN2ZydcbiAgICAgICAgICAgICAgY29scz1cImNvbC1zcGFuLTUgLW0tMiBjb2x1bW5cIlxuICAgICAgICAgICAgICBzdmdXaWR0aD1cIjEwMCVcIlxuICAgICAgLz5cbiAgICAgIFxuICAgICAgPEhlcm9TdWJTZWN0aW9uIHRpdGxlPXsgXCJMYWIgY2FzZSBsb29wIG1hbmFnZW1lbnRcIn0gICAgICAgICAgICBcbiAgICAgICAgICAgICB0ZXh0PXtgVGFwTm90ZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgdGhlIHJlcXVpcmVkIGxhYiBtYW5hZ2VtZW50IHBhdGh3YXlzIGFuZCBTdHJ1Y3R1cmUgd2lsbCB0aGVuIHRha2Ugb3ZlciB0byBzY2hlZHVsZSBhcHBvaW50bWVudHMgYW5kIHRyYWNrIGxhYndvcmsgc3RhdHVzLiBJZiBsYWJ3b3JrIGlzIGRlbGF5ZWQsIEF1cmEgY2FuIHJlc2NoZWR1bGUgZm9yIHlvdS4gXFxuXG5TdHJ1Y3R1cmUgd2lsbCBhbHNvIGFsbG93IHJlYWwtdGltZSBjb2xsYWJvcmF0aW9uIHdpdGggeW91ciB0ZWNobmljaWFucyBmb3IgdmFsdWFibGUgYmktZGlyZWN0aW9uYWwgZmVlZGJhY2sgd2l0aCBjb21wbGV0ZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBCcnlhbnQgRGVudGFsIENhbWVyYSByYW5nZS5gfVxuICAgICAgICAgICAgIEltZz0nL2Fzc2V0cy9zdHJ1Y3R1cmVzdmcvbGFiLWNhc2Uuc3ZnJ1xuICAgICAgICAgICAgIHN2Z1dpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgY29scz1cImNvbC1zcGFuLTUgY29sdW1uXCIgLz4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICBcbiAgICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBmbGV4LWNvbC1yZXZlcnNlIHhsOmZsZXgtcm93IHhsOml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgeGw6cHItMjggZmxleGl0ZW1cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0zXCI+IFJlYWwtdGltZSBhbmFseXRpY3MgPGJyLz4gd2l0aCBhY3Rpb25hYmxlIGluc2lnaHQgPC9oMj5cbiAgICAgICAgICAgPHA+QXVyYSBBSSB3b24ndCBzaG93IHlvdSBhIHJhbmRvbSBzdHJpbmcgb2YgaW5jb21wcmVoZW5zaWJsZSBnaWJiZXJpc2ggYnV0IHJhdGhlciBmdWxseSBhY3Rpb25hYmxlIHBlcmZvcm1hbmNlIG9wdGltaXNhdGlvbiByZWNjb21tZW5kYXRpb25zIGJhc2VkIG9uIHNvdW5kIGV2aWRlbmNlIHRoYXQgaXMgbGVhcm5lZCBvdmVyIHRpbWUgZnJvbSB0aGUgYXVyYSBjb21tdW5pdHkuPC9wPlxuICAgICAgICAgICBcbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTIgZmxleGl0ZW1cIj5cbiAgICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvc3RydWN0dXJlc3ZnL2FuYWx5dGljcy5zdmcnIGNsYXNzTmFtZT1cIm14LWF1dG9cIiBhbHQ9XCJUYXBOb3RlcyBEZW50YWwgU3RvY2sgTWFuYWdlbWVudCBTb2x1dGlvblwiIC8+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgIFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuLnJlc2l6ZSB7XG5ib3JkZXI6IDFweCByZWQ7XG53aWR0aDogODMlO1xufVxufVxuICAgICAgIFxuICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIFxuICAgICA8L3NlY3Rpb24+XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gIFxuICAgPC8+IFxuICApXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFN0cnVjdHVyZTtcblxuIl19 */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\Structure.js */")));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Structure);

/***/ }),

/***/ "./pages/components/TapNote.js":
/*!*************************************!*\
  !*** ./pages/components/TapNote.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\TapNote.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function HeroSubSection(_ref) {
  var text = _ref.text,
      title = _ref.title,
      Img = _ref.Img,
      cols = _ref.cols,
      svgWidth = _ref.svgWidth;
  return __jsx("div", {
    className: cols,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }, __jsx("img", {
    className: "corrected",
    src: Img,
    alt: "StockRoom Dental Stock Management Solution",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 14
    }
  })), __jsx("h2", {
    className: "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "  ", title, "  "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, text));
}

function TapNote() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "pb-12 md:pb-24",
    id: "tapnote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: " text-center pt-16 md:pt-20 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, " TapNote"), __jsx("h3", {
    className: "text-center pb-32 section-subhead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, " The Dental Record. Reimagined. "), __jsx("div", {
    className: "grid gap-5 grid-cols-1 md:gap-10 md:grid-cols-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(HeroSubSection, {
    text: "Expertly-standardised templates ensuring your notes are complete with latest regulatory guidance. The fully customisable structure is specifically designed to allow fast input and efficient review. ",
    Img: "/assets/tapnotesvg/tapnotes1.svg",
    cols: "col-span-5 column",
    title: "Defense against litigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(HeroSubSection, {
    text: "No more long drop down lists. Simply tap on intelligently defined options tailored to you and patient findings trail across all kinds of documentation work. Only relevant options are displayed allowing nurses to do more than Socrates.",
    Img: "/assets/tapnotesvg/tapnotes2.svg",
    cols: "col-span-5 column",
    title: "Tap-based experience. Reads your mind!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  }))), __jsx("section", {
    className: "pb-12 md:pb-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-start flex-col-reverse xl:flex-row xl:items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "flex-1 xl:pr-28 flexitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 10
    }
  }, __jsx("h2", {
    className: "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Vicarious ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 44
    }
  }), " Liability Protection "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 12
    }
  }, "Due to TapNote's AI system that constantly learns and adapts, you can monitor and validate the diagnosis and treatments of all your associates within seconds to identify high risk issues and promote good record keeping. In fact, this can be completely automated.")), __jsx("div", {
    className: "flex-2 flexitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/liability4.svg",
    className: "corrected",
    alt: "TapNotes Dental Stock Management Solution",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 12
    }
  })))), __jsx("section", {
    className: "pb-12 md:pb-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-start flex-col-reverse xl:flex-row xl:items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "flex-1 xl:pr-28 flexitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 10
    }
  }, __jsx("h2", {
    className: "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "  Auto-syncing charts  "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }
  }, "Charts are a live visualisation of the clinical notes. Every tap is mapped to the chart to build a simple screen with all the information you need at a glance.        "), "\xA0", __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 12
    }
  }, "Visualise as much or as little of your patient's full dental history as you like from just one simple screen that is bespoke to you.")), __jsx("div", {
    className: "flex-2 flexitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/chart.svg",
    className: "corrected chart",
    alt: "TapNotes Dental Stock Management Solution",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 12
    }
  })))), __jsx("section", {
    className: "pb-12 md:pb-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "grid gap-5 grid-cols-1 md:gap-10 md:grid-cols-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(HeroSubSection, {
    text: "The patient profile is like your Facebook feed. There are no separate tabs or additional software, but a chronological timeline of clinical and administrative events for a clear overview of the patient evolution, bringing dentistry into the 21st century at last.",
    Img: "/assets/tapnotesvg/inline.svg",
    cols: "col-span-5 column",
    title: "Everything\u2019s in-line ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), __jsx(HeroSubSection, {
    text: "AI understands the meaning of every TapNote entry and timeline element to offer powerful search and filters so you can easily access previous details.",
    Img: "/assets/tapnotesvg/patient-record.svg",
    cols: "col-span-5 column",
    title: "Powerful search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 10
    }
  }))), __jsx("section", {
    className: "jsx-814616323" + " " + "pt-6 mb-12 lg:mb-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-814616323" + " " + "4in1-mobile lg:hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-814616323" + " " + "flex flex-wrap items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-814616323" + " " + "flex-1 flexitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 14
    }
  }, __jsx("h2", {
    className: "jsx-814616323" + " " + "pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 16
    }
  }, __jsx("span", {
    className: "jsx-814616323" + " " + "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 18
    }
  }, "The new way"), " to efficiently treatment plan and consent your patients"), __jsx("p", {
    className: "jsx-814616323",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, "TapNote will help you record all treatment proposals and discussions in a fraction of the time with ", __jsx("span", {
    className: "jsx-814616323" + " " + "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 117
    }
  }, "pre-configured questions based on the patient profile and latest standards"), "."), "\xA0", __jsx("p", {
    className: "jsx-814616323",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, "Example: Aura knows if your patient smokes so dry socket is a more likely post-operative complication. Aura knows if it's a molar extraction then the risk is higher still. In fact, if it was a complex extraction in a patient with a history of dry socket Aura can keep a 15 minute gap in the diary to help management. Aura will learn your preferences and act accordingly over time."), "\xA0", __jsx("img", {
    src: "/assets/tapnotesvg/4in1-mobile.svg",
    alt: "Consent",
    className: "jsx-814616323" + " " + "mx-auto 4in1mobile py-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 16
    }
  }), __jsx("ul", {
    className: "jsx-814616323",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 18
    }
  }, __jsx("li", {
    className: "jsx-814616323" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, "Clear comparison table of treatments and payment plans for patient education: this can be printed, emailed and provided in-app for registered patients;"), __jsx("li", {
    className: "jsx-814616323" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 20
    }
  }, "Highly tailored and fully contemporaneous consent ready to be signed electronically;"), __jsx("li", {
    className: "jsx-814616323" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 20
    }
  }, " Patient-accepted plans already charted to courses of treatment and validated according to NHS rules & diagnostic parameters."))))), __jsx("div", {
    className: "jsx-814616323" + " " + "4in1-desktop hidden lg:block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "jsx-814616323" + " " + "grid grid-cols-12 gap-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-814616323" + " " + "col-start-5 col-span-8 xl:col-start-7 xl:col-span-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 14
    }
  }, __jsx("h2", {
    className: "jsx-814616323" + " " + "pb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 16
    }
  }, __jsx("span", {
    className: "jsx-814616323" + " " + "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 18
    }
  }, "The new way"), " to efficiently treatment plan and consent your patients"), __jsx("p", {
    className: "jsx-814616323",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, "TapNote will help you record all treatment proposals and discussions in a fraction of the time with ", __jsx("span", {
    className: "jsx-814616323" + " " + "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 117
    }
  }, "pre-configured questions based on the patient profile and latest standards"), "."), "\xA0", __jsx("p", {
    className: "jsx-814616323",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, "Example: Aura knows if your patient smokes so dry socket is a more likely post-operative complication. Aura knows if it's a molar extraction then the risk is higher still. In fact, if it was a complex extraction in a patient with a history of dry socket Aura can keep a 15 minute gap in the diary to help management. Aura will learn your preferences and act accordingly over time."), "\xA0", __jsx("ul", {
    className: "jsx-814616323",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 18
    }
  }, __jsx("li", {
    className: "jsx-814616323" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, "Clear comparison table of treatments and payment plans for patient education: this can be printed, emailed and provided in-app for registered patients;"), __jsx("li", {
    className: "jsx-814616323" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 20
    }
  }, "Highly tailored and fully contemporaneous consent ready to be signed electronically;"), __jsx("li", {
    className: "jsx-814616323" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 20
    }
  }, " Patient-accepted plans already charted to courses of treatment and validated according to NHS rules & diagnostic parameters.")))), __jsx("img", {
    src: "/assets/tapnotesvg/4in1.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-814616323" + " " + "mx-auto px-10 relative -mt-16 xl:-mt-64",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "814616323",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcVGFwTm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrS3VCIiwiZmlsZSI6IkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcVGFwTm90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gSGVyb1N1YlNlY3Rpb24oeyB0ZXh0ICx0aXRsZSwgSW1nLGNvbHMsIHN2Z1dpZHRoIH0pe1xuICByZXR1cm4oXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtjb2xzfT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi01XCI+ICAgXG4gICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjb3JyZWN0ZWRcIiBzcmM9e0ltZ30gYWx0PVwiU3RvY2tSb29tIERlbnRhbCBTdG9jayBNYW5hZ2VtZW50IFNvbHV0aW9uXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0zXCI+ICB7dGl0bGV9ICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cbiAgXG5cbmZ1bmN0aW9uIFRhcE5vdGUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICBcbiAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGItMTIgbWQ6cGItMjRcIiBpZD1cInRhcG5vdGVcIj5cbiAgICBcbiAgICAgIDxoMSBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgcHQtMTYgbWQ6cHQtMjAgcGItMlwiID4gVGFwTm90ZTwvaDE+IFxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBiLTMyIHNlY3Rpb24tc3ViaGVhZFwiPiBUaGUgRGVudGFsIFJlY29yZC4gUmVpbWFnaW5lZC4gPC9oMz5cbiAgICBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC01IGdyaWQtY29scy0xIG1kOmdhcC0xMCBtZDpncmlkLWNvbHMtMTBcIj5cbiAgICAgICBcbiAgICAgIDxIZXJvU3ViU2VjdGlvbiB0ZXh0PVwiRXhwZXJ0bHktc3RhbmRhcmRpc2VkIHRlbXBsYXRlcyBlbnN1cmluZyB5b3VyIG5vdGVzIGFyZSBjb21wbGV0ZSB3aXRoIGxhdGVzdCByZWd1bGF0b3J5IGd1aWRhbmNlLiBUaGUgZnVsbHkgY3VzdG9taXNhYmxlIHN0cnVjdHVyZSBpcyBzcGVjaWZpY2FsbHkgZGVzaWduZWQgdG8gYWxsb3cgZmFzdCBpbnB1dCBhbmQgZWZmaWNpZW50IHJldmlldy4gXCJcbiAgICAgICAgICAgICAgSW1nPScvYXNzZXRzL3RhcG5vdGVzdmcvdGFwbm90ZXMxLnN2ZydcbiAgICAgICAgICAgICAgY29scz1cImNvbC1zcGFuLTUgY29sdW1uXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJEZWZlbnNlIGFnYWluc3QgbGl0aWdhdGlvblwiXG4gICAgICAvPlxuICAgICAgICBcbiAgICAgICAgIDxIZXJvU3ViU2VjdGlvbiB0ZXh0PVwiTm8gbW9yZSBsb25nIGRyb3AgZG93biBsaXN0cy4gU2ltcGx5IHRhcCBvbiBpbnRlbGxpZ2VudGx5IGRlZmluZWQgb3B0aW9ucyB0YWlsb3JlZCB0byB5b3UgYW5kIHBhdGllbnQgZmluZGluZ3MgdHJhaWwgYWNyb3NzIGFsbCBraW5kcyBvZiBkb2N1bWVudGF0aW9uIHdvcmsuIE9ubHkgcmVsZXZhbnQgb3B0aW9ucyBhcmUgZGlzcGxheWVkIGFsbG93aW5nIG51cnNlcyB0byBkbyBtb3JlIHRoYW4gU29jcmF0ZXMuXCJcbiAgICAgICAgICAgICAgSW1nPScvYXNzZXRzL3RhcG5vdGVzdmcvdGFwbm90ZXMyLnN2ZydcbiAgICAgICAgICAgICAgY29scz1cImNvbC1zcGFuLTUgY29sdW1uXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJUYXAtYmFzZWQgZXhwZXJpZW5jZS4gUmVhZHMgeW91ciBtaW5kIVwiXG4gICAgICAvPlxuICAgIFxuICAgICAgXG4gICBcbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9zZWN0aW9uPlxuICAgIFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBiLTEyIG1kOnBiLTI0XCI+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBmbGV4LWNvbC1yZXZlcnNlIHhsOmZsZXgtcm93IHhsOml0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgeGw6cHItMjggZmxleGl0ZW1cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0zXCI+VmljYXJpb3VzIDxici8+IExpYWJpbGl0eSBQcm90ZWN0aW9uIDwvaDI+XG4gICAgICAgICAgIDxwPkR1ZSB0byBUYXBOb3RlJ3MgQUkgc3lzdGVtIHRoYXQgY29uc3RhbnRseSBsZWFybnMgYW5kIGFkYXB0cywgeW91IGNhbiBtb25pdG9yIGFuZCB2YWxpZGF0ZSB0aGUgZGlhZ25vc2lzIGFuZCB0cmVhdG1lbnRzIG9mIGFsbCB5b3VyIGFzc29jaWF0ZXMgd2l0aGluIHNlY29uZHMgdG8gaWRlbnRpZnkgaGlnaCByaXNrIGlzc3VlcyBhbmQgcHJvbW90ZSBnb29kIHJlY29yZCBrZWVwaW5nLiBJbiBmYWN0LCB0aGlzIGNhbiBiZSBjb21wbGV0ZWx5IGF1dG9tYXRlZC5cbiAgICAgICAgICAgPC9wPlxuICAgICAgICAgICBcbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTIgZmxleGl0ZW1cIj5cbiAgICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvdGFwbm90ZXN2Zy9saWFiaWxpdHk0LnN2ZycgY2xhc3NOYW1lPVwiY29ycmVjdGVkXCIgYWx0PVwiVGFwTm90ZXMgRGVudGFsIFN0b2NrIE1hbmFnZW1lbnQgU29sdXRpb25cIiAvPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICBcbiAgICBcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYi0xMiBtZDpwYi0yNFwiPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQgZmxleC1jb2wtcmV2ZXJzZSB4bDpmbGV4LXJvdyB4bDppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHhsOnByLTI4IGZsZXhpdGVtXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItM1wiPiAgQXV0by1zeW5jaW5nIGNoYXJ0cyAgPC9oMj5cbiAgICAgICAgICAgPHA+Q2hhcnRzIGFyZSBhIGxpdmUgdmlzdWFsaXNhdGlvbiBvZiB0aGUgY2xpbmljYWwgbm90ZXMuIEV2ZXJ5IHRhcCBpcyBtYXBwZWQgdG8gdGhlIGNoYXJ0IHRvIGJ1aWxkIGEgc2ltcGxlIHNjcmVlbiB3aXRoIGFsbCB0aGUgaW5mb3JtYXRpb24geW91IG5lZWQgYXQgYSBnbGFuY2UuICAgICAgICA8L3A+XG4gICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICBWaXN1YWxpc2UgYXMgbXVjaCBvciBhcyBsaXR0bGUgb2YgeW91ciBwYXRpZW50J3MgZnVsbCBkZW50YWwgaGlzdG9yeSBhcyB5b3UgbGlrZSBmcm9tIGp1c3Qgb25lIHNpbXBsZSBzY3JlZW4gdGhhdCBpcyBiZXNwb2tlIHRvIHlvdS5cbiAgICAgICAgICAgPC9wPlxuICAgICAgICAgICBcbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTIgZmxleGl0ZW1cIj5cbiAgICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvdGFwbm90ZXN2Zy9jaGFydC5zdmcnIGNsYXNzTmFtZT1cImNvcnJlY3RlZCBjaGFydFwiIGFsdD1cIlRhcE5vdGVzIERlbnRhbCBTdG9jayBNYW5hZ2VtZW50IFNvbHV0aW9uXCIgLz5cbiAgICAgICAgICAgey8qPGltZyBzcmM9Jy9hc3NldHMvdGFwbm90ZXN2Zy9jaGFydC1tb2JpbGUuc3ZnJyBjbGFzc05hbWU9XCJteC1hdXRvIGNoYXJ0bW9iaWxlXCIgYWx0PVwiVGFwTm90ZXMgRGVudGFsIFN0b2NrIE1hbmFnZW1lbnQgU29sdXRpb25cIiAvPiAqL31cbiAgICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgXG4gICAgXG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBiLTEyIG1kOnBiLTI0XCI+XG4gICAgXG4gICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNSBncmlkLWNvbHMtMSBtZDpnYXAtMTAgbWQ6Z3JpZC1jb2xzLTEwXCI+XG4gICAgICAgXG4gICAgICA8SGVyb1N1YlNlY3Rpb24gdGV4dD1cIlRoZSBwYXRpZW50IHByb2ZpbGUgaXMgbGlrZSB5b3VyIEZhY2Vib29rIGZlZWQuIFRoZXJlIGFyZSBubyBzZXBhcmF0ZSB0YWJzIG9yIGFkZGl0aW9uYWwgc29mdHdhcmUsIGJ1dCBhIGNocm9ub2xvZ2ljYWwgdGltZWxpbmUgb2YgY2xpbmljYWwgYW5kIGFkbWluaXN0cmF0aXZlIGV2ZW50cyBmb3IgYSBjbGVhciBvdmVydmlldyBvZiB0aGUgcGF0aWVudCBldm9sdXRpb24sIGJyaW5naW5nIGRlbnRpc3RyeSBpbnRvIHRoZSAyMXN0IGNlbnR1cnkgYXQgbGFzdC5cIlxuICAgICAgICAgICAgICBJbWc9Jy9hc3NldHMvdGFwbm90ZXN2Zy9pbmxpbmUuc3ZnJ1xuICAgICAgICAgICAgICBjb2xzPVwiY29sLXNwYW4tNSBjb2x1bW5cIlxuICAgICAgICAgICAgICB0aXRsZT1cIkV2ZXJ5dGhpbmfigJlzIGluLWxpbmUgXCJcbiAgICAgIC8+XG4gICAgICAgIFxuICAgICAgICAgPEhlcm9TdWJTZWN0aW9uIHRleHQ9XCJBSSB1bmRlcnN0YW5kcyB0aGUgbWVhbmluZyBvZiBldmVyeSBUYXBOb3RlIGVudHJ5IGFuZCB0aW1lbGluZSBlbGVtZW50IHRvIG9mZmVyIHBvd2VyZnVsIHNlYXJjaCBhbmQgZmlsdGVycyBzbyB5b3UgY2FuIGVhc2lseSBhY2Nlc3MgcHJldmlvdXMgZGV0YWlscy5cIlxuICAgICAgICAgICAgICBJbWc9Jy9hc3NldHMvdGFwbm90ZXN2Zy9wYXRpZW50LXJlY29yZC5zdmcnXG4gICAgICAgICAgICAgIGNvbHM9XCJjb2wtc3Bhbi01IGNvbHVtblwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUG93ZXJmdWwgc2VhcmNoXCJcbiAgICAgIC8+XG4gICAgXG4gICAgICBcbiAgIFxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L3NlY3Rpb24+XG4gICAgXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHQtNiBtYi0xMiBsZzptYi0zMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjRpbjEtbW9iaWxlIGxnOmhpZGRlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleGl0ZW1cIj5cbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi01XCI+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlRoZSBuZXcgd2F5PC9zcGFuPiB0byBlZmZpY2llbnRseSB0cmVhdG1lbnQgcGxhbiBhbmQgY29uc2VudCB5b3VyIHBhdGllbnRzXG4gICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUYXBOb3RlIHdpbGwgaGVscCB5b3UgcmVjb3JkIGFsbCB0cmVhdG1lbnQgcHJvcG9zYWxzIGFuZCBkaXNjdXNzaW9ucyBpbiBhIGZyYWN0aW9uIG9mIHRoZSB0aW1lIHdpdGggPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+cHJlLWNvbmZpZ3VyZWQgcXVlc3Rpb25zIGJhc2VkIG9uIHRoZSBwYXRpZW50IHByb2ZpbGUgYW5kIGxhdGVzdCBzdGFuZGFyZHM8L3NwYW4+LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgPHA+RXhhbXBsZTogQXVyYSBrbm93cyBpZiB5b3VyIHBhdGllbnQgc21va2VzIHNvIGRyeSBzb2NrZXQgaXMgYSBtb3JlIGxpa2VseSBwb3N0LW9wZXJhdGl2ZSBjb21wbGljYXRpb24uIEF1cmEga25vd3MgaWYgaXQncyBhIG1vbGFyIGV4dHJhY3Rpb24gdGhlbiB0aGUgcmlzayBpcyBoaWdoZXIgc3RpbGwuIEluIGZhY3QsIGlmIGl0IHdhcyBhIGNvbXBsZXggZXh0cmFjdGlvbiBpbiBhIHBhdGllbnQgd2l0aCBhIGhpc3Rvcnkgb2YgZHJ5IHNvY2tldCBBdXJhIGNhbiBrZWVwIGEgMTUgbWludXRlIGdhcCBpbiB0aGUgZGlhcnkgdG8gaGVscCBtYW5hZ2VtZW50LiBBdXJhIHdpbGwgbGVhcm4geW91ciBwcmVmZXJlbmNlcyBhbmQgYWN0IGFjY29yZGluZ2x5IG92ZXIgdGltZS5cbiAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvdGFwbm90ZXN2Zy80aW4xLW1vYmlsZS5zdmcnIGNsYXNzTmFtZT1cIm14LWF1dG8gNGluMW1vYmlsZSBweS0xMlwiIGFsdD1cIkNvbnNlbnRcIiAvPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYi0zXCI+Q2xlYXIgY29tcGFyaXNvbiB0YWJsZSBvZiB0cmVhdG1lbnRzIGFuZCBwYXltZW50IHBsYW5zIGZvciBwYXRpZW50IGVkdWNhdGlvbjogdGhpcyBjYW4gYmUgcHJpbnRlZCwgZW1haWxlZCBhbmQgcHJvdmlkZWQgaW4tYXBwIGZvciByZWdpc3RlcmVkIHBhdGllbnRzOzwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBiLTNcIj5IaWdobHkgdGFpbG9yZWQgYW5kIGZ1bGx5IGNvbnRlbXBvcmFuZW91cyBjb25zZW50IHJlYWR5IHRvIGJlIHNpZ25lZCBlbGVjdHJvbmljYWxseTs8L2xpPlxuICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYi0zXCI+IFBhdGllbnQtYWNjZXB0ZWQgcGxhbnMgYWxyZWFkeSBjaGFydGVkIHRvIGNvdXJzZXMgb2YgdHJlYXRtZW50IGFuZCB2YWxpZGF0ZWQgYWNjb3JkaW5nIHRvIE5IUyBydWxlcyAmYW1wOyBkaWFnbm9zdGljIHBhcmFtZXRlcnMuPC9saT5cbiAgICAgICAgICAgICAgICAgPC91bD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCI0aW4xLWRlc2t0b3AgaGlkZGVuIGxnOmJsb2NrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC0xMFwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTUgY29sLXNwYW4tOCB4bDpjb2wtc3RhcnQtNyB4bDpjb2wtc3Bhbi02XCI+XG4gICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItNVwiPlxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5UaGUgbmV3IHdheTwvc3Bhbj4gdG8gZWZmaWNpZW50bHkgdHJlYXRtZW50IHBsYW4gYW5kIGNvbnNlbnQgeW91ciBwYXRpZW50c1xuICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVGFwTm90ZSB3aWxsIGhlbHAgeW91IHJlY29yZCBhbGwgdHJlYXRtZW50IHByb3Bvc2FscyBhbmQgZGlzY3Vzc2lvbnMgaW4gYSBmcmFjdGlvbiBvZiB0aGUgdGltZSB3aXRoIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPnByZS1jb25maWd1cmVkIHF1ZXN0aW9ucyBiYXNlZCBvbiB0aGUgcGF0aWVudCBwcm9maWxlIGFuZCBsYXRlc3Qgc3RhbmRhcmRzPC9zcGFuPi5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgIDxwPkV4YW1wbGU6IEF1cmEga25vd3MgaWYgeW91ciBwYXRpZW50IHNtb2tlcyBzbyBkcnkgc29ja2V0IGlzIGEgbW9yZSBsaWtlbHkgcG9zdC1vcGVyYXRpdmUgY29tcGxpY2F0aW9uLiBBdXJhIGtub3dzIGlmIGl0J3MgYSBtb2xhciBleHRyYWN0aW9uIHRoZW4gdGhlIHJpc2sgaXMgaGlnaGVyIHN0aWxsLiBJbiBmYWN0LCBpZiBpdCB3YXMgYSBjb21wbGV4IGV4dHJhY3Rpb24gaW4gYSBwYXRpZW50IHdpdGggYSBoaXN0b3J5IG9mIGRyeSBzb2NrZXQgQXVyYSBjYW4ga2VlcCBhIDE1IG1pbnV0ZSBnYXAgaW4gdGhlIGRpYXJ5IHRvIGhlbHAgbWFuYWdlbWVudC4gQXVyYSB3aWxsIGxlYXJuIHlvdXIgcHJlZmVyZW5jZXMgYW5kIGFjdCBhY2NvcmRpbmdseSBvdmVyIHRpbWUuXG4gICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBiLTNcIj5DbGVhciBjb21wYXJpc29uIHRhYmxlIG9mIHRyZWF0bWVudHMgYW5kIHBheW1lbnQgcGxhbnMgZm9yIHBhdGllbnQgZWR1Y2F0aW9uOiB0aGlzIGNhbiBiZSBwcmludGVkLCBlbWFpbGVkIGFuZCBwcm92aWRlZCBpbi1hcHAgZm9yIHJlZ2lzdGVyZWQgcGF0aWVudHM7PC9saT5cbiAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGItM1wiPkhpZ2hseSB0YWlsb3JlZCBhbmQgZnVsbHkgY29udGVtcG9yYW5lb3VzIGNvbnNlbnQgcmVhZHkgdG8gYmUgc2lnbmVkIGVsZWN0cm9uaWNhbGx5OzwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBiLTNcIj4gUGF0aWVudC1hY2NlcHRlZCBwbGFucyBhbHJlYWR5IGNoYXJ0ZWQgdG8gY291cnNlcyBvZiB0cmVhdG1lbnQgYW5kIHZhbGlkYXRlZCBhY2NvcmRpbmcgdG8gTkhTIHJ1bGVzICZhbXA7IGRpYWdub3N0aWMgcGFyYW1ldGVycy48L2xpPlxuICAgICAgICAgICAgICAgICA8L3VsPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICA8aW1nIHNyYz0nL2Fzc2V0cy90YXBub3Rlc3ZnLzRpbjEuc3ZnJyBjbGFzc05hbWU9XCJteC1hdXRvIHB4LTEwIHJlbGF0aXZlIC1tdC0xNiB4bDotbXQtNjRcIiBhbHQ9XCJUYXBOb3RlcyBEZW50YWwgU3RvY2sgTWFuYWdlbWVudCBTb2x1dGlvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICBcblxuICAgICAgIFxuICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICAgXG4gICAgXG4gICBcbiAgIDwvPiBcbiAgKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUYXBOb3RlO1xuXG4iXX0= */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\TapNote.js */")));
}

;
/* harmony default export */ __webpack_exports__["default"] = (TapNote);

/***/ }),

/***/ "./pages/components/container.js":
/*!***************************************!*\
  !*** ./pages/components/container.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    className: "container mx-auto px-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 7
    }
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./pages/components/h2.js":
/*!********************************!*\
  !*** ./pages/components/h2.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return H2; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\h2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function H2(_ref) {
  var children = _ref.children,
      props = _ref.props;
  return __jsx("h2", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }), children);
}
;

/***/ }),

/***/ "./pages/components/nav.js":
/*!*********************************!*\
  !*** ./pages/components/nav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Nav(_ref) {
  var children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1608806299" + " " + "nav hidden md:block px-16 mx-auto h-12 shadow block z-10 fixed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/assets/nav/aura-placeholder.png",
    alt: "Aura Logo",
    className: "jsx-1608806299" + " " + "float-left w-16 pt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1608806299" + " " + "float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 6
    }
  }, __jsx("ul", {
    className: "jsx-1608806299" + " " + "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#tapnote",
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "TapNote")), __jsx("li", {
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }, __jsx("a", {
    href: "#structure",
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 14
    }
  }, "Structure")), __jsx("li", {
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#stockroom",
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }, "StockRoom"))), __jsx("button", {
    className: "jsx-1608806299" + " " + "bg-aurablue hover:bg-blue-700 text-white rounded-full ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Sign Up"))), __jsx("div", {
    className: "jsx-1608806299" + " " + "mobile-nav md:hidden px-16 h-8 shadow block z-10 fixed flex justify-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-1608806299" + " " + "inline-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#tapnote",
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "TapNote")), __jsx("li", {
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }, __jsx("a", {
    href: "#structure",
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 14
    }
  }, "Structure")), __jsx("li", {
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#stockroom",
    className: "jsx-1608806299",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "StockRoom")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1608806299",
    __self: this
  }, "ul.jsx-1608806299{list-style:none;margin-top:2px;}button.jsx-1608806299{padding:8px 35px 8px 35px;font-weight:500;font-size:11px;line-height:14px;-webkit-letter-spacing:0.06em;-moz-letter-spacing:0.06em;-ms-letter-spacing:0.06em;letter-spacing:0.06em;text-transform:uppercase;}ul.jsx-1608806299 li.jsx-1608806299{padding:0 1rem 0 1rem;color:#4482F0;}.nav.jsx-1608806299{background:#FEFEFE;padding-top:9px;width:100%;}.mobile-nav.jsx-1608806299{background:#FEFEFE;padding-top:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCaUIsQUFHaUIsQUFLWSxBQVNOLEFBSUssQUFNQSxnQkF2QlosR0FrQlEsQUFNQSxHQVZULElBVEUsS0FKaEIsSUFrQm1CLEFBTUEsQ0FWbkIsTUFUZSxJQWNULEFBTUEsV0FuQlcsaUJBQ0sseUdBQ0cseUJBQ3pCIiwiZmlsZSI6IkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTmF2KHtjaGlsZHJlbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2IGhpZGRlbiBtZDpibG9jayBweC0xNiBteC1hdXRvIGgtMTIgc2hhZG93IGJsb2NrIHotMTAgZml4ZWRcIj5cbiAgICAgIDxpbWcgc3JjPScvYXNzZXRzL25hdi9hdXJhLXBsYWNlaG9sZGVyLnBuZycgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCB3LTE2IHB0LTJcIiBhbHQ9XCJBdXJhIExvZ29cIiAvPlxuICAgICA8ZGl2ICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI3RhcG5vdGVcIj5UYXBOb3RlPC9hPjwvbGk+IFxuICAgICAgICAgPGxpPjxhIGhyZWY9XCIjc3RydWN0dXJlXCI+U3RydWN0dXJlPC9hPjwvbGk+IFxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI3N0b2Nrcm9vbVwiPlN0b2NrUm9vbTwvYT48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYXVyYWJsdWUgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgbWwtNFwiPlxuICAgICAgICAgU2lnbiBVcFxuICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1uYXYgbWQ6aGlkZGVuIHB4LTE2IGgtOCBzaGFkb3cgYmxvY2sgei0xMCBmaXhlZCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgIFxuICAgICAgPHVsIGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI3RhcG5vdGVcIj5UYXBOb3RlPC9hPjwvbGk+IFxuICAgICAgICAgPGxpPjxhIGhyZWY9XCIjc3RydWN0dXJlXCI+U3RydWN0dXJlPC9hPjwvbGk+IFxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI3N0b2Nrcm9vbVwiPlN0b2NrUm9vbTwvYT48L2xpPlxuICAgICAgPC91bD5cbiBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICBcbiAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgdWwge1xubGlzdC1zdHlsZTogbm9uZTtcbm1hcmdpbi10b3A6IDJweDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDM1cHggOHB4IDM1cHg7XG5mb250LXdlaWdodDogNTAwO1xuZm9udC1zaXplOiAxMXB4O1xubGluZS1oZWlnaHQ6IDE0cHg7XG5sZXR0ZXItc3BhY2luZzogMC4wNmVtO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudWwgbGkge1xucGFkZGluZzogMCAxcmVtIDAgMXJlbTtcbmNvbG9yOiAjNDQ4MkYwO1xufVxuICAgICAgLm5hdiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRUZFRkU7XG4gICAgICAgcGFkZGluZy10b3A6IDlweDsgICBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAubW9iaWxlLW5hdiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRUZFRkU7XG4gICAgICAgcGFkZGluZy10b3A6IDVweDsgICBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgPC8+IFxuICApXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcblxuIl19 */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\nav.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Hero */ "./pages/components/Hero.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ "./pages/components/nav.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/container */ "./pages/components/container.js");
/* harmony import */ var _components_StockRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/StockRoom */ "./pages/components/StockRoom.js");
/* harmony import */ var _components_TapNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TapNote */ "./pages/components/TapNote.js");
/* harmony import */ var _components_Structure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Structure */ "./pages/components/Structure.js");
/* harmony import */ var _components_Community__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Community */ "./pages/components/Community.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Standalone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Standalone */ "./pages/components/Standalone.js");
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function HomePage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }), __jsx("section", {
    className: "bg-grey pt-12 pb-12 md:pb-16 whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }))), __jsx("section", {
    className: "bg-grey pt-12 pb-12 md:pb-16 whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx(_components_Standalone__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  })), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, __jsx(_components_TapNote__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }))), __jsx("section", {
    className: "bg-grey pt-12 pb-12 md:pt-16 md:pb-16 whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, __jsx(_components_Structure__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }))), __jsx("section", {
    className: " pt-12 pb-12 md:pt-16 md:pb-16  whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }
  }, __jsx(_components_StockRoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }))), __jsx("section", {
    className: "bg-grey  pt-12 pb-12 md:pt-16 md:pb-16  whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_components_Community__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 1:
/*!*********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=E%3A%5CDesktop%5Ctapnotes-landing%5Cpages%5Cindex.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=E%3A%5CDesktop%5Ctapnotes-landing%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5CDesktop%5Ctapnotes-landing%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map