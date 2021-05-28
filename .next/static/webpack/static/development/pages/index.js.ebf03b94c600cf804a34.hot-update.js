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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2luZm8uanMiXSwibmFtZXMiOlsiTXlDb21wb25lbnQiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NpdHkiLCJzdGF0ZSIsImNpdHkiLCJzZXRTdGF0ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpc0xvYWRlZCIsIml0ZW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJ3ZWF0aGVyIiwiZXJyb3IiLCJpdGVtIiwiaGVhZGVyIiwibWV0YSIsIm1pbkhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJtaW5XaWR0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImhhbmRsZUNoYW5nZSIsImVycm9yTWVzc2FnZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXJDYXJkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUVGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkFzQ0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxPQUFDLENBQUNDLGNBQUYsR0FEb0IsQ0FFcEI7QUFDQTs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsS0FBTCxDQUFXQyxJQUEzQixDQUpvQixDQUtwQjtBQUNBOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDRCxZQUFJLEVBQUNGO0FBQU4sT0FBZCxFQVBvQixDQVFyQjs7O0FBQ0FJLFdBQUssNkRBQXNESixPQUF0RCw2Q0FBTCxDQUNBSyxJQURBLENBQ0ssVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixF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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lYmYwM2I5NGM2MDBjZjgwNGEzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEcm9wZG93bixHcmlkLENhcmQsQ29udGFpbmVyLFNlZ21lbnQsSGVhZGVyLEZvcm0sSW5wdXQsQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xyXG5cclxuY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgY2l0eTpcImJhbmdhbG9yZVwiLFxyXG4gICAgICAgIHRlbXA6XCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG5cclxuICAgICAgfTtcclxuICAgIH1cclxuICAvLyAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgXHJcbiAgLy8gICBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHt0aGlzLnN0YXRlLmNpdHl9JmFwcGlkPWEwYTBlN2ViOTUwOGIxYmVjY2VmZDliZDEyMDdmMzVmXCIpXHJcbiAgLy8gICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbihcclxuICAvLyAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0O1xyXG4gIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gIC8vICAgICAgICAgICBpdGVtczogZGF0YVxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAvLyAgICAgICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuICAvLyAgICAgICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuICAvLyAgICAgICAoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAvLyAgICAgICAgICAgZXJyb3JcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgKVxyXG4gIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLml0ZW1zKTtcclxuICAvLyB9XHJcbiAgXHJcbiAgICBcclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImhhbmRsZWNoYW5nZSAxc3Q6XCIsdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnRleHRJbnB1dC52YWx1ZSlcclxuICAgICAgY29uc3QgbmV3Q2l0eSA9IHRoaXMuc3RhdGUuY2l0eTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIm5ld2NpdHk6XCIsbmV3Q2l0eSlcclxuICAgICAgLy9jb25zb2xlLmxvZygnc3VibWl0dGVkJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NpdHk6bmV3Q2l0eX0pXHJcbiAgICAgLy8gY29uc29sZS5sb2coXCJhZnRlciBjaGFuZ2Ugc3RhdGU6XCIsdGhpcy5zdGF0ZS5jaXR5KVxyXG4gICAgIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bmV3Q2l0eX0mYXBwaWQ9YTBhMGU3ZWI5NTA4YjFiZWNjZWZkOWJkMTIwN2YzNWZgKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihcclxuICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICBpdGVtczogSlNPTi5zdHJpbmdpZnkocmVzdWx0KSxcclxuICAgICAgICAgIHRlbXA6IHJlc3VsdC5tYWluLnRlbXAsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpKU09OLnN0cmluZ2lmeShyZXN1bHQud2VhdGhlclswXS5kZXNjcmlwdGlvbiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygocmVzdWx0WydtYWluJ10udGVtcCkpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG4gICAgICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuICAgICAgLy8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAvLyBjb25zb2xlLmxvZygodGhpcy5zdGF0ZS5pdGVtc1snbWFpbiddWyd0ZW1wJ10pKVxyXG4gICB9XHJcblxyXG4gICByZW5kZXJDYXJkcygpIHtcclxuXHJcblxyXG4gICAgY29uc3QgaXRlbSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICBtZXRhOiAgXCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIldlYXRoZXIgQ29uZGl0aW9uXCIsXHJcbiAgICAgICAgLy8gc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICBcclxuICAgIF07XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW19IC8+O1xyXG4gIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgLy8gY29uc3QgeyBlcnJvciwgaXNMb2FkZWQsIGl0ZW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAvLyBpZiAoZXJyb3IpIHtcclxuICAgICAgLy8gICByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xyXG4gICAgICAvLyB9IGVsc2UgaWYgKCFpc0xvYWRlZCkge1xyXG4gICAgICAvLyAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgLy8gICA8ZGl2PlxyXG4gICAgICAvLyAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNoYW5nZX0+XHJcbiAgICAgIC8vICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB1dFwiIHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGV4dElucHV0ID0gaW5wdXQ7IH19IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjaXR5IEhlcmVcIiAvPlxyXG4gICAgICAvLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgLy8gPC9mb3JtPlxyXG4gICAgICAvLyA8aDMgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTVweFwiLCBtYXJnaW5SaWdodDpcIjE1cHhcIn19PldlYXRoZXIgRGV0YWlscyBEZXRhaWxzPC9oMz5cclxuICAgICAgLy8gICA8R3JpZCBzdGFja2FibGUgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTVweFwiLCBtYXJnaW5SaWdodDpcIjE1cHhcIn19PlxyXG4gICAgICAvLyAgICAgPEdyaWQuUm93PlxyXG4gICAgICAvLyAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcbiAgICAgIC8vICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAvLyAgIDwvR3JpZD5cclxuICAgICAgLy8ge2NvbnNvbGUubG9nKFwiYm9keTpcIix0aGlzLnN0YXRlLmNpdHkpfSBcclxuICAgICAgLy8ge2NvbnNvbGUubG9nKFwidGVtcDpcIix0aGlzLnN0YXRlLnRlbXApfVxyXG4gICAgICAvLyB7Y29uc29sZS5sb2coXCJkZXNjcmlwdGlvbjpcIix0aGlzLnN0YXRlLmRlc2NyaXB0aW9uKX1cclxuICAgICAgXHJcbiAgICAgIC8vIDwvZGl2PiAgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgICAgICAvPiBcclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgcmFpc2VkXHJcbiAgICAgICAgICAgIHNpemU9XCJiaWdcIlxyXG4gICAgICAgICAgICBhdHRhY2hlZD1cInRvcFwiXHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IDEyMCxtYXJnaW5MZWZ0OlwiMHB4XCIsbWFyZ2luUmlnaHQ6XCIwcHhcIiwgcGFkZGluZzogJzBlbScsbWluV2lkdGg6XCIzMDBcIiB9fVxyXG4gICAgICAgICAgPiBcclxuICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICBhcz0naDEnXHJcbiAgICAgICAgICBjb250ZW50PSdXZWF0aGVyIFJlcG9ydCdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOic0ZW0nLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcuNWVtJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz4gXHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNoYW5nZX0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxyXG4gICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxsYWJsZT5FbnRlciBjaXR5IG5hbWU8L2xhYmxlPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICBcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2l0eTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IE9uQ2xpY2s+XHJcbiAgICAgICAgICAgICAgU3VibWl0IVxyXG4gICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8R3JpZCBzdGFja2FibGUgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiMTVweFwiLCBtYXJnaW5SaWdodDpcIjE1cHhcIn19PlxyXG4gICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57dGhpcy5yZW5kZXJDYXJkcygpfTwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICBcclxuICAgICAgICAgIFxyXG4gICBcclxuICAgIFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgTXlDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9