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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./pages/components/Card/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CardSection = (param)=>{\n    let { title , subtitle , cards  } = param;\n    _s();\n    const [cardsToShow, setCardsToShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleShowMore = ()=>{\n        setCardsToShow(cardsToShow + 5);\n    };\n    const handleCardsToShow = ()=>{\n        if (cardsToShow >= cards.length) {\n            setShowButton(false);\n        }\n        return cards.slice(0, cardsToShow);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-medium\",\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4\",\n                style: {\n                    gridTemplateColumns: \"repeat(auto-fit, minmax(240px, 1fr))\"\n                },\n                children: handleCardsToShow().map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        image: card.image,\n                        title: card.title\n                    }, card.id, false, {\n                        fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            showButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-gray-200 text-gray-800 py-2 px-4 rounded-md mt-4\",\n                onClick: handleShowMore,\n                children: \"Show More\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Development\\\\job-market\\\\pages\\\\components\\\\jobs.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CardSection, \"0JL/y8NnonXU95xsHqkKZLDNQn4=\");\n_c = CardSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardSection);\nvar _c;\n$RefreshReg$(_c, \"CardSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2pvYnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFjMUIsTUFBTUcsY0FBYyxTQUFrRDtRQUFqRCxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFvQjs7SUFDL0QsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRWpELE1BQU1VLGlCQUFpQixJQUFNO1FBQzNCSCxlQUFlRCxjQUFjO0lBQy9CO0lBRUEsTUFBTUssb0JBQW9CLElBQU07UUFDOUIsSUFBSUwsZUFBZUQsTUFBTU8sTUFBTSxFQUFFO1lBQy9CSCxjQUFjLEtBQUs7UUFDckIsQ0FBQztRQUNELE9BQU9KLE1BQU1RLEtBQUssQ0FBQyxHQUFHUDtJQUN4QjtJQUVBLHFCQUNFLDhEQUFDUTtRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQlo7Ozs7OzswQkFDcEMsOERBQUNjO2dCQUFHRixXQUFVOzBCQUF1Qlg7Ozs7OzswQkFDckMsOERBQUNjO2dCQUNDSCxXQUFVO2dCQUNWSSxPQUFPO29CQUNMQyxxQkFBcUI7Z0JBQ3ZCOzBCQUVDVCxvQkFBb0JVLEdBQUcsQ0FBQyxDQUFDQyxxQkFDeEIsOERBQUNyQiw2Q0FBSUE7d0JBQWVzQixPQUFPRCxLQUFLQyxLQUFLO3dCQUFFcEIsT0FBT21CLEtBQUtuQixLQUFLO3VCQUE3Q21CLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7WUFHckJoQiw0QkFDQyw4REFBQ2lCO2dCQUNDVixXQUFVO2dCQUNWVyxTQUFTaEI7MEJBQ1Y7Ozs7Ozs7Ozs7OztBQU1UO0dBdkNNUjtLQUFBQTtBQXlDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2pvYnMudHN4PzZlMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xyXG5cclxuaW50ZXJmYWNlIENhcmREYXRhIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIENhcmRTZWN0aW9uUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc3VidGl0bGU6IHN0cmluZztcclxuICBjYXJkczogQ2FyZERhdGFbXTtcclxufVxyXG5cclxuY29uc3QgQ2FyZFNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGNhcmRzIH06IENhcmRTZWN0aW9uUHJvcHMpID0+IHtcclxuICBjb25zdCBbY2FyZHNUb1Nob3csIHNldENhcmRzVG9TaG93XSA9IHVzZVN0YXRlKDUpO1xyXG4gIGNvbnN0IFtzaG93QnV0dG9uLCBzZXRTaG93QnV0dG9uXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93TW9yZSA9ICgpID0+IHtcclxuICAgIHNldENhcmRzVG9TaG93KGNhcmRzVG9TaG93ICsgNSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FyZHNUb1Nob3cgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2FyZHNUb1Nob3cgPj0gY2FyZHMubGVuZ3RoKSB7XHJcbiAgICAgIHNldFNob3dCdXR0b24oZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhcmRzLnNsaWNlKDAsIGNhcmRzVG9TaG93KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicC04XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj57dGl0bGV9PC9oMT5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW1cIj57c3VidGl0bGV9PC9oMj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImdyaWQgZ2FwLTRcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2hhbmRsZUNhcmRzVG9TaG93KCkubWFwKChjYXJkKSA9PiAoXHJcbiAgICAgICAgICA8Q2FyZCBrZXk9e2NhcmQuaWR9IGltYWdlPXtjYXJkLmltYWdlfSB0aXRsZT17Y2FyZC50aXRsZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93QnV0dG9uICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCB0ZXh0LWdyYXktODAwIHB5LTIgcHgtNCByb3VuZGVkLW1kIG10LTRcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2hvd01vcmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU2hvdyBNb3JlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRTZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJDYXJkU2VjdGlvbiIsInRpdGxlIiwic3VidGl0bGUiLCJjYXJkcyIsImNhcmRzVG9TaG93Iiwic2V0Q2FyZHNUb1Nob3ciLCJzaG93QnV0dG9uIiwic2V0U2hvd0J1dHRvbiIsImhhbmRsZVNob3dNb3JlIiwiaGFuZGxlQ2FyZHNUb1Nob3ciLCJsZW5ndGgiLCJzbGljZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiZGl2Iiwic3R5bGUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFwIiwiY2FyZCIsImltYWdlIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/jobs.tsx\n"));

/***/ })

});