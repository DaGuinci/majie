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
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /var/www/private/majie/wp-content/themes/majie-theme-2024/src/js/home/homeSlider.js: Unexpected token, expected \\\"(\\\" (8:7)\\n\\n\\u001b[0m \\u001b[90m  6 |\\u001b[39m     \\u001b[36mlet\\u001b[39m visible \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mquerySelector(\\u001b[32m'.picture.visible'\\u001b[39m)\\n \\u001b[90m  7 |\\u001b[39m     \\u001b[36mlet\\u001b[39m next \\u001b[33m=\\u001b[39m visible\\u001b[33m.\\u001b[39mnextElementSibling\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  8 |\\u001b[39m     \\u001b[36mif\\u001b[39m next {\\n \\u001b[90m    |\\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m  9 |\\u001b[39m       \\u001b[36mif\\u001b[39m (next\\u001b[33m.\\u001b[39mclassList\\u001b[33m.\\u001b[39mcontains(\\u001b[32m'picture'\\u001b[39m)) {\\n \\u001b[90m 10 |\\u001b[39m         next\\u001b[33m.\\u001b[39mclassList\\u001b[33m.\\u001b[39mtoggle(\\u001b[32m'visible'\\u001b[39m)\\n \\u001b[90m 11 |\\u001b[39m       } \\u001b[36melse\\u001b[39m {\\u001b[0m\\n    at constructor (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:351:19)\\n    at Parser.raise (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:3233:19)\\n    at Parser.unexpected (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:3253:16)\\n    at Parser.expect (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:3557:28)\\n    at Parser.parseHeaderExpression (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12489:10)\\n    at Parser.parseIfStatement (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12588:22)\\n    at Parser.parseStatementContent (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12250:21)\\n    at Parser.parseStatementLike (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12221:17)\\n    at Parser.parseStatementListItem (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12201:17)\\n    at Parser.parseBlockOrModuleBlockBody (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12778:61)\\n    at Parser.parseBlockBody (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12771:10)\\n    at Parser.parseBlock (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12759:10)\\n    at Parser.parseFunctionBody (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:11598:24)\\n    at Parser.parseFunctionBodyAndFinish (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:11584:10)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12901:12\\n    at Parser.withSmartMixTopicForbiddingContext (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:11895:14)\\n    at Parser.parseFunction (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12900:10)\\n    at Parser.parseFunctionStatement (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12584:17)\\n    at Parser.parseStatementContent (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12245:21)\\n    at Parser.parseStatementLike (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12221:17)\\n    at Parser.parseStatementListItem (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12201:17)\\n    at Parser.parseBlockOrModuleBlockBody (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12778:61)\\n    at Parser.parseBlockBody (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12771:10)\\n    at Parser.parseBlock (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12759:10)\\n    at Parser.parseFunctionBody (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:11598:24)\\n    at Parser.parseFunctionBodyAndFinish (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:11584:10)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12901:12\\n    at Parser.withSmartMixTopicForbiddingContext (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:11895:14)\\n    at Parser.parseFunction (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12900:10)\\n    at Parser.parseFunctionOrFunctionSent (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:11067:17)\\n    at Parser.parseExprAtom (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10856:21)\\n    at Parser.parseExprSubscripts (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10568:23)\\n    at Parser.parseUpdate (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10551:21)\\n    at Parser.parseMaybeUnary (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10529:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10383:61)\\n    at Parser.parseExprOps (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10388:23)\\n    at Parser.parseMaybeConditional (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10365:23)\\n    at Parser.parseMaybeAssign (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10326:21)\\n    at Parser.parseMaybeAssign (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10352:25)\\n    at Parser.parseExpressionBase (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10280:23)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10276:39\\n    at Parser.allowInAnd (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:11913:16)\\n    at Parser.parseExpression (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:10276:17)\\n    at Parser.parseStatementContent (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12354:23)\\n    at Parser.parseStatementLike (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12221:17)\\n    at Parser.parseModuleItem (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12198:17)\\n    at Parser.parseBlockOrModuleBlockBody (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12778:36)\\n    at Parser.parseBlockBody (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12771:10)\\n    at Parser.parseProgram (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12098:10)\\n    at Parser.parseTopLevel (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/@babel/parser/lib/index.js:12088:25)\");\n\n//# sourceURL=webpack://majie-theme-2024/./src/js/home/homeSlider.js?");

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