'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
    value: true,
})
exports.getBase64ImgFromUrl = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
    require('@babel/runtime/helpers/asyncToGenerator'),
)

var _axios = _interopRequireDefault(require('axios'))

var getBase64ImgFromUrl =
    /*#__PURE__*/
    (function() {
        var _ref = (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee(url) {
                var response, bufferString, base64Img
                return _regenerator.default.wrap(
                    function _callee$(_context) {
                        while (1) {
                            switch ((_context.prev = _context.next)) {
                                case 0:
                                    _context.next = 2
                                    return (0, _axios.default)({
                                        method: 'GET',
                                        responseType: 'arraybuffer',
                                        url: ''.concat(url),
                                    })

                                case 2:
                                    response = _context.sent
                                    // tslint:disable-next-line
                                    bufferString = new Buffer(
                                        response.data,
                                    ).toString('base64')
                                    base64Img = 'data:'
                                        .concat(
                                            response.headers['content-type'],
                                            ';base64,',
                                        )
                                        .concat(bufferString)
                                    return _context.abrupt('return', base64Img)

                                case 6:
                                case 'end':
                                    return _context.stop()
                            }
                        }
                    },
                    _callee,
                    this,
                )
            }),
        )

        return function getBase64ImgFromUrl(_x) {
            return _ref.apply(this, arguments)
        }
    })()

exports.getBase64ImgFromUrl = getBase64ImgFromUrl
