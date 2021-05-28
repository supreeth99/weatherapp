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
          marginTop: "10px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2luZm8uanMiXSwibmFtZXMiOlsiTXlDb21wb25lbnQiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NpdHkiLCJzdGF0ZSIsImNpdHkiLCJzZXRTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpc0xvYWRlZCIsIml0ZW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJ3ZWF0aGVyIiwidGVtcF9taW4iLCJ0ZW1wX21heCIsImh1bWlkaXR5IiwiZXJyb3IiLCJpdGVtIiwiaGVhZGVyIiwibWV0YSIsIm1pbkhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJtaW5XaWR0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImhhbmRsZUNoYW5nZSIsImVycm9yTWVzc2FnZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUVGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkF5Q0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxPQUFDLENBQUNDLGNBQUYsR0FEb0IsQ0FFcEI7QUFDQTs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsS0FBTCxDQUFXQyxJQUEzQixDQUpvQixDQUtwQjtBQUNBOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDRCxZQUFJLEVBQUNGO0FBQU4sT0FBZCxFQVBvQixDQVFyQjs7O0FBQ0FJLFdBQUssNkRBQXNESixPQUF0RCw2Q0FBTCxDQUNBSyxJQURBLENBQ0ssVUFBQUMs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STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFKLENBREYsRUFFRSxNQUFDLHVEQUFEO0FBRUUsYUFBSyxFQUFFLEtBQUsvQixLQUFMLENBQVdDLElBRnBCO0FBR0UsZ0JBQVEsRUFBRSxrQkFBQ2lDLEtBQUQ7QUFBQSxpQkFDUixNQUFJLENBQUNoQyxRQUFMLENBQWM7QUFBRUQsZ0JBQUksRUFBRWlDLEtBQUssQ0FBQ0MsTUFBTixDQUFhQztBQUFyQixXQUFkLENBRFE7QUFBQSxTQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQURGLEVBV0UsTUFBQyx3REFBRDtBQUFRLGVBQU8sTUFBZjtBQUFnQixlQUFPLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsQ0ExQkEsRUF5Q0EsTUFBQyxzREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsYUFBSyxFQUFFO0FBQUNaLG9CQUFVLEVBQUMsTUFBWjtBQUFvQkMscUJBQVcsRUFBQyxNQUFoQztBQUF3Q00sbUJBQVMsRUFBQztBQUFsRCxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsYUFBSyxFQUFFLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBeUIsS0FBS00sV0FBTCxFQUF6QixDQURGLENBREYsQ0F6Q0EsQ0FERjtBQWlEQzs7OztFQTVMbUJDLCtDOztBQStMWDNDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wYzIxMWVlZmUwMjRjZDUyYjAyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEcm9wZG93bixHcmlkLENhcmQsQ29udGFpbmVyLFNlZ21lbnQsSGVhZGVyLEZvcm0sSW5wdXQsQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xyXG5cclxuY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgY2l0eTpcImNoZW5uYWlcIixcclxuICAgICAgICB0ZW1wOlwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgICAgICB0ZW1wX21pbjpcIlwiLFxyXG4gICAgICAgIHRlbXBfbWF4OlwiXCIsXHJcbiAgICAgICAgaHVtaWRpdHk6XCJcIlxyXG5cclxuICAgICAgfTtcclxuICAgIH1cclxuICAvLyAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgXHJcbiAgLy8gICBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHt0aGlzLnN0YXRlLmNpdHl9JmFwcGlkPWEwYTBlN2ViOTUwOGIxYmVjY2VmZDliZDEyMDdmMzVmXCIpXHJcbiAgLy8gICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbihcclxuICAvLyAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0O1xyXG4gIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gIC8vICAgICAgICAgICBpdGVtczogZGF0YVxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAvLyAgICAgICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuICAvLyAgICAgICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuICAvLyAgICAgICAoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAvLyAgICAgICAgICAgZXJyb3JcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgKVxyXG4gIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLml0ZW1zKTtcclxuICAvLyB9XHJcbiAgXHJcbiAgICBcclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImhhbmRsZWNoYW5nZSAxc3Q6XCIsdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnRleHRJbnB1dC52YWx1ZSlcclxuICAgICAgY29uc3QgbmV3Q2l0eSA9IHRoaXMuc3RhdGUuY2l0eTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIm5ld2NpdHk6XCIsbmV3Q2l0eSlcclxuICAgICAgLy9jb25zb2xlLmxvZygnc3VibWl0dGVkJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NpdHk6bmV3Q2l0eX0pXHJcbiAgICAgLy8gY29uc29sZS5sb2coXCJhZnRlciBjaGFuZ2Ugc3RhdGU6XCIsdGhpcy5zdGF0ZS5jaXR5KVxyXG4gICAgIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bmV3Q2l0eX0mYXBwaWQ9YTBhMGU3ZWI5NTA4YjFiZWNjZWZkOWJkMTIwN2YzNWZgKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihcclxuICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICBpdGVtczogSlNPTi5zdHJpbmdpZnkocmVzdWx0KSxcclxuICAgICAgICAgIHRlbXA6IHJlc3VsdC5tYWluLnRlbXAsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpKU09OLnN0cmluZ2lmeShyZXN1bHQud2VhdGhlclswXS5kZXNjcmlwdGlvbiksXHJcbiAgICAgICAgICB0ZW1wX21pbjpyZXN1bHQubWFpbi50ZW1wX21pbixcclxuICAgICAgICAgIHRlbXBfbWF4OnJlc3VsdC5tYWluLnRlbXBfbWF4LFxyXG4gICAgICAgICAgaHVtaWRpdHk6cmVzdWx0Lm1haW4uaHVtaWRpdHksXHJcbiAgICAgICB9KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKChyZXN1bHRbJ21haW4nXS50ZW1wKSlcclxuICAgICAgfSxcclxuICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcbiAgICAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG4gICAgICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIC8vIGNvbnNvbGUubG9nKCh0aGlzLnN0YXRlLml0ZW1zWydtYWluJ11bJ3RlbXAnXSkpXHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlckNhcmRzKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBpdGVtID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG1ldGE6ICBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiV2VhdGhlciBDb25kaXRpb25cIixcclxuICAgICAgICAvLyBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHRoaXMuc3RhdGUudGVtcC0yNzMsXHJcbiAgICAgICAgbWV0YTpcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQ3VycmVudCB0ZW1wcmF0dXJlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6dGhpcy5zdGF0ZS50ZW1wX21pbi0yNzMsXHJcbiAgICAgICAgbWV0YTpcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiTWluaW11bSBUZW1wZXJhdHVyZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOnRoaXMuc3RhdGUudGVtcF9tYXgtMjczLFxyXG4gICAgICAgIG1ldGE6XCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIk1heGltdW0gVGVtcGVyYXR1cmVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjp0aGlzLnN0YXRlLmh1bWlkaXR5LFxyXG4gICAgICAgIG1ldGE6XCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIkh1bWlkaXR5XCIsXHJcbiAgICAgIH1cclxuICAgXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtfSAvPjtcclxuICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIC8vIGNvbnN0IHsgZXJyb3IsIGlzTG9hZGVkLCBpdGVtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgLy8gaWYgKGVycm9yKSB7XHJcbiAgICAgIC8vICAgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcclxuICAgICAgLy8gfSBlbHNlIGlmICghaXNMb2FkZWQpIHtcclxuICAgICAgLy8gICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgPGRpdj5cclxuICAgICAgICAvLyAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgLy8gICAgICAgICAgIDxpbnB1dCBpZD1cImlucHV0XCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXh0SW5wdXQgPSBpbnB1dDsgfX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNpdHkgSGVyZVwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDwvZm9ybT5cclxuICAgICAgICAvLyA8aDMgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTVweFwiLCBtYXJnaW5SaWdodDpcIjE1cHhcIn19PldlYXRoZXIgRGV0YWlscyBEZXRhaWxzPC9oMz5cclxuICAgICAgICAvLyAgIDxHcmlkIHN0YWNrYWJsZSBzdHlsZT17e21hcmdpbkxlZnQ6XCIxNXB4XCIsIG1hcmdpblJpZ2h0OlwiMTVweFwifX0+XHJcbiAgICAgICAgLy8gICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAvLyAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgLy8gICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgLy8gICA8L0dyaWQ+XHJcbiAgICAgICAgLy8ge2NvbnNvbGUubG9nKFwiYm9keTpcIix0aGlzLnN0YXRlLmNpdHkpfSBcclxuICAgICAgICAvLyB7Y29uc29sZS5sb2coXCJ0ZW1wOlwiLHRoaXMuc3RhdGUudGVtcCl9XHJcbiAgICAgICAgLy8ge2NvbnNvbGUubG9nKFwiZGVzY3JpcHRpb246XCIsdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbil9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gPC9kaXY+ICBcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxyXG4gICAgICAgICAgLz4gXHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIHJhaXNlZFxyXG4gICAgICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICAgICAgYXR0YWNoZWQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAxMjAsbWFyZ2luTGVmdDpcIjBweFwiLG1hcmdpblJpZ2h0OlwiMHB4XCIsIHBhZGRpbmc6ICcwZW0nLG1pbldpZHRoOlwiMzAwXCIgfX1cclxuICAgICAgICAgID4gXHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgYXM9J2gxJ1xyXG4gICAgICAgICAgY29udGVudD0nV2VhdGhlciBSZXBvcnQnXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTonNGVtJyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnLjVlbScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+IFxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVDaGFuZ2V9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBzdHlsZT17e21hcmdpblRvcDpcIjEwcHhcIn19PlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxoMj48bGFibGU+RW50ZXIgY2l0eSBuYW1lPC9sYWJsZT48L2gyPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICBcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2l0eTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IE9uQ2xpY2s+XHJcbiAgICAgICAgICAgICAgU3VibWl0IVxyXG4gICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8R3JpZCBzdGFja2FibGUgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTVweFwiLCBtYXJnaW5SaWdodDpcIjE1cHhcIiwgbWFyZ2luVG9wOlwiMTBweFwifX0+XHJcbiAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgTXlDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9