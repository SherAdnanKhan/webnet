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

/***/ "./resources/assets/core/js/custom/documentation/editors/quill/basic.js":
/*!******************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/quill/basic.js ***!
  \******************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsQuillBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var quill = new Quill('#kt_docs_quill_basic', {\n      modules: {\n        toolbar: [[{\n          header: [1, 2, false]\n        }], ['bold', 'italic', 'underline'], ['image', 'code-block']]\n      },\n      placeholder: 'Type your text here...',\n      theme: 'snow' // or 'bubble'\n\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsQuillBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9iYXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBRyxZQUFXO0FBQy9CO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVztBQUMxQixRQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLHNCQUFWLEVBQWtDO0FBQzFDQyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFLENBQ0wsQ0FBQztBQUNHQyxVQUFBQSxNQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEtBQVA7QUFEWCxTQUFELENBREssRUFJTCxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFdBQW5CLENBSkssRUFLTCxDQUFDLE9BQUQsRUFBVSxZQUFWLENBTEs7QUFESixPQURpQztBQVUxQ0MsTUFBQUEsV0FBVyxFQUFFLHdCQVY2QjtBQVcxQ0MsTUFBQUEsS0FBSyxFQUFFLE1BWG1DLENBVzVCOztBQVg0QixLQUFsQyxDQUFaO0FBYUgsR0FkRDs7QUFnQkEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiUixNQUFBQSxZQUFZO0FBQ2Y7QUFKRSxHQUFQO0FBTUgsQ0F4QnVCLEVBQXhCLEMsQ0EwQkE7OztBQUNBUyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNYLEVBQUFBLGlCQUFpQixDQUFDUyxJQUFsQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9iYXNpYy5qcz9mMmFmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGb3Jtc1F1aWxsQmFzaWMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUJhc2ljID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHF1aWxsID0gbmV3IFF1aWxsKCcja3RfZG9jc19xdWlsbF9iYXNpYycsIHtcclxuICAgICAgICAgICAgbW9kdWxlczoge1xyXG4gICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogWzEsIDIsIGZhbHNlXVxyXG4gICAgICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgWydpbWFnZScsICdjb2RlLWJsb2NrJ11cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdUeXBlIHlvdXIgdGV4dCBoZXJlLi4uJyxcclxuICAgICAgICAgICAgdGhlbWU6ICdzbm93JyAvLyBvciAnYnViYmxlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RGb3Jtc1F1aWxsQmFzaWMuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURm9ybXNRdWlsbEJhc2ljIiwiZXhhbXBsZUJhc2ljIiwicXVpbGwiLCJRdWlsbCIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiaGVhZGVyIiwicGxhY2Vob2xkZXIiLCJ0aGVtZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/quill/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/quill/basic.js"]();
/******/ 	
/******/ })()
;