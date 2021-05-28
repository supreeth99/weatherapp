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
          lineNumber: 119,
          columnNumber: 9
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
          lineNumber: 148,
          columnNumber: 13
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2luZm8uanMiXSwibmFtZXMiOlsiTXlDb21wb25lbnQiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NpdHkiLCJzdGF0ZSIsImNpdHkiLCJzZXRTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpc0xvYWRlZCIsIml0ZW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJ3ZWF0aGVyIiwiZXJyb3IiLCJpdGVtIiwiaGVhZGVyIiwibWV0YSIsIm1pbkhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJtaW5XaWR0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImhhbmRsZUNoYW5nZSIsImVycm9yTWVzc2FnZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUVGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkFzQ0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxPQUFDLENBQUNDLGNBQUYsR0FEb0IsQ0FFcEI7QUFDQTs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsS0FBTCxDQUFXQyxJQUEzQixDQUpvQixDQUtwQjtBQUNBOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDRCxZQUFJLEVBQUNGO0FBQU4sT0FBZCxFQVBvQixDQVFyQjs7O0FBQ0FJLFdBQUssNkRBQXNESixPQUF0RCw2Q0FBTCxDQUNBSyxJQURBLENBQ0ssVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixF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bGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuN2VjYzE5OTYzNzk4MTM2ZWEyYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRHJvcGRvd24sR3JpZCxDYXJkLENvbnRhaW5lcixTZWdtZW50LEhlYWRlcixGb3JtLElucHV0LEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcclxuXHJcbmNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgIGNpdHk6XCJiYW5nYWxvcmVcIixcclxuICAgICAgICB0ZW1wOlwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJcIixcclxuXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIFxyXG4gIC8vICAgZmV0Y2goXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7dGhpcy5zdGF0ZS5jaXR5fSZhcHBpZD1hMGEwZTdlYjk1MDhiMWJlY2NlZmQ5YmQxMjA3ZjM1ZlwiKVxyXG4gIC8vICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oXHJcbiAgLy8gICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gIC8vICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdDtcclxuICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAvLyAgICAgICAgICAgaXRlbXM6IGRhdGFcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcbiAgLy8gICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgLy8gICAgICAgLy8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcbiAgLy8gICAgICAgKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgLy8gICAgICAgICAgIGVycm9yXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIClcclxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pdGVtcyk7XHJcbiAgLy8gfVxyXG4gIFxyXG4gICAgXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJoYW5kbGVjaGFuZ2UgMXN0OlwiLHRoaXMuc3RhdGUuY2l0eSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy50ZXh0SW5wdXQudmFsdWUpXHJcbiAgICAgIGNvbnN0IG5ld0NpdHkgPSB0aGlzLnN0YXRlLmNpdHk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJuZXdjaXR5OlwiLG5ld0NpdHkpXHJcbiAgICAgIC8vY29uc29sZS5sb2coJ3N1Ym1pdHRlZCcpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtjaXR5Om5ld0NpdHl9KVxyXG4gICAgIC8vIGNvbnNvbGUubG9nKFwiYWZ0ZXIgY2hhbmdlIHN0YXRlOlwiLHRoaXMuc3RhdGUuY2l0eSlcclxuICAgICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke25ld0NpdHl9JmFwcGlkPWEwYTBlN2ViOTUwOGIxYmVjY2VmZDliZDEyMDdmMzVmYClcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oXHJcbiAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgaXRlbXM6IEpTT04uc3RyaW5naWZ5KHJlc3VsdCksXHJcbiAgICAgICAgICB0ZW1wOiByZXN1bHQubWFpbi50ZW1wLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246SlNPTi5zdHJpbmdpZnkocmVzdWx0LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coKHJlc3VsdFsnbWFpbiddLnRlbXApKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgLy8gY29uc29sZS5sb2coKHRoaXMuc3RhdGUuaXRlbXNbJ21haW4nXVsndGVtcCddKSlcclxuICAgfVxyXG5cclxuICAgcmVuZGVyQ2FyZHMoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHRoaXMuc3RhdGUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbWV0YTogIFwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJXZWF0aGVyIENvbmRpdGlvblwiLFxyXG4gICAgICAgIC8vIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtfSAvPjtcclxuICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIC8vIGNvbnN0IHsgZXJyb3IsIGlzTG9hZGVkLCBpdGVtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgLy8gaWYgKGVycm9yKSB7XHJcbiAgICAgIC8vICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgLy8gfSBlbHNlIGlmICghaXNMb2FkZWQpIHtcclxuICAgICAgLy8gICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgPGRpdj5cclxuICAgICAgICAvLyAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgLy8gICAgICAgICAgIDxpbnB1dCBpZD1cImlucHV0XCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXh0SW5wdXQgPSBpbnB1dDsgfX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNpdHkgSGVyZVwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuICAgICAgICAvLyA8aDMgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTVweFwiLCBtYXJnaW5SaWdodDpcIjE1cHhcIn19PldlYXRoZXIgRGV0YWlscyBEZXRhaWxzPC9oMz5cclxuICAgICAgICAvLyAgIDxHcmlkIHN0YWNrYWJsZSBzdHlsZT17e21hcmdpbkxlZnQ6XCIxNXB4XCIsIG1hcmdpblJpZ2h0OlwiMTVweFwifX0+XHJcbiAgICAgICAgLy8gICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAvLyAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgLy8gICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgLy8gICA8L0dyaWQ+XHJcbiAgICAgICAgLy8ge2NvbnNvbGUubG9nKFwiYm9keTpcIix0aGlzLnN0YXRlLmNpdHkpfSBcclxuICAgICAgICAvLyB7Y29uc29sZS5sb2coXCJ0ZW1wOlwiLHRoaXMuc3RhdGUudGVtcCl9XHJcbiAgICAgICAgLy8ge2NvbnNvbGUubG9nKFwiZGVzY3JpcHRpb246XCIsdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbil9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gPC9kaXY+ICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxyXG4gICAgICAgICAgLz4gXHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIHJhaXNlZFxyXG4gICAgICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICAgICAgYXR0YWNoZWQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAxMjAsbWFyZ2luTGVmdDpcIjBweFwiLG1hcmdpblJpZ2h0OlwiMHB4XCIsIHBhZGRpbmc6ICcwZW0nLG1pbldpZHRoOlwiMzAwXCIgfX1cclxuICAgICAgICAgID4gXHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgYXM9J2gxJ1xyXG4gICAgICAgICAgY29udGVudD0nV2VhdGhlciBSZXBvcnQnXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTonNGVtJyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnLjVlbScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+IFxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVDaGFuZ2V9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8bGFibGU+RW50ZXIgY2l0eSBuYW1lPC9sYWJsZT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHk6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBPbkNsaWNrPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdCFcclxuICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPEdyaWQgc3RhY2thYmxlIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjE1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxNXB4XCJ9fT5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3RoaXMucmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgXHJcbiAgICAgICAgICBcclxuICAgXHJcbiAgICBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==