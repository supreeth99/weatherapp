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

      var newCity = _this.textInput.value; //console.log("newcity:",newCity)
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
          description: JSON.stringify(result.weather[0].description)
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
      city: "bangalore",
      temp: "",
      description: ""
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

      }];
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Card"].Group, {
        items: item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
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
      return (//   <div>
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
        __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 7
          }
        }, __jsx("link", {
          rel: "stylesheet",
          href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 10
          }
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          fluid: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
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
            lineNumber: 125,
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
            lineNumber: 133,
            columnNumber: 9
          }
        }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"], {
          onSubmit: this.handleChange,
          error: !!this.state.errorMessage,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 9
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Form"].Field, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 11
          }
        }, __jsx("lable", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }
        }, "Enter city name"), __jsx(Input, {
          value: this.state.city,
          onChange: function onChange(event) {
            return _this2.setState({
              city: event.target.value
            });
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }
        })), __jsx(Button, {
          primary: true,
          OnClick: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 11
          }
        }, "Submit!")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
          stackable: true,
          style: {
            marginLeft: "15px",
            marginRight: "15px"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 9
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 11
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
          width: 10,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }
        }, this.renderCards()))))
      );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2luZm8uanMiXSwibmFtZXMiOlsiTXlDb21wb25lbnQiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NpdHkiLCJ0ZXh0SW5wdXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiY2l0eSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpc0xvYWRlZCIsIml0ZW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJ3ZWF0aGVyIiwiZXJyb3IiLCJzdGF0ZSIsIml0ZW0iLCJoZWFkZXIiLCJtZXRhIiwibWluSGVpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsIm1pbldpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JNZXNzYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZW5kZXJDYXJkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUVGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkFzQ0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxPQUFDLENBQUNDLGNBQUYsR0FEb0IsQ0FFcEI7QUFDQTs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsU0FBTCxDQUFlQyxLQUEvQixDQUpvQixDQUtwQjtBQUNBOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyxZQUFJLEVBQUNKO0FBQU4sT0FBZCxFQVBvQixDQVFyQjs7O0FBQ0FLLFdBQUssNkRBQXNETCxPQUF0RCw2Q0FBTCxDQUNBTSxJQURBLENBQ0ssVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcs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LDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wOWI0NjIwMzJlMjBlMGZjNDQ5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEcm9wZG93bixHcmlkLENhcmQsQ29udGFpbmVyLFNlZ21lbnQsSGVhZGVyLEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XHJcblxyXG5jbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICBjaXR5OlwiYmFuZ2Fsb3JlXCIsXHJcbiAgICAgICAgdGVtcDpcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcblxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIC8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBcclxuICAvLyAgIGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke3RoaXMuc3RhdGUuY2l0eX0mYXBwaWQ9YTBhMGU3ZWI5NTA4YjFiZWNjZWZkOWJkMTIwN2YzNWZcIilcclxuICAvLyAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKFxyXG4gIC8vICAgICAgIChyZXN1bHQpID0+IHtcclxuICAvLyAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQ7XHJcbiAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgLy8gICAgICAgICAgIGl0ZW1zOiBkYXRhXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG4gIC8vICAgICAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG4gIC8vICAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gIC8vICAgICAgIChlcnJvcikgPT4ge1xyXG4gIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gIC8vICAgICAgICAgICBlcnJvclxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICApXHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXRlbXMpO1xyXG4gIC8vIH1cclxuICBcclxuICAgIFxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwiaGFuZGxlY2hhbmdlIDFzdDpcIix0aGlzLnN0YXRlLmNpdHkpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMudGV4dElucHV0LnZhbHVlKVxyXG4gICAgICBjb25zdCBuZXdDaXR5ID0gdGhpcy50ZXh0SW5wdXQudmFsdWU7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJuZXdjaXR5OlwiLG5ld0NpdHkpXHJcbiAgICAgIC8vY29uc29sZS5sb2coJ3N1Ym1pdHRlZCcpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtjaXR5Om5ld0NpdHl9KVxyXG4gICAgIC8vIGNvbnNvbGUubG9nKFwiYWZ0ZXIgY2hhbmdlIHN0YXRlOlwiLHRoaXMuc3RhdGUuY2l0eSlcclxuICAgICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke25ld0NpdHl9JmFwcGlkPWEwYTBlN2ViOTUwOGIxYmVjY2VmZDliZDEyMDdmMzVmYClcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oXHJcbiAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgaXRlbXM6IEpTT04uc3RyaW5naWZ5KHJlc3VsdCksXHJcbiAgICAgICAgICB0ZW1wOiByZXN1bHQubWFpbi50ZW1wLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246SlNPTi5zdHJpbmdpZnkocmVzdWx0LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKHJlc3VsdFsnbWFpbiddLnRlbXApKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgLy8gY29uc29sZS5sb2coKHRoaXMuc3RhdGUuaXRlbXNbJ21haW4nXVsndGVtcCddKSlcclxuICAgfVxyXG5cclxuICAgcmVuZGVyQ2FyZHMoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWV0YTogIFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJXZWF0aGVyIENvbmRpdGlvblwiLFxyXG4gICAgICAgIC8vIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtfSAvPjtcclxuICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIC8vIGNvbnN0IHsgZXJyb3IsIGlzTG9hZGVkLCBpdGVtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgLy8gaWYgKGVycm9yKSB7XHJcbiAgICAgIC8vICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgLy8gfSBlbHNlIGlmICghaXNMb2FkZWQpIHtcclxuICAgICAgLy8gICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgIC8vICAgPGRpdj5cclxuICAgICAgLy8gICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAvLyAgICAgICAgICAgPGlucHV0IGlkPVwiaW5wdXRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRleHRJbnB1dCA9IGlucHV0OyB9fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY2l0eSBIZXJlXCIgLz5cclxuICAgICAgLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgIC8vIDwvZm9ybT5cclxuICAgICAgLy8gPGgzIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5XZWF0aGVyIERldGFpbHMgRGV0YWlsczwvaDM+XHJcbiAgICAgIC8vICAgPEdyaWQgc3RhY2thYmxlIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgICAgLy8gICAgIDxHcmlkLlJvdz5cclxuICAgICAgLy8gICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3RoaXMucmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxyXG4gICAgICAvLyAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgLy8gICA8L0dyaWQ+XHJcbiAgICAgIC8vIHtjb25zb2xlLmxvZyhcImJvZHk6XCIsdGhpcy5zdGF0ZS5jaXR5KX0gXHJcbiAgICAgIC8vIHtjb25zb2xlLmxvZyhcInRlbXA6XCIsdGhpcy5zdGF0ZS50ZW1wKX1cclxuICAgICAgLy8ge2NvbnNvbGUubG9nKFwiZGVzY3JpcHRpb246XCIsdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbil9XHJcbiAgICAgIFxyXG4gICAgICAvLyA8L2Rpdj4gIFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxyXG4gICAgICAgICAgLz4gXHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIHJhaXNlZFxyXG4gICAgICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICAgICAgYXR0YWNoZWQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAxMjAsbWFyZ2luTGVmdDpcIjBweFwiLG1hcmdpblJpZ2h0OlwiMHB4XCIsIHBhZGRpbmc6ICcwZW0nLG1pbldpZHRoOlwiMzAwXCIgfX1cclxuICAgICAgICAgID4gXHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgYXM9J2gxJ1xyXG4gICAgICAgICAgY29udGVudD0nV2VhdGhlciBSZXBvcnQnXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTonNGVtJyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnLjVlbScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+IFxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVDaGFuZ2V9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8bGFibGU+RW50ZXIgY2l0eSBuYW1lPC9sYWJsZT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBPbkNsaWNrPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdCFcclxuICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPEdyaWQgc3RhY2thYmxlIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3RoaXMucmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICBcclxuICAgXHJcbiAgICBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==