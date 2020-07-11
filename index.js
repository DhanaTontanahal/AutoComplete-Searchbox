"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n\n  border: 1px solid #999;\n  border-top-width: 0;\n  list-style: none;\n  margin-top: 0;\n  width:100%;\n  overflow-y: auto;\n  padding-left: 0;\n  color:", ";\n\n\nli {\n  padding: 0.5rem;\n  list-style-type: none;\n  list-style: none;\n}\n\n.suggestion-active,li:hover \n{\n  cursor: pointer;\n  font-weight: 700;\n  background-color: aliceblue;\n  border:0px solid gray;\n  padding:4px 4px 4px 4px;\n  margin:5px 5px 5px 5px;\n  font-weight: bold;\n  background-color: coral;\n\n\n}\n\nli:not(:last-of-type) {\n  border-bottom: 1px solid #999;\n}\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n \n position: relative;\n\n input{\n  width:100%;\n  height:45px;\n  border:1px solid pink;\n  border-radius: 25px;\n  padding:0px 5px 0 10px;\n  font-size: 0.75rem;\n  font-family: \"Montserrat\";\n  margin:5px 5px 5px 5px;\n}\n\n input:focus{\n  outline: none !important;\n}\n\n button{\n  position:absolute;\n  right:-5px;\n  top:15px;\n  border: none;\n  background: none;\n}\n img{\n  border-style: none;\n  vertical-align: middle;\n}\n\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    color: #999;\n    padding: 0.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledNoSuggsDiv = _styledComponents.default.div(_templateObject());

var StyledContainer = _styledComponents.default.div(_templateObject2());

var StyledUl = _styledComponents.default.ul(_templateObject3(), function (props) {
  return props.fontColor;
});

var defaultProps = {
  placeHolderSearchLabel: "Search",
  showSearchBtn: false,
  styles: {
    ulDiv: {
      color: "blue"
    },
    searchImage: {
      width: "24",
      height: "24",
      alt: "Search"
    },
    container: {
      width: "400px",
      margin: "0 auto"
    }
  }
};

var AutoCompleteSearchBox = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AutoCompleteSearchBox, _Component);

  function AutoCompleteSearchBox(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      filteredSuggestions: [],
      activeSuggestions: 0,
      showSuggestions: false,
      userInput: ""
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = AutoCompleteSearchBox.prototype;

  _proto.onChange = function onChange(e) {
    // console.log(e.target.value)
    var _this$props = this.props,
        suggestions = _this$props.suggestions,
        primaryIndex = _this$props.primaryIndex;
    var userSearchInput = e.target.value;
    var filteredSuggestions = suggestions.filter(function (suggestion) {
      return suggestion[primaryIndex].toLowerCase().indexOf(userSearchInput.toLowerCase()) > -1;
    }); // console.log(filteredSuggestions);

    this.setState({
      filteredSuggestions: filteredSuggestions,
      activeSuggestions: 0,
      showSuggestions: true,
      userInput: userSearchInput
    });
  };

  _proto.onKeyDown = function onKeyDown(e) {
    var _this$state = this.state,
        activeSuggestions = _this$state.activeSuggestions,
        filteredSuggestions = _this$state.filteredSuggestions;

    if (e.keyCode === 13) {
      this.setState({
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestions][this.props.primaryIndex]
      });
      this.props.onClick(filteredSuggestions[activeSuggestions]);
    } //user has clicked down arrow
    else if (e.keyCode == 40) {
        if (activeSuggestions - 1 === filteredSuggestions.length) {
          return;
        }

        this.setState({
          activeSuggestions: activeSuggestions + 1
        });
      } //user has clicked up arrow
      else if (e.keyCode == 38) {
          if (activeSuggestions === 0) {
            return;
          }

          this.setState({
            activeSuggestions: activeSuggestions - 1
          });
        }
  };

  _proto.onClick = function onClick() {
    console.log(this.state.userInput);
    this.props.onClick(this.state.filteredSuggestions[this.state.activeSuggestions]);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$state2 = this.state,
        filteredSuggestions = _this$state2.filteredSuggestions,
        activeSuggestions = _this$state2.activeSuggestions,
        showSuggestions = _this$state2.showSuggestions,
        userInput = _this$state2.userInput;
    var _this$props2 = this.props,
        primaryIndex = _this$props2.primaryIndex,
        secondaryIndex = _this$props2.secondaryIndex,
        tertiaryIndex = _this$props2.tertiaryIndex,
        styles = _this$props2.styles;
    var autoCompleteSuggestions;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        autoCompleteSuggestions = /*#__PURE__*/_react.default.createElement(StyledUl, {
          fontColor: styles.ulDiv.color
        }, filteredSuggestions.map(function (suggestion, index) {
          var className;

          if (index === activeSuggestions) {
            className = "suggestion-active";
          }

          return /*#__PURE__*/_react.default.createElement("li", {
            className: className,
            key: index
          }, suggestion[primaryIndex], /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", null, _this2.props.showSecondarySearchCriterion ? /*#__PURE__*/_react.default.createElement("small", null, suggestion[secondaryIndex]) : null, _this2.props.showTertiarySearchCriterion ? /*#__PURE__*/_react.default.createElement("small", {
            className: _this2.props.tertiarySearchClassName
          }, suggestion[tertiaryIndex]) : null));
        }));
      } else {
        autoCompleteSuggestions = /*#__PURE__*/_react.default.createElement(StyledNoSuggsDiv, null, /*#__PURE__*/_react.default.createElement("em", null, "No suggestions, you're on your own!"));
      }
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.container
    }, /*#__PURE__*/_react.default.createElement(StyledContainer, null, /*#__PURE__*/_react.default.createElement("input", {
      placeholder: this.props.placeHolderSearchLabel,
      type: "text",
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      value: userInput
    }), this.props.showSearchBtn ? /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.onClick
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: this.props.searchImg,
      width: styles.searchImage.width,
      height: styles.searchImage.height,
      alt: styles.searchImage.alt
    })) : null), autoCompleteSuggestions);
  };

  return AutoCompleteSearchBox;
}(_react.Component);

AutoCompleteSearchBox.defaultProps = defaultProps;
var _default = AutoCompleteSearchBox;
exports.default = _default;