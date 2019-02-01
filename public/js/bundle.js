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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ProgressText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ProgressText */ \"./src/js/modules/ProgressText.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n    const id = 'progressText'//document.getElementById('progressText').innerText;\n\n    const progressText = new _modules_ProgressText__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id, 50, 'easeOutQuad' );\n    progressText.animate(1); //0~1\n    \n})\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/ProgressText.js":
/*!****************************************!*\
  !*** ./src/js/modules/ProgressText.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProgressText; });\n/* harmony import */ var _drawSvg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawSvg */ \"./src/js/modules/drawSvg.js\");\n/* harmony import */ var _loadPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadPath */ \"./src/js/modules/loadPath.js\");\n/* harmony import */ var _getEasingValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEasingValue */ \"./src/js/modules/getEasingValue.js\");\n\n\n\n\nclass ProgressText {\n  constructor(id, fontSize, easingName) {\n    this.element = document.getElementById(id);\n    this.text = this.element.innerText;\n    this.style = window.getComputedStyle(this.element);\n    this.strokeWidth = '10px';\n    this.charactorSize = fontSize || \"32px\";\n    this.color = null;\n    this.easingName = easingName;\n    this.pathsArray = Object(_loadPath__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.text, this.charactorSize, this.strokeWidth);\n    this.preProgressRate = 0;\n\n  }\n\n  animate(rate) {\n    const post = rate;\n    const pre = this.preProgressRate;\n    let now = post > pre ? pre : post; //小さい方\n    const end = post > pre ? post : pre; //大きい方\n    const isPlus = post > pre ? true : false;\n    const speed = 0.003;\n\n    const anim = () => {\n      now += speed;\n      if (now <= end) {\n        requestAnimationFrame(anim);\n      } else if (now >= end) { //アニメーション終わり\n        this.preProgressRate = post;\n        now = end;\n      }\n      let easingProgressRate = Object(_getEasingValue__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.easingName, now);\n      Object(_drawSvg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.pathsArray, easingProgressRate, pre, post, isPlus);\n      document.getElementById('progress').innerText = (easingProgressRate * 100 + \"%\");\n    };\n    requestAnimationFrame(anim);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/ProgressText.js?");

/***/ }),

