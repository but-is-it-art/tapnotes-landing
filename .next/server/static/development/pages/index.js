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
  }, "Wave goodbye to the old and clunky and meet Aura AI: the 360\xBA practice management system that ", __jsx("span", {
    className: "jsx-3637604257" + " " + "highlight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 158
    }
  }, "brings your practice into the 21st century"), ". It frees up your time, prevents litigation, reduces compliance costs, and increases revenue."), __jsx("div", {
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
    className: "jsx-3637604257" + " " + "md:col-start-7 md:col-span-6 pt-16",
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
  }, "button.jsx-3637604257{padding:8px 35px 8px 35px;font-weight:500;font-size:11px;line-height:14px;-webkit-letter-spacing:0.06em;-moz-letter-spacing:0.06em;-ms-letter-spacing:0.06em;letter-spacing:0.06em;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcQ29tbXVuaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDZ0IsQUFHNkIsMEJBQ1osZ0JBQ0QsZUFDRSxpQkFDSyx5R0FDRyx5QkFDekIiLCJmaWxlIjoiRTpcXERlc2t0b3BcXHRhcG5vdGVzLWxhbmRpbmdcXHBhZ2VzXFxjb21wb25lbnRzXFxDb21tdW5pdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBDb21tdW5pdHkoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgPHNlY3Rpb24+XG4gICAgICBcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC0xMiBtZDpwdC0yMCBwYi0yXCI+Sm9pbiB0aGUgQXVyYSBjb21tdW5pdHk8L2gxPiBcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwYi0xMiBtZDpwYi0yNCBjb21tLXN1YnRpdGxlXCI+V2F2ZSBnb29kYnllIHRvIHRoZSBvbGQgYW5kIGNsdW5reSBhbmQgbWVldCBBdXJhIEFJOiB0aGUgMzYwwrogcHJhY3RpY2UgbWFuYWdlbWVudCBzeXN0ZW0gdGhhdCA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5icmluZ3MgeW91ciBwcmFjdGljZSBpbnRvIHRoZSAyMXN0IGNlbnR1cnk8L3NwYW4+LiBJdCBmcmVlcyB1cCB5b3VyIHRpbWUsIHByZXZlbnRzIGxpdGlnYXRpb24sIHJlZHVjZXMgY29tcGxpYW5jZSBjb3N0cywgYW5kIGluY3JlYXNlcyByZXZlbnVlLjwvaDM+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMTAgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXN0YXJ0LTEgbWQ6Y29sLXNwYW4tNiBtZDpwdC00XCI+IFxuICAgICAgICAgIDxpbWcgc3JjPScvYXNzZXRzL2NvbW11bml0eS9jb20tMS5zdmcnIGNsYXNzTmFtZT1cIm14LWF1dG9cIiBhbHQ9XCJTdG9ja1Jvb20gRGVudGFsIFN0b2NrIE1hbmFnZW1lbnQgU29sdXRpb25cIiAvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvY29tbXVuaXR5L2NvbS0yLnN2ZycgY2xhc3NOYW1lPVwibXgtYXV0b1wiIGFsdD1cIlN0b2NrUm9vbSBEZW50YWwgU3RvY2sgTWFuYWdlbWVudCBTb2x1dGlvblwiIC8+ICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3RhcnQtNyBtZDpjb2wtc3Bhbi02IHB0LTE2XCI+IFxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi01IHRleHQtbGVmdCBzbTp0ZXh0LWNlbnRlciBsZzpoaWRkZW5cIj4gU2hhcGUgdGhlIDxici8+IGZ1dHVyZSB3aXRoIHVzISA8L2gyPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi01IGhpZGRlbiBsZzpibG9ja1wiPiBTaGFwZSB0aGUgZnV0dXJlIHdpdGggdXMhIDwvaDI+XG4gICAgICAgICAgPHA+IEF1cmEgQUkgaXMgYnVpbHQgd2l0aCB0aGUgaGVscCBvZiBhIGdyb3dpbmcgY29tbXVuaXR5IG9mIGRlbnRpc3RzIHdobyB3YW50IHRvIGNoYW5nZSB0aGUgZ2FtZS48L3A+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPHA+QnJ5YW50IERlbnRhbCBoYXMgYmVlbiB3b3JraW5nIGFsb25nc2lkZSB0aGUgZGVudGFsIGNvbW11bml0eSBmb3IgMyB5ZWFycyBsaXN0ZW5pbmcgdG8gdGhlIGNvbmNlcm5zIGFuZCBpc3N1ZXMgb2YgNTAwMCsgVUsgZGVudGlzdHMgdG8gZGF0ZSBhbmQgd2UgaGF2ZSBoZWFyZCB5b3UuIEl0J3MgdGltZSBmb3IgY2hhbmdlLiBJdCdzIHRpbWUgZm9yIHRoZSBuZXh0IHF1YW50dW0gbGVhcCBpbnRvIHRoZSBmdXR1cmUgb2YgZGVudGlzdHJ5LiA8L3A+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPHA+IFdlIHZhbHVlIHlvdXIgb3BpbmlvbiBtb3JlIHRoYW4gYW55dGhpbmcuICBUZWxsIHVzIG1vcmUgYWJvdXQgdGhlIGlzc3VlcyB5b3Ugc3RydWdnbGUgd2l0aCBvciBqdXN0IGNhbGwgdXMgZm9yIGEgY2hhdC4gV2UncmUgaGVyZSBlaXRoZXIgd2F5IGFuZCBub3QgZ29pbmcgYW55d2hlcmUuIDwvcD5cbiAgICAgICBcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm10LTIgYXBwZWFyYW5jZS1ub25lIGJvcmRlciBib3JkZXItYXVyYWJsdWUgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtbWVkaXVtZ3JheSBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgZS1tYWlsLCB3ZSB3aWxsIG5ldmVyIHNwYW0geW91XCIvPlxuICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJtdC0yIGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgYm9yZGVyLWF1cmFibHVlIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LW1lZGl1bWdyYXkgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBpZD1cInByYWN0aWNlTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJPcHRpb25hbGx5LCBuYW1lIHlvdXIgZGVudGFsIHByYWN0aWNlXCIvPlxuICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI0XCIgY2xhc3NOYW1lPVwibXQtMiBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIGJvcmRlci1hdXJhYmx1ZSByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1tZWRpdW1ncmF5IGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgaWQ9XCJwcmFjdGljZU5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiT3B0aW9uYWxseSwgc2hhcmUgeW91ciBzdHJ1Z2dsZSB3aXRoIHlvdXIgYW5jaWVudCBhcHAsIHRlbGxzIHVzIHdoYXQgeW91IGFyZSBpbnRlcmVzdGVkIGluLCBhc2sgdXMgcXVlc3Rpb25zLlwiLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYXVyYWJsdWUgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBtdC0yIHJvdW5kZWQtZnVsbFwiPlxuICBTdWJtaXRcbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIFxuICAgIDwvc2VjdGlvbj5cbiAgICBcbiAgICBcbiAgICBcbiAgICA8c3R5bGUganN4PntgXG4gICAgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDM1cHggOHB4IDM1cHg7XG5mb250LXdlaWdodDogNTAwO1xuZm9udC1zaXplOiAxMXB4O1xubGluZS1oZWlnaHQ6IDE0cHg7XG5sZXR0ZXItc3BhY2luZzogMC4wNmVtO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiAgICBgfTwvc3R5bGU+XG4gICA8Lz4gXG4gIClcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5OyJdfQ== */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\Community.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Community);

/***/ }),

