module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/header.js":
/*!************************************!*\
  !*** ./pages/components/header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./pages/components/layout.js");
var _jsxFileName = "C:\\Users\\DELL\\weatherapp\\pages\\components\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Head = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  text: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("link", {
  rel: "stylesheet",
  href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
  inverted: true,
  textAlign: "center",
  style: {
    minHeight: 50,
    padding: '1em 0em'
  },
  vertical: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
  as: "h1",
  content: "Weather Report",
  inverted: true,
  style: {
    fontSize: '4em',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: '.5em'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 10
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./pages/components/info.js":
/*!**********************************!*\
  !*** ./pages/components/info.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./pages/components/layout.js");
var _jsxFileName = "C:\\Users\\DELL\\weatherapp\\pages\\components\\info.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", e => {
      e.preventDefault(); //console.log("handlechange 1st:",this.state.city);
      //console.log(this.textInput.value)

      const newCity = this.state.city; //console.log("newcity:",newCity)
      //console.log('submitted');

      this.setState({
        city: newCity
      }); // console.log("after change state:",this.state.city)

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=a0a0e7eb9508b1beccefd9bd1207f35f`).then(res => res.json()).then(result => {
        this.setState({
          isLoaded: true,
          items: JSON.stringify(result),
          temp: result.main.temp,
          description: JSON.stringify(result.weather[0].description),
          temp_min: result.main.temp_min,
          temp_max: result.main.temp_max,
          humidity: result.main.humidity
        }); //console.log((result['main'].temp))
      }, // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }); // console.log((this.state.items['main']['temp']))
    });

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      city: "chennai",
      temp: "",
      description: "",
      temp_min: "",
      temp_max: "",
      humidity: ""
    };
  } //   componentDidMount() {
  //   fetch("https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=a0a0e7eb9508b1beccefd9bd1207f35f")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         const data = result;
  //         this.setState({
  //           isLoaded: true,
  //           items: data
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  //     console.log(this.state.items);
  // }


  renderCards() {
    const item = [{
      header: this.state.description,
      meta: "",
      description: "Weather Condition" // style: { overflowWrap: "break-word" },

    }, {
      header: this.state.temp - 273,
      meta: "",
      description: "Current temprature"
    }, {
      header: this.state.temp_min - 273,
      meta: "",
      description: "Minimum Temperature"
    }, {
      header: this.state.temp_max - 273,
      meta: "",
      description: "Maximum Temperature"
    }, {
      header: this.state.humidity,
      meta: "",
      description: "Humidity"
    }];
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
      items: item,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 12
      }
    });
  }

  render() {
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   <div>
    //   <form onSubmit={this.handleChange}>
    //           <input id="input" ref={(input) => { this.textInput = input; }} type="text" placeholder="Enter city Here" />
    //           <input type="submit" value="Submit" />
    // </form>
    // <h3 style={{marginLeft:"15px", marginRight:"15px"}}>Weather Details Details</h3>
    //   <Grid stackable style={{marginLeft:"15px", marginRight:"15px"}}>
    //     <Grid.Row>
    //       <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
    //     </Grid.Row>
    //   </Grid>
    // {console.log("body:",this.state.city)} 
    // {console.log("temp:",this.state.temp)}
    // {console.log("description:",this.state.description)}
    // </div>  
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }
    }, __jsx("link", {
      rel: "stylesheet",
      href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 10
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      fluid: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
      raised: true,
      size: "big",
      attached: "top",
      inverted: true,
      textAlign: "center",
      style: {
        minHeight: 120,
        marginLeft: "0px",
        marginRight: "0px",
        padding: '0em',
        minWidth: "300"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h1",
      content: "Weather Report",
      style: {
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '.5em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleChange,
      error: !!this.state.errorMessage,
      style: {
        marginTop: "15px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }
    }, __jsx("lable", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }, "Enter city name")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      size: "small",
      value: this.state.city,
      onChange: event => this.setState({
        city: event.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 13
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      OnClick: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 11
      }
    }, "Submit!")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      stackable: true,
      style: {
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "10px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, this.renderCards()))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyComponent);

/***/ }),

