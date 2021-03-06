'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hidden = function (_React$Component) {
  _inherits(Hidden, _React$Component);

  function Hidden() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hidden);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hidden.__proto__ || Object.getPrototypeOf(Hidden)).call.apply(_ref, [this].concat(args))), _this), _this.getHiddenStyles = function () {
      var _this$props = _this.props,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl;

      var colWidths = [];

      // Column widths
      if (xs && (xs.toLowerCase() === 'down' || xs.toLowerCase() === 'up')) {
        colWidths.push(_index2.default['hidden-xs-' + xs]);
      }
      if (sm && (sm.toLowerCase() === 'down' || sm.toLowerCase() === 'up')) {
        colWidths.push(_index2.default['hidden-sm-' + sm]);
      }
      if (md && (md.toLowerCase() === 'down' || md.toLowerCase() === 'up')) {
        colWidths.push(_index2.default['hidden-md-' + md]);
      }
      if (lg && (lg.toLowerCase() === 'down' || lg.toLowerCase() === 'up')) {
        colWidths.push(_index2.default['hidden-lg-' + lg]);
      }
      if (xl && (xl.toLowerCase() === 'down' || xl.toLowerCase() === 'up')) {
        colWidths.push(_index2.default['hidden-xl-' + xl]);
      }

      return colWidths;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hidden, [{
    key: 'render',
    value: function render() {
      var className = [];
      className = className.concat(this.getHiddenStyles());

      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: className.join(' ') + ' ' + this.props.className, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return Hidden;
}(_react2.default.Component);

Hidden.defaultProps = {
  className: '',
  style: {}
};
exports.default = Hidden;