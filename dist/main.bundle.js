/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./../images/bg-pattern-mobile-nav.svg */ "./src/assets/images/bg-pattern-mobile-nav.svg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./../images/bg-pattern-intro-right-desktop.svg */ "./src/assets/images/bg-pattern-intro-right-desktop.svg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./../images/bg-pattern-intro-right-mobile.svg */ "./src/assets/images/bg-pattern-intro-right-mobile.svg");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./../images/bg-pattern-intro-left-desktop.svg */ "./src/assets/images/bg-pattern-intro-left-desktop.svg");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./../images/bg-pattern-intro-left-mobile.svg */ "./src/assets/images/bg-pattern-intro-left-mobile.svg");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ./../images/bg-pattern-how-we-work-desktop.svg */ "./src/assets/images/bg-pattern-how-we-work-desktop.svg");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ./../images/bg-pattern-how-we-work-mobile.svg */ "./src/assets/images/bg-pattern-how-we-work-mobile.svg");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ./../images/bg-pattern-footer-desktop.svg */ "./src/assets/images/bg-pattern-footer-desktop.svg");
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ./../images/bg-pattern-footer-mobile.svg */ "./src/assets/images/bg-pattern-footer-mobile.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n:root {\n  --headings: 'DM Serif Display', serif;\n  --body: 'Karla', sans-serif;\n  --bg-body: rgb(253, 253, 253);\n  --dark-violet: rgb(45, 38, 64);\n  --grayish-blue: rgb(149, 169, 198);\n  --very-dark-violet: rgb(43, 39, 47);\n  --dark-grayish-violet: rgb(131, 125, 135);\n  --very-light-gray: rgb(250, 250, 250); }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.6rem;\n  background-color: var(--bg-body);\n  color: var(--very-dark-violet);\n  font-family: var(--body); }\n\na {\n  text-decoration: none;\n  text-transform: uppercase;\n  color: var(--dark-grayish-violet);\n  font-size: 1.4rem; }\n\nul li {\n  list-style-type: none; }\n\nh1,\nh2,\nh3 {\n  font-family: var(--headings);\n  font-weight: 400; }\n\n.btn {\n  border: 1px solid var(--very-dark-violet);\n  color: var(--very-dark-violet);\n  padding: 1rem 3rem;\n  font-size: 1.4rem; }\n\np {\n  color: var(--dark-grayish-violet);\n  line-height: 2.5rem; }\n\n/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\nheader {\n  height: 8rem;\n  display: grid;\n  grid-template-columns: 16rem 1fr 1fr 16rem;\n  align-items: center; }\n  @media (min-width: 768px) and (max-width: 1025px) {\n    header {\n      grid-template-columns: 5rem 1fr 1fr 5rem; } }\n  @media (max-width: 768px) {\n    header {\n      grid-template-columns: 1fr;\n      grid-template-rows: 6rem 90vh;\n      height: 6rem; } }\n  header .logo {\n    grid-column: 2 / 3; }\n    @media (max-width: 768px) {\n      header .logo {\n        grid-area: 1 / 1 / 2 / 2;\n        padding-left: 3rem; } }\n  header .header-nav {\n    grid-area: 1 / 3 / 2 / 4;\n    align-self: center; }\n    header .header-nav ul {\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n      @media (max-width: 768px) {\n        header .header-nav ul {\n          display: none; } }\n    header .header-nav-icon {\n      width: 3.2rem;\n      height: 3.2rem;\n      display: none; }\n      @media (max-width: 768px) {\n        header .header-nav-icon {\n          display: block;\n          margin-right: 1rem; } }\n    header .header-nav-icon-close {\n      display: none;\n      margin-right: 1rem; }\n  header .header-nav-mobile {\n    grid-area: 2 / 1 / 3 / 4;\n    background-color: var(--dark-violet);\n    position: relative;\n    z-index: 999;\n    height: 100%;\n    text-align: center;\n    overflow: hidden;\n    display: none; }\n    header .header-nav-mobile ul {\n      display: block; }\n      header .header-nav-mobile ul li {\n        padding: 1rem; }\n        header .header-nav-mobile ul li a {\n          color: var(--very-light-gray);\n          font-size: 1.8rem; }\n        header .header-nav-mobile ul li .btn {\n          border: 1px solid var(--very-light-gray);\n          padding: 1rem 8rem; }\n        header .header-nav-mobile ul li:first-child {\n          margin-top: 3rem; }\n        header .header-nav-mobile ul li:last-child {\n          margin: 2rem 0; }\n    header .header-nav-mobile::after {\n      content: \"\";\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n      background-position: bottom;\n      background-size: contain;\n      background-repeat: no-repeat;\n      width: 100%;\n      height: 100%;\n      z-index: 999;\n      position: absolute;\n      top: 0;\n      left: 0; }\n      @media (min-width: 768px) and (max-width: 1025px) {\n        header .header-nav-mobile::after {\n          top: 10rem; } }\n  header .header-nav-mobile.open {\n    display: block; }\n\n.hero {\n  color: var(--very-light-gray);\n  position: relative;\n  margin-bottom: 30rem; }\n  @media (max-width: 768px) {\n    .hero {\n      margin-bottom: 0; } }\n  .hero::before {\n    content: \"\";\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: right -8rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 45rem;\n    height: 55rem;\n    background-repeat: no-repeat; }\n    @media (max-width: 768px) {\n      .hero::before {\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n        background-position: right;\n        top: 80%; } }\n    @media (max-width: 480px) {\n      .hero::before {\n        top: 72%; } }\n  .hero::after {\n    content: \"\";\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position: top;\n    position: absolute;\n    top: 43rem;\n    left: 0;\n    width: 20rem;\n    height: 50rem; }\n    @media (max-width: 768px) {\n      .hero::after {\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n        background-position: left top;\n        top: 70%;\n        left: 0;\n        z-index: 0; } }\n    @media (max-width: 480px) {\n      .hero::after {\n        top: 41%; } }\n  .hero-content {\n    background-color: var(--dark-violet);\n    display: grid;\n    grid-template-rows: 10rem 30rem 20rem;\n    grid-template-columns: 16rem 1fr 1fr 16rem; }\n    @media (min-width: 768px) and (max-width: 1025px) {\n      .hero-content {\n        grid-template-columns: 5rem 1fr 1fr 5rem;\n        align-items: center; } }\n    @media (max-width: 768px) {\n      .hero-content {\n        grid-template-rows: repeat(2, auto);\n        grid-template-columns: 1fr; } }\n    .hero-content-text {\n      grid-area: 2 / 2 / 3 / 3; }\n      @media (max-width: 768px) {\n        .hero-content-text {\n          grid-area: 2 / 1 / 3 / 2;\n          text-align: center;\n          padding: 0 3rem;\n          margin: 7rem 0 10rem 0;\n          z-index: 1; } }\n      .hero-content-text hr {\n        color: var(--dark-grayish-violet);\n        width: 10rem;\n        height: 0;\n        margin-bottom: 7rem; }\n        @media (max-width: 768px) {\n          .hero-content-text hr {\n            display: none; } }\n      .hero-content-text h1 {\n        margin-bottom: 1rem;\n        font-size: 6rem;\n        line-height: 6rem; }\n        @media (max-width: 768px) {\n          .hero-content-text h1 {\n            font-size: 4.6rem;\n            line-height: 4.6rem; } }\n      .hero-content-text p {\n        margin-right: 2rem;\n        margin-bottom: 3rem;\n        color: var(--very-light-gray); }\n      .hero-content-text a {\n        border: 1px solid var(--very-light-gray);\n        color: var(--very-light-gray);\n        display: inline-block; }\n    .hero-content-img {\n      grid-area: 2 / 3 / 4 / 4; }\n      @media (min-width: 768px) and (max-width: 1025px) {\n        .hero-content-img {\n          grid-area: 3 / 3 / 4 / 4; } }\n      @media (max-width: 768px) {\n        .hero-content-img {\n          grid-area: 1 / 1 / 2 / 2;\n          z-index: 1; } }\n      .hero-content-img .src {\n        width: 100%;\n        height: auto; }\n\n.card {\n  display: grid;\n  grid-template-columns: 16rem 1fr 1fr 1fr 16rem;\n  grid-template-rows: 18rem 37rem;\n  align-items: center;\n  margin-top: 3rem; }\n  @media (min-width: 768px) and (max-width: 1025px) {\n    .card {\n      grid-template-columns: 5rem 1fr 1fr 1fr 5rem; } }\n  @media (max-width: 768px) {\n    .card {\n      grid-template-rows: 20rem repeat(3, 30rem);\n      grid-template-columns: 1fr;\n      margin: 0 2rem;\n      text-align: center; } }\n  .card hr {\n    display: none; }\n    @media (max-width: 768px) {\n      .card hr {\n        display: block;\n        color: var(--dark-grayish-violet);\n        width: 10rem;\n        height: 0;\n        margin: 0 auto;\n        grid-area: 1 / 1 / 2 / 2; } }\n  .card h2 {\n    grid-area: 1 / 2 / 2 / 5;\n    font-size: 7rem; }\n    @media (max-width: 768px) {\n      .card h2 {\n        grid-area: 1 / 1 / 2 / 2;\n        font-size: 4rem;\n        align-self: flex-end; } }\n  .card-1, .card-2, .card-3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    font-size: 1.8rem;\n    height: 100%;\n    margin-right: 4rem; }\n    @media (max-width: 768px) {\n      .card-1, .card-2, .card-3 {\n        font-size: 2rem;\n        text-align: center;\n        margin: 0 4rem; } }\n    .card-1 img, .card-2 img, .card-3 img {\n      width: 9rem; }\n      @media (max-width: 768px) {\n        .card-1 img, .card-2 img, .card-3 img {\n          width: 6rem;\n          align-self: center; } }\n    .card-1 h3, .card-2 h3, .card-3 h3 {\n      font-size: 3rem; }\n      @media (max-width: 768px) {\n        .card-1 h3, .card-2 h3, .card-3 h3 {\n          font-size: 2rem; } }\n  .card-1 {\n    grid-area: 2 / 2 / 3 / 3; }\n    @media (max-width: 768px) {\n      .card-1 {\n        grid-area: 2 / 1 / 3 / 2; } }\n  .card-2 {\n    grid-area: 2 / 3 / 3 / 4; }\n    @media (max-width: 768px) {\n      .card-2 {\n        grid-area: 3 / 1 / 4 / 2; } }\n  .card-3 {\n    grid-area: 2 / 4 / 3 / 5; }\n    @media (max-width: 768px) {\n      .card-3 {\n        grid-area: 4 / 1 / 5 / 2; } }\n\n.how-work {\n  display: grid;\n  grid-template-columns: 16rem 1fr 16rem;\n  margin: 8rem 0; }\n  @media (min-width: 768px) and (max-width: 1025px) {\n    .how-work {\n      grid-template-columns: 5rem 1fr 5rem; } }\n  @media (max-width: 768px) {\n    .how-work {\n      grid-template-columns: 1fr;\n      justify-items: center;\n      margin: 0; } }\n  .how-work-content {\n    grid-column: 2 / 3;\n    height: 25rem;\n    background-color: var(--dark-violet);\n    color: var(--very-light-gray);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 8rem;\n    position: relative; }\n    @media (max-width: 768px) {\n      .how-work-content {\n        grid-column: 1 / 2;\n        flex-direction: column;\n        justify-items: center;\n        width: 90%;\n        height: 34rem;\n        margin: 10rem 2rem;\n        padding: 8rem 0; } }\n    .how-work-content::before {\n      content: \"\";\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n      background-repeat: no-repeat;\n      background-position: right top;\n      width: 50%;\n      height: 25rem;\n      position: absolute;\n      top: 0;\n      right: 0; }\n      @media (max-width: 768px) {\n        .how-work-content::before {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n          width: 100%;\n          height: 100%;\n          z-index: 0; } }\n    .how-work-content-text {\n      font-size: 3.6rem;\n      width: 50%; }\n      @media (min-width: 768px) and (max-width: 1025px) {\n        .how-work-content-text {\n          font-size: 3rem; } }\n      @media (max-width: 768px) {\n        .how-work-content-text {\n          width: 80%;\n          line-height: 5.5rem; } }\n      @media (max-width: 480px) {\n        .how-work-content-text {\n          font-size: 2.5rem;\n          line-height: 4rem; } }\n    .how-work-content-btn {\n      z-index: 1; }\n      .how-work-content-btn .btn {\n        color: var(--very-light-gray);\n        border: 1px solid var(--very-light-gray); }\n\n.footer {\n  display: grid;\n  grid-template-columns: 16rem 1fr 16rem;\n  height: 40rem;\n  background-color: var(--very-light-gray);\n  position: relative; }\n  @media (min-width: 768px) and (max-width: 1025px) {\n    .footer {\n      grid-template-columns: 5rem 1fr 5rem; } }\n  @media (max-width: 768px) {\n    .footer {\n      grid-template-columns: 1fr;\n      height: 100%; } }\n  .footer::before {\n    content: \"\";\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n    background-repeat: no-repeat;\n    background-position: top left;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%; }\n    @media (max-width: 768px) {\n      .footer::before {\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + "); } }\n  .footer-content {\n    grid-column: 2 / 3;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    z-index: 1; }\n    @media (max-width: 768px) {\n      .footer-content {\n        grid-column: 1 / 2;\n        padding: 2rem;\n        justify-content: center; } }\n    .footer-content-logo {\n      width: 87%;\n      align-self: flex-end; }\n      @media (min-width: 768px) and (max-width: 1025px) {\n        .footer-content-logo {\n          width: 80%; } }\n      @media (max-width: 768px) {\n        .footer-content-logo {\n          width: 100%;\n          margin: 7rem 0 3rem 0; } }\n      @media (max-width: 768px) {\n        .footer-content-logo img {\n          margin: 0 auto;\n          display: block; } }\n    .footer-content-social-link {\n      width: 13%;\n      align-self: flex-end; }\n      @media (min-width: 768px) and (max-width: 1025px) {\n        .footer-content-social-link {\n          width: 20%; } }\n      @media (max-width: 768px) {\n        .footer-content-social-link {\n          width: 100%;\n          margin-bottom: 3rem; } }\n      .footer-content-social-link ul {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-end; }\n        @media (max-width: 768px) {\n          .footer-content-social-link ul {\n            width: 45%;\n            align-items: center;\n            margin: 0 auto; } }\n    .footer-content hr {\n      width: 100%;\n      color: var(--dark-grayish-violet); }\n      @media (max-width: 768px) {\n        .footer-content hr {\n          margin-bottom: 1rem; } }\n    .footer-content-our-company, .footer-content-others, .footer-content-help-me, .footer-content-contact {\n      width: 25%;\n      height: 15rem;\n      text-transform: uppercase;\n      font-size: 1.4rem; }\n      @media (max-width: 768px) {\n        .footer-content-our-company, .footer-content-others, .footer-content-help-me, .footer-content-contact {\n          width: 100%;\n          height: auto;\n          margin-top: 3rem; } }\n      .footer-content-our-company h4, .footer-content-others h4, .footer-content-help-me h4, .footer-content-contact h4 {\n        color: var(--dark-grayish-violet);\n        margin-bottom: 2rem; }\n        @media (max-width: 768px) {\n          .footer-content-our-company h4, .footer-content-others h4, .footer-content-help-me h4, .footer-content-contact h4 {\n            text-align: center; } }\n      .footer-content-our-company ul, .footer-content-others ul, .footer-content-help-me ul, .footer-content-contact ul {\n        display: flex;\n        flex-direction: column; }\n        @media (max-width: 768px) {\n          .footer-content-our-company ul, .footer-content-others ul, .footer-content-help-me ul, .footer-content-contact ul {\n            align-items: center; } }\n        .footer-content-our-company ul li, .footer-content-others ul li, .footer-content-help-me ul li, .footer-content-contact ul li {\n          margin-top: 1.2rem; }\n          .footer-content-our-company ul li a, .footer-content-others ul li a, .footer-content-help-me ul li a, .footer-content-contact ul li a {\n            color: var(--very-dark-violet); }\n    .footer-content-attribution {\n      margin-top: 5rem;\n      width: 100%;\n      text-align: center; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/images/bg-pattern-footer-desktop.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/bg-pattern-footer-desktop.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "700c39ea607592bfacaf790991a07f0b.svg");