/***/ "./pages/components/layout.js":
/*!************************************!*\
  !*** ./pages/components/layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\DELL\\weatherapp\\pages\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  })));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./pages/components/header.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ "./pages/components/layout.js");
/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/info */ "./pages/components/info.js");
var _jsxFileName = "C:\\Users\\DELL\\weatherapp\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class WeatherIndex extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: {}
    };
  } // componentDidMount() {
  //   fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=b5b0475c91ae54e97e596206b2dd0700")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         const data = result;
  //         this.setState({
  //           isLoaded: true,
  //           items: data
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  //     console.log(this.state.items);
  // }


  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, __jsx(_components_info__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 14
      }
    })) // <div>
    //  { JSON.stringify(this.state.items) }
    // </div>
    ;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WeatherIndex);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\weatherapp\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9pbmZvLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJIZWFkIiwibWluSGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsIk15Q29tcG9uZW50IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NpdHkiLCJzdGF0ZSIsImNpdHkiLCJzZXRTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpc0xvYWRlZCIsIml0ZW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJ3ZWF0aGVyIiwidGVtcF9taW4iLCJ0ZW1wX21heCIsImh1bWlkaXR5IiwiZXJyb3IiLCJyZW5kZXJDYXJkcyIsIml0ZW0iLCJoZWFkZXIiLCJtZXRhIiwicmVuZGVyIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWluV2lkdGgiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvck1lc3NhZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiV2VhdGhlckluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBZSxRQUFNLEdBQUc7QUFDTCxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRyxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSCxDQURKLENBS0E7QUFDQTtBQUNBO0FBUEE7QUFTRDs7QUE3Q2dDOztBQWdEdEJTLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICAgIEhlYWRlcixcclxuICAgIENvbnRhaW5lcixTZWdtZW50XHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcclxuY29uc3QgSGVhZCA9ICgpPT4oXHJcbiAgIFxyXG4gICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDUwLCBwYWRkaW5nOiAnMWVtIDBlbScgfX1cclxuICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICA8SGVhZGVyXHJcbiAgICAgIGFzPSdoMSdcclxuICAgICAgY29udGVudD0nV2VhdGhlciBSZXBvcnQnXHJcbiAgICAgIGludmVydGVkXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6JzRlbScsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgIG1hcmdpblRvcDogJy41ZW0nLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDwvU2VnbWVudD5cclxuICAgIFxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWQiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERyb3Bkb3duLEdyaWQsQ2FyZCxDb250YWluZXIsU2VnbWVudCxIZWFkZXIsRm9ybSxJbnB1dCxCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XHJcblxyXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICBjaXR5OlwiY2hlbm5haVwiLFxyXG4gICAgICAgIHRlbXA6XCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgICAgIHRlbXBfbWluOlwiXCIsXHJcbiAgICAgICAgdGVtcF9tYXg6XCJcIixcclxuICAgICAgICBodW1pZGl0eTpcIlwiXHJcblxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIC8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBcclxuICAvLyAgIGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3RoaXMuc3RhdGUuY2l0eX0mYXBwaWQ9YTBhMGU3ZWI5NTA4YjFiZWNjZWZkOWJkMTIwN2YzNWZcIilcclxuICAvLyAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKFxyXG4gIC8vICAgICAgIChyZXN1bHQpID0+IHtcclxuICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQ7XHJcbiAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgLy8gICAgICAgICAgIGl0ZW1zOiBkYXRhXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG4gIC8vICAgICAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG4gIC8vICAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gIC8vICAgICAgIChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gIC8vICAgICAgICAgICBlcnJvclxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXRlbXMpO1xyXG4gIC8vIH1cclxuICBcclxuICAgIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiaGFuZGxlY2hhbmdlIDFzdDpcIix0aGlzLnN0YXRlLmNpdHkpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGV4dElucHV0LnZhbHVlKVxyXG4gICAgICBjb25zdCBuZXdDaXR5ID0gdGhpcy5zdGF0ZS5jaXR5O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwibmV3Y2l0eTpcIixuZXdDaXR5KVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCdzdWJtaXR0ZWQnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2l0eTpuZXdDaXR5fSlcclxuICAgICAvLyBjb25zb2xlLmxvZyhcImFmdGVyIGNoYW5nZSBzdGF0ZTpcIix0aGlzLnN0YXRlLmNpdHkpXHJcbiAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtuZXdDaXR5fSZhcHBpZD1hMGEwZTdlYjk1MDhiMWJlY2NlZmQ5YmQxMjA3ZjM1ZmApXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKFxyXG4gICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgIGl0ZW1zOiBKU09OLnN0cmluZ2lmeShyZXN1bHQpLFxyXG4gICAgICAgICAgdGVtcDogcmVzdWx0Lm1haW4udGVtcCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOkpTT04uc3RyaW5naWZ5KHJlc3VsdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKSxcclxuICAgICAgICAgIHRlbXBfbWluOnJlc3VsdC5tYWluLnRlbXBfbWluLFxyXG4gICAgICAgICAgdGVtcF9tYXg6cmVzdWx0Lm1haW4udGVtcF9tYXgsXHJcbiAgICAgICAgICBodW1pZGl0eTpyZXN1bHQubWFpbi5odW1pZGl0eSxcclxuICAgICAgIH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKHJlc3VsdFsnbWFpbiddLnRlbXApKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgLy8gY29uc29sZS5sb2coKHRoaXMuc3RhdGUuaXRlbXNbJ21haW4nXVsndGVtcCddKSlcclxuICAgfVxyXG5cclxuICAgcmVuZGVyQ2FyZHMoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWV0YTogIFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJXZWF0aGVyIENvbmRpdGlvblwiLFxyXG4gICAgICAgIC8vIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogdGhpcy5zdGF0ZS50ZW1wLTI3MyxcclxuICAgICAgICBtZXRhOlwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJDdXJyZW50IHRlbXByYXR1cmVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjp0aGlzLnN0YXRlLnRlbXBfbWluLTI3MyxcclxuICAgICAgICBtZXRhOlwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJNaW5pbXVtIFRlbXBlcmF0dXJlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6dGhpcy5zdGF0ZS50ZW1wX21heC0yNzMsXHJcbiAgICAgICAgbWV0YTpcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiTWF4aW11bSBUZW1wZXJhdHVyZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOnRoaXMuc3RhdGUuaHVtaWRpdHksXHJcbiAgICAgICAgbWV0YTpcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiSHVtaWRpdHlcIixcclxuICAgICAgfVxyXG4gICBcclxuICAgIF07XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW19IC8+O1xyXG4gIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgLy8gY29uc3QgeyBlcnJvciwgaXNMb2FkZWQsIGl0ZW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAvLyBpZiAoZXJyb3IpIHtcclxuICAgICAgLy8gICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAvLyB9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xyXG4gICAgICAvLyAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICA8ZGl2PlxyXG4gICAgICAgIC8vICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAvLyAgICAgICAgICAgPGlucHV0IGlkPVwiaW5wdXRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRleHRJbnB1dCA9IGlucHV0OyB9fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY2l0eSBIZXJlXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gPC9mb3JtPlxyXG4gICAgICAgIC8vIDxoMyBzdHlsZT17e21hcmdpbkxlZnQ6XCIxNXB4XCIsIG1hcmdpblJpZ2h0OlwiMTVweFwifX0+V2VhdGhlciBEZXRhaWxzIERldGFpbHM8L2gzPlxyXG4gICAgICAgIC8vICAgPEdyaWQgc3RhY2thYmxlIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgICAgICAvLyAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgIC8vICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAvLyAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAvLyAgIDwvR3JpZD5cclxuICAgICAgICAvLyB7Y29uc29sZS5sb2coXCJib2R5OlwiLHRoaXMuc3RhdGUuY2l0eSl9IFxyXG4gICAgICAgIC8vIHtjb25zb2xlLmxvZyhcInRlbXA6XCIsdGhpcy5zdGF0ZS50ZW1wKX1cclxuICAgICAgICAvLyB7Y29uc29sZS5sb2coXCJkZXNjcmlwdGlvbjpcIix0aGlzLnN0YXRlLmRlc2NyaXB0aW9uKX1cclxuICAgICAgICBcclxuICAgICAgICAvLyA8L2Rpdj4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgICAgICAvPiBcclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgcmFpc2VkXHJcbiAgICAgICAgICAgIHNpemU9XCJiaWdcIlxyXG4gICAgICAgICAgICBhdHRhY2hlZD1cInRvcFwiXHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDEyMCxtYXJnaW5MZWZ0OlwiMHB4XCIsbWFyZ2luUmlnaHQ6XCIwcHhcIiwgcGFkZGluZzogJzBlbScsbWluV2lkdGg6XCIzMDBcIiB9fVxyXG4gICAgICAgICAgPiBcclxuICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgICBjb250ZW50PSdXZWF0aGVyIFJlcG9ydCdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOic0ZW0nLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcuNWVtJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz4gXHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNoYW5nZX0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTVweFwifX0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGgyPjxsYWJsZT5FbnRlciBjaXR5IG5hbWU8L2xhYmxlPjwvaDI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgT25DbGljaz5cclxuICAgICAgICAgICAgICBTdWJtaXQhXHJcbiAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxHcmlkIHN0YWNrYWJsZSBzdHlsZT17e21hcmdpbkxlZnQ6XCIxNXB4XCIsIG1hcmdpblJpZ2h0OlwiMTVweFwiLCBtYXJnaW5Ub3A6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3RoaXMucmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi9jb21wb25lbnRzL2luZm8nO1xyXG5jbGFzcyBXZWF0aGVySW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICBpdGVtczoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIFxyXG4gIC8vICAgZmV0Y2goXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUJhbmdhbG9yZSZhcHBpZD1iNWIwNDc1YzkxYWU1NGU5N2U1OTYyMDZiMmRkMDcwMFwiKVxyXG4gIC8vICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oXHJcbiAgLy8gICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gIC8vICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdDtcclxuICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAvLyAgICAgICAgICAgaXRlbXM6IGRhdGFcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcbiAgLy8gICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgLy8gICAgICAgLy8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcbiAgLy8gICAgICAgKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgLy8gICAgICAgICAgIGVycm9yXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIClcclxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pdGVtcyk7XHJcbiAgLy8gfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgey8qIDxIZWFkZXIgLz4gKi99XHJcbiAgICAgICAgICAgICA8Qm9keS8+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgLy8gPGRpdj5cclxuICAgICAgLy8gIHsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5pdGVtcykgfVxyXG4gICAgICAvLyA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVySW5kZXg7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=