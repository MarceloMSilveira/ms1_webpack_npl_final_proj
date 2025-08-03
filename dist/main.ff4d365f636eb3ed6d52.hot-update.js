"use strict";
self["webpackHotUpdatems1_webpack_proj"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./frontend/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  width: 95%;
  height: 95%;
  display: flex;
}

#all-app {
  background-color: antiquewhite;
  margin: 30px auto;
  border: 1px solid;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 3fr 50px;
  padding: 30px;
  width: 60%;
}

header {
  display: flex;
  justify-content: space-between;
}

main {
  display: flex;
  flex-direction: column;
}

footer {
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
}

footer p {
  margin: 0px;
}

#analizing, #result p {
  margin-bottom: 0px;
}`, "",{"version":3,"sources":["webpack://./frontend/styles.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,WAAA;EACA,aAAA;AACF;;AACA;EACE,8BAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,0BAAA;EACA,iCAAA;EACA,aAAA;EACA,UAAA;AAEF;;AACA;EACE,aAAA;EACA,8BAAA;AAEF;;AACA;EACE,aAAA;EACA,sBAAA;AAEF;;AACA;EACE,aAAA;EACA,oBAAA;EACA,mBAAA;EACA,sBAAA;AAEF;;AACA;EACE,WAAA;AAEF;;AACA;EACE,kBAAA;AAEF","sourcesContent":["body{\r\n  width: 95%;\r\n  height: 95%;\r\n  display: flex;\r\n}\r\n#all-app{\r\n  background-color: antiquewhite;\r\n  margin: 30px auto;\r\n  border: 1px solid;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 50px 3fr 50px;\r\n  padding: 30px;\r\n  width: 60%;\r\n}\r\n\r\nheader{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nmain{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfooter{\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nfooter p {\r\n  margin: 0px;\r\n}\r\n\r\n#analizing, #result p {\r\n  margin-bottom: 0px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frontend/styles.scss */ "./frontend/styles.scss");
/* harmony import */ var _frontend_scripts_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frontend/scripts/index.js */ "./frontend/scripts/index.js");


// import callApi from "../frontend/scripts/callApi.js";
// import checkName from "../frontend/scripts/checkName.js";

// export {callApi, checkName};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3237d19d766e25cec510")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ff4d365f636eb3ed6d52.hot-update.js.map