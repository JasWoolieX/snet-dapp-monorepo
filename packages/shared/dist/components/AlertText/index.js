"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("./styles");

var _AlertBox = require("shared/dist/components/AlertBox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textColor = {
  error: _AlertBox.alertTypes.ERROR,
  success: _AlertBox.alertTypes.SUCCESS,
  warning: _AlertBox.alertTypes.WARNING,
  info: _AlertBox.alertTypes.INFO
};

var AlertText = function AlertText(_ref) {
  var type = _ref.type,
      message = _ref.message;
  var classes = (0, _styles.useStyles)();

  if (message) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _clsx.default)(classes.errorMsg, classes[textColor[type]])
    }, message);
  }

  return null;
};

AlertText.propTypes = {
  message: _propTypes.default.string,
  type: _propTypes.default.oneOf(["error", "success", "warning", "info"])
};
AlertText.defaultProps = {
  type: "error",
  message: undefined
};
var _default = AlertText;
exports.default = _default;