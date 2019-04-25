"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(props) {
  var out = '';
  out += '<img';

  for (var key in props) {
    const keyString = key.toLowerCase()
    if (props.hasOwnProperty(key)) {
      if (keyString === 'imgsrc' || keyString === 'imgsrcset') {
        out += " ".concat(keyString.replace('img', ''), "=\"").concat(props[key], "\"");
      }
    }
  }

  out += '/>';
  return out;
};

exports["default"] = _default;