/***/ }),

/***/ "./src/assets/images/bg-pattern-footer-mobile.svg":
/*!********************************************************!*\
  !*** ./src/assets/images/bg-pattern-footer-mobile.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9f048cf0d8710a041f70534fbc93ed7a.svg");

/***/ }),

/***/ "./src/assets/images/bg-pattern-how-we-work-desktop.svg":
/*!**************************************************************!*\
  !*** ./src/assets/images/bg-pattern-how-we-work-desktop.svg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eb268c33d9921cd960db6b6ffa65c644.svg");

/***/ }),

/***/ "./src/assets/images/bg-pattern-how-we-work-mobile.svg":
/*!*************************************************************!*\
  !*** ./src/assets/images/bg-pattern-how-we-work-mobile.svg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "96cd9d0635dc0b4420227ebc8668096d.svg");

/***/ }),

/***/ "./src/assets/images/bg-pattern-intro-left-desktop.svg":
/*!*************************************************************!*\
  !*** ./src/assets/images/bg-pattern-intro-left-desktop.svg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3a425b38f5531b055de49ec32822cf8c.svg");

/***/ }),

/***/ "./src/assets/images/bg-pattern-intro-left-mobile.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/bg-pattern-intro-left-mobile.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "111709ef92e6f76465a94048f9c12fad.svg");

