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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2luZm8uanMiXSwibmFtZXMiOlsiTXlDb21wb25lbnQiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NpdHkiLCJ0ZXh0SW5wdXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiY2l0eSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpc0xvYWRlZCIsIml0ZW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJ3ZWF0aGVyIiwiZXJyb3IiLCJzdGF0ZSIsIml0ZW0iLCJoZWFkZXIiLCJtZXRhIiwibWluSGVpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsIm1pbldpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaGFuZGxlQ2hhbmdlIiwiZXJyb3JNZXNzYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZW5kZXJDYXJkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUVGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkFzQ0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxPQUFDLENBQUNDLGNBQUYsR0FEb0IsQ0FFcEI7QUFDQTs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsU0FBTCxDQUFlQyxLQUEvQixDQUpvQixDQUtwQjtBQUNBOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyxZQUFJLEVBQUNKO0FBQU4sT0FBZCxFQVBvQixDQVFyQjs7O0FBQ0FLLFdBQUssNkRBQXNETCxPQUF0RCw2Q0FBTCxDQUNBTSxJQURBLENBQ0ssVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsT0FEUixFQUVBRixJQUZBLENBR0MsVUFBQ0csTUFBRCxFQUFZO0FBQ1YsY0FBS04sUUFBTCxDQUFjO0FBQ1pPLGtCQUFRLEVBQUUsSUFERTtBQUVaQyxlQUFLLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixNQUFmLENBRks7QUFHWkssY0FBSSxFQUFFTCxNQUFNLENBQUNNLElBQVAsQ0FBWUQsSUFITjtBQUlaRSxxQkFBVyxFQUFDSixJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBTSxDQUFDUSxPQUFQLENBQWUsQ0FBZixFQUFrQkQsV0FBakM7QUFKQSxTQUFkLEVBRFUsQ0FPVjs7QUFDRCxPQVhGLEVBWUM7QUFDQTtBQUNBO0FBQ0EsZ0JBQUNFLEtBQUQsRUFBVztBQUNULGNBQUtmLFFBQUwsQ0FBYztBQUNaTyxrQkFBUSxFQUFFLElBREU7QUFFWlEsZUFBSyxFQUFMQTtBQUZZLFNBQWQ7QUFJRCxPQXBCRixFQVRxQixDQStCdEI7QUFDQSxLQXRFbUI7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYRCxXQUFLLEVBQUUsSUFESTtBQUVYUixjQUFRLEVBQUUsS0FGQztBQUdYQyxXQUFLLEVBQUUsRUFISTtBQUlYUCxVQUFJLEVBQUMsV0FKTTtBQUtYVSxVQUFJLEVBQUMsRUFMTTtBQU1YRSxpQkFBVyxFQUFDO0FBTkQsS0FBYjtBQUZpQjtBQVdsQixHLENBQ0g7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7a0NBcUNlO0FBR2IsVUFBTUksSUFBSSxHQUFHLENBQ1g7QUFDRUMsY0FBTSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0gsV0FEckI7QUFFRU0sWUFBSSxFQUFHLEVBRlQ7QUFHRU4sbUJBQVcsRUFBQyxtQkFIZCxDQUlFOztBQUpGLE9BRFcsQ0FBYjtBQVNBLGFBQU8sTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxhQUFLLEVBQUVJLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNEOzs7NkJBRVU7QUFBQTs7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxhQUNGO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRztBQUNDLGFBQUcsRUFBQyxZQURMO0FBRUMsY0FBSSxFQUFDLGdFQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESCxFQUtBLE1BQUMsMkRBQUQ7QUFBVyxlQUFLLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDQSxNQUFDLHlEQUFEO0FBQ00sZ0JBQU0sTUFEWjtBQUVNLGNBQUksRUFBQyxLQUZYO0FBR00sa0JBQVEsRUFBQyxLQUhmO0FBSU0sa0JBQVEsTUFKZDtBQUtNLG1CQUFTLEVBQUMsUUFMaEI7QUFNTSxlQUFLLEVBQUU7QUFBRUcscUJBQVMsRUFBRSxHQUFiO0FBQWlCQyxzQkFBVSxFQUFDLEtBQTVCO0FBQWtDQyx1QkFBVyxFQUFDLEtBQTlDO0FBQXFEQyxtQkFBTyxFQUFFLEtBQTlEO0FBQW9FQyxvQkFBUSxFQUFDO0FBQTdFLFdBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFFLE1BQUMsd0RBQUQ7QUFDRSxZQUFFLEVBQUMsSUFETDtBQUVFLGlCQUFPLEVBQUMsZ0JBRlY7QUFHRSxlQUFLLEVBQUU7QUFDTEMsb0JBQVEsRUFBQyxLQURKO0FBRUxDLHNCQUFVLEVBQUUsUUFGUDtBQUdMQyx3QkFBWSxFQUFFLENBSFQ7QUFJTEMscUJBQVMsRUFBRTtBQUpOLFdBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVJGLENBREEsQ0FMQSxFQTBCRSxNQUFDLHNEQUFEO0FBQU0sa0JBQVEsRUFBRSxLQUFLQyxZQUFyQjtBQUFtQyxlQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUtiLEtBQUwsQ0FBV2MsWUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUUsTUFBQyx1REFBRDtBQUVFLGVBQUssRUFBRSxLQUFLZCxLQUFMLENBQVdmLElBRnBCO0FBR0Usa0JBQVEsRUFBRSxrQkFBQzhCLEtBQUQ7QUFBQSxtQkFDUixNQUFJLENBQUMvQixRQUFMLENBQWM7QUFBRUMsa0JBQUksRUFBRThCLEtBQUssQ0FBQ0MsTUFBTixDQUFhakM7QUFBckIsYUFBZCxDQURRO0FBQUEsV0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsQ0FERixFQVdFLE1BQUMsTUFBRDtBQUFRLGlCQUFPLE1BQWY7QUFBZ0IsaUJBQU8sTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYRixDQTFCRixFQXlDRSxNQUFDLHNEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFnQixlQUFLLEVBQUU7QUFBQ3NCLHNCQUFVLEVBQUMsTUFBWjtBQUFvQkMsdUJBQVcsRUFBQztBQUFoQyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsZUFBSyxFQUFFLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBeUIsS0FBS1csV0FBTCxFQUF6QixDQURGLENBREYsQ0F6Q0Y7QUFsQkU7QUF1RUQ7Ozs7RUF2S21CQywrQzs7QUEwS1h6QywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOWY3ZDgwZjM4NjQwM2RjNjBiMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRHJvcGRvd24sR3JpZCxDYXJkLENvbnRhaW5lcixTZWdtZW50LEhlYWRlcixGb3JtLElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xyXG5cclxuY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgY2l0eTpcImJhbmdhbG9yZVwiLFxyXG4gICAgICAgIHRlbXA6XCJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG5cclxuICAgICAgfTtcclxuICAgIH1cclxuICAvLyAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgXHJcbiAgLy8gICBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHt0aGlzLnN0YXRlLmNpdHl9JmFwcGlkPWEwYTBlN2ViOTUwOGIxYmVjY2VmZDliZDEyMDdmMzVmXCIpXHJcbiAgLy8gICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbihcclxuICAvLyAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0O1xyXG4gIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gIC8vICAgICAgICAgICBpdGVtczogZGF0YVxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAvLyAgICAgICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuICAvLyAgICAgICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuICAvLyAgICAgICAoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAvLyAgICAgICAgICAgZXJyb3JcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgKVxyXG4gIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLml0ZW1zKTtcclxuICAvLyB9XHJcbiAgXHJcbiAgICBcclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImhhbmRsZWNoYW5nZSAxc3Q6XCIsdGhpcy5zdGF0ZS5jaXR5KTtcclxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnRleHRJbnB1dC52YWx1ZSlcclxuICAgICAgY29uc3QgbmV3Q2l0eSA9IHRoaXMudGV4dElucHV0LnZhbHVlO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwibmV3Y2l0eTpcIixuZXdDaXR5KVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCdzdWJtaXR0ZWQnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2l0eTpuZXdDaXR5fSlcclxuICAgICAvLyBjb25zb2xlLmxvZyhcImFmdGVyIGNoYW5nZSBzdGF0ZTpcIix0aGlzLnN0YXRlLmNpdHkpXHJcbiAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtuZXdDaXR5fSZhcHBpZD1hMGEwZTdlYjk1MDhiMWJlY2NlZmQ5YmQxMjA3ZjM1ZmApXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKFxyXG4gICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgIGl0ZW1zOiBKU09OLnN0cmluZ2lmeShyZXN1bHQpLFxyXG4gICAgICAgICAgdGVtcDogcmVzdWx0Lm1haW4udGVtcCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOkpTT04uc3RyaW5naWZ5KHJlc3VsdC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKChyZXN1bHRbJ21haW4nXS50ZW1wKSlcclxuICAgICAgfSxcclxuICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcbiAgICAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG4gICAgICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIC8vIGNvbnNvbGUubG9nKCh0aGlzLnN0YXRlLml0ZW1zWydtYWluJ11bJ3RlbXAnXSkpXHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlckNhcmRzKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBpdGVtID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiB0aGlzLnN0YXRlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIG1ldGE6ICBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiV2VhdGhlciBDb25kaXRpb25cIixcclxuICAgICAgICAvLyBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgIFxyXG4gICAgXTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbX0gLz47XHJcbiAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAvLyBjb25zdCB7IGVycm9yLCBpc0xvYWRlZCwgaXRlbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIC8vIGlmIChlcnJvcikge1xyXG4gICAgICAvLyAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgIC8vIH0gZWxzZSBpZiAoIWlzTG9hZGVkKSB7XHJcbiAgICAgIC8vICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAvLyAgIDxkaXY+XHJcbiAgICAgIC8vICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgLy8gICAgICAgICAgIDxpbnB1dCBpZD1cImlucHV0XCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXh0SW5wdXQgPSBpbnB1dDsgfX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGNpdHkgSGVyZVwiIC8+XHJcbiAgICAgIC8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAvLyA8L2Zvcm0+XHJcbiAgICAgIC8vIDxoMyBzdHlsZT17e21hcmdpbkxlZnQ6XCIxNXB4XCIsIG1hcmdpblJpZ2h0OlwiMTVweFwifX0+V2VhdGhlciBEZXRhaWxzIERldGFpbHM8L2gzPlxyXG4gICAgICAvLyAgIDxHcmlkIHN0YWNrYWJsZSBzdHlsZT17e21hcmdpbkxlZnQ6XCIxNXB4XCIsIG1hcmdpblJpZ2h0OlwiMTVweFwifX0+XHJcbiAgICAgIC8vICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgIC8vICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuICAgICAgLy8gICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIC8vICAgPC9HcmlkPlxyXG4gICAgICAvLyB7Y29uc29sZS5sb2coXCJib2R5OlwiLHRoaXMuc3RhdGUuY2l0eSl9IFxyXG4gICAgICAvLyB7Y29uc29sZS5sb2coXCJ0ZW1wOlwiLHRoaXMuc3RhdGUudGVtcCl9XHJcbiAgICAgIC8vIHtjb25zb2xlLmxvZyhcImRlc2NyaXB0aW9uOlwiLHRoaXMuc3RhdGUuZGVzY3JpcHRpb24pfVxyXG4gICAgICBcclxuICAgICAgLy8gPC9kaXY+ICBcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcclxuICAgICAgICAgIC8+IFxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICByYWlzZWRcclxuICAgICAgICAgICAgc2l6ZT1cImJpZ1wiXHJcbiAgICAgICAgICAgIGF0dGFjaGVkPVwidG9wXCJcclxuICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogMTIwLG1hcmdpbkxlZnQ6XCIwcHhcIixtYXJnaW5SaWdodDpcIjBweFwiLCBwYWRkaW5nOiAnMGVtJyxtaW5XaWR0aDpcIjMwMFwiIH19XHJcbiAgICAgICAgICA+IFxyXG4gICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgIGFzPSdoMSdcclxuICAgICAgICAgIGNvbnRlbnQ9J1dlYXRoZXIgUmVwb3J0J1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udFNpemU6JzRlbScsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJy41ZW0nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPiBcclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ2hhbmdlfSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmxlPkVudGVyIGNpdHkgbmFtZTwvbGFibGU+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5OiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgT25DbGljaz5cclxuICAgICAgICAgICAgICBTdWJtaXQhXHJcbiAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxHcmlkIHN0YWNrYWJsZSBzdHlsZT17e21hcmdpbkxlZnQ6XCIxNXB4XCIsIG1hcmdpblJpZ2h0OlwiMTVweFwifX0+XHJcbiAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgXHJcbiAgIFxyXG4gICAgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=