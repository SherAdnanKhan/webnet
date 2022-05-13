/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js ***!
  \********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsTinyMCEBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var options = {\n      selector: '#kt_docs_tinymce_basic'\n    };\n\n    if (KTApp.isDarkMode()) {\n      options['skin'] = 'oxide-dark';\n      options['content_css'] = 'dark';\n    }\n\n    tinymce.init(options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLG1CQUFtQixHQUFHLFlBQVc7QUFDakM7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFXO0FBQzFCLFFBQUlDLE9BQU8sR0FBRztBQUFDQyxNQUFBQSxRQUFRLEVBQUU7QUFBWCxLQUFkOztBQUVBLFFBQUlDLEtBQUssQ0FBQ0MsVUFBTixFQUFKLEVBQXdCO0FBQ3BCSCxNQUFBQSxPQUFPLENBQUMsTUFBRCxDQUFQLEdBQWtCLFlBQWxCO0FBQ0FBLE1BQUFBLE9BQU8sQ0FBQyxhQUFELENBQVAsR0FBeUIsTUFBekI7QUFDSDs7QUFFREksSUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWFMLE9BQWI7QUFDSCxHQVREOztBQVdBLFNBQU87QUFDSDtBQUNBSyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYk4sTUFBQUEsWUFBWTtBQUNmO0FBSkUsR0FBUDtBQU1ILENBbkJ5QixFQUExQixDLENBcUJBOzs7QUFDQU8sTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDVCxFQUFBQSxtQkFBbUIsQ0FBQ08sSUFBcEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvdGlueW1jZS9iYXNpYy5qcz8wYmI5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGb3Jtc1RpbnlNQ0VCYXNpYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQmFzaWMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtzZWxlY3RvcjogJyNrdF9kb2NzX3RpbnltY2VfYmFzaWMnfTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoS1RBcHAuaXNEYXJrTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnNbJ3NraW4nXSA9ICdveGlkZS1kYXJrJztcclxuICAgICAgICAgICAgb3B0aW9uc1snY29udGVudF9jc3MnXSA9ICdkYXJrJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGlueW1jZS5pbml0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RGb3Jtc1RpbnlNQ0VCYXNpYy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGb3Jtc1RpbnlNQ0VCYXNpYyIsImV4YW1wbGVCYXNpYyIsIm9wdGlvbnMiLCJzZWxlY3RvciIsIktUQXBwIiwiaXNEYXJrTW9kZSIsInRpbnltY2UiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js"]();
/******/ 	
/******/ })()
;