/***/ "./pages/components/Consent.js":
/*!*************************************!*\
  !*** ./pages/components/Consent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\Consent.js";


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

function Consent() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    id: "structure",
    className: "jsx-1443738463" + " " + "top-hero",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-1443738463" + " " + "text-center pt-8 md:pt-16 pb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "Bulletproof consent"), __jsx("h3", {
    className: "jsx-1443738463" + " " + "text-center pb-12 md:pb-48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Patient informed efficiently while ", __jsx("br", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 85
    }
  }), " dentists are protected.")), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex flex-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1443738463" + " " + "flex flex-wrap items-start flex-col-reverse xl:flex-row xl:justify-center xl:items-center pb-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-1443738463" + " " + "pb-3 numbers text-aurablue w-8 float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "1"), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-1 xl:pr-28 flexitem max-w-xl float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-1443738463" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Treatment plans in seconds"), __jsx("p", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "TapNote will help you build the treatment plans for all affected areas. It takes into consideration all factors (other conditions, symptoms severity, affected area) and will ensure you have justified your choices. "))), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-2 flexitem max-w-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/consent1.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-1443738463" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex flex-wrap items-start flex-col-reverse xl:flex-row xl:justify-center xl:items-center pb-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-1443738463" + " " + "pb-3 numbers text-aurablue w-8 float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "2"), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-1 xl:pr-28 flexitem max-w-xl float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-1443738463" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "Patient-friendly ", __jsx("br", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 53
    }
  }), " proposal presentation"), __jsx("p", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Present treatments through side-by-side comparison of benefits, risks, durations, costs, custom additions, and unique patient characteristics."))), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-2 flexitem max-w-3xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/consent2.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-1443738463" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex flex-wrap items-start flex-col-reverse xl:flex-row xl:justify-center xl:items-center pb-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-1443738463" + " " + "pb-3 numbers text-aurablue w-8 float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "3"), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-1 xl:pr-28 flexitem max-w-xl float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-1443738463" + " " + "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Automated patient ", __jsx("br", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 54
    }
  }), " discussion loggings "), __jsx("p", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "TapNote ensures you fully document the discussion to prove that you took all the necessary steps to inform the patient."))), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-2 flexitem max-w-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/consent3.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-1443738463" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "jsx-1443738463",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1443738463" + " " + "flex flex-wrap items-start xl:flex-row pb-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("h2", {
    className: "jsx-1443738463" + " " + "pb-3 numbers text-aurablue w-8 flexitem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "4"), __jsx("h2", {
    className: "jsx-1443738463" + " " + "flexitem max-w-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Tracked consent forms that patients can sign anywhere electronically")), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex flex-wrap items-start flex-col-reverse xl:flex-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-auto flexitem max-w-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/qr.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-1443738463" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "jsx-1443738463" + " " + "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, "Patient securely access via QR code or link in email.")), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-auto flexitem max-w-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/language.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-1443738463" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "jsx-1443738463" + " " + "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 6
    }
  }, "Language is patient-friendly. Reports findings and propositions from appointment. Is fully customisable.")), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-auto flexitem max-w-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/tracker.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-1443738463" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "jsx-1443738463" + " " + "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }, "TapNote tracks how the patient read it so you\u2019re warned in case you might need to review it again with them.")), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-auto flexitem max-w-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/question.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-1443738463" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "jsx-1443738463" + " " + "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 6
    }
  }, "Patients can ask questions on the form and you can have proof the patient was engaged in understanding the treatment.")), __jsx("div", {
    className: "jsx-1443738463" + " " + "flex-auto flexitem max-w-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/signature.svg",
    alt: "TapNotes Dental Stock Management Solution",
    className: "jsx-1443738463" + " " + "mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "jsx-1443738463" + " " + "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }, "Contactless: patient can sign on their device. Documentation is sent to dentist and stored securely."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1443738463",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcQ29uc2VudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSGtCIiwiZmlsZSI6IkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcQ29uc2VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gSGVyb1N1YlNlY3Rpb24oIHsgdGV4dCAsIEltZywgY29scywgdGl0bGUgLCBzdmdXaWR0aCB9ICl7XG4gIHJldHVybihcblxuICAgICA8ZGl2IGNsYXNzTmFtZT17Y29sc30+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNSBjb3JyZWN0ZWRcIj4gICBcbiAgICAgICAgICAgICB7IEltZyAmJiA8aW1nIHNyYz17SW1nfSBjbGFzc05hbWU9XCJjb3JyZWN0ZWRcIiBzdHlsZT17eyBtYXhXaWR0aDpzdmdXaWR0aCB9fSBhbHQ9XCJTdG9ja1Jvb20gRGVudGFsIFN0b2NrIE1hbmFnZW1lbnQgU29sdXRpb25cIiAvPiB9IFxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTNcIj4gIHt0aXRsZX0gIDwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9wPlxuICAgIFxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIENvbnNlbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICBcbiAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9wLWhlcm9cIiBpZD1cInN0cnVjdHVyZVwiPlxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtOCBtZDpwdC0xNiBwYi00XCI+QnVsbGV0cHJvb2YgY29uc2VudDwvaDE+IFxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBiLTEyIG1kOnBiLTQ4XCI+UGF0aWVudCBpbmZvcm1lZCBlZmZpY2llbnRseSB3aGlsZSA8YnIvPiBkZW50aXN0cyBhcmUgcHJvdGVjdGVkLiBcbjwvaDM+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBmbGV4LWNvbC1yZXZlcnNlIHhsOmZsZXgtcm93IHhsOmp1c3RpZnktY2VudGVyIHhsOml0ZW1zLWNlbnRlciBwYi0zMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMyBudW1iZXJzIHRleHQtYXVyYWJsdWUgdy04IGZsb2F0LWxlZnRcIj4xPC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgeGw6cHItMjggZmxleGl0ZW0gbWF4LXcteGwgZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTNcIj5UcmVhdG1lbnQgcGxhbnMgaW4gc2Vjb25kczwvaDI+XG4gICAgICAgICAgICAgICAgPHA+VGFwTm90ZSB3aWxsIGhlbHAgeW91IGJ1aWxkIHRoZSB0cmVhdG1lbnQgcGxhbnMgZm9yIGFsbCBhZmZlY3RlZCBhcmVhcy4gSXQgdGFrZXMgaW50byBjb25zaWRlcmF0aW9uIGFsbCBmYWN0b3JzIChvdGhlciBjb25kaXRpb25zLCBzeW1wdG9tcyBzZXZlcml0eSwgYWZmZWN0ZWQgYXJlYSkgYW5kIHdpbGwgZW5zdXJlIHlvdSBoYXZlIGp1c3RpZmllZCB5b3VyIGNob2ljZXMuIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0yIGZsZXhpdGVtIG1heC13LXhzXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy90YXBub3Rlc3ZnL2NvbnNlbnQxLnN2ZycgY2xhc3NOYW1lPVwibXgtYXV0b1wiIGFsdD1cIlRhcE5vdGVzIERlbnRhbCBTdG9jayBNYW5hZ2VtZW50IFNvbHV0aW9uXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBmbGV4LWNvbC1yZXZlcnNlIHhsOmZsZXgtcm93IHhsOmp1c3RpZnktY2VudGVyIHhsOml0ZW1zLWNlbnRlciBwYi0zMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMyBudW1iZXJzIHRleHQtYXVyYWJsdWUgdy04IGZsb2F0LWxlZnRcIj4yPC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgeGw6cHItMjggZmxleGl0ZW0gbWF4LXcteGwgZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTNcIj5QYXRpZW50LWZyaWVuZGx5IDxici8+IHByb3Bvc2FsIHByZXNlbnRhdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgPHA+UHJlc2VudCB0cmVhdG1lbnRzIHRocm91Z2ggc2lkZS1ieS1zaWRlIGNvbXBhcmlzb24gb2YgYmVuZWZpdHMsIHJpc2tzLCBkdXJhdGlvbnMsIGNvc3RzLCBjdXN0b20gYWRkaXRpb25zLCBhbmQgdW5pcXVlIHBhdGllbnQgY2hhcmFjdGVyaXN0aWNzLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0yIGZsZXhpdGVtIG1heC13LTN4bFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9Jy9hc3NldHMvdGFwbm90ZXN2Zy9jb25zZW50Mi5zdmcnIGNsYXNzTmFtZT1cIm14LWF1dG9cIiBhbHQ9XCJUYXBOb3RlcyBEZW50YWwgU3RvY2sgTWFuYWdlbWVudCBTb2x1dGlvblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQgZmxleC1jb2wtcmV2ZXJzZSB4bDpmbGV4LXJvdyB4bDpqdXN0aWZ5LWNlbnRlciB4bDppdGVtcy1jZW50ZXIgcGItMzJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTMgbnVtYmVycyB0ZXh0LWF1cmFibHVlIHctOCBmbG9hdC1sZWZ0XCI+MzwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHhsOnByLTI4IGZsZXhpdGVtIG1heC13LXhsIGZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0zXCI+QXV0b21hdGVkIHBhdGllbnQgPGJyLz4gZGlzY3Vzc2lvbiBsb2dnaW5ncyA8L2gyPlxuICAgICAgICAgICAgICAgIDxwPlRhcE5vdGUgZW5zdXJlcyB5b3UgZnVsbHkgZG9jdW1lbnQgdGhlIGRpc2N1c3Npb24gdG8gcHJvdmUgdGhhdCB5b3UgdG9vayBhbGwgdGhlIG5lY2Vzc2FyeSBzdGVwcyB0byBpbmZvcm0gdGhlIHBhdGllbnQuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTIgZmxleGl0ZW0gbWF4LXctMnhsXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz0nL2Fzc2V0cy90YXBub3Rlc3ZnL2NvbnNlbnQzLnN2ZycgY2xhc3NOYW1lPVwibXgtYXV0b1wiIGFsdD1cIlRhcE5vdGVzIERlbnRhbCBTdG9jayBNYW5hZ2VtZW50IFNvbHV0aW9uXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0YXJ0IHhsOmZsZXgtcm93IHBiLTIwXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMyBudW1iZXJzIHRleHQtYXVyYWJsdWUgdy04IGZsZXhpdGVtXCI+NDwvaDI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmxleGl0ZW0gbWF4LXctbGdcIj5UcmFja2VkIGNvbnNlbnQgZm9ybXMgdGhhdCBwYXRpZW50cyBjYW4gc2lnbiBhbnl3aGVyZSBlbGVjdHJvbmljYWxseTwvaDI+XG5cdFx0XHRcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQgZmxleC1jb2wtcmV2ZXJzZSB4bDpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG8gZmxleGl0ZW0gbWF4LXcteHNcIj5cbiAgICAgICAgICAgXHRcdCA8aW1nIHNyYz0nL2Fzc2V0cy90YXBub3Rlc3ZnL3FyLnN2ZycgY2xhc3NOYW1lPVwibXgtYXV0b1wiIGFsdD1cIlRhcE5vdGVzIERlbnRhbCBTdG9jayBNYW5hZ2VtZW50IFNvbHV0aW9uXCIvPlxuXHRcdFx0XHQgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5QYXRpZW50IHNlY3VyZWx5IGFjY2VzcyB2aWEgUVIgY29kZSBvciBsaW5rIGluIGVtYWlsLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBmbGV4aXRlbSBtYXgtdy14c1wiPlxuICAgICAgICAgICBcdFx0IDxpbWcgc3JjPScvYXNzZXRzL3RhcG5vdGVzdmcvbGFuZ3VhZ2Uuc3ZnJyBjbGFzc05hbWU9XCJteC1hdXRvXCIgYWx0PVwiVGFwTm90ZXMgRGVudGFsIFN0b2NrIE1hbmFnZW1lbnQgU29sdXRpb25cIi8+XG5cdFx0XHRcdCA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkxhbmd1YWdlIGlzIHBhdGllbnQtZnJpZW5kbHkuIFJlcG9ydHMgZmluZGluZ3MgYW5kIHByb3Bvc2l0aW9ucyBmcm9tIGFwcG9pbnRtZW50LiBJcyBmdWxseSBjdXN0b21pc2FibGUuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC1hdXRvIGZsZXhpdGVtIG1heC13LXhzXCI+XG4gICAgICAgICAgIFx0XHQgPGltZyBzcmM9Jy9hc3NldHMvdGFwbm90ZXN2Zy90cmFja2VyLnN2ZycgY2xhc3NOYW1lPVwibXgtYXV0b1wiIGFsdD1cIlRhcE5vdGVzIERlbnRhbCBTdG9jayBNYW5hZ2VtZW50IFNvbHV0aW9uXCIvPlxuXHRcdFx0XHQgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5UYXBOb3RlIHRyYWNrcyBob3cgdGhlIHBhdGllbnQgcmVhZCBpdCBzbyB5b3XigJlyZSB3YXJuZWQgaW4gY2FzZSB5b3UgbWlnaHQgbmVlZCB0byByZXZpZXcgaXQgYWdhaW4gd2l0aCB0aGVtLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBmbGV4aXRlbSBtYXgtdy14c1wiPlxuICAgICAgICAgICBcdFx0IDxpbWcgc3JjPScvYXNzZXRzL3RhcG5vdGVzdmcvcXVlc3Rpb24uc3ZnJyBjbGFzc05hbWU9XCJteC1hdXRvXCIgYWx0PVwiVGFwTm90ZXMgRGVudGFsIFN0b2NrIE1hbmFnZW1lbnQgU29sdXRpb25cIi8+XG5cdFx0XHRcdCA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlBhdGllbnRzIGNhbiBhc2sgcXVlc3Rpb25zIG9uIHRoZSBmb3JtIGFuZCB5b3UgY2FuIGhhdmUgcHJvb2YgdGhlIHBhdGllbnQgd2FzIGVuZ2FnZWQgaW4gdW5kZXJzdGFuZGluZyB0aGUgdHJlYXRtZW50LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBmbGV4aXRlbSBtYXgtdy14c1wiPlxuICAgICAgICAgICBcdFx0IDxpbWcgc3JjPScvYXNzZXRzL3RhcG5vdGVzdmcvc2lnbmF0dXJlLnN2ZycgY2xhc3NOYW1lPVwibXgtYXV0b1wiIGFsdD1cIlRhcE5vdGVzIERlbnRhbCBTdG9jayBNYW5hZ2VtZW50IFNvbHV0aW9uXCIvPlxuXHRcdFx0XHQgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Db250YWN0bGVzczogcGF0aWVudCBjYW4gc2lnbiBvbiB0aGVpciBkZXZpY2UuIERvY3VtZW50YXRpb24gaXMgc2VudCB0byBkZW50aXN0IGFuZCBzdG9yZWQgc2VjdXJlbHkuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICBcbiAgICAgICBgfTwvc3R5bGU+XG4gICAgICBcbiAgICAgPC9zZWN0aW9uPlxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICBcbiAgIDwvPiBcbiAgKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDb25zZW50O1xuXG4iXX0= */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\Consent.js */")));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Consent);

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
    className: "w-4/5 h-64 mx-auto shadow-card",
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

