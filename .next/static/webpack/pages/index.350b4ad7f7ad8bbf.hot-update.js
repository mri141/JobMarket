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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./pages/components/Card/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CardSection = (param)=>{\n    let { title , subtitle , cards  } = param;\n    _s();\n    const [rowsToShow, setRowsToShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const handleShowMore = ()=>{\n        setRowsToShow(rowsToShow + 1);\n    };\n    const handleCardsToShow = ()=>{\n        const startIndex = rowsToShow - 1;\n        const endIndex = startIndex + 1;\n        return cards.slice(startIndex, endIndex);\n    };\n    console.log(rowsToShow);\n    console.log(\" what the fuck is happeniong handleCardsToShow\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-medium\",\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            Array.from({\n                length: rowsToShow\n            }, (_, i)=>{\n                const cardsToShow = handleCardsToShow();\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid  gap-4\",\n                    children: cardsToShow.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            image: card.image,\n                            title: card.title\n                        }, card.id, false, {\n                            fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined))\n                }, i, false, {\n                    fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-4\",\n                children: rowsToShow * 5 < cards.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-gray-200 text-gray-800 py-2 px-4 rounded-md\",\n                    onClick: handleShowMore,\n                    children: \"Show More\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardSection, \"KtfANyQ58ZkXg96GVMz1+nwVI7M=\");\n_c = CardSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardSection);\nvar _c;\n$RefreshReg$(_c, \"CardSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2pvYnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFjMUIsTUFBTUcsY0FBYyxTQUFrRDtRQUFqRCxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFvQjs7SUFDL0QsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1RLGlCQUFpQixJQUFNO1FBQzNCRCxjQUFjRCxhQUFhO0lBQzdCO0lBRUEsTUFBTUcsb0JBQW9CLElBQU07UUFDOUIsTUFBTUMsYUFBY0osYUFBYTtRQUNqQyxNQUFNSyxXQUFXRCxhQUFhO1FBQzlCLE9BQU9MLE1BQU1PLEtBQUssQ0FBQ0YsWUFBWUM7SUFFbkM7SUFDQUUsUUFBUUMsR0FBRyxDQUFDUjtJQUNaTyxRQUFRQyxHQUFHLENBQUM7SUFFVixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBc0JiOzs7Ozs7MEJBQ3BDLDhEQUFDZTtnQkFBR0YsV0FBVTswQkFBdUJaOzs7Ozs7WUFDcENlLE1BQU1DLElBQUksQ0FBQztnQkFBRUMsUUFBUWY7WUFBVyxHQUFHLENBQUNnQixHQUFHQyxJQUFNO2dCQUM1QyxNQUFNQyxjQUFjZjtnQkFDcEIscUJBQ0UsOERBQUNnQjtvQkFFQ1QsV0FBVTs4QkFLVFEsWUFBWUUsR0FBRyxDQUFDLENBQUNDLHFCQUNoQiw4REFBQzFCLDZDQUFJQTs0QkFBZTJCLE9BQU9ELEtBQUtDLEtBQUs7NEJBQUV6QixPQUFPd0IsS0FBS3hCLEtBQUs7MkJBQTdDd0IsS0FBS0UsRUFBRTs7Ozs7bUJBUGZOOzs7OztZQVdYOzBCQUNBLDhEQUFDRTtnQkFBSVQsV0FBVTswQkFDWlYsYUFBYSxJQUFJRCxNQUFNZ0IsTUFBTSxrQkFDNUIsOERBQUNTO29CQUNDZCxXQUFVO29CQUNWZSxTQUFTdkI7OEJBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FoRE1OO0tBQUFBO0FBa0ROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvam9icy50c3g/NmUzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZERhdGEge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FyZFNlY3Rpb25Qcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBzdWJ0aXRsZTogc3RyaW5nO1xyXG4gIGNhcmRzOiBDYXJkRGF0YVtdO1xyXG59XHJcblxyXG5jb25zdCBDYXJkU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgY2FyZHMgfTogQ2FyZFNlY3Rpb25Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtyb3dzVG9TaG93LCBzZXRSb3dzVG9TaG93XSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93TW9yZSA9ICgpID0+IHtcclxuICAgIHNldFJvd3NUb1Nob3cocm93c1RvU2hvdyArIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhcmRzVG9TaG93ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IChyb3dzVG9TaG93IC0gMSk7XHJcbiAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyAxO1xyXG4gICAgcmV0dXJuIGNhcmRzLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcclxuXHJcbn07XHJcbmNvbnNvbGUubG9nKHJvd3NUb1Nob3cpO1xyXG5jb25zb2xlLmxvZyhcIiB3aGF0IHRoZSBmdWNrIGlzIGhhcHBlbmlvbmcgaGFuZGxlQ2FyZHNUb1Nob3dcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLThcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZFwiPnt0aXRsZX08L2gxPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bVwiPntzdWJ0aXRsZX08L2gyPlxyXG4gICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogcm93c1RvU2hvdyB9LCAoXywgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmRzVG9TaG93ID0gaGFuZGxlQ2FyZHNUb1Nob3coKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgIGdhcC00XCJcclxuICAgICAgICAgICAgLy8gc3R5bGU9e3tcclxuICAgICAgICAgICAgLy8gICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDUsIDFmciknLFxyXG4gICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2FyZHNUb1Nob3cubWFwKChjYXJkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtjYXJkLmlkfSBpbWFnZT17Y2FyZC5pbWFnZX0gdGl0bGU9e2NhcmQudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgIHtyb3dzVG9TaG93ICogNSA8IGNhcmRzLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHRleHQtZ3JheS04MDAgcHktMiBweC00IHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93TW9yZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2hvdyBNb3JlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRTZWN0aW9uIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNhcmRzIiwicm93c1RvU2hvdyIsInNldFJvd3NUb1Nob3ciLCJoYW5kbGVTaG93TW9yZSIsImhhbmRsZUNhcmRzVG9TaG93Iiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsImNhcmRzVG9TaG93IiwiZGl2IiwibWFwIiwiY2FyZCIsImltYWdlIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/jobs.tsx\n"));

/***/ })

});