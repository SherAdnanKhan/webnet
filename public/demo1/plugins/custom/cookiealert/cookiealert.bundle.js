/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/plugins/custom/cookiealert/cookiealert.js":
/*!*************************************************************************!*\
  !*** ./resources/assets/core/plugins/custom/cookiealert/cookiealert.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// Cookiealert -  A simple, good looking cookie alert for Bootstrap: https://github.com/Wruczek/Bootstrap-Cookie-Alert\n__webpack_require__(/*! bootstrap-cookie-alert/cookiealert.js */ \"./node_modules/bootstrap-cookie-alert/cookiealert.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvcGx1Z2lucy9jdXN0b20vY29va2llYWxlcnQvY29va2llYWxlcnQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsbUJBQU8sQ0FBQyxtR0FBRCxDQUFQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL3BsdWdpbnMvY3VzdG9tL2Nvb2tpZWFsZXJ0L2Nvb2tpZWFsZXJ0LmpzPzQ4NzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29va2llYWxlcnQgLSAgQSBzaW1wbGUsIGdvb2QgbG9va2luZyBjb29raWUgYWxlcnQgZm9yIEJvb3RzdHJhcDogaHR0cHM6Ly9naXRodWIuY29tL1dydWN6ZWsvQm9vdHN0cmFwLUNvb2tpZS1BbGVydFxyXG5cclxucmVxdWlyZSgnYm9vdHN0cmFwLWNvb2tpZS1hbGVydC9jb29raWVhbGVydC5qcycpO1xyXG4iXSwibmFtZXMiOlsicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/plugins/custom/cookiealert/cookiealert.js\n");

/***/ }),

/***/ "./node_modules/bootstrap-cookie-alert/cookiealert.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-cookie-alert/cookiealert.js ***!
  \************************************************************/
/***/ (() => {

eval("/*\r\n * Bootstrap Cookie Alert by Wruczek\r\n * https://github.com/Wruczek/Bootstrap-Cookie-Alert\r\n * Released under MIT license\r\n */\r\n(function () {\r\n    \"use strict\";\r\n\r\n    var cookieAlert = document.querySelector(\".cookiealert\");\r\n    var acceptCookies = document.querySelector(\".acceptcookies\");\r\n\r\n    if (!cookieAlert) {\r\n       return;\r\n    }\r\n\r\n    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)\r\n\r\n    // Show the alert if we cant find the \"acceptCookies\" cookie\r\n    if (!getCookie(\"acceptCookies\")) {\r\n        cookieAlert.classList.add(\"show\");\r\n    }\r\n\r\n    // When clicking on the agree button, create a 1 year\r\n    // cookie to remember user's choice and close the banner\r\n    acceptCookies.addEventListener(\"click\", function () {\r\n        setCookie(\"acceptCookies\", true, 365);\r\n        cookieAlert.classList.remove(\"show\");\r\n\r\n        // dispatch the accept event\r\n        window.dispatchEvent(new Event(\"cookieAlertAccept\"))\r\n    });\r\n\r\n    // Cookie functions from w3schools\r\n    function setCookie(cname, cvalue, exdays) {\r\n        var d = new Date();\r\n        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));\r\n        var expires = \"expires=\" + d.toUTCString();\r\n        document.cookie = cname + \"=\" + cvalue + \";\" + expires + \";path=/\";\r\n    }\r\n\r\n    function getCookie(cname) {\r\n        var name = cname + \"=\";\r\n        var decodedCookie = decodeURIComponent(document.cookie);\r\n        var ca = decodedCookie.split(';');\r\n        for (var i = 0; i < ca.length; i++) {\r\n            var c = ca[i];\r\n            while (c.charAt(0) === ' ') {\r\n                c = c.substring(1);\r\n            }\r\n            if (c.indexOf(name) === 0) {\r\n                return c.substring(name.length, c.length);\r\n            }\r\n        }\r\n        return \"\";\r\n    }\r\n})();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLWNvb2tpZS1hbGVydC9jb29raWVhbGVydC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1jb29raWUtYWxlcnQvY29va2llYWxlcnQuanM/OGFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBCb290c3RyYXAgQ29va2llIEFsZXJ0IGJ5IFdydWN6ZWtcclxuICogaHR0cHM6Ly9naXRodWIuY29tL1dydWN6ZWsvQm9vdHN0cmFwLUNvb2tpZS1BbGVydFxyXG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZVxyXG4gKi9cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIHZhciBjb29raWVBbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29va2llYWxlcnRcIik7XHJcbiAgICB2YXIgYWNjZXB0Q29va2llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjZXB0Y29va2llc1wiKTtcclxuXHJcbiAgICBpZiAoIWNvb2tpZUFsZXJ0KSB7XHJcbiAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29va2llQWxlcnQub2Zmc2V0SGVpZ2h0OyAvLyBGb3JjZSBicm93c2VyIHRvIHRyaWdnZXIgcmVmbG93IChodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk0NTExMzEpXHJcblxyXG4gICAgLy8gU2hvdyB0aGUgYWxlcnQgaWYgd2UgY2FudCBmaW5kIHRoZSBcImFjY2VwdENvb2tpZXNcIiBjb29raWVcclxuICAgIGlmICghZ2V0Q29va2llKFwiYWNjZXB0Q29va2llc1wiKSkge1xyXG4gICAgICAgIGNvb2tpZUFsZXJ0LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gY2xpY2tpbmcgb24gdGhlIGFncmVlIGJ1dHRvbiwgY3JlYXRlIGEgMSB5ZWFyXHJcbiAgICAvLyBjb29raWUgdG8gcmVtZW1iZXIgdXNlcidzIGNob2ljZSBhbmQgY2xvc2UgdGhlIGJhbm5lclxyXG4gICAgYWNjZXB0Q29va2llcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldENvb2tpZShcImFjY2VwdENvb2tpZXNcIiwgdHJ1ZSwgMzY1KTtcclxuICAgICAgICBjb29raWVBbGVydC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuXHJcbiAgICAgICAgLy8gZGlzcGF0Y2ggdGhlIGFjY2VwdCBldmVudFxyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNvb2tpZUFsZXJ0QWNjZXB0XCIpKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29va2llIGZ1bmN0aW9ucyBmcm9tIHczc2Nob29sc1xyXG4gICAgZnVuY3Rpb24gc2V0Q29va2llKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cykge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiICsgZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgXCI9XCIgKyBjdmFsdWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjtwYXRoPS9cIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGNuYW1lICsgXCI9XCI7XHJcbiAgICAgICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICAgICAgICB2YXIgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09ICcgJykge1xyXG4gICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/bootstrap-cookie-alert/cookiealert.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/core/plugins/custom/cookiealert/cookiealert.js");
/******/ 	
/******/ })()
;