/***/ "./pages/components/Referral.js":
/*!**************************************!*\
  !*** ./pages/components/Referral.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\Referral.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Standalone() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-3697373088" + " " + "mt-4 md:mt-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "jsx-3697373088" + " " + "bg-lightestgray grid gap-5 grid-cols-1 pb-12 md:gap-10 md:grid-cols-12 md:pb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3697373088" + " " + "col-start-4 col-end-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/referral.svg",
    alt: "tapnotes-module",
    className: "jsx-3697373088",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 49
    }
  })), __jsx("div", {
    className: "jsx-3697373088" + " " + "col-start-6 col-end-10 column max-w-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }, __jsx("h2", {
    className: "jsx-3697373088",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }, "Referral letters"), __jsx("h3", {
    className: "jsx-3697373088",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }, "TapNote helps generates referral letters much easier. It understands what information the specialist requires.")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3697373088",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcUmVmZXJyYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JZIiwiZmlsZSI6IkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcUmVmZXJyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTdGFuZGFsb25lKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTQgbWQ6bXQtMTJcIj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0ZXN0Z3JheSBncmlkIGdhcC01IGdyaWQtY29scy0xIHBiLTEyIG1kOmdhcC0xMCBtZDpncmlkLWNvbHMtMTIgbWQ6cGItMTZcIj5cclxuICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC00IGNvbC1lbmQtNlwiPjxpbWcgc3JjPScvYXNzZXRzL3RhcG5vdGVzdmcvcmVmZXJyYWwuc3ZnJyBhbHQ9XCJ0YXBub3Rlcy1tb2R1bGVcIiAvPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC02IGNvbC1lbmQtMTAgY29sdW1uIG1heC13LW1kXCI+XHJcbiAgICAgICAgICAgPGgyPlJlZmVycmFsIGxldHRlcnM8L2gyPlxyXG4gICAgICAgICAgIDxoMz5UYXBOb3RlIGhlbHBzIGdlbmVyYXRlcyByZWZlcnJhbCBsZXR0ZXJzIG11Y2ggZWFzaWVyLiBJdCB1bmRlcnN0YW5kcyB3aGF0IGluZm9ybWF0aW9uIHRoZSBzcGVjaWFsaXN0IHJlcXVpcmVzLjwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+ICAgIFxyXG48L3NlY3Rpb24+XHJcbiAgIFxyXG5cclxuPHN0eWxlIGpzeD57YFxyXG5cclxuICAgIGB9PC9zdHlsZT5cclxuXHJcblxyXG4gICAgPC8+IFxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YW5kYWxvbmU7Il19 */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\Referral.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Standalone);

