"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/jobs.tsx":
/*!***********************************!*\
  !*** ./pages/components/jobs.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./pages/components/Card/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CardSection = (param)=>{\n    let { title , subtitle , cards  } = param;\n    _s();\n    const [cardsToShow, setCardsToShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleShowMore = ()=>{\n        setCardsToShow(cardsToShow + 5);\n    };\n    const visibleCards = cards.slice(0, cardsToShow);\n    // group visibleCards into rows of 5 cards each\n    const rows = [];\n    for(let i = 0; i < visibleCards.length; i += 5){\n        rows.push(visibleCards.slice(i, i + 5));\n    }\n    // hide the \"Show More\" button if there are no more cards to show\n    if (cardsToShow >= cards.length) {\n        setShowButton(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-medium\",\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            rows.map((row)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-4\",\n                    style: {\n                        gridTemplateColumns: \"repeat(auto-fit, minmax(240px, 1fr))\"\n                    },\n                    children: row.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            image: card.image,\n                            title: card.title\n                        }, card.id, false, {\n                            fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined))\n                }, rowIndex, false, {\n                    fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)),\n            showButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-gray-200 text-gray-800 py-2 px-4 rounded-md mt-4\",\n                onClick: handleShowMore,\n                children: \"Show More\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardSection, \"0JL/y8NnonXU95xsHqkKZLDNQn4=\");\n_c = CardSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardSection);\nvar _c;\n$RefreshReg$(_c, \"CardSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2pvYnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFRMUIsTUFBTUcsY0FBYyxTQUFrRDtRQUFqRCxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFvQjs7SUFDL0QsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRWpELE1BQU1VLGlCQUFpQixJQUFNO1FBQzNCSCxlQUFlRCxjQUFjO0lBQy9CO0lBRUEsTUFBTUssZUFBZU4sTUFBTU8sS0FBSyxDQUFDLEdBQUdOO0lBRXBDLCtDQUErQztJQUMvQyxNQUFNTyxPQUFPLEVBQUU7SUFDZixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUgsYUFBYUksTUFBTSxFQUFFRCxLQUFLLEVBQUc7UUFDL0NELEtBQUtHLElBQUksQ0FBQ0wsYUFBYUMsS0FBSyxDQUFDRSxHQUFHQSxJQUFJO0lBQ3RDO0lBRUEsaUVBQWlFO0lBQ2pFLElBQUlSLGVBQWVELE1BQU1VLE1BQU0sRUFBRTtRQUMvQk4sY0FBYyxLQUFLO0lBQ3JCLENBQUM7SUFFRCxxQkFDRSw4REFBQ1E7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBc0JmOzs7Ozs7MEJBQ3BDLDhEQUFDaUI7Z0JBQUdGLFdBQVU7MEJBQXVCZDs7Ozs7O1lBQ3BDUyxLQUFLUSxHQUFHLENBQUMsQ0FBQ0Msb0JBQ1QsOERBQUNDO29CQUVDTCxXQUFVO29CQUNWTSxPQUFPO3dCQUNMQyxxQkFBcUI7b0JBQ3ZCOzhCQUVDSCxJQUFJRCxHQUFHLENBQUMsQ0FBQ0sscUJBQ1IsOERBQUN6Qiw2Q0FBSUE7NEJBQWUwQixPQUFPRCxLQUFLQyxLQUFLOzRCQUFFeEIsT0FBT3VCLEtBQUt2QixLQUFLOzJCQUE3Q3VCLEtBQUtFLEVBQUU7Ozs7O21CQVBmQzs7Ozs7WUFXUnJCLDRCQUNDLDhEQUFDc0I7Z0JBQ0NaLFdBQVU7Z0JBQ1ZhLFNBQVNyQjswQkFDVjs7Ozs7Ozs7Ozs7O0FBTVQ7R0FoRE1SO0tBQUFBO0FBa0ROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvam9icy50c3g/NmUzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZFNlY3Rpb25Qcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzdWJ0aXRsZTogc3RyaW5nO1xyXG4gIGNhcmRzOiB7IGlkOiBudW1iZXI7IGltYWdlOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfVtdO1xyXG59XHJcblxyXG5jb25zdCBDYXJkU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgY2FyZHMgfTogQ2FyZFNlY3Rpb25Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjYXJkc1RvU2hvdywgc2V0Q2FyZHNUb1Nob3ddID0gdXNlU3RhdGUoNSk7XHJcbiAgY29uc3QgW3Nob3dCdXR0b24sIHNldFNob3dCdXR0b25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dNb3JlID0gKCkgPT4ge1xyXG4gICAgc2V0Q2FyZHNUb1Nob3coY2FyZHNUb1Nob3cgKyA1KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2aXNpYmxlQ2FyZHMgPSBjYXJkcy5zbGljZSgwLCBjYXJkc1RvU2hvdyk7XHJcblxyXG4gIC8vIGdyb3VwIHZpc2libGVDYXJkcyBpbnRvIHJvd3Mgb2YgNSBjYXJkcyBlYWNoXHJcbiAgY29uc3Qgcm93cyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmlzaWJsZUNhcmRzLmxlbmd0aDsgaSArPSA1KSB7XHJcbiAgICByb3dzLnB1c2godmlzaWJsZUNhcmRzLnNsaWNlKGksIGkgKyA1KSk7XHJcbiAgfVxyXG5cclxuICAvLyBoaWRlIHRoZSBcIlNob3cgTW9yZVwiIGJ1dHRvbiBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjYXJkcyB0byBzaG93XHJcbiAgaWYgKGNhcmRzVG9TaG93ID49IGNhcmRzLmxlbmd0aCkge1xyXG4gICAgc2V0U2hvd0J1dHRvbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC04XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj57dGl0bGV9PC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW1cIj57c3VidGl0bGV9PC9oMj5cclxuICAgICAge3Jvd3MubWFwKChyb3csICkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17cm93SW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdhcC00XCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSknLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cm93Lm1hcCgoY2FyZCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2FyZCBrZXk9e2NhcmQuaWR9IGltYWdlPXtjYXJkLmltYWdlfSB0aXRsZT17Y2FyZC50aXRsZX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAge3Nob3dCdXR0b24gJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHRleHQtZ3JheS04MDAgcHktMiBweC00IHJvdW5kZWQtbWQgbXQtNFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93TW9yZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaG93IE1vcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRTZWN0aW9uIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNhcmRzIiwiY2FyZHNUb1Nob3ciLCJzZXRDYXJkc1RvU2hvdyIsInNob3dCdXR0b24iLCJzZXRTaG93QnV0dG9uIiwiaGFuZGxlU2hvd01vcmUiLCJ2aXNpYmxlQ2FyZHMiLCJzbGljZSIsInJvd3MiLCJpIiwibGVuZ3RoIiwicHVzaCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibWFwIiwicm93IiwiZGl2Iiwic3R5bGUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiY2FyZCIsImltYWdlIiwiaWQiLCJyb3dJbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/jobs.tsx\n"));

/***/ })

});