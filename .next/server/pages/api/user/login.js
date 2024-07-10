"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user/login";
exports.ids = ["pages/api/user/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fuser%2Flogin.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fuser%2Flogin.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_user_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/user/login.js */ \"(api)/./pages/api/user/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_user_login_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_user_login_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/user/login\",\n        pathname: \"/api/user/login\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_user_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnVzZXIlMkZsb2dpbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGdXNlciUyRmxvZ2luLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3NEO0FBQ3REO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxxREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMscURBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3lvLz81YjExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvdXNlci9sb2dpbi5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXIvbG9naW5cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2VyL2xvZ2luXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fuser%2Flogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst uri = process.env.MONGO_URI;\nconst connectDB = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(uri, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    console.log(\"DB connected....\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnQztBQUVoQyxNQUFNQyxNQUFJQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7QUFDOUIsTUFBTUMsWUFBVTtJQUNiLE1BQU1MLDZDQUFnQixDQUFDQyxLQUFJO1FBQ3ZCTSxpQkFBZ0I7UUFDaEJDLG9CQUFtQjtJQUN2QjtJQUNBQyxRQUFRQyxHQUFHLENBQUM7QUFDaEI7QUFDQSxpRUFBZUwsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL295by8uL2RiLmpzPzU2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB1cmk9cHJvY2Vzcy5lbnYuTU9OR09fVVJJO1xuIGNvbnN0IGNvbm5lY3REQj1hc3luYyAoKT0+e1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QodXJpLHtcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOnRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTp0cnVlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiREIgY29ubmVjdGVkLi4uLlwiKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiY29ubmVjdERCIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db.js\n");

/***/ }),

/***/ "(api)/./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    email: {\n        type: String,\n        required: true,\n        trim: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true,\n        trim: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || mongoose__WEBPACK_IMPORTED_MODULE_0__.model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlck1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQVksSUFBSUQsNENBQWUsQ0FBQztJQUNuQ0csTUFBSztRQUNKQyxNQUFLQztRQUNMQyxVQUFTO1FBQ1RDLE1BQUs7SUFDTjtJQUNBQyxPQUFNO1FBQ0xKLE1BQUtDO1FBQ0xDLFVBQVM7UUFDVEMsTUFBSztRQUNMRSxRQUFPO0lBQ1I7SUFDQUMsVUFBUztRQUNSTixNQUFLQztRQUNMQyxVQUFTO1FBQ1RDLE1BQUs7SUFDTjtBQUNILEdBQUU7SUFBQ0ksWUFBVztBQUFJO0FBSWxCLGlFQUFlWCw0Q0FBZSxFQUFFYSxRQUFPYiwyQ0FBYyxDQUFDLFFBQU9DLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9veW8vLi9tb2RlbHMvdXNlck1vZGVsLmpzPzk2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VyU2NoZW1hPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgIG5hbWU6e1xuICAgIHR5cGU6U3RyaW5nLFxuICAgIHJlcXVpcmVkOnRydWUsXG4gICAgdHJpbTp0cnVlXG4gICB9LFxuICAgZW1haWw6e1xuICAgIHR5cGU6U3RyaW5nLFxuICAgIHJlcXVpcmVkOnRydWUsXG4gICAgdHJpbTp0cnVlLFxuICAgIHVuaXF1ZTp0cnVlXG4gICB9LFxuICAgcGFzc3dvcmQ6e1xuICAgIHR5cGU6U3RyaW5nLFxuICAgIHJlcXVpcmVkOnRydWUsXG4gICAgdHJpbTp0cnVlXG4gICB9LFxufSx7dGltZXN0YW1wczp0cnVlfVxuKTtcblxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHM/LlVzZXJ8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIixVc2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/userModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/login.js":
/*!*********************************!*\
  !*** ./pages/api/user/login.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db */ \"(api)/./db.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(api)/./models/userModel.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        (0,_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const { email, password } = req.body;\n        if (!email || !password) {\n            return res.status(400).json({\n                msg: \"Email and password required !\"\n            });\n        }\n        const emailExists = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (!emailExists) {\n            return res.status(400).json({\n                msg: \"Please Register first !\"\n            });\n        }\n        const passwordMatched = await bcrypt__WEBPACK_IMPORTED_MODULE_2__.compare(password, emailExists.password);\n        if (passwordMatched) {\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__.sign({\n                token: emailExists._id\n            }, process.env.JWT_SECRET, {\n                expiresIn: \"30d\"\n            });\n            return res.status(200).json({\n                msg: \"Logged in successfully !\",\n                token\n            });\n        }\n        return res.status(400).json({\n            msg: \"Invalid Credentitials !\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNTO0FBQ1Y7QUFDRztBQUVmLGVBQWVJLFFBQVFDLEdBQUcsRUFBQ0MsR0FBRztJQUN6QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN2QlAsK0NBQVNBO1FBQ1QsTUFBTSxFQUFFUSxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSixJQUFJSyxJQUFJO1FBQ3BDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxVQUFVO1lBQ3ZCLE9BQU9ILElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUs7WUFBZ0M7UUFDckU7UUFDQSxNQUFNQyxjQUFjLE1BQU1iLGlFQUFZLENBQUM7WUFBRU87UUFBTTtRQUMvQyxJQUFJLENBQUNNLGFBQWE7WUFDaEIsT0FBT1IsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsS0FBSztZQUEwQjtRQUMvRDtRQUNBLE1BQU1HLGtCQUFrQixNQUFNZCwyQ0FBYyxDQUMxQ08sVUFDQUssWUFBWUwsUUFBUTtRQUV0QixJQUFJTyxpQkFBaUI7WUFDbkIsTUFBTUUsUUFBUWYsOENBQVEsQ0FBQztnQkFBRWUsT0FBT0osWUFBWU0sR0FBRztZQUFDLEdBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFFO2dCQUN4RUMsV0FBVztZQUNiO1lBQ0EsT0FBT2xCLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUs7Z0JBQTRCSztZQUFNO1FBQ3ZFO1FBQ0EsT0FBT1osSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxLQUFLO1FBQTBCO0lBQy9EO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9veW8vLi9wYWdlcy9hcGkvdXNlci9sb2dpbi5qcz9lOGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSBcIkAvZGJcIlxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJNb2RlbFwiXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLHJlcyl7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICAgIGNvbm5lY3REQigpO1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbXNnOiBcIkVtYWlsIGFuZCBwYXNzd29yZCByZXF1aXJlZCAhXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW1haWxFeGlzdHMgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcbiAgICAgICAgaWYgKCFlbWFpbEV4aXN0cykge1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1zZzogXCJQbGVhc2UgUmVnaXN0ZXIgZmlyc3QgIVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2hlZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgIGVtYWlsRXhpc3RzLnBhc3N3b3JkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXNzd29yZE1hdGNoZWQpIHtcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgdG9rZW46IGVtYWlsRXhpc3RzLl9pZCB9LHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogXCIzMGRcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtc2c6IFwiTG9nZ2VkIGluIHN1Y2Nlc3NmdWxseSAhXCIsIHRva2VuIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1zZzogXCJJbnZhbGlkIENyZWRlbnRpdGlhbHMgIVwiIH0pO1xuICAgICAgfVxufSJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJVc2VyIiwiYmNyeXB0Iiwiand0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIm1zZyIsImVtYWlsRXhpc3RzIiwiZmluZE9uZSIsInBhc3N3b3JkTWF0Y2hlZCIsImNvbXBhcmUiLCJ0b2tlbiIsInNpZ24iLCJfaWQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fuser%2Flogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();