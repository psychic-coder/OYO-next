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

/***/ "./components/Header1.jsx":
/*!********************************!*\
  !*** ./components/Header1.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Block */ \"./components/Block.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header1 = ()=>{\n    _s();\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const key = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"user\");\n        if (key) {\n            setAuth(true);\n            return;\n        }\n        setAuth(false);\n    }, [\n        auth\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleLogout = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].remove(\"user\");\n        setAuth(false);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/logo.png\",\n                alt: \"logo\",\n                width: 200,\n                height: 200,\n                className: \" w-28 h-28 \"\n            }, void 0, false, {\n                fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" h-full flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        img1: \"/members.jpg\",\n                        title: \"Become a member\",\n                        para: \"Additional 10% off on stays. \"\n                    }, void 0, false, {\n                        fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        img1: \"/business.png\",\n                        title: \"OYO for business\",\n                        para: \"Trusted by 5000 corporates. \"\n                    }, void 0, false, {\n                        fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        img1: \"/buildings.jpg\",\n                        title: \"List your property\",\n                        para: \"Start earning in 30 mins. \"\n                    }, void 0, false, {\n                        fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        img1: \"/call.png\",\n                        title: \"6261968762\",\n                        para: \"Call us to book now .\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center px-3 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/demo.svg\",\n                                alt: \"demo\",\n                                width: 200,\n                                height: 200,\n                                className: \" w-10 h-10 rounded-full mr-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \" font-bold cursor-pointer\",\n                                onClick: handleLogout,\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/login\",\n                                className: \" font-bold\",\n                                children: \"Login / Signup\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rohitganguly/Desktop/NextProject/oyo/components/Header1.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header1, \"cpjCFgeTVcwG3DUwcOatMDFv2A8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header1);\nvar _c;\n$RefreshReg$(_c, \"Header1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlcjEuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNIO0FBQ0M7QUFDRztBQUNRO0FBQ0k7QUFFNUMsTUFBTU8sVUFBVTs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssTUFBTVAscURBQVcsQ0FBQztRQUN4QixJQUFHTyxLQUFJO1lBQ0xELFFBQVE7WUFDUjtRQUNGO1FBQ0FBLFFBQVE7SUFDVixHQUFHO1FBQUNEO0tBQUs7SUFFVCxNQUFNSSxTQUFTUixzREFBU0E7SUFFeEIsTUFBTVMsZUFBZTtRQUNuQlYsd0RBQWMsQ0FBQztRQUNmTSxRQUFRO1FBQ1JHLE9BQU9HLElBQUksQ0FBQztJQUNkO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDakIsbURBQUtBO2dCQUNKa0IsS0FBSztnQkFDTEMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkosV0FBVTs7Ozs7OzBCQUVaLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNoQiw4Q0FBS0E7d0JBQ0ZxQixNQUFNO3dCQUNOQyxPQUFPO3dCQUNQQyxNQUFNOzs7Ozs7a0NBRVIsOERBQUN2Qiw4Q0FBS0E7d0JBQ0pxQixNQUFNO3dCQUNOQyxPQUFPO3dCQUNQQyxNQUFNOzs7Ozs7a0NBRVIsOERBQUN2Qiw4Q0FBS0E7d0JBQ0pxQixNQUFNO3dCQUNOQyxPQUFPO3dCQUNQQyxNQUFNOzs7Ozs7a0NBRVIsOERBQUN2Qiw4Q0FBS0E7d0JBQ0pxQixNQUFNO3dCQUNOQyxPQUFPO3dCQUNQQyxNQUFNOzs7Ozs7a0NBRVIsOERBQUNSO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2pCLG1EQUFLQTtnQ0FDSmtCLEtBQUs7Z0NBQ0xDLEtBQUk7Z0NBQ0pDLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JKLFdBQVU7Ozs7Ozs0QkFFWFQscUJBQ0MsOERBQUNpQjtnQ0FDQ1IsV0FBVTtnQ0FDVlMsU0FBU2I7MENBQ1Y7Ozs7OzBEQUlELDhEQUFDWCxrREFBSUE7Z0NBQUN5QixNQUFNO2dDQUFVVixXQUFVOzBDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekQ7R0F6RU1WOztRQVlXSCxrREFBU0E7OztLQVpwQkc7QUEyRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIxLmpzeD9jOGM0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4vQmxvY2tcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkZXIxID0gKCkgPT4ge1xuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBrZXkgPSBDb29raWVzLmdldChcInVzZXJcIik7XG4gICAgaWYoa2V5KXtcbiAgICAgIHNldEF1dGgodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldEF1dGgoZmFsc2UpO1xuICB9LCBbYXV0aF0pO1xuICBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwidXNlclwiKTtcbiAgICBzZXRBdXRoKGZhbHNlKTtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWItMiBib3JkZXItZ3JheS0zMDAgaXRlbXMtY2VudGVyIGgtMjQgcHgtMTBcIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e1wiL2xvZ28ucG5nXCJ9XG4gICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgY2xhc3NOYW1lPVwiIHctMjggaC0yOCBcIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCBmbGV4XCI+XG4gICAgICA8QmxvY2tcbiAgICAgICAgICBpbWcxPXtcIi9tZW1iZXJzLmpwZ1wifVxuICAgICAgICAgIHRpdGxlPXtcIkJlY29tZSBhIG1lbWJlclwifVxuICAgICAgICAgIHBhcmE9e1wiQWRkaXRpb25hbCAxMCUgb2ZmIG9uIHN0YXlzLiBcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJsb2NrXG4gICAgICAgICAgaW1nMT17XCIvYnVzaW5lc3MucG5nXCJ9XG4gICAgICAgICAgdGl0bGU9e1wiT1lPIGZvciBidXNpbmVzc1wifVxuICAgICAgICAgIHBhcmE9e1wiVHJ1c3RlZCBieSA1MDAwIGNvcnBvcmF0ZXMuIFwifVxuICAgICAgICAvPlxuICAgICAgICA8QmxvY2tcbiAgICAgICAgICBpbWcxPXtcIi9idWlsZGluZ3MuanBnXCJ9XG4gICAgICAgICAgdGl0bGU9e1wiTGlzdCB5b3VyIHByb3BlcnR5XCJ9XG4gICAgICAgICAgcGFyYT17XCJTdGFydCBlYXJuaW5nIGluIDMwIG1pbnMuIFwifVxuICAgICAgICAvPlxuICAgICAgICA8QmxvY2tcbiAgICAgICAgICBpbWcxPXtcIi9jYWxsLnBuZ1wifVxuICAgICAgICAgIHRpdGxlPXtcIjYyNjE5Njg3NjJcIn1cbiAgICAgICAgICBwYXJhPXtcIkNhbGwgdXMgdG8gYm9vayBub3cgLlwifVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e1wiL2RlbW8uc3ZnXCJ9XG4gICAgICAgICAgICBhbHQ9XCJkZW1vXCJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwIGgtMTAgcm91bmRlZC1mdWxsIG1yLTVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAge2F1dGggPyAoXG4gICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9sb2dpblwifSBjbGFzc05hbWU9XCIgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIExvZ2luIC8gU2lnbnVwXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjE7Il0sIm5hbWVzIjpbIkltYWdlIiwiQmxvY2siLCJMaW5rIiwiQ29va2llcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyMSIsImF1dGgiLCJzZXRBdXRoIiwia2V5IiwiZ2V0Iiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nMSIsInRpdGxlIiwicGFyYSIsImgzIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header1.jsx\n"));

/***/ })

});