/***/ }),

/***/ "./src/assets/images/bg-pattern-intro-right-desktop.svg":
/*!**************************************************************!*\
  !*** ./src/assets/images/bg-pattern-intro-right-desktop.svg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0c130b3f008bf9eb1d1b204d6bdd53e0.svg");

/***/ }),

/***/ "./src/assets/images/bg-pattern-intro-right-mobile.svg":
/*!*************************************************************!*\
  !*** ./src/assets/images/bg-pattern-intro-right-mobile.svg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0354e57129409ea983cd642c14acfb82.svg");

/***/ }),

/***/ "./src/assets/images/bg-pattern-mobile-nav.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/bg-pattern-mobile-nav.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b2fceba3d85314c104868fce09cd879c.svg");

/***/ }),

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.scss */ "./src/assets/styles/styles.scss");
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);

var iconMenu = document.querySelector('.header-nav-icon');
var iconMenuClose = document.querySelector('.header-nav-icon-close');
var navMenu = document.querySelector('nav');
var header = document.querySelector('header');
var isMenuOpen = false;
var mobileMenuDom;

var createMobileMenu = function createMobileMenu() {
  mobileMenuDom = document.createElement('nav');
  mobileMenuDom.classList.add('header-nav-mobile');
  mobileMenuDom.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  mobileMenuDom.append(navMenu.querySelector('ul').cloneNode(true));
  header.append(mobileMenuDom);
};

var openMenu = function openMenu() {
  iconMenu.style.display = "none";
  iconMenuClose.style.display = "block";

  if (mobileMenuDom) {} else {
    createMobileMenu();
  }

  mobileMenuDom.classList.add('open');
};

var closeMenu = function closeMenu() {
  iconMenu.style.display = "block";
  iconMenuClose.style.display = "none";
  mobileMenuDom.classList.remove('open');
};

var toogleMobileMenu = function toogleMobileMenu() {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }

  isMenuOpen = !isMenuOpen;
};

iconMenu.addEventListener("click", function (event) {
  event.stopPropagation();
  toogleMobileMenu();
});
window.addEventListener("click", function () {
  if (isMenuOpen) {
    toogleMobileMenu();
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map