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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./pages/components/Card/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CardSection = (param)=>{\n    let { title , subtitle , cards  } = param;\n    _s();\n    const [rowsToShow, setRowsToShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const handleShowMore = ()=>{\n        setRowsToShow(rowsToShow + 1);\n    };\n    const handleCardsToShow = ()=>{\n        const startIndex1 = rowsToShow - 1;\n        const endIndex1 = startIndex1 + 1;\n        return cards.slice(startIndex1, endIndex1);\n    };\n    console.log(cards.slice(startIndex, endIndex));\n    console.log(\" what the fuck is happeniong handleCardsToShow\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-medium\",\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            Array.from({\n                length: rowsToShow\n            }, (_, i)=>{\n                const cardsToShow = handleCardsToShow();\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-4\",\n                    style: {\n                        gridTemplateColumns: \"repeat(5, 1fr)\"\n                    },\n                    children: cardsToShow.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            image: card.image,\n                            title: card.title\n                        }, card.id, false, {\n                            fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined))\n                }, i, false, {\n                    fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-4\",\n                children: rowsToShow * 5 < cards.length && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-gray-200 text-gray-800 py-2 px-4 rounded-md\",\n                    onClick: handleShowMore,\n                    children: \"Show More\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardSection, \"KtfANyQ58ZkXg96GVMz1+nwVI7M=\");\n_c = CardSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardSection);\nvar _c;\n$RefreshReg$(_c, \"CardSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2pvYnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFjMUIsTUFBTUcsY0FBYyxTQUFrRDtRQUFqRCxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFvQjs7SUFDL0QsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1RLGlCQUFpQixJQUFNO1FBQzNCRCxjQUFjRCxhQUFhO0lBQzdCO0lBRUEsTUFBTUcsb0JBQW9CLElBQU07UUFDOUIsTUFBTUMsY0FBY0osYUFBYTtRQUNqQyxNQUFNSyxZQUFXRCxjQUFhO1FBQzlCLE9BQU9MLE1BQU1PLEtBQUssQ0FBQ0YsYUFBWUM7SUFFbkM7SUFDQUUsUUFBUUMsR0FBRyxDQUFDVCxNQUFNTyxLQUFLLENBQUNGLFlBQVlDO0lBQ3BDRSxRQUFRQyxHQUFHLENBQUM7SUFFVixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBc0JiOzs7Ozs7MEJBQ3BDLDhEQUFDZTtnQkFBR0YsV0FBVTswQkFBdUJaOzs7Ozs7WUFDcENlLE1BQU1DLElBQUksQ0FBQztnQkFBRUMsUUFBUWY7WUFBVyxHQUFHLENBQUNnQixHQUFHQyxJQUFNO2dCQUM1QyxNQUFNQyxjQUFjZjtnQkFDcEIscUJBQ0UsOERBQUNnQjtvQkFFQ1QsV0FBVTtvQkFDVlUsT0FBTzt3QkFDTEMscUJBQXFCO29CQUN2Qjs4QkFFQ0gsWUFBWUksR0FBRyxDQUFDLENBQUNDLHFCQUNoQiw4REFBQzVCLDZDQUFJQTs0QkFBZTZCLE9BQU9ELEtBQUtDLEtBQUs7NEJBQUUzQixPQUFPMEIsS0FBSzFCLEtBQUs7MkJBQTdDMEIsS0FBS0UsRUFBRTs7Ozs7bUJBUGZSOzs7OztZQVdYOzBCQUNBLDhEQUFDRTtnQkFBSVQsV0FBVTswQkFDWlYsYUFBYSxJQUFJRCxNQUFNZ0IsTUFBTSxrQkFDNUIsOERBQUNXO29CQUNDaEIsV0FBVTtvQkFDVmlCLFNBQVN6Qjs4QkFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWhETU47S0FBQUE7QUFrRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9qb2JzLnRzeD82ZTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcclxuXHJcbmludGVyZmFjZSBDYXJkRGF0YSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDYXJkU2VjdGlvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHN1YnRpdGxlOiBzdHJpbmc7XHJcbiAgY2FyZHM6IENhcmREYXRhW107XHJcbn1cclxuXHJcbmNvbnN0IENhcmRTZWN0aW9uID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBjYXJkcyB9OiBDYXJkU2VjdGlvblByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Jvd3NUb1Nob3csIHNldFJvd3NUb1Nob3ddID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dNb3JlID0gKCkgPT4ge1xyXG4gICAgc2V0Um93c1RvU2hvdyhyb3dzVG9TaG93ICsgMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FyZHNUb1Nob3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gKHJvd3NUb1Nob3cgLSAxKTtcclxuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIDE7XHJcbiAgICByZXR1cm4gY2FyZHMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG5cclxufTtcclxuY29uc29sZS5sb2coY2FyZHMuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpKTtcclxuY29uc29sZS5sb2coXCIgd2hhdCB0aGUgZnVjayBpcyBoYXBwZW5pb25nIGhhbmRsZUNhcmRzVG9TaG93XCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC04XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj57dGl0bGV9PC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW1cIj57c3VidGl0bGV9PC9oMj5cclxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IHJvd3NUb1Nob3cgfSwgKF8sIGkpID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkc1RvU2hvdyA9IGhhbmRsZUNhcmRzVG9TaG93KCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdhcC00XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KDUsIDFmciknLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2FyZHNUb1Nob3cubWFwKChjYXJkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtjYXJkLmlkfSBpbWFnZT17Y2FyZC5pbWFnZX0gdGl0bGU9e2NhcmQudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxyXG4gICAgICAgIHtyb3dzVG9TaG93ICogNSA8IGNhcmRzLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHRleHQtZ3JheS04MDAgcHktMiBweC00IHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93TW9yZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2hvdyBNb3JlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRTZWN0aW9uIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNhcmRzIiwicm93c1RvU2hvdyIsInNldFJvd3NUb1Nob3ciLCJoYW5kbGVTaG93TW9yZSIsImhhbmRsZUNhcmRzVG9TaG93Iiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic2xpY2UiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsImNhcmRzVG9TaG93IiwiZGl2Iiwic3R5bGUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFwIiwiY2FyZCIsImltYWdlIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/jobs.tsx\n"));

/***/ })

});