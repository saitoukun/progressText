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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/progress */ \"./src/js/modules/progress.js\");\n/* harmony import */ var _modules_loadCharacter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadCharacter */ \"./src/js/modules/loadCharacter.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', function (){\n\n    //DIV内のテキストを取得\n    const tex = document.getElementById('progressText').innerText;\n    console.log(tex);\n    \n    Object(_modules_loadCharacter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tex);\n})\n\n\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/loadCharacter.js":
/*!*****************************************!*\
  !*** ./src/js/modules/loadCharacter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return loadCharacter; });\n/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress */ \"./src/js/modules/progress.js\");\n\n\nfunction loadCharacter(str) {\n    let mainDiv = document.getElementById(\"main\")\n    const paths = new Array();\n    const lengs = new Array();\n    //テキストを分解\n    const array = str.split(\"\");\n    for (const char of array) {\n        let myXml = new XMLHttpRequest(); //文字の数だけXMLHttpRequestのインスタンスを作成\n\n        //charが大文字の時\n        if (char.match(/^[A-Z]+$/)) {\n            console.log(\"大文字\");\n            myXml.open(\"GET\", `./SVG/UpperCase/${char}${char}.svg `, true);\n            myXml.send(null);\n        }\n\n        //charが小文字の時\n        else if (char.match(/^[a-z]+$/)) {\n            console.log(\"小文字\");\n            myXml.open(\"GET\", `./SVG/LowerCase/${char}.svg`, true);\n            myXml.send(null);\n        }\n\n        //charがスペースの時\n        else if (char.match(/( |　)+/)) {\n            console.log(\"space\")\n            myXml.open(\"GET\", `./SVG/Symbol/space.svg`, true);\n            myXml.send(null);\n        }\n\n        //XMLHttpRequest 受信が成功\n        myXml.onload = function () {\n            const domParser = new DOMParser();\n            const svgText = myXml.responseText;\n            const parsedSVGDoc = domParser.parseFromString(svgText, 'image/svg+xml');\n            const parsedSVG = parsedSVGDoc.childNodes[0];\n            parsedSVG.setAttribute(\"width\", \"50\"); //文字の幅\n            mainDiv.appendChild(parsedSVG);\n\n            //ストロークアニメーションのための設定\n            const charPath = parsedSVG.querySelectorAll('path')[0];\n            charPath.style.strokeDasharray = charPath.getTotalLength();\n            charPath.style.strokeDashoffset = charPath.getTotalLength();\n            charPath.style.strokeWidth = \"5px\"; //戦の太さ\n\n            paths.push(charPath);\n            lengs.push(charPath.getTotalLength());\n        }\n    }\n    //関数loadCharacterの処理が終わったらアニメーションスタートさせる\n    Object(_progress__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(paths, lengs);\n}\n\n//# sourceURL=webpack:///./src/js/modules/loadCharacter.js?");

/***/ }),

/***/ "./src/js/modules/progress.js":
/*!************************************!*\
  !*** ./src/js/modules/progress.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return progress; });\nfunction progress(paths,lengs) {\n\n    let progressRate = 0; //0~100\n\n    animStart();\n    function animStart() {\n        let speed = 0;\n        const acceleration = 0.005;\n        let count = setInterval(() => {\n            speed += acceleration;\n            progressRate += speed;\n            if (progressRate >= 100) {\n                clearInterval(count);\n                progressRate = 100;\n            }\n            update();\n        }, 10);\n    }\n\n    function update() {\n        const totalLeng = lengs.reduce((a, x) => a += x, 0);\n        console.log(totalLeng);\n    \n        paths.forEach((path) => {\n            // 進捗率に合わせて0に近づける\n            path.style.strokeDashoffset = Math.floor((100 - progressRate) / 100 * path.getTotalLength());\n        })\n        document.getElementById('progress').innerText = (progressRate + \"%\")\n    };\n\n};\n\n\n//# sourceURL=webpack:///./src/js/modules/progress.js?");

/***/ })

/******/ });