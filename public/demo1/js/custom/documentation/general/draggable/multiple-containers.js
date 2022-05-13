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

/***/ "./resources/assets/core/js/custom/documentation/general/draggable/multiple-containers.js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/draggable/multiple-containers.js ***!
  \************************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDraggableMultiple = function () {\n  // Private functions\n  var exampleMultiple = function exampleMultiple() {\n    var containers = document.querySelectorAll('.draggable-zone');\n\n    if (containers.length === 0) {\n      return false;\n    }\n\n    var swappable = new Sortable[\"default\"](containers, {\n      draggable: '.draggable',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleMultiple();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableMultiple.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kcmFnZ2FibGUvbXVsdGlwbGUtY29udGFpbmVycy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxtQkFBbUIsR0FBRyxZQUFXO0FBQ2pDO0FBQ0EsTUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFXO0FBQzdCLFFBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBakI7O0FBRUEsUUFBSUYsVUFBVSxDQUFDRyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLGFBQU8sS0FBUDtBQUNIOztBQUVELFFBQUlDLFNBQVMsR0FBRyxJQUFJQyxRQUFRLFdBQVosQ0FBcUJMLFVBQXJCLEVBQWlDO0FBQzdDTSxNQUFBQSxTQUFTLEVBQUUsWUFEa0M7QUFFN0NDLE1BQUFBLE1BQU0sRUFBRSw4QkFGcUM7QUFHN0NDLE1BQUFBLE1BQU0sRUFBRTtBQUNKO0FBQ0FDLFFBQUFBLFFBQVEsRUFBRSxNQUZOO0FBR0pDLFFBQUFBLG1CQUFtQixFQUFFO0FBSGpCO0FBSHFDLEtBQWpDLENBQWhCO0FBU0gsR0FoQkQ7O0FBa0JBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYlosTUFBQUEsZUFBZTtBQUNsQjtBQUpFLEdBQVA7QUFNSCxDQTFCeUIsRUFBMUIsQyxDQTRCQTs7O0FBQ0FhLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ2YsRUFBQUEsbUJBQW1CLENBQUNhLElBQXBCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2RyYWdnYWJsZS9tdWx0aXBsZS1jb250YWluZXJzLmpzPzFmMjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVERyYWdnYWJsZU11bHRpcGxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVNdWx0aXBsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZS16b25lJyk7XHJcblxyXG4gICAgICAgIGlmIChjb250YWluZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3dhcHBhYmxlID0gbmV3IFNvcnRhYmxlLmRlZmF1bHQoY29udGFpbmVycywge1xyXG4gICAgICAgICAgICBkcmFnZ2FibGU6ICcuZHJhZ2dhYmxlJyxcclxuICAgICAgICAgICAgaGFuZGxlOiAnLmRyYWdnYWJsZSAuZHJhZ2dhYmxlLWhhbmRsZScsXHJcbiAgICAgICAgICAgIG1pcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgLy9hcHBlbmRUbzogc2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJ2JvZHknLFxyXG4gICAgICAgICAgICAgICAgY29uc3RyYWluRGltZW5zaW9uczogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVNdWx0aXBsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVERyYWdnYWJsZU11bHRpcGxlLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVERyYWdnYWJsZU11bHRpcGxlIiwiZXhhbXBsZU11bHRpcGxlIiwiY29udGFpbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInN3YXBwYWJsZSIsIlNvcnRhYmxlIiwiZHJhZ2dhYmxlIiwiaGFuZGxlIiwibWlycm9yIiwiYXBwZW5kVG8iLCJjb25zdHJhaW5EaW1lbnNpb25zIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/draggable/multiple-containers.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/draggable/multiple-containers.js"]();
/******/ 	
/******/ })()
;