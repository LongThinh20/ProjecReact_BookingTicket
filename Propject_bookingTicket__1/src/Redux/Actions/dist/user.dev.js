"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _ = require(".");

var _index = require("../../Service/index");

var _type = require("./type");

var _sweetalert = _interopRequireDefault(require("sweetalert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var login = function login(user) {
  return function (dispatch) {
    _index.userService.signIn(user).then(function (res) {
      dispatch((0, _.createAction)(_type.FETCH_CREDENTIALS, res.data));
      (0, _sweetalert["default"])({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!"
      }).then(function (value) {
        window.location.replace("/");
      });
      localStorage.setItem('credentials', JSON.stringify(res.data)); // localStorage.setItem('token', res.data.accessToken);
      // localStorage.setItem('userLogin', res.data)
    })["catch"](function (err) {
      console.log(err.response.data);
      (0, _sweetalert["default"])({
        title: "THÔNG TIN CHƯA CHÍNH XÁC",
        text: "Tài khoản hoặc mật khẩu chưa đúng !!!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (value) {
        if (value) {} else {
          window.location.replace("/");
        }
      });
    });
  };
};

exports.login = login;