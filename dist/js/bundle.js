/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\src\\\\app.js: Unexpected token (93:0)\\n\\n\\u001b[0m \\u001b[90m 91 |\\u001b[39m \\u001b[36mimport\\u001b[39m \\u001b[32m\\\"./img/search/panel-video.svg\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 92 |\\u001b[39m \\u001b[36mimport\\u001b[39m \\u001b[32m\\\"./img/nosotros/icon1-section2.svg\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 93 |\\u001b[39m \\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 94 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 95 |\\u001b[39m \\u001b[36mimport\\u001b[39m \\u001b[32m\\\"./img/nosotros/timeline-01.jpg\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 96 |\\u001b[39m \\u001b[36mimport\\u001b[39m \\u001b[32m\\\"./img/nosotros/timeline-02.jpg\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser._raise (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:775:17)\\n    at Parser.raiseWithData (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:768:17)\\n    at Parser.raise (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:736:17)\\n    at Parser.unexpected (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9699:16)\\n    at Parser.parseExprAtom (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11091:20)\\n    at Parser.parseExprSubscripts (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10668:23)\\n    at Parser.parseUpdate (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10648:21)\\n    at Parser.parseMaybeUnary (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10626:23)\\n    at Parser.parseExprOps (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10487:23)\\n    at Parser.parseMaybeConditional (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10461:23)\\n    at Parser.parseMaybeAssign (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10424:21)\\n    at Parser.parseExpressionBase (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10369:23)\\n    at C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10363:39\\n    at Parser.allowInAnd (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12058:16)\\n    at Parser.parseExpression (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10363:17)\\n    at Parser.parseStatementContent (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12346:23)\\n    at Parser.parseStatement (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12215:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12795:25)\\n    at Parser.parseBlockBody (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12786:10)\\n    at Parser.parseProgram (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12150:10)\\n    at Parser.parseTopLevel (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12141:25)\\n    at Parser.parse (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13842:10)\\n    at parse (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13894:38)\\n    at parser (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:59:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (C:\\\\xampp\\\\htdocs\\\\intranet-ocensa\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:19:41)\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });