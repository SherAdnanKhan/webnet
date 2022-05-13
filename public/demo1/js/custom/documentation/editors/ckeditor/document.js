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

/***/ "./resources/assets/core/js/custom/documentation/editors/ckeditor/document.js":
/*!************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/ckeditor/document.js ***!
  \************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsCKEditorDocument = function () {\n  // Private functions\n  var exampleDocument = function exampleDocument() {\n    DecoupledEditor.create(document.querySelector('#kt_docs_ckeditor_document')).then(function (editor) {\n      var toolbarContainer = document.querySelector('#kt_docs_ckeditor_document_toolbar');\n      toolbarContainer.appendChild(editor.ui.view.toolbar.element);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDocument();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsCKEditorDocument.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9ja2VkaXRvci9kb2N1bWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSx1QkFBdUIsR0FBRyxZQUFZO0FBQ3RDO0FBQ0EsTUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFZO0FBQzlCQyxJQUFBQSxlQUFlLENBQ1ZDLE1BREwsQ0FDWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQURaLEVBRUtDLElBRkwsQ0FFVSxVQUFBQyxNQUFNLEVBQUk7QUFDWixVQUFNQyxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG9DQUF2QixDQUF6QjtBQUVBRyxNQUFBQSxnQkFBZ0IsQ0FBQ0MsV0FBakIsQ0FBNkJGLE1BQU0sQ0FBQ0csRUFBUCxDQUFVQyxJQUFWLENBQWVDLE9BQWYsQ0FBdUJDLE9BQXBEO0FBQ0gsS0FOTCxXQU9XLFVBQUFDLEtBQUssRUFBSTtBQUNaQyxNQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNILEtBVEw7QUFVSCxHQVhEOztBQWFBLFNBQU87QUFDSDtBQUNBRSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZGYsTUFBQUEsZUFBZTtBQUNsQjtBQUpFLEdBQVA7QUFNSCxDQXJCNkIsRUFBOUIsQyxDQXVCQTs7O0FBQ0FnQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENsQixFQUFBQSx1QkFBdUIsQ0FBQ2dCLElBQXhCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9lZGl0b3JzL2NrZWRpdG9yL2RvY3VtZW50LmpzPzYyYzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZvcm1zQ0tFZGl0b3JEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZURvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIERlY291cGxlZEVkaXRvclxyXG4gICAgICAgICAgICAuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9kb2NzX2NrZWRpdG9yX2RvY3VtZW50JykpXHJcbiAgICAgICAgICAgIC50aGVuKGVkaXRvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b29sYmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2RvY3NfY2tlZGl0b3JfZG9jdW1lbnRfdG9vbGJhcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvb2xiYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLnVpLnZpZXcudG9vbGJhci5lbGVtZW50KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVEb2N1bWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGb3Jtc0NLRWRpdG9yRG9jdW1lbnQuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURm9ybXNDS0VkaXRvckRvY3VtZW50IiwiZXhhbXBsZURvY3VtZW50IiwiRGVjb3VwbGVkRWRpdG9yIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGhlbiIsImVkaXRvciIsInRvb2xiYXJDb250YWluZXIiLCJhcHBlbmRDaGlsZCIsInVpIiwidmlldyIsInRvb2xiYXIiLCJlbGVtZW50IiwiZXJyb3IiLCJjb25zb2xlIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/ckeditor/document.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/ckeditor/document.js"]();
/******/ 	
/******/ })()
;