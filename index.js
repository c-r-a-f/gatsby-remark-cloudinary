"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _imgHTML = _interopRequireDefault(require("./imgHTML"));

var _gatsbyCloudinary = require("@dylanvann/gatsby-cloudinary");

var slash = require("slash");

var crypto = require("crypto");

var path = require("path");

var select = require("unist-util-select");

var md5File = require('md5-file/promise');

var _ = require("lodash");

// Gets the imageNode containing info like the absolutePath.
var getImageNode = function getImageNode(_ref) {
  var node = _ref.node,
      files = _ref.files,
      parentNode = _ref.parentNode;
  var imagePath = slash(path.join(parentNode.dir, node.url));

  var imageNode = _.find(files, function (file) {
    if (file && file.absolutePath) {
      return file.absolutePath === imagePath;
    }

    return null;
  });

  if (!imageNode || !imageNode.absolutePath) {
    return null;
  }

  return imageNode;
}; // Gets a cache key that is unique for a given image and set of options.


var getCacheKey =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref2) {
    var path, pluginOptions, optionsHash, contentsHash;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            path = _ref2.path, pluginOptions = _ref2.pluginOptions;
            optionsHash = crypto.createHash("md5").update(JSON.stringify(pluginOptions)).digest('hex');
            _context.next = 4;
            return md5File(path);

          case 4:
            contentsHash = _context.sent;
            return _context.abrupt("return", "remark-images-cloudinary-".concat(optionsHash, "-").concat(contentsHash));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCacheKey(_x) {
    return _ref3.apply(this, arguments);
  };
}(); // Returns the html for a markdown media node.


var htmlForNode =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(_ref4) {
    var imageNode, pluginOptions, absolutePath, props, rawHTML;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            imageNode = _ref4.imageNode, pluginOptions = _ref4.pluginOptions;
            absolutePath = imageNode.absolutePath;
            _context2.next = 4;
            return (0, _gatsbyCloudinary.getData)({
              path: absolutePath,
              maxWidth: pluginOptions.maxWidth,
              config: {
                api_key: pluginOptions.apiKey,
                api_secret: pluginOptions.apiSecret,
                cloud_name: pluginOptions.cloudName
              }
            });

          case 4:
            props = _context2.sent;
            rawHTML = (0, _imgHTML["default"])(props);
            return _context2.abrupt("return", rawHTML);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function htmlForNode(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

var cachedHtmlForNode =
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(_ref6) {
    var node, files, cache, parentNode, pluginOptions, imageNode, path, cacheKey, cachedRawHTML, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            node = _ref6.node, files = _ref6.files, cache = _ref6.cache, parentNode = _ref6.parentNode, pluginOptions = _ref6.pluginOptions;
            imageNode = getImageNode({
              node: node,
              files: files,
              parentNode: parentNode
            });

            if (imageNode) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return");

          case 4:
            path = imageNode.absolutePath;
            _context3.next = 7;
            return getCacheKey({
              path: path,
              pluginOptions: pluginOptions
            });

          case 7:
            cacheKey = _context3.sent;
            _context3.next = 10;
            return cache.get(cacheKey);

          case 10:
            cachedRawHTML = _context3.sent;

            if (!cachedRawHTML) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", cachedRawHTML);

          case 13:
            _context3.next = 15;
            return htmlForNode({
              imageNode: imageNode,
              pluginOptions: pluginOptions
            });

          case 15:
            result = _context3.sent;
            _context3.next = 18;
            return cache.set(cacheKey, result);

          case 18:
            return _context3.abrupt("return", result);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function cachedHtmlForNode(_x3) {
    return _ref7.apply(this, arguments);
  };
}();

module.exports =
/*#__PURE__*/
function () {
  var _ref9 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(_ref8, pluginOptions) {
    var files, markdownNode, markdownAST, getNode, cache, markdownImageNodes, parentNode, promises;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            files = _ref8.files, markdownNode = _ref8.markdownNode, markdownAST = _ref8.markdownAST, getNode = _ref8.getNode, cache = _ref8.cache;
            throw new Error(promises);

          case 5:
            parentNode = getNode(markdownNode.parent);

            if (!(!parentNode || !parentNode.dir)) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", null);

          case 8:
            promises = markdownImageNodes.map(function (node) {
              return new Promise(function (resolve, reject) {
                cachedHtmlForNode({
                  node: node,
                  files: files,
                  cache: cache,
                  parentNode: parentNode,
                  pluginOptions: pluginOptions
                }).then(function (html) {
                  if (!html) return; // Replace the image node with an inline HTML node.

                  node.type = "html";
                  node.value = html;
                  resolve(node);
                })["catch"](function (e) {
                  return reject(e);
                });
              });
            });
            return _context4.abrupt("return", Promise.all(promises).then(function (nodes) {
              return nodes.filter(function (node) {
                return !!node;
              });
            }));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4, _x5) {
    return _ref9.apply(this, arguments);
  };
}();