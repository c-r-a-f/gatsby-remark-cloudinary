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
      var keyString = key.toLowerCase();

      if (keyString === 'imgsrc' || keyString === 'imgsrcset') {
        out += " ".concat(keyString.replace('img', ''), "=\"").concat(props[key], "\"");
      }
    }
  }

  out += ' size="100vw" />';
  return out;
};

exports["default"] = _default;