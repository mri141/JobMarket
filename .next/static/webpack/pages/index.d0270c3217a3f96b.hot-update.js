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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/card */ \"./pages/components/card/card.tsx\");\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\nconst CardSection = (param)=>{\n    let { title , subtitle , cards  } = param;\n    _s();\n    const [cardsToShow, setCardsToShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleShowMore = ()=>{\n        setCardsToShow(cardsToShow + 5);\n    };\n    const handleCardsToShow = ()=>{\n        if (cardsToShow >= cards.length) {\n            setShowButton(false);\n        }\n        return cards.slice(0, cardsToShow);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-medium\",\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4\",\n                style: {\n                    gridTemplateColumns: \"repeat(auto-fit, minmax(240px, 1fr))\"\n                },\n                children: handleCardsToShow().map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        image: card.image,\n                        title: card.title\n                    }, card.id, false, {\n                        fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            showButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-gray-200 text-gray-800 py-2 px-4 rounded-md mt-4\",\n                onClick: handleShowMore,\n                children: \"Show More\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardSection, \"0JL/y8NnonXU95xsHqkKZLDNQn4=\");\n_c = CardSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardSection);\nvar _c;\n$RefreshReg$(_c, \"CardSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2pvYnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDd0M7QUFDVDtBQWtCL0IsTUFBTUcsY0FBYyxTQUFrRDtRQUFqRCxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFvQjs7SUFDL0QsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRWpELE1BQU1VLGlCQUFpQixJQUFNO1FBQzNCSCxlQUFlRCxjQUFjO0lBQy9CO0lBRUEsTUFBTUssb0JBQW9CLElBQU07UUFDOUIsSUFBSUwsZUFBZUQsTUFBTU8sTUFBTSxFQUFFO1lBQy9CSCxjQUFjLEtBQUs7UUFDckIsQ0FBQztRQUNELE9BQU9KLE1BQU1RLEtBQUssQ0FBQyxHQUFHUDtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDUTtRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQlo7Ozs7OzswQkFDcEMsOERBQUNjO2dCQUFHRixXQUFVOzBCQUF1Qlg7Ozs7OzswQkFDckMsOERBQUNjO2dCQUNDSCxXQUFVO2dCQUNWSSxPQUFPO29CQUNMQyxxQkFBcUI7Z0JBQ3ZCOzBCQUVDVCxvQkFBb0JVLEdBQUcsQ0FBQyxDQUFDQyxxQkFDeEIsOERBQUNyQixrREFBSUE7d0JBQWVzQixPQUFPRCxLQUFLQyxLQUFLO3dCQUFFcEIsT0FBT21CLEtBQUtuQixLQUFLO3VCQUE3Q21CLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7WUFHckJoQiw0QkFDQyw4REFBQ2lCO2dCQUNDVixXQUFVO2dCQUNWVyxTQUFTaEI7MEJBQ1Y7Ozs7Ozs7Ozs7OztBQU1UO0dBdkNNUjtLQUFBQTtBQXlDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2pvYnMudHN4PzZlMzIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkL2NhcmQnO1xyXG5cclxuLy8gaW50ZXJmYWNlIENhcmREYXRhIHtcclxuLy8gICBpZDogbnVtYmVyO1xyXG4vLyAgIGltYWdlOiBzdHJpbmc7XHJcbi8vICAgdGl0bGU6IHN0cmluZztcclxuLy8gfVxyXG5cclxuaW50ZXJmYWNlIENhcmRTZWN0aW9uUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc3VidGl0bGU6IHN0cmluZztcclxuICBjYXJkczogQ2FyZERhdGFbXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGNhcmRzOiB7IGtleTogbnVtYmVyOyBpbWFnZTogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH1bXTtcclxuICB9XHJcblxyXG5jb25zdCBDYXJkU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgY2FyZHMgfTogQ2FyZFNlY3Rpb25Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjYXJkc1RvU2hvdywgc2V0Q2FyZHNUb1Nob3ddID0gdXNlU3RhdGUoNSk7XHJcbiAgY29uc3QgW3Nob3dCdXR0b24sIHNldFNob3dCdXR0b25dID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dNb3JlID0gKCkgPT4ge1xyXG4gICAgc2V0Q2FyZHNUb1Nob3coY2FyZHNUb1Nob3cgKyA1KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXJkc1RvU2hvdyA9ICgpID0+IHtcclxuICAgIGlmIChjYXJkc1RvU2hvdyA+PSBjYXJkcy5sZW5ndGgpIHtcclxuICAgICAgc2V0U2hvd0J1dHRvbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FyZHMuc2xpY2UoMCwgY2FyZHNUb1Nob3cpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLThcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZFwiPnt0aXRsZX08L2gxPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bVwiPntzdWJ0aXRsZX08L2gyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNFwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSknLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7aGFuZGxlQ2FyZHNUb1Nob3coKS5tYXAoKGNhcmQpID0+IChcclxuICAgICAgICAgIDxDYXJkIGtleT17Y2FyZC5pZH0gaW1hZ2U9e2NhcmQuaW1hZ2V9IHRpdGxlPXtjYXJkLnRpdGxlfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dCdXR0b24gJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHRleHQtZ3JheS04MDAgcHktMiBweC00IHJvdW5kZWQtbWQgbXQtNFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93TW9yZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaG93IE1vcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFNlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRTZWN0aW9uIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNhcmRzIiwiY2FyZHNUb1Nob3ciLCJzZXRDYXJkc1RvU2hvdyIsInNob3dCdXR0b24iLCJzZXRTaG93QnV0dG9uIiwiaGFuZGxlU2hvd01vcmUiLCJoYW5kbGVDYXJkc1RvU2hvdyIsImxlbmd0aCIsInNsaWNlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJkaXYiLCJzdHlsZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXAiLCJjYXJkIiwiaW1hZ2UiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/jobs.tsx\n"));

/***/ })

});