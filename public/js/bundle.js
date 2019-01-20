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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ProgressText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ProgressText */ \"./src/js/modules/ProgressText.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n    //DIV内のテキストを取得\n    const text = document.getElementById('progressText').innerText;\n    const style = window.getComputedStyle(document.getElementById(\"progressText\"));\n    console.log(style.fontSize);\n\n    const progressText = new _modules_ProgressText__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text, style.fontSize);\n    progressText.set();\n    progressText.animate();\n})\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/ProgressText.js":
/*!****************************************!*\
  !*** ./src/js/modules/ProgressText.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProgressText; });\n/* harmony import */ var _loadCharacter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadCharacter */ \"./src/js/modules/loadCharacter.js\");\n/* harmony import */ var _drawSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawSvg */ \"./src/js/modules/drawSvg.js\");\n\n\n\nclass ProgressText {\n    constructor(text, fontSize, strokeWidth, color) {\n        this.text = text;\n        this.fontSize = fontSize;\n        this.strokeWidth = strokeWidth;\n        this.color = color;\n        \n      }\n      \n\n      set() {\n        return Object(_loadCharacter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.text, this.fontSize);\n      }\n      animate () {\n        return //console.log(paths)\n      }\n}\n\n//# sourceURL=webpack:///./src/js/modules/ProgressText.js?");

/***/ }),

/***/ "./src/js/modules/drawSvg.js":
/*!***********************************!*\
  !*** ./src/js/modules/drawSvg.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drawSvg; });\nfunction drawSvg(paths) {\n\n    let progressRate = 0; //0~100\n\n    const startProgress = () => {\n        let speed = 0.3;\n        const acceleration = 0;\n        const count = setInterval(() => {\n            speed += acceleration;\n            progressRate += speed;\n            if (progressRate >= 100) {\n                clearInterval(count);\n                progressRate = 100;\n            }\n            //update()\n            draw(paths, progressRate, nowIndex);\n            document.getElementById('progress').innerText = (progressRate + \"%\")\n        }, 10);\n    }\n    startProgress();\n\n    const update = () => {\n        draw(paths, progressRate, nowIndex);\n        /*\n        paths.forEach((path, index) => {\n            const eachProgress = calculateEachProgress(paths.length, index);\n            // 進捗率に合わせて0に近づける\n            path.style.strokeDashoffset = eachProgress * path.getTotalLength();\n\n            //全て同時にアニメーションする場合\n            //path.style.strokeDashoffset =  Math.floor((100 - progressRate) / 100 * path.getTotalLength());\n        })\n        */\n\n        //eachProgress(1~0の値を返す) \n        function calculateEachProgress(len, index) {\n            //0~100\n            let eachProg = progressRate * len / (index + 1);\n            if (eachProg > 100) { eachProg = 100 };\n            //1~0\n            return (100 - eachProg) / 100;\n        }\n    }\n\n\n    //drawに必要なもの\n    const pathLengths = [];\n    for (const path of paths) {\n        pathLengths.push(path.getTotalLength());\n    }\n    const totalLength = pathLengths.reduce( (prev, current) => { return prev + current; });\n    let filledPathLength = paths[0].getTotalLength(); //pathの長さを入れておく変数\n    let nowIndex = 0; //アニメーションしているpathのindex\n    const draw = (paths, progressRate, animId) => {\n        const advancedNumbers = totalLength / 100 * progressRate; //今までの進んだ量\n        let nowFill = filledPathLength - advancedNumbers;\n\n        if (filledPathLength < advancedNumbers) { //文字のlengthを描画したらnowFillが0になる 次の文字へ\n            if (paths.length > nowIndex) {\n                nowIndex++;\n            }\n            filledPathLength += paths[nowIndex].getTotalLength();\n            nowFill = 0;\n            console.log('next')\n            console.log(nowIndex)\n        }\n\n        paths[animId].style.strokeDashoffset = nowFill; //0で完全に表示\n    }\n\n}\n\n//# sourceURL=webpack:///./src/js/modules/drawSvg.js?");

/***/ }),

/***/ "./src/js/modules/getPaths.js":
/*!************************************!*\
  !*** ./src/js/modules/getPaths.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getPaths; });\nfunction getPaths(char) {\n\n    switch (char) {\n        case 'a': char = '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><title>a</title><g id=\"font\"><path class=\"cls-1\" d=\"M749,550.5c0-115.5-87-237-239-237s-240,121-240,237S344.5,791,509.5,791s240-137,240-240V785\"/></g></svg>';\n            break;\n\n        default: break;\n    }\n    return char;\n}\n\n//# sourceURL=webpack:///./src/js/modules/getPaths.js?");

/***/ }),

/***/ "./src/js/modules/loadCharacter.js":
/*!*****************************************!*\
  !*** ./src/js/modules/loadCharacter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return loadCharacter; });\n/* harmony import */ var _drawSvg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawSvg */ \"./src/js/modules/drawSvg.js\");\n/* harmony import */ var _getPaths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPaths */ \"./src/js/modules/getPaths.js\");\n\n\n\nfunction loadCharacter(str, size) {\n    const paths = [];\n    let parsedSVGs = [];\n    const setStrokeWidth = \"10px\";\n    const charactorSize = size ? size : \"32px\";\n\n    //文字列を配列にする\n    const array = [...str];\n    (async () => {\n        await Promise.all(array.map(async (char, index) => {\n            let response;\n            try {\n                //charが大文字の時\n                if (char.match(/^[A-Z]+$/)) {\n                    response = await fetch(`./SVG/UpperCase/${char}${char}.svg`)\n                }\n                //charが小文字の時\n                else if (char.match(/^[a-z]+$/)) {\n                    response = await fetch(`./SVG/LowerCase/${char}.svg`)\n                }\n                //charが数字の時\n                else if (char.match(/^[0-9]+$/)) {\n                    response = await fetch(`./SVG/Number/${char}.svg`)\n                }\n                //charがスペースの時\n                else if (char.match(/( |　)+/)) {\n                    console.log(\"space\")\n                    response = await fetch(`./SVG/Symbol/space.svg`)\n                }\n                const text = await response.text();\n                await createSvg(text, index);\n\n            } catch (e) {\n                console.log(\"error!\")\n            }\n        }));\n        //読み込みが終わったら\n        createDom();\n    })();\n\n\n    const createSvg = (text, index) => {\n        console.log(index);\n        const domParser = new DOMParser();\n        const parsedSVGDoc = domParser.parseFromString(text, 'image/svg+xml');\n        const parsedSVG = parsedSVGDoc.childNodes[0];\n        parsedSVG.setAttribute(\"width\", charactorSize); //文字の幅\n        parsedSVGs.splice(index, 0, parsedSVG);\n\n        //ストロークアニメーションのための設定\n        const emptyPath = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\"); //<path>\n        const charPath = parsedSVG.querySelectorAll('path')[0] ? parsedSVG.querySelectorAll('path')[0] : emptyPath;\n        const pathLength = charPath.getTotalLength()\n        charPath.style.strokeDasharray = pathLength;\n        charPath.style.strokeDashoffset = pathLength;\n        charPath.style.strokeWidth = setStrokeWidth; //線の太さ \n        paths.splice(index, 0, charPath);\n    }\n\n    //非同期で読み込んだsvgを順番になるよう並べ替えもここでしよう\n    // fragmentに全てのsvgを格納してからDOMを操作\n    const createDom = () => {\n        console.log('createDom')\n        let fragment = document.createDocumentFragment();\n        parsedSVGs.forEach((svg) => {\n            fragment.appendChild(svg);\n        })\n        document.getElementById(\"main\").appendChild(fragment);\n        //処理が終わったらアニメーションスタートさせる\n        Object(_drawSvg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(paths);\n    }\n\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/loadCharacter.js?");

/***/ })

/******/ });