/***/ }),

/***/ "./pages/components/Standalone.js":
/*!****************************************!*\
  !*** ./pages/components/Standalone.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
    className: "jsx-3142847984" + " " + "col-start-4 col-end-7 max-w-md",
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
    className: "jsx-3142847984" + " " + "col-start-7 col-end-11 column max-w-md",
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
    className: "jsx-3142847984" + " " + "w-56 float-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Join the Aura AI community and shape the future with us!"), __jsx("button", {
    className: "jsx-3142847984" + " " + "align-middle bg-aurablue hover:bg-blue-700 text-white rounded-full float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Sign Up"), __jsx("div", {
    className: "jsx-3142847984" + " " + "clear-both ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3142847984",
    __self: this
  }, "button.jsx-3142847984{padding:8px 35px 8px 35px;font-weight:500;font-size:11px;line-height:14px;-webkit-letter-spacing:0.06em;-moz-letter-spacing:0.06em;-ms-letter-spacing:0.06em;letter-spacing:0.06em;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcU3RhbmRhbG9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQlksQUFHNkIsMEJBQ1osZ0JBQ0QsZUFDRSxpQkFDSyx5R0FDRyx5QkFDekIiLCJmaWxlIjoiRTpcXERlc2t0b3BcXHRhcG5vdGVzLWxhbmRpbmdcXHBhZ2VzXFxjb21wb25lbnRzXFxTdGFuZGFsb25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU3RhbmRhbG9uZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcblxyXG48c2VjdGlvbiBjbGFzc05hbWU9XCJtdC00IG1kOm10LTEyXCI+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1saWdodGVzdGdyYXkgZ3JpZCBnYXAtNSBncmlkLWNvbHMtMSBwYi0xMiBtZDpnYXAtMTAgbWQ6Z3JpZC1jb2xzLTEyIG1kOnBiLTE2XCI+XHJcbiAgICAgICBcclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3RhcnQtNCBjb2wtZW5kLTcgbWF4LXctbWRcIj48aW1nIHNyYz0nL2Fzc2V0cy90YXBub3Rlc3ZnL3N0YW5kYWxvbmUuc3ZnJyBhbHQ9XCJ0YXBub3Rlcy1tb2R1bGVcIiAvPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC03IGNvbC1lbmQtMTEgY29sdW1uIG1heC13LW1kXCI+XHJcbiAgICAgICAgICAgPGgzPlBhcnQgb2YgYSBncmVhdGVyLCBtb3JlIGNvbXBsZXggcHJhY3RpY2UgbWFuYWdlbWVudCBzb2Z0d2FyZSAoQXVyYSBBSSksIFRhcE5vdGUgd2lsbCBiZSByZWxlYXNlZCBmaXJzdCBhcyBhIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPnN0YW5kYWxvbmUgYXBwPC9zcGFuPi48L2gzPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWNhcmQgcm91bmRlZC1sZyBweS00IHB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctNTYgZmxvYXQtbGVmdFwiPkpvaW4gdGhlIEF1cmEgQUkgY29tbXVuaXR5IGFuZCBzaGFwZSB0aGUgZnV0dXJlIHdpdGggdXMhPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgYmctYXVyYWJsdWUgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyLWJvdGggXCI+PC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+ICAgIFxyXG48L3NlY3Rpb24+XHJcbiAgIFxyXG5cclxuPHN0eWxlIGpzeD57YFxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDhweCAzNXB4IDhweCAzNXB4O1xyXG5mb250LXdlaWdodDogNTAwO1xyXG5mb250LXNpemU6IDExcHg7XHJcbmxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5sZXR0ZXItc3BhY2luZzogMC4wNmVtO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG5cclxuICAgIDwvPiBcclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFsb25lOyJdfQ== */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\Standalone.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Standalone);

