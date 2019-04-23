"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(props) {
  var out = '';
  out += '<img';

  for (var key in props) {
    if (props.hasOwnProperty(key)) {
      if (key === 'imgsrc') {
        out += " ".concat(key.toLowerCase().replace('img', ''), "=\"").concat(props[key], "\"");
      }
    }
  }

  out += '/>';
  return out;
};

exports["default"] = _default;