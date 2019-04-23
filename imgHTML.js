"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(props) {
  var out = '';
  out += '<fast-image';

  for (var key in props) {
    if (props.hasOwnProperty(key)) {
      out += " ".concat(key.toLowerCase(), "=\"").concat(props[key], "\"");
    }
  }

  out += '></fast-image>';
  return out;
};

exports["default"] = _default;