/***/ }),

/***/ "./pages/components/Standardized.js":
/*!******************************************!*\
  !*** ./pages/components/Standardized.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\components\\Standardized.js";


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
    className: "jsx-3142847984" + " " + "col-start-3 col-end-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: "/assets/tapnotesvg/standardized.svg",
    alt: "tapnotes-module",
    className: "jsx-3142847984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 49
    }
  })), __jsx("div", {
    className: "jsx-3142847984" + " " + "col-start-7 col-end-11 column max-w-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }, __jsx("h2", {
    className: "jsx-3142847984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }, "Constantly learning.", __jsx("br", {
    className: "jsx-3142847984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 36
    }
  }), " Ultimate standardisation."), __jsx("h3", {
    className: "jsx-3142847984",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }, "TapNote learns from you and every other dentist\u2019s actions in order to adapt. Dentists across the globe share knowledge of utmost quality to help refine TapNote\u2019s suggestions and templates, thus reducing legal inaccuracy to a minimum. Finally: standardised clinical documentation. We all can\u2019t get it wrong. ")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3142847984",
    __self: this
  }, "button.jsx-3142847984{padding:8px 35px 8px 35px;font-weight:500;font-size:11px;line-height:14px;-webkit-letter-spacing:0.06em;-moz-letter-spacing:0.06em;-ms-letter-spacing:0.06em;letter-spacing:0.06em;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcU3RhbmRhcmRpemVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCWSxBQUc2QiwwQkFDWixnQkFDRCxlQUNFLGlCQUNLLHlHQUNHLHlCQUN6QiIsImZpbGUiOiJFOlxcRGVza3RvcFxcdGFwbm90ZXMtbGFuZGluZ1xccGFnZXNcXGNvbXBvbmVudHNcXFN0YW5kYXJkaXplZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFN0YW5kYWxvbmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG5cclxuPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtNCBtZDptdC0xMlwiPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHRlc3RncmF5IGdyaWQgZ2FwLTUgZ3JpZC1jb2xzLTEgcGItMTIgbWQ6Z2FwLTEwIG1kOmdyaWQtY29scy0xMiBtZDpwYi0xNlwiPlxyXG4gICAgICAgXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXN0YXJ0LTMgY29sLWVuZC03XCI+PGltZyBzcmM9Jy9hc3NldHMvdGFwbm90ZXN2Zy9zdGFuZGFyZGl6ZWQuc3ZnJyBhbHQ9XCJ0YXBub3Rlcy1tb2R1bGVcIiAvPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC03IGNvbC1lbmQtMTEgY29sdW1uIG1heC13LW1kXCI+XHJcbiAgICAgICAgICAgPGgyPkNvbnN0YW50bHkgbGVhcm5pbmcuPGJyLz4gVWx0aW1hdGUgc3RhbmRhcmRpc2F0aW9uLjwvaDI+XHJcbiAgICAgICAgICAgPGgzPlRhcE5vdGUgbGVhcm5zIGZyb20geW91IGFuZCBldmVyeSBvdGhlciBkZW50aXN04oCZcyBhY3Rpb25zIGluIG9yZGVyIHRvIGFkYXB0LiBEZW50aXN0cyBhY3Jvc3MgdGhlIGdsb2JlIHNoYXJlIGtub3dsZWRnZSBvZiB1dG1vc3QgcXVhbGl0eSB0byBoZWxwIHJlZmluZSBUYXBOb3Rl4oCZcyBzdWdnZXN0aW9ucyBhbmQgdGVtcGxhdGVzLCB0aHVzIHJlZHVjaW5nIGxlZ2FsIGluYWNjdXJhY3kgdG8gYSBtaW5pbXVtLiBGaW5hbGx5OiBzdGFuZGFyZGlzZWQgY2xpbmljYWwgZG9jdW1lbnRhdGlvbi4gV2UgYWxsIGNhbuKAmXQgZ2V0IGl0IHdyb25nLiA8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgIDwvZGl2PiAgICBcclxuPC9zZWN0aW9uPlxyXG4gICBcclxuXHJcbjxzdHlsZSBqc3g+e2BcclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiA4cHggMzVweCA4cHggMzVweDtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxuZm9udC1zaXplOiAxMXB4O1xyXG5saW5lLWhlaWdodDogMTRweDtcclxubGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuXHJcbiAgICA8Lz4gXHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhbG9uZTsiXX0= */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\Standardized.js */"));
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
    className: "pb-5 mt-20",
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
    id: "tapnote",
    className: "jsx-814616323" + " " + "pb-12 md:pb-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: "jsx-814616323" + " " + " text-center pt-16 md:pt-20 pb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "Safer and a lot more flexible"), __jsx("h3", {
    className: "jsx-814616323" + " " + "text-center pb-12 section-subhead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Streamlines the monotonous so you ", __jsx("br", {
    className: "jsx-814616323",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 91
    }
  }), " can focus on your practice"), __jsx("div", {
    className: "jsx-814616323" + " " + "grid gap-5 grid-cols-1 md:gap-10 md:grid-cols-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(HeroSubSection, {
    text: "UK Dentistry is one of the most highly regulated and litigated professional areas in the world. With constantly evolving requirements, it is challenging to stay ahead of the curve. Now you can leave the hard work to TapNote and concentrate on your patients and their care instead of opportunistic lawyers.",
    Img: "/assets/tapnotesvg/tapnotes1.svg",
    cols: "col-span-5 column",
    title: "Real-time Regulatory Improvements",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(HeroSubSection, {
    text: "TapNote is powered by a neural network of the majority of known signs, symptoms, diagnoses, treatments and post-operative complications. This is overlaid on the standards set by various clinical bodies and updated in real time. TapNote minimises free text entry and replaces it with a simple Tap for fully contemporaenous, compliant and accurate records.",
    Img: "/assets/tapnotesvg/tapnotes2.svg",
    cols: "col-span-5 column",
    title: "Tap-based experience: Reads your mind!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  }), __jsx(HeroSubSection, {
    text: "It\u2019s incredibly easy and safe to use. Officially the nurse can help complete the notes with increased efficiency as you go on with providing patient care. TapNote filters options based on findings, understands relevance of each option per affected location, and takes into account the patient conditions. The software knows how you establish diagnoses and what your plans are, so it can help you complete documentation after the appointment without forgetting anything.",
    Img: "/assets/tapnotesvg/flexible.svg",
    cols: "col-span-5 column",
    title: "Flexible to your way",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 10
    }
  }), __jsx(HeroSubSection, {
    text: "Due to TapNote's AI system that constantly learns and adapts, you can monitor and validate the diagnosis and treatments of all your associates within seconds to identify high risk issues and promote good record keeping. In fact, this can be completely automated.",
    Img: "/assets/tapnotesvg/liability-updated.svg",
    cols: "col-span-5 column",
    title: "Vicarious Liability Protection",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 10
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "814616323",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcVGFwTm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RHVCIiwiZmlsZSI6IkU6XFxEZXNrdG9wXFx0YXBub3Rlcy1sYW5kaW5nXFxwYWdlc1xcY29tcG9uZW50c1xcVGFwTm90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gSGVyb1N1YlNlY3Rpb24oeyB0ZXh0ICx0aXRsZSwgSW1nLGNvbHMsIHN2Z1dpZHRoIH0pe1xuICByZXR1cm4oXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtjb2xzfT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi01IG10LTIwXCI+ICAgXG4gICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjb3JyZWN0ZWRcIiBzcmM9e0ltZ30gYWx0PVwiU3RvY2tSb29tIERlbnRhbCBTdG9jayBNYW5hZ2VtZW50IFNvbHV0aW9uXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0zXCI+ICB7dGl0bGV9ICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cbiAgXG5cbmZ1bmN0aW9uIFRhcE5vdGUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICBcbiAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGItMTIgbWQ6cGItMjRcIiBpZD1cInRhcG5vdGVcIj5cbiAgICBcbiAgICAgIDxoMSBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgcHQtMTYgbWQ6cHQtMjAgcGItMlwiPlNhZmVyIGFuZCBhIGxvdCBtb3JlIGZsZXhpYmxlPC9oMT4gXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGItMTIgc2VjdGlvbi1zdWJoZWFkXCI+U3RyZWFtbGluZXMgdGhlIG1vbm90b25vdXMgc28geW91IDxici8+IGNhbiBmb2N1cyBvbiB5b3VyIHByYWN0aWNlPC9oMz5cbiAgICBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC01IGdyaWQtY29scy0xIG1kOmdhcC0xMCBtZDpncmlkLWNvbHMtMTBcIj5cbiAgICAgICBcbiAgICAgIDxIZXJvU3ViU2VjdGlvbiB0ZXh0PVwiVUsgRGVudGlzdHJ5IGlzIG9uZSBvZiB0aGUgbW9zdCBoaWdobHkgcmVndWxhdGVkIGFuZCBsaXRpZ2F0ZWQgcHJvZmVzc2lvbmFsIGFyZWFzIGluIHRoZSB3b3JsZC4gV2l0aCBjb25zdGFudGx5IGV2b2x2aW5nIHJlcXVpcmVtZW50cywgaXQgaXMgY2hhbGxlbmdpbmcgdG8gc3RheSBhaGVhZCBvZiB0aGUgY3VydmUuIE5vdyB5b3UgY2FuIGxlYXZlIHRoZSBoYXJkIHdvcmsgdG8gVGFwTm90ZSBhbmQgY29uY2VudHJhdGUgb24geW91ciBwYXRpZW50cyBhbmQgdGhlaXIgY2FyZSBpbnN0ZWFkIG9mIG9wcG9ydHVuaXN0aWMgbGF3eWVycy5cIlxuICAgICAgICAgICAgICBJbWc9Jy9hc3NldHMvdGFwbm90ZXN2Zy90YXBub3RlczEuc3ZnJ1xuICAgICAgICAgICAgICBjb2xzPVwiY29sLXNwYW4tNSBjb2x1bW5cIlxuICAgICAgICAgICAgICB0aXRsZT1cIlJlYWwtdGltZSBSZWd1bGF0b3J5IEltcHJvdmVtZW50c1wiXG4gICAgICAvPlxuICAgICAgICBcbiAgICAgICAgIDxIZXJvU3ViU2VjdGlvbiB0ZXh0PVwiVGFwTm90ZSBpcyBwb3dlcmVkIGJ5IGEgbmV1cmFsIG5ldHdvcmsgb2YgdGhlIG1ham9yaXR5IG9mIGtub3duIHNpZ25zLCBzeW1wdG9tcywgZGlhZ25vc2VzLCB0cmVhdG1lbnRzIGFuZCBwb3N0LW9wZXJhdGl2ZSBjb21wbGljYXRpb25zLiBUaGlzIGlzIG92ZXJsYWlkIG9uIHRoZSBzdGFuZGFyZHMgc2V0IGJ5IHZhcmlvdXMgY2xpbmljYWwgYm9kaWVzIGFuZCB1cGRhdGVkIGluIHJlYWwgdGltZS4gVGFwTm90ZSBtaW5pbWlzZXMgZnJlZSB0ZXh0IGVudHJ5IGFuZCByZXBsYWNlcyBpdCB3aXRoIGEgc2ltcGxlIFRhcCBmb3IgZnVsbHkgY29udGVtcG9yYWVub3VzLCBjb21wbGlhbnQgYW5kIGFjY3VyYXRlIHJlY29yZHMuXCJcbiAgICAgICAgICAgICAgSW1nPScvYXNzZXRzL3RhcG5vdGVzdmcvdGFwbm90ZXMyLnN2ZydcbiAgICAgICAgICAgICAgY29scz1cImNvbC1zcGFuLTUgY29sdW1uXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJUYXAtYmFzZWQgZXhwZXJpZW5jZTogUmVhZHMgeW91ciBtaW5kIVwiXG4gICAgICAvPlxuXG4gICAgICAgICA8SGVyb1N1YlNlY3Rpb24gdGV4dD1cIkl04oCZcyBpbmNyZWRpYmx5IGVhc3kgYW5kIHNhZmUgdG8gdXNlLiBPZmZpY2lhbGx5IHRoZSBudXJzZSBjYW4gaGVscCBjb21wbGV0ZSB0aGUgbm90ZXMgd2l0aCBpbmNyZWFzZWQgZWZmaWNpZW5jeSBhcyB5b3UgZ28gb24gd2l0aCBwcm92aWRpbmcgcGF0aWVudCBjYXJlLiBUYXBOb3RlIGZpbHRlcnMgb3B0aW9ucyBiYXNlZCBvbiBmaW5kaW5ncywgdW5kZXJzdGFuZHMgcmVsZXZhbmNlIG9mIGVhY2ggb3B0aW9uIHBlciBhZmZlY3RlZCBsb2NhdGlvbiwgYW5kIHRha2VzIGludG8gYWNjb3VudCB0aGUgcGF0aWVudCBjb25kaXRpb25zLiBUaGUgc29mdHdhcmUga25vd3MgaG93IHlvdSBlc3RhYmxpc2ggZGlhZ25vc2VzIGFuZCB3aGF0IHlvdXIgcGxhbnMgYXJlLCBzbyBpdCBjYW4gaGVscCB5b3UgY29tcGxldGUgZG9jdW1lbnRhdGlvbiBhZnRlciB0aGUgYXBwb2ludG1lbnQgd2l0aG91dCBmb3JnZXR0aW5nIGFueXRoaW5nLlwiXG4gICAgICAgICAgICAgIEltZz0nL2Fzc2V0cy90YXBub3Rlc3ZnL2ZsZXhpYmxlLnN2ZydcbiAgICAgICAgICAgICAgY29scz1cImNvbC1zcGFuLTUgY29sdW1uXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJGbGV4aWJsZSB0byB5b3VyIHdheVwiXG4gICAgICAvPlxuXG4gICAgICAgICA8SGVyb1N1YlNlY3Rpb24gdGV4dD1cIkR1ZSB0byBUYXBOb3RlJ3MgQUkgc3lzdGVtIHRoYXQgY29uc3RhbnRseSBsZWFybnMgYW5kIGFkYXB0cywgeW91IGNhbiBtb25pdG9yIGFuZCB2YWxpZGF0ZSB0aGUgZGlhZ25vc2lzIGFuZCB0cmVhdG1lbnRzIG9mIGFsbCB5b3VyIGFzc29jaWF0ZXMgd2l0aGluIHNlY29uZHMgdG8gaWRlbnRpZnkgaGlnaCByaXNrIGlzc3VlcyBhbmQgcHJvbW90ZSBnb29kIHJlY29yZCBrZWVwaW5nLiBJbiBmYWN0LCB0aGlzIGNhbiBiZSBjb21wbGV0ZWx5IGF1dG9tYXRlZC5cIlxuICAgICAgICAgICAgICBJbWc9Jy9hc3NldHMvdGFwbm90ZXN2Zy9saWFiaWxpdHktdXBkYXRlZC5zdmcnXG4gICAgICAgICAgICAgIGNvbHM9XCJjb2wtc3Bhbi01IGNvbHVtblwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiVmljYXJpb3VzIExpYWJpbGl0eSBQcm90ZWN0aW9uXCJcbiAgICAgIC8+XG4gICAgXG4gICAgICBcbiAgIFxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L3NlY3Rpb24+XG4gICAgXG4gICAgXG4gICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgIFxuXG4gICAgICAgXG4gICAgICAgYH08L3N0eWxlPlxuXG4gICAgXG4gICAgXG4gICBcbiAgIDwvPiBcbiAgKVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUYXBOb3RlO1xuXG4iXX0= */\n/*@ sourceURL=E:\\\\Desktop\\\\tapnotes-landing\\\\pages\\\\components\\\\TapNote.js */"));
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
/* harmony import */ var _components_Consent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Consent */ "./pages/components/Consent.js");
/* harmony import */ var _components_Community__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Community */ "./pages/components/Community.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Standalone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Standalone */ "./pages/components/Standalone.js");
/* harmony import */ var _components_Standardized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Standardized */ "./pages/components/Standardized.js");
/* harmony import */ var _components_Referral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Referral */ "./pages/components/Referral.js");
var _jsxFileName = "E:\\Desktop\\tapnotes-landing\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function HomePage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }), __jsx("section", {
    className: "bg-grey pt-12 pb-12 md:pb-16 whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }
  }, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }))), __jsx("section", {
    className: "bg-grey pt-12 pb-12 md:pb-16 whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, __jsx(_components_Standalone__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, __jsx(_components_TapNote__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }))), __jsx("section", {
    className: "bg-grey pt-12 pb-12 md:pb-16 whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_components_Standardized__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  })), __jsx("section", {
    className: "bg-grey pt-12 pb-12 md:pt-16 md:pb-16 whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }, __jsx(_components_Consent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }))), __jsx("section", {
    className: " pt-12 pb-12 md:pt-16 md:pb-16  whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, __jsx(_components_Referral__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  })), __jsx("section", {
    className: "bg-grey  pt-12 pb-12 md:pt-16 md:pb-16  whitespace-pre-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(_components_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_components_Community__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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