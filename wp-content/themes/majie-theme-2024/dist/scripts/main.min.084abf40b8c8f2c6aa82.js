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

eval("var homeSlider = __webpack_require__(/*! ./home/homeSlider.js */ \"./src/js/home/homeSlider.js\");\nvar menuResponsive = __webpack_require__(/*! ./global/menuResponsive.js */ \"./src/js/global/menuResponsive.js\");\nhomeSlider();\nmenuResponsive();\n\n//# sourceURL=webpack://majie-theme-2024/./src/js/app.js?");

/***/ }),

/***/ "./src/js/global/menuResponsive.js":
/*!*****************************************!*\
  !*** ./src/js/global/menuResponsive.js ***!
  \*****************************************/
/***/ ((module) => {

eval("module.exports = function () {\n  const burger = document.querySelector('.burger');\n  const menu = document.querySelector('.small__menu__content');\n  const back = document.querySelector('.back');\n  burger.addEventListener('click', function () {\n    menu.classList.remove('is-hidden');\n    burger.classList.add('is-hidden');\n  });\n  back.addEventListener('click', function () {\n    menu.classList.add('is-hidden');\n    burger.classList.remove('is-hidden');\n  });\n};\n\n//# sourceURL=webpack://majie-theme-2024/./src/js/global/menuResponsive.js?");

/***/ }),

/***/ "./src/js/home/homeSlider.js":
/*!***********************************!*\
  !*** ./src/js/home/homeSlider.js ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = function () {\n  const pictures = document.querySelectorAll('.header .picture');\n  function switch_picture() {\n    let visible = document.querySelector('.picture.visible');\n    let next = visible.nextElementSibling;\n    if (next.classList.contains('picture')) {\n      next.classList.toggle('visible');\n    } else {\n      let first = document.querySelector('.header .picture');\n      first.classList.toggle('visible');\n    }\n    visible.classList.toggle('visible');\n  }\n  setInterval(function () {\n    switch_picture();\n  }, 1000);\n};\n\n//# sourceURL=webpack://majie-theme-2024/./src/js/home/homeSlider.js?");

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