/***/ "./src/js/modules/defineCharSvgArray.js":
/*!**********************************************!*\
  !*** ./src/js/modules/defineCharSvgArray.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return defineCharSvgArray; });\nfunction defineCharSvgArray() {\n\n    const charSvgArray = {\n        //0~9\n        \"0\":[\n            \"M495.5,170.5c-134,0-199,110-199,181v218c0,105,44,226,199,226,165,0,209-107,209-223v-217c0-108-89-185-209-185\"\n        ],\n        \"1\":[\n            \"M345,189H527V800\"\n        ],\n        \"2\":[\n            \"M325,382S315,176,509,176,707.5,361.5,692.5,412.5s-54.85,101.21-98,141c-90,83-269,236-269,236H699\"\n        ],\n        \"3\":[\n            \"M323.5,326.5s11-151,175-151,181,122,181,151-2,142-178,142h-63s-16-1,91-1,171,79,171,160-48,172-200,172c-165,0-201-118-201-166\"\n        ],\n        \"4\":[\n            \"M598.5,799.5v-615l-357,452h452\"\n        ],\n        \"5\":[\n            \"M658,189.5H351l-36,303s66-101,187-101,204,90,204,217-103,191-209,191-182-62-201-158\"\n        ],\n        \"6\":[\n            \"M546.5,171.5s-132,183-160,225c-42.24,63.37-77,107-77,190,0,69,34,209,197,209s213-113,213-205-52-212-199-212c-82,0-124,34-124,34\"\n        ],\n        \"7\":[\n            \"M306,189.5H695s.5,0-345,610\"\n        ],\n        \"8\":[\n            \"M501.5,461.5c-127,0-179-80-179-150s62-141,179-141,181,67,181,141-45,150-181,150c-98,0-204,38-204,163s102,171,204,171,202-60,202-172-85-162-202-162\"\n        ],\n        \"9\":[\n            \"M467.5,792.5s132-183,160-225c42.24-63.37,77-107,77-190,0-69-34-209-197-209s-213,113-213,205,52,212,199,212c82,0,124-34,124-34\"\n        ],\n        //A~Z\n        \"A\":[\n            \"M256.25,799.5v-394c0-32,27-230,253-230s254,186,254,213v411m-506.5-240h507\"\n        ],\n        \"B\":[\n            \"M264,786.5v-596s233,.5,293.5.5S707,216.5,707,331.5s-87.5,150-166.5,150c-40.35,0-204.61-.83-270,0v1H541c131,0,195,55,195,155,0,115-73,149-175,149H264.5\"\n        ],\n        \"C\":[\n            \"M807.5,370.5c-51-128-160-192-306-192s-308,98-308,310,165,311,314,311,267-84,300-193\"\n        ],\n        \"D\":[\n            \"M247.5,797.5v-598h203c77,0,326,15,326,293s-241,305-320,305Z\"\n        ],\n        \"E\":[\n            \"M279,195.5H719.5\",\"M279.5,196V794.5\",\"M279.5,489.5c27,0,355,1,385,1\",\"M280,793.5H719.5\"\n        ],\n        \"F\":[\n            \"M716.5,195.5h-433v609\",\"M286,488.5H661.5\"\n        ],\n        \"G\":[\n            \"M796,368.5c-43-113-152-190-304-190s-309,109-309,306c0,184,135,315,308,315s317-101,327-277H463\"\n        ],\n        \"H\":[\n            \"M237.5,180V801\",\"M238,483.5H751\",\"M750.5,179.5v621\"\n        ],\n        \"I\":[\n            \"M500.5,180V801\"\n        ],\n        \"J\":[\n            \"M708.5,179V532c0,70,6.74,268-214.64,268-230.61,0-222.62-187-222.62-224\"\n        ],\n        \"K\":[\n            \"M326.5,180V801\",\"M674.5,185c-67,59.5-348,306-348,306s297,258.5,348,305\"\n        ],\n        \"L\":[\n            \"M282.5,185.5v611h431\"\n        ],\n        \"M\":[\n            \"M132,800V363c0-99.5,74.5-183.5,190.5-183.5s188,107,188,179S510,800,510,800s.5-396.5.5-441.5,39-179,178-179,199,87,199,185v435\"\n        ],\n        \"N\":[\n            \"M294.47,785.57v-591L715.5,797V180\"\n        ],\n        \"O\":[\n            \"M496.5,182.5c-190,0-313,138-313,310s125,310,313,310,321-127,321-310S688.5,182.5,496.5,182.5Z\"\n        ],\n        \"P\":[\n            \"M299.5,802.5v-609h252c117,0,207,33,207,171s-75,179-211,179c-75,0-248-2-248-2\"\n        ],\n        \"Q\":[\n            \"M815.5,488.5c0,183-133,310-321,310s-313-138-313-310,123-310,313-310C686.5,178.5,815.5,305.5,815.5,488.5Z\",\n            \"M542.5,595.5c27,30,237,273,264,302\"\n        ],\n        \"R\":[\n            \"M261.5,531.5s173,2,248,2c136,0,211-45,211-174s-90-170-207-170h-252v609\",\n            \"M529.5,533.5c22,28,193,242,209,265\"\n        ],\n        \"S\":[\n            \"M709.44,312.32c0-69.6-59.12-161.82-197.94-161.82s-190.88,90.21-197,161.15c-6.11,70.64,38,130.85,197.79,151.27,168.79,21.56,218.81,64,210.52,160.29S621.6,776.5,519.64,776.5s-219.9-43.19-219.9-166.34\"\n        ],\n        \"T\":[\n            \"M256.5,195.5h487\",\n            \"M500.5,196c0,82.5-1,567.5-1,608.5\"\n        ],\n        \"U\":[\n            \"M254.5,178.5v389c0,152,110.49,231,241.24,231s249.76-62,249.26-231v-389\"\n        ],\n        \"V\":[\n            \"M237,186s-.5-.5,262.5,610.5C759.5,185.5,759,186,759,186\"\n        ],\n        \"W\":[\n            \"M122,178.5v437C122,715,196.5,799,312.5,799s188-107,188-179-.5-441.5-.5-441.5.5,396.5.5,441.5,39,179,178,179,199-87,199-185V179\"\n        ],\n        \"X\":[\n            \"M257,181.5c38.5,48,494,623,494,623\",\n            \"M742,181.5c-17.5,23-496,623-496,623\"\n        ],\n        \"Y\":[\n            \"M232.76,175s283,359.5,266,337\",\n            \"M766.5,176c-14,17.5-267,337-267,337\",\n            \"M499.5,513V798\"\n        ],\n        \"Z\":[\n            \"M277,189s-.5.5,447,0C276.5,788.5,277,788,277,788s-.5.5,447,0\"\n        ],\n        //a~z\n        \"a\":[\n            \"M749,550.5c0-115.5-87-237-239-237s-240,121-240,237S344.5,791,509.5,791s240-137,240-240V785\"\n        ],\n        \"b\":[\n            \"M258.5,126V562\",\n            \"M258.5,562c0,171,136.9,236.5,247.88,236.5S740.5,724,740.5,562.86,615.08,326.45,501.82,326.45,258.5,392,258.5,562\"\n        ],\n        \"c\":[\n            \"M732.5,473.5C701.5,361.5,590,321,496.76,321S264.64,395.45,264.64,556.6,388.06,793,501.32,793,699.5,736.5,734.5,640.5\"\n        ],\n        \"d\":[\n            \"M739.5,124V550\",\n            \"M740,550.5C740,712.5,639,799,494.82,799S259.14,700.5,259.14,562.6,367,327,490.26,327,740,404.5,740,550.5\"\n        ],\n        \"e\":[\n            \"M270,543.5H750c0-83-77-230-240-230s-240,140-240,230c0,138,82,246,241,246s215-132,215-132\"\n        ],\n        \"f\":[\n            \"M268.5,408.5h434m40-104c0-98-49-182-179-182s-178,95-178,182v495\"\n        ],\n        \"g\":[\n            \"M712.85,538.06c0-102.55-77.7-211.06-212.66-211.06S287.1,434.44,287.1,537.43,353.24,751,499.75,751s213.1-121.64,213.1-213.09V735.32c0,60.49-47.06,193.68-213.1,193.68S308,810,308,810\"\n        ],\n        \"h\":[\n            \"M302.5,126V800s1-238,1-276,29-193,221-193,217,153,217,203V800\"\n        ],\n        \"i\":[\n            \"M475.5,181c30,30.5,48,46.5,48,46.5\",\n            \"M499.5,321V791\"\n        ],\n        \"j\":[\n            \"M498.5,321V790.5c0,93-28,147-134,147\",\n            \"M476.5,173c30,30.5,48,46.5,48,46.5\"\n        ],\n        \"k\":[\n            \"M346.5,125V799\",\n            \"M688.5,314.5l-342,250s280,193,342,235\"\n        ],\n        \"l\":[\n            \"M500.5,127V800\"\n        ],\n        \"m\":[\n            \"M151.5,804V525c0-91,37-191,172-191,109,0,177,72,177,191V515c0-20,10-181,177-181,142,0,171,132,171,175V804\"\n        ],\n        \"n\":[\n            \"M279.5,804V535c0-43,27-200,222-200s218,165,218,200V805\"\n        ],\n        \"o\":[\n            \"M496.46,321c-144.49,0-238,105-238,235.75s95.06,235.75,238,235.75,244.11-96.58,244.11-235.75S642.47,321,496.46,321Z\"\n        ],\n        \"p\":[\n            \"M275.64,641C318.5,755,418.12,793.5,511.38,793.5S743.5,719,743.5,557.86,620.08,321.45,506.82,321.45,263.5,393,263.5,550V992\"\n        ],\n        \"q\":[\n            \"M740.36,639C697.5,753,597.88,791.5,504.62,791.5S272.5,717,272.5,555.86,395.92,319.45,509.18,319.45,752.5,391,752.5,548V990\"\n        ],\n        \"r\":[\n            \"M341.5,303.5v496c0-227,1-249,1-284s7-187,170-187,188,110,188,190\"\n        ],\n        \"s\":[\n            \"M660,439c0-52-48-125-161-125S343.5,385.5,338.5,438.5c-5,52.77,28.42,102.43,161,113,138,11,185,53,173,119-17,93.47-84,119-167,119s-179-36-179-128\"\n        ],\n        \"t\":[\n            \"M289,365.64c83.53,0,406.46-.62,406.46-.62\",\n            \"M399.22,193.15c0,96.35.69,455.16.69,455.16.16,106.76,64.85,149.74,156.63,149.6C682,797.72,711.88,713.39,711.75,631\"\n        ],\n        \"u\":[\n            \"M280.5,328V580c0,48,20,218,209,218s230-114,230-237V328\"\n        ],\n        \"v\":[\n            \"M266.5,328.5l233,463c79-158,233-463,233-463\"\n        ],\n        \"w\":[\n            \"M151.5,328V607c0,91,37,191,172,191,109,0,177-72,177-191v10c0,20,10,181,177,181,142,0,171-132,171-175V328\"\n        ],\n        \"x\":[\n            \"M289.78,330.73C319.5,363.5,717.1,794.65,717.1,794.65\",\n            \"M714.13,330.73C689.5,357.5,283.85,794.65,283.85,794.65\"\n        ],\n        \"y\":[\n            \"M280.5,274V526c0,48,20,218,209,218s229-114,229-237,1-233,1-233V748.5c0,106-73,197-220,197s-205-93-215-132\"\n        ],\n        \"z\":[\n            \"M300.5,338.5H700c-399.5,449,.5,0-399.5,449H700\"\n        ],\n\n    }\n    return charSvgArray\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/defineCharSvgArray.js?");

/***/ }),

