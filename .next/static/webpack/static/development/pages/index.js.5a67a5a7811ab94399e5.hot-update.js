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
        style: {
          marginTop: "15px"
        },
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
      }, "Enter city name")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        fluid: true,
        size: "small",
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
          lineNumber: 183,
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
          lineNumber: 187,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        width: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2luZm8uanMiXSwibmFtZXMiOlsiTXlDb21wb25lbnQiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NpdHkiLCJzdGF0ZSIsImNpdHkiLCJzZXRTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpc0xvYWRlZCIsIml0ZW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJ3ZWF0aGVyIiwidGVtcF9taW4iLCJ0ZW1wX21heCIsImh1bWlkaXR5IiwiZXJyb3IiLCJpdGVtIiwiaGVhZGVyIiwibWV0YSIsIm1pbkhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJtaW5XaWR0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImhhbmRsZUNoYW5nZSIsImVycm9yTWVzc2FnZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUVGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkF5Q0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxPQUFDLENBQUNDLGNBQUYsR0FEb0IsQ0FFcEI7QUFDQTs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsS0FBTCxDQUFXQyxJQUEzQixDQUpvQixDQUtwQjtBQUNBOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDRCxZQUFJLEVBQUNGO0FBQU4sT0FBZCxFQVBvQixDQVFyQjs7O0FBQ0FJLFdBQUssNkRBQXNESixPQUF0RCw2Q0FBTCxDQUNBSyxJQURBLENBQ0ssVUFBQUMs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STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFKLENBREYsRUFFRSxNQUFDLHVEQUFEO0FBQ0UsYUFBSyxNQURQO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxhQUFLLEVBQUUsS0FBSy9CLEtBQUwsQ0FBV0MsSUFIcEI7QUFJRSxnQkFBUSxFQUFFLGtCQUFDaUMsS0FBRDtBQUFBLGlCQUNSLE1BQUksQ0FBQ2hDLFFBQUwsQ0FBYztBQUFFRCxnQkFBSSxFQUFFaUMsS0FBSyxDQUFDQyxNQUFOLENBQWFDO0FBQXJCLFdBQWQsQ0FEUTtBQUFBLFNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREYsRUFZRSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxNQUFmO0FBQWdCLGVBQU8sTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixDQTFCQSxFQTBDQSxNQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixhQUFLLEVBQUU7QUFBQ1osb0JBQVUsRUFBQyxNQUFaO0FBQW9CQyxxQkFBVyxFQUFDLE1BQWhDO0FBQXdDTSxtQkFBUyxFQUFDO0FBQWxELFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHNEQUFELENBQU0sR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxhQUFLLEVBQUUsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF5QixLQUFLTSxXQUFMLEVBQXpCLENBREYsQ0FERixDQTFDQSxDQURGO0FBa0RDOzs7O0VBN0xtQkMsK0M7O0FBZ01YM0MsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjVhNjdhNWE3ODExYWI5NDM5OWU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERyb3Bkb3duLEdyaWQsQ2FyZCxDb250YWluZXIsU2VnbWVudCxIZWFkZXIsRm9ybSxJbnB1dCxCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XHJcblxyXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICBjaXR5OlwiY2hlbm5haVwiLFxyXG4gICAgICAgIHRlbXA6XCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgICAgIHRlbXBfbWluOlwiXCIsXHJcbiAgICAgICAgdGVtcF9tYXg6XCJcIixcclxuICAgICAgICBodW1pZGl0eTpcIlwiXHJcblxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIC8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBcclxuICAvLyAgIGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3RoaXMuc3RhdGUuY2l0eX0mYXBwaWQ9YTBhMGU3ZWI5NTA4YjFiZWNjZWZkOWJkMTIwN2YzNWZcIilcclxuICAvLyAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKFxyXG4gIC8vICAgICAgIChyZXN1bHQpID0+IHtcclxuICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQ7XHJcbiAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgLy8gICAgICAgICAgIGl0ZW1zOiBkYXRhXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG4gIC8vICAgICAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG4gIC8vICAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gIC8vICAgICAgIChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gIC8vICAgICAgICAgICBlcnJvclxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXRlbXMpO1xyXG4gIC8vIH1cclxuICBcclxuICAgIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiaGFuZGxlY2hhbmdlIDFzdDpcIix0aGlzLnN0YXRlLmNpdHkpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGV4dElucHV0LnZhbHVlKVxyXG4gICAgICBjb25zdCBuZXdDaXR5ID0gdGhpcy5zdGF0ZS5jaXR5O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwibmV3Y2l0eTpcIixuZXdDaXR5KVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCdzdWJtaXR0ZWQnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2l0eTpuZXdDaXR5fSlcclxuICAgICAvLyBjb25zb2xlLmxvZyhcImFmdGVyIGNoYW5nZSBzdGF0ZTpcIix0aGlzLnN0YXRlLmNpdHkpXHJcbiAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtuZXdDaXR5fSZhcHBpZD1hMGEwZTdlYjk1MDhiMWJlY2NlZmQ5YmQxMjA3ZjM1ZmApXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKFxyXG4gICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgIGl0ZW1zOiBKU09OLnN0cmluZ2lmeShyZXN1bHQpLFxyXG4gICAgICAgICAgdGVtcDogcmVzdWx0Lm1haW4udGVtcCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOkpTT04uc3RyaW5naWZ5KHJlc3VsdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKSxcclxuICAgICAgICAgIHRlbXBfbWluOnJlc3VsdC5tYWluLnRlbXBfbWluLFxyXG4gICAgICAgICAgdGVtcF9tYXg6cmVzdWx0Lm1haW4udGVtcF9tYXgsXHJcbiAgICAgICAgICBodW1pZGl0eTpyZXN1bHQubWFpbi5odW1pZGl0eSxcclxuICAgICAgIH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKHJlc3VsdFsnbWFpbiddLnRlbXApKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgLy8gY29uc29sZS5sb2coKHRoaXMuc3RhdGUuaXRlbXNbJ21haW4nXVsndGVtcCddKSlcclxuICAgfVxyXG5cclxuICAgcmVuZGVyQ2FyZHMoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWV0YTogIFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJXZWF0aGVyIENvbmRpdGlvblwiLFxyXG4gICAgICAgIC8vIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogdGhpcy5zdGF0ZS50ZW1wLTI3MyxcclxuICAgICAgICBtZXRhOlwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJDdXJyZW50IHRlbXByYXR1cmVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjp0aGlzLnN0YXRlLnRlbXBfbWluLTI3MyxcclxuICAgICAgICBtZXRhOlwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJNaW5pbXVtIFRlbXBlcmF0dXJlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6dGhpcy5zdGF0ZS50ZW1wX21heC0yNzMsXHJcbiAgICAgICAgbWV0YTpcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiTWF4aW11bSBUZW1wZXJhdHVyZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOnRoaXMuc3RhdGUuaHVtaWRpdHksXHJcbiAgICAgICAgbWV0YTpcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiSHVtaWRpdHlcIixcclxuICAgICAgfVxyXG4gICBcclxuICAgIF07XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW19IC8+O1xyXG4gIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgLy8gY29uc3QgeyBlcnJvciwgaXNMb2FkZWQsIGl0ZW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAvLyBpZiAoZXJyb3IpIHtcclxuICAgICAgLy8gICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAvLyB9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xyXG4gICAgICAvLyAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICA8ZGl2PlxyXG4gICAgICAgIC8vICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAvLyAgICAgICAgICAgPGlucHV0IGlkPVwiaW5wdXRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRleHRJbnB1dCA9IGlucHV0OyB9fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY2l0eSBIZXJlXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gPC9mb3JtPlxyXG4gICAgICAgIC8vIDxoMyBzdHlsZT17e21hcmdpbkxlZnQ6XCIxNXB4XCIsIG1hcmdpblJpZ2h0OlwiMTVweFwifX0+V2VhdGhlciBEZXRhaWxzIERldGFpbHM8L2gzPlxyXG4gICAgICAgIC8vICAgPEdyaWQgc3RhY2thYmxlIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgICAgICAvLyAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgIC8vICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAvLyAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAvLyAgIDwvR3JpZD5cclxuICAgICAgICAvLyB7Y29uc29sZS5sb2coXCJib2R5OlwiLHRoaXMuc3RhdGUuY2l0eSl9IFxyXG4gICAgICAgIC8vIHtjb25zb2xlLmxvZyhcInRlbXA6XCIsdGhpcy5zdGF0ZS50ZW1wKX1cclxuICAgICAgICAvLyB7Y29uc29sZS5sb2coXCJkZXNjcmlwdGlvbjpcIix0aGlzLnN0YXRlLmRlc2NyaXB0aW9uKX1cclxuICAgICAgICBcclxuICAgICAgICAvLyA8L2Rpdj4gIFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgICAgICAvPiBcclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgcmFpc2VkXHJcbiAgICAgICAgICAgIHNpemU9XCJiaWdcIlxyXG4gICAgICAgICAgICBhdHRhY2hlZD1cInRvcFwiXHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDEyMCxtYXJnaW5MZWZ0OlwiMHB4XCIsbWFyZ2luUmlnaHQ6XCIwcHhcIiwgcGFkZGluZzogJzBlbScsbWluV2lkdGg6XCIzMDBcIiB9fVxyXG4gICAgICAgICAgPiBcclxuICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgICBjb250ZW50PSdXZWF0aGVyIFJlcG9ydCdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOic0ZW0nLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcuNWVtJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz4gXHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNoYW5nZX0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTVweFwifX0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGgyPjxsYWJsZT5FbnRlciBjaXR5IG5hbWU8L2xhYmxlPjwvaDI+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBPbkNsaWNrPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdCFcclxuICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPEdyaWQgc3RhY2thYmxlIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxNXB4XCIsIG1hcmdpblRvcDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==