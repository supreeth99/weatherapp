webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/info.js":
/*!**********************************!*\
  !*** ./pages/components/info.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout */ "./pages/components/layout.js");







var _jsxFileName = "C:\\Users\\DELL\\weatherapp\\pages\\components\\info.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var MyComponent = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyComponent, _Component);

  var _super = _createSuper(MyComponent);

  function MyComponent(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyComponent);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (e) {
      e.preventDefault(); //console.log("handlechange 1st:",this.state.city);
      //console.log(this.textInput.value)

      var newCity = _this.state.city; //console.log("newcity:",newCity)
      //console.log('submitted');

      _this.setState({
        city: newCity
      }); // console.log("after change state:",this.state.city)


      fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(newCity, "&appid=a0a0e7eb9508b1beccefd9bd1207f35f")).then(function (res) {
        return res.json();
      }).then(function (result) {
        _this.setState({
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
      function (error) {
        _this.setState({
          isLoaded: true,
          error: error
        });
      }); // console.log((this.state.items['main']['temp']))
    });

    _this.state = {
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
    return _this;
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


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyComponent, [{
    key: "renderCards",
    value: function renderCards() {
      var item = [{
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
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Group, {
        items: item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 12
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        fluid: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
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
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
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
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.handleChange,
        error: !!this.state.errorMessage,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }
      }, __jsx("lable", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 13
        }
      }, "Enter city name"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        value: this.state.city,
        onChange: function onChange(event) {
          return _this2.setState({
            city: event.target.value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true,
        OnClick: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }
      }, "Submit!")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        stackable: true,
        style: {
          marginLeft: "15px",
          marginRight: "15px",
          marginTop: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        width: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }
      }, this.renderCards()))));
    }
  }]);

  return MyComponent;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MyComponent);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2luZm8uanMiXSwibmFtZXMiOlsiTXlDb21wb25lbnQiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NpdHkiLCJzdGF0ZSIsImNpdHkiLCJzZXRTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpc0xvYWRlZCIsIml0ZW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJ3ZWF0aGVyIiwidGVtcF9taW4iLCJ0ZW1wX21heCIsImh1bWlkaXR5IiwiZXJyb3IiLCJpdGVtIiwiaGVhZGVyIiwibWV0YSIsIm1pbkhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJtaW5XaWR0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImhhbmRsZUNoYW5nZSIsImVycm9yTWVzc2FnZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUVGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkF5Q0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxPQUFDLENBQUNDLGNBQUYsR0FEb0IsQ0FFcEI7QUFDQTs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsS0FBTCxDQUFXQyxJQUEzQixDQUpvQixDQUtwQjtBQUNBOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDRCxZQUFJLEVBQUNGO0FBQU4sT0FBZCxFQVBvQixDQVFyQjs7O0FBQ0FJLFdBQUssNkRBQXNESixPQUF0RCw2Q0FBTCxDQUNBSyxJQURBLENBQ0ssVUFBQUMs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TCxDQUFXQyxJQUZwQjtBQUdFLGdCQUFRLEVBQUUsa0JBQUNpQyxLQUFEO0FBQUEsaUJBQ1IsTUFBSSxDQUFDaEMsUUFBTCxDQUFjO0FBQUVELGdCQUFJLEVBQUVpQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUM7QUFBckIsV0FBZCxDQURRO0FBQUEsU0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERixFQVdFLE1BQUMsd0RBQUQ7QUFBUSxlQUFPLE1BQWY7QUFBZ0IsZUFBTyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGLENBMUJBLEVBeUNBLE1BQUMsc0RBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGFBQUssRUFBRTtBQUFDWixvQkFBVSxFQUFDLE1BQVo7QUFBb0JDLHFCQUFXLEVBQUMsTUFBaEM7QUFBd0NNLG1CQUFTLEVBQUM7QUFBbEQsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLGFBQUssRUFBRSxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXlCLEtBQUtNLFdBQUwsRUFBekIsQ0FERixDQURGLENBekNBLENBREY7QUFpREM7Ozs7RUE1TG1CQywrQzs7QUErTFgzQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTIzNjMwMDRiNjkxNzY1OWVjMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRHJvcGRvd24sR3JpZCxDYXJkLENvbnRhaW5lcixTZWdtZW50LEhlYWRlcixGb3JtLElucHV0LEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcclxuXHJcbmNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIGNpdHk6XCJjaGVubmFpXCIsXHJcbiAgICAgICAgdGVtcDpcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICAgICAgdGVtcF9taW46XCJcIixcclxuICAgICAgICB0ZW1wX21heDpcIlwiLFxyXG4gICAgICAgIGh1bWlkaXR5OlwiXCJcclxuXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIFxyXG4gIC8vICAgZmV0Y2goXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dGhpcy5zdGF0ZS5jaXR5fSZhcHBpZD1hMGEwZTdlYjk1MDhiMWJlY2NlZmQ5YmQxMjA3ZjM1ZlwiKVxyXG4gIC8vICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oXHJcbiAgLy8gICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gIC8vICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdDtcclxuICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAvLyAgICAgICAgICAgaXRlbXM6IGRhdGFcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcbiAgLy8gICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgLy8gICAgICAgLy8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcbiAgLy8gICAgICAgKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgLy8gICAgICAgICAgIGVycm9yXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIClcclxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pdGVtcyk7XHJcbiAgLy8gfVxyXG4gIFxyXG4gICAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJoYW5kbGVjaGFuZ2UgMXN0OlwiLHRoaXMuc3RhdGUuY2l0eSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy50ZXh0SW5wdXQudmFsdWUpXHJcbiAgICAgIGNvbnN0IG5ld0NpdHkgPSB0aGlzLnN0YXRlLmNpdHk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJuZXdjaXR5OlwiLG5ld0NpdHkpXHJcbiAgICAgIC8vY29uc29sZS5sb2coJ3N1Ym1pdHRlZCcpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtjaXR5Om5ld0NpdHl9KVxyXG4gICAgIC8vIGNvbnNvbGUubG9nKFwiYWZ0ZXIgY2hhbmdlIHN0YXRlOlwiLHRoaXMuc3RhdGUuY2l0eSlcclxuICAgICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke25ld0NpdHl9JmFwcGlkPWEwYTBlN2ViOTUwOGIxYmVjY2VmZDliZDEyMDdmMzVmYClcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oXHJcbiAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgaXRlbXM6IEpTT04uc3RyaW5naWZ5KHJlc3VsdCksXHJcbiAgICAgICAgICB0ZW1wOiByZXN1bHQubWFpbi50ZW1wLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246SlNPTi5zdHJpbmdpZnkocmVzdWx0LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pLFxyXG4gICAgICAgICAgdGVtcF9taW46cmVzdWx0Lm1haW4udGVtcF9taW4sXHJcbiAgICAgICAgICB0ZW1wX21heDpyZXN1bHQubWFpbi50ZW1wX21heCxcclxuICAgICAgICAgIGh1bWlkaXR5OnJlc3VsdC5tYWluLmh1bWlkaXR5LFxyXG4gICAgICAgfSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygocmVzdWx0WydtYWluJ10udGVtcCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG4gICAgICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuICAgICAgLy8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAvLyBjb25zb2xlLmxvZygodGhpcy5zdGF0ZS5pdGVtc1snbWFpbiddWyd0ZW1wJ10pKVxyXG4gICB9XHJcblxyXG4gICByZW5kZXJDYXJkcygpIHtcclxuXHJcblxyXG4gICAgY29uc3QgaXRlbSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICBtZXRhOiAgXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIldlYXRoZXIgQ29uZGl0aW9uXCIsXHJcbiAgICAgICAgLy8gc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiB0aGlzLnN0YXRlLnRlbXAtMjczLFxyXG4gICAgICAgIG1ldGE6XCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkN1cnJlbnQgdGVtcHJhdHVyZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOnRoaXMuc3RhdGUudGVtcF9taW4tMjczLFxyXG4gICAgICAgIG1ldGE6XCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIk1pbmltdW0gVGVtcGVyYXR1cmVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjp0aGlzLnN0YXRlLnRlbXBfbWF4LTI3MyxcclxuICAgICAgICBtZXRhOlwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJNYXhpbXVtIFRlbXBlcmF0dXJlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6dGhpcy5zdGF0ZS5odW1pZGl0eSxcclxuICAgICAgICBtZXRhOlwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJIdW1pZGl0eVwiLFxyXG4gICAgICB9XHJcbiAgIFxyXG4gICAgXTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbX0gLz47XHJcbiAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAvLyBjb25zdCB7IGVycm9yLCBpc0xvYWRlZCwgaXRlbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIC8vIGlmIChlcnJvcikge1xyXG4gICAgICAvLyAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgIC8vIH0gZWxzZSBpZiAoIWlzTG9hZGVkKSB7XHJcbiAgICAgIC8vICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIDxkaXY+XHJcbiAgICAgICAgLy8gICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgIC8vICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB1dFwiIHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGV4dElucHV0ID0gaW5wdXQ7IH19IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjaXR5IEhlcmVcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICBcclxuICAgICAgICAvLyA8L2Zvcm0+XHJcbiAgICAgICAgLy8gPGgzIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5XZWF0aGVyIERldGFpbHMgRGV0YWlsczwvaDM+XHJcbiAgICAgICAgLy8gICA8R3JpZCBzdGFja2FibGUgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTVweFwiLCBtYXJnaW5SaWdodDpcIjE1cHhcIn19PlxyXG4gICAgICAgIC8vICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgLy8gICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3RoaXMucmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIC8vICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIC8vICAgPC9HcmlkPlxyXG4gICAgICAgIC8vIHtjb25zb2xlLmxvZyhcImJvZHk6XCIsdGhpcy5zdGF0ZS5jaXR5KX0gXHJcbiAgICAgICAgLy8ge2NvbnNvbGUubG9nKFwidGVtcDpcIix0aGlzLnN0YXRlLnRlbXApfVxyXG4gICAgICAgIC8vIHtjb25zb2xlLmxvZyhcImRlc2NyaXB0aW9uOlwiLHRoaXMuc3RhdGUuZGVzY3JpcHRpb24pfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDwvZGl2PiAgXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcclxuICAgICAgICAgIC8+IFxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICByYWlzZWRcclxuICAgICAgICAgICAgc2l6ZT1cImJpZ1wiXHJcbiAgICAgICAgICAgIGF0dGFjaGVkPVwidG9wXCJcclxuICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMTIwLG1hcmdpbkxlZnQ6XCIwcHhcIixtYXJnaW5SaWdodDpcIjBweFwiLCBwYWRkaW5nOiAnMGVtJyxtaW5XaWR0aDpcIjMwMFwiIH19XHJcbiAgICAgICAgICA+IFxyXG4gICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgIGFzPSdoMSdcclxuICAgICAgICAgIGNvbnRlbnQ9J1dlYXRoZXIgUmVwb3J0J1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6JzRlbScsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJy41ZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPiBcclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ2hhbmdlfSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmxlPkVudGVyIGNpdHkgbmFtZTwvbGFibGU+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgT25DbGljaz5cclxuICAgICAgICAgICAgICBTdWJtaXQhXHJcbiAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxHcmlkIHN0YWNrYWJsZSBzdHlsZT17e21hcmdpbkxlZnQ6XCIxNXB4XCIsIG1hcmdpblJpZ2h0OlwiMTVweFwiLCBtYXJnaW5Ub3A6XCIxMHB4XCJ9fT5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3RoaXMucmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=