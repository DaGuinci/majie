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

eval("module.exports = function () {\n  const pictures = document.querySelectorAll('.header .picture');\n  pictures[0].classList.add('visible');\n  function switch_picture() {\n    let visible = document.querySelector('.picture.visible');\n    let next = visible.nextElementSibling;\n    if (next.classList.contains('picture')) {\n      next.classList.toggle('visible');\n    } else {\n      let first = document.querySelector('.header .picture');\n      first.classList.toggle('visible');\n    }\n    visible.classList.toggle('visible');\n  }\n  setInterval(function () {\n    switch_picture();\n  }, 4000);\n};\n\n//# sourceURL=webpack://majie-theme-2024/./src/js/home/homeSlider.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\"}\\\".\\n    ╷\\n156 │ }\\n    │  ^\\n    ╵\\n  src/scss/views/_header.scss 156:2  @import\\n  src/scss/app.scss 5:9              root stylesheet\\n    at tryRunOrWebpackError (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/HookWebpackError.js:88:9)\\n    at __webpack_require_module__ (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5241:12)\\n    at __webpack_require__ (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5198:18)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5270:20\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3485:9)\\n    at done (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/Hook.js:18:14)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5176:43\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3463:5)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5138:16\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3463:5)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5106:15\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3485:9)\\n    at done (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3527:9)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5052:8\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:3490:6\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/HookWebpackError.js:68:3\\n    at Hook.eval [as callAsync] (eval at create (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Cache.store (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Cache.js:113:20)\\n    at ItemCacheFacade.store (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/CacheFacade.js:141:15)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:3489:11\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Cache.js:99:5\\n    at Hook.eval [as callAsync] (eval at create (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at Cache.get (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Cache.js:81:18)\\n    at ItemCacheFacade.get (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/CacheFacade.js:115:15)\\n    at Compilation._codeGenerationModule (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:3456:9)\\n    at codeGen (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5040:11)\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3463:5)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5070:14\\n    at processQueue (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\\n-- inner error --\\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\"}\\\".\\n    ╷\\n156 │ }\\n    │  ^\\n    ╵\\n  src/scss/views/_header.scss 156:2  @import\\n  src/scss/app.scss 5:9              root stylesheet\\n    at Object.<anonymous> (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/css-loader/dist/cjs.js!/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/sass-loader/dist/cjs.js!/var/www/private/majie/wp-content/themes/majie-theme-2024/src/scss/app.scss:1:7)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10\\n    at Hook.eval [as call] (eval at create (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at Hook.CALL_DELEGATE [as _call] (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/Hook.js:14:14)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5243:39\\n    at tryRunOrWebpackError (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/HookWebpackError.js:83:7)\\n    at __webpack_require_module__ (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5241:12)\\n    at __webpack_require__ (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5198:18)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5270:20\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3485:9)\\n    at done (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/Hook.js:18:14)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5176:43\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3463:5)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5138:16\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3485:9)\\n    at timesSync (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3463:5)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5106:15\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3485:9)\\n    at done (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3527:9)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5052:8\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:3490:6\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/HookWebpackError.js:68:3\\n    at Hook.eval [as callAsync] (eval at create (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\\n    at Cache.store (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Cache.js:113:20)\\n    at ItemCacheFacade.store (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/CacheFacade.js:141:15)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:3489:11\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Cache.js:99:5\\n    at Hook.eval [as callAsync] (eval at create (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\\n    at Cache.get (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Cache.js:81:18)\\n    at ItemCacheFacade.get (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/CacheFacade.js:115:15)\\n    at Compilation._codeGenerationModule (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:3456:9)\\n    at codeGen (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5040:11)\\n    at symbolIterator (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3482:9)\\n    at timesSync (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:2297:7)\\n    at Object.eachLimit (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/neo-async/async.js:3463:5)\\n    at /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/Compilation.js:5070:14\\n    at processQueue (/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)\\n\\nGenerated code for /var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/css-loader/dist/cjs.js!/var/www/private/majie/wp-content/themes/majie-theme-2024/node_modules/sass-loader/dist/cjs.js!/var/www/private/majie/wp-content/themes/majie-theme-2024/src/scss/app.scss\\n1 | throw new Error(\\\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\\\nexpected \\\\\\\"}\\\\\\\".\\\\n    ╷\\\\n156 │ }\\\\n    │  ^\\\\n    ╵\\\\n  src/scss/views/_header.scss 156:2  @import\\\\n  src/scss/app.scss 5:9              root stylesheet\\\");\");\n\n//# sourceURL=webpack://majie-theme-2024/./src/scss/app.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/app.scss");
/******/ 	
/******/ })()
;