/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var homeSlider = __webpack_require__(/*! ./home/homeSlider.js */ \"./src/js/home/homeSlider.js\");\n// var headerEntrance = require('./home/headerEntrance.js')\nvar revealText = __webpack_require__(/*! ./home/revealText.js */ \"./src/js/home/revealText.js\");\nvar stickyMenu = __webpack_require__(/*! ./home/stickyMenu.js */ \"./src/js/home/stickyMenu.js\");\n// var menuResponsive = require('./global/menuResponsive.js')\n\nhomeSlider();\n// menuResponsive()\nrevealText();\nstickyMenu();\n// headerEntrance()\n\n//# sourceURL=webpack://majie-theme-2024/./src/js/app.js?");

/***/ }),

/***/ "./src/js/home/homeSlider.js":
/*!***********************************!*\
  !*** ./src/js/home/homeSlider.js ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = function () {\n  const pictures = document.querySelectorAll('.header .picture');\n  pictures[0].classList.add('visible');\n  function switch_picture() {\n    let visible = document.querySelector('.picture.visible');\n    let next = visible.nextElementSibling;\n    if (next) {\n      next.classList.toggle('visible');\n    } else {\n      let first = document.querySelector('.header .picture');\n      first.classList.toggle('visible');\n    }\n    visible.classList.toggle('visible');\n  }\n  setInterval(function () {\n    switch_picture();\n  }, 4000);\n};\n\n//# sourceURL=webpack://majie-theme-2024/./src/js/home/homeSlider.js?");

/***/ }),

/***/ "./src/js/home/revealText.js":
/*!***********************************!*\
  !*** ./src/js/home/revealText.js ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = function () {\n  // texts = document.querySelectorAll('p');\n\n  function reveal() {\n    var texts = document.querySelectorAll(\".landing .reveal\");\n    for (var i = 0; i < texts.length; i++) {\n      var windowHeight = window.innerHeight;\n      var elementTop = texts[i].getBoundingClientRect().top;\n      var elementVisible = 50;\n      if (elementTop < windowHeight - elementVisible) {\n        texts[i].classList.add(\"is-visible\");\n      } else {\n        texts[i].classList.remove(\"is-visible\");\n      }\n    }\n  }\n  window.addEventListener(\"scroll\", reveal);\n\n  // To check the scroll position on page load\n  reveal();\n};\n\n//# sourceURL=webpack://majie-theme-2024/./src/js/home/revealText.js?");

/***/ }),

/***/ "./src/js/home/stickyMenu.js":
/*!***********************************!*\
  !*** ./src/js/home/stickyMenu.js ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = function () {\n  const nav = document.querySelector('.landing_menu');\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    //  little hack to detect if the user is on ie 11\n    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;\n    // get all the links\n    const menu_entries = nav.querySelectorAll('a');\n\n    // add ctas button\n    const ctas = document.querySelectorAll('.cta a');\n    let links = [];\n    links.push.apply(links, menu_entries);\n    links.push.apply(links, ctas);\n\n    // loop over all the links\n    links.forEach(function (link) {\n      // listen for a click\n      link.addEventListener('click', function (e) {\n        e.preventDefault();\n        // toggle highlight on and off when we click a link\n        links.forEach(link => {\n          if (link.classList.contains('highlighted')) {\n            link.classList.remove('highlighted');\n          }\n        });\n        link.classList.add('highlighted');\n        // get the element where to scroll\n        let ref = link.href.split('#');\n        ref = '#' + ref[1];\n        ref = ref.replace('_section', '');\n        target = document.querySelector(ref);\n        // ie 11 does not support smooth scroll, so we will simply scroll\n        if (isIE11) {\n          window.scrollTo(0, target.offsetTop);\n        } else {\n          window.scroll({\n            behavior: 'smooth',\n            left: 0,\n            // top gets the distance from the top of the page of our target element\n            // top: 1400\n            top: target.offsetTop - 82\n          });\n        }\n      });\n    });\n  });\n};\n\n//# sourceURL=webpack://majie-theme-2024/./src/js/home/stickyMenu.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://majie-theme-2024/./src/scss/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/app.scss");
/******/ 	
/******/ })()
;