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

/***/ "./resources/assets/core/js/custom/documentation/general/draggable/cards.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/draggable/cards.js ***!
  \**********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDraggableCards = function () {\n  // Private functions\n  var exampleCards = function exampleCards() {\n    var containers = document.querySelectorAll('.draggable-zone');\n\n    if (containers.length === 0) {\n      return false;\n    }\n\n    var swappable = new Sortable[\"default\"](containers, {\n      draggable: '.draggable',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleCards();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableCards.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kcmFnZ2FibGUvY2FyZHMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBVztBQUM5QjtBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVc7QUFDMUIsUUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFqQjs7QUFFQSxRQUFJRixVQUFVLENBQUNHLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBSUMsU0FBUyxHQUFHLElBQUlDLFFBQVEsV0FBWixDQUFxQkwsVUFBckIsRUFBaUM7QUFDN0NNLE1BQUFBLFNBQVMsRUFBRSxZQURrQztBQUU3Q0MsTUFBQUEsTUFBTSxFQUFFLDhCQUZxQztBQUc3Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQ0o7QUFDQUMsUUFBQUEsUUFBUSxFQUFFLE1BRk47QUFHSkMsUUFBQUEsbUJBQW1CLEVBQUU7QUFIakI7QUFIcUMsS0FBakMsQ0FBaEI7QUFTSCxHQWhCRDs7QUFrQkEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiWixNQUFBQSxZQUFZO0FBQ2Y7QUFKRSxHQUFQO0FBTUgsQ0ExQnNCLEVBQXZCLEMsQ0E0QkE7OztBQUNBYSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNmLEVBQUFBLGdCQUFnQixDQUFDYSxJQUFqQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kcmFnZ2FibGUvY2FyZHMuanM/OGQ2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURHJhZ2dhYmxlQ2FyZHMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUNhcmRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlLXpvbmUnKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzd2FwcGFibGUgPSBuZXcgU29ydGFibGUuZGVmYXVsdChjb250YWluZXJzLCB7XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogJy5kcmFnZ2FibGUnLFxyXG4gICAgICAgICAgICBoYW5kbGU6ICcuZHJhZ2dhYmxlIC5kcmFnZ2FibGUtaGFuZGxlJyxcclxuICAgICAgICAgICAgbWlycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAvL2FwcGVuZFRvOiBzZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnYm9keScsXHJcbiAgICAgICAgICAgICAgICBjb25zdHJhaW5EaW1lbnNpb25zOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZXhhbXBsZUNhcmRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtURHJhZ2dhYmxlQ2FyZHMuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURHJhZ2dhYmxlQ2FyZHMiLCJleGFtcGxlQ2FyZHMiLCJjb250YWluZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic3dhcHBhYmxlIiwiU29ydGFibGUiLCJkcmFnZ2FibGUiLCJoYW5kbGUiLCJtaXJyb3IiLCJhcHBlbmRUbyIsImNvbnN0cmFpbkRpbWVuc2lvbnMiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/draggable/cards.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/draggable/cards.js"]();
/******/ 	
/******/ })()
;