module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/Community.js":
/*!***************************************!*\
  !*** ./pages/components/Community.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function HeroSubSection({
  text
}) {
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

/***/ "./pages/components/StockRoom.js":
/*!***************************************!*\
  !*** ./pages/components/StockRoom.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _h2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./h2 */ "./pages/components/h2.js");
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\StockRoom.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function HeroSubSection({
  text,
  Img,
  cols,
  svgWidth
}) {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\Structure.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function HeroSubSection({
  text,
  Img,
  cols,
  title,
  svgWidth
}) {
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
    title: `Smart scheduler \n will keep your diary filled`,
    text: `Dental Associate off sick? No problem. Aura will reschedule all the appointments at a click of a button based on dentist preferences, patient availability and clinical circumstances. Aura knows that a 'crown fit' without a temporary could be prioritised over the 19th denture adjustment. \n
This booking system will optimise the patient and dentist experience as well as maximise practice revenue.`,
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
    text: `Allows community of private and NHS practices to manage referrals seamlessly and share clinical notes and media for real-time bi-directional updates and communication. \n
                   Easily migrate referral information to your colleague with medical grade encryption. No more retaking of X-rays simply due to poor access to the correct information. \n 
                   Structure instantly validates your request against claim criterias to show how likely it is to be accepted to make the best decisions for your patient without delays.`,
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
    title: `Receptionist dashboard \n puts you on the right track`,
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
    text: `TapNote automatically creates the required lab management pathways and Structure will then take over to schedule appointments and track labwork status. If labwork is delayed, Aura can reschedule for you. \n
Structure will also allow real-time collaboration with your technicians for valuable bi-directional feedback with complete integration with the Bryant Dental Camera range.`,
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\TapNote.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function HeroSubSection({
  text,
  title,
  Img,
  cols,
  svgWidth
}) {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container({
  children
}) {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\h2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function H2({
  children,
  props
}) {
  return __jsx("h2", _extends({}, props, {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Nav({
  children
}) {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Hero */ "./pages/components/Hero.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav */ "./pages/components/nav.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/container */ "./pages/components/container.js");
/* harmony import */ var _components_StockRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/StockRoom */ "./pages/components/StockRoom.js");
/* harmony import */ var _components_TapNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TapNote */ "./pages/components/TapNote.js");
/* harmony import */ var _components_Structure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Structure */ "./pages/components/Structure.js");
/* harmony import */ var _components_Community__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Community */ "./pages/components/Community.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function HomePage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }), __jsx("section", {
    className: "bg-grey pt-12 pb-12 md:pb-16 whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }))), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx(_components_TapNote__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }))), __jsx("section", {
    className: "bg-grey pt-12 pb-12 md:pt-16 md:pb-16 whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }, __jsx(_components_Structure__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }))), __jsx("section", {
    className: " pt-12 pb-12 md:pt-16 md:pb-16  whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }
  }, __jsx(_components_StockRoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }))), __jsx("section", {
    className: "bg-grey  pt-12 pb-12 md:pt-16 md:pb-16  whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_components_Community__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Desktop\tapnotes-landing\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map