/***/ "./src/js/modules/drawSvg.js":
/*!***********************************!*\
  !*** ./src/js/modules/drawSvg.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drawSvg; });\nfunction drawSvg(pathsArray, progress, preProgressRate, postProgressRate, isPlus) {\n\n    const pathLengths = [];\n    for (const path of pathsArray) {\n        pathLengths.push(path.getTotalLength());\n    }\n    const totalLength = pathLengths.reduce((prev, current) => { return prev + current; });\n\n    let start = preProgressRate * totalLength;\n    //開始時の幅 + 変化率 * (最終的な幅 - 開始時の幅)\n    let nowFillValue = start + progress * ((totalLength * postProgressRate) - start);\n    let nowIndex = getNowIndex(pathLengths, nowFillValue); //アニメーションしているpathのindexs\n    let nextFillValue = sumArr(pathLengths, nowIndex)//次に描画する長さ\n    let fill = nextFillValue - nowFillValue; //これから描画する値と今の描画する値の差\n\n    if (nowIndex != pathsArray.length) {\n        pathsArray[nowIndex].style.strokeDashoffset = fill; //0で完全に表示\n    }\n\n    if (isPlus) {\n        pathsArray.forEach((path,index) => {\n            if (nowIndex < index) {\n                path.style.strokeDashoffset = path.getTotalLength();\n            }else if(nowIndex > index){\n                path.style.strokeDashoffset = 0;\n            }\n\n        })\n    } else {\n        pathsArray.forEach((path,index) => {\n            if (nowIndex > index) {\n                path.style.strokeDashoffset = 0;\n            }else if (nowIndex < index){\n                path.style.strokeDashoffset = path.getTotalLength();\n            }\n        })\n    }\n}\n\nconst getNowIndex = (pathLengths, nowFillValue) => {\n    let addLength = 0;//lengthをたす変数\n    let countIndex = 0;\n    for (const len of pathLengths) {\n        addLength += len;\n        if (nowFillValue < addLength) {\n            return countIndex;\n        }\n        countIndex++;\n    }\n    return countIndex;\n}\n\nconst sumArr = (arr, n) => {\n    let sum = 0;\n    for (let i = 0; i < n + 1 && arr.length != i; i++) {\n        sum += arr[i];\n    }\n    return (sum);\n}\n\n//# sourceURL=webpack:///./src/js/modules/drawSvg.js?");

/***/ }),

/***/ "./src/js/modules/getEasingValue.js":
/*!******************************************!*\
  !*** ./src/js/modules/getEasingValue.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getEasingValue; });\nfunction getEasingValue(easingName, p) {\n    switch (easingName) {\n        case 'linear': return p;\n        case 'easeInQuad': return (p * p);\n        case 'easeOutQuad': return (p * (2 - p));\n        case 'easeInOutQuad': return p < .5 ? 2 * p * p : -1 + (4 - 2 * p) * p;\n        case 'easeInCubic': return p * p * p;\n        case 'easeOutCubic': return (--p) * p * p + 1;\n        case 'easeInOutCubic': return p < .5 ? 4 * p * p * p : (p - 1) * (2 * p - 2) * (2 * p - 2) + 1;\n        case 'easeInQuart': return p * p * p * p;\n        case 'easeOutQuart': return 1 - (--p) * p * p * p;\n        case 'easeInOutQuart': return p < .5 ? 8 * p * p * p * p : 1 - 8 * (--p) * p * p * p;\n        case 'easeInQuint': return p * p * p * p * p;\n        case 'easeOutQuint': return 1 + (--p) * p * p * p * p;\n        case 'easeInOutQuint': return p < .5 ? 16 * p * p * p * p * p : 1 + 16 * (--p) * p * p * p * p;\n        default: return p;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/getEasingValue.js?");

/***/ }),

/***/ "./src/js/modules/loadPath.js":
/*!************************************!*\
  !*** ./src/js/modules/loadPath.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return loadPath; });\n/* harmony import */ var _defineCharSvgArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineCharSvgArray */ \"./src/js/modules/defineCharSvgArray.js\");\n\nfunction loadPath(text, charactorSize, strokeWidth) {\n    const pathsArray = [];\n    const svgArray = [];\n    const array = text.split(\"\");\n    const charSvg = Object(_defineCharSvgArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    for (const char of array) {\n        const mySvg = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n\n        mySvg.setAttribute(\"viewBox\", \"0 0 1000 1000\");\n        mySvg.setAttribute(\"width\", \"100\");\n\n        if (charSvg[char] === undefined) {\n            const charPath = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n            charPath.setAttribute(\"d\", \"M343.5,612.5c2-32,20-89,64-94s71,17,91,40,54,51,91,45c47.55-7.71,68-51,68-95\")//~\n            //ストロークアニメーションのための設定\n            const pathLength = charPath.getTotalLength()\n            charPath.style.strokeDasharray = pathLength;\n            charPath.style.strokeWidth = strokeWidth; //線の太さ \n            pathsArray.push(charPath);\n            mySvg.appendChild(charPath);\n        } else {\n            charSvg[char].forEach((path) => {\n                const charPath = document.createElementNS(\"http://www.w3.org/2000/svg\", \"path\");\n                charPath.setAttribute(\"d\", path)\n                //ストロークアニメーションのための設定\n                const pathLength = charPath.getTotalLength()\n                charPath.style.strokeDasharray = pathLength;\n                charPath.style.strokeWidth = strokeWidth; //線の太さ \n                pathsArray.push(charPath);\n                mySvg.appendChild(charPath);\n            })\n        }\n        mySvg.setAttribute(\"width\", charactorSize); //文字の幅\n        svgArray.push(mySvg);\n    }\n    createDom(svgArray);\n    return pathsArray;\n}\n\n// fragmentに全てのsvgを格納してからDOMを操作\nconst createDom = (svgArray) => {\n    let fragment = document.createDocumentFragment();\n    svgArray.forEach((svg) => {\n        fragment.appendChild(svg);\n    })\n    document.getElementById(\"main\").appendChild(fragment);\n}\n\n\n//# sourceURL=webpack:///./src/js/modules/loadPath.js?");

/***/ })

/******/ });