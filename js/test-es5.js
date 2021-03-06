"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _sum = require("sum.js");

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var News = (function () {
  function News(name) {
    _classCallCheck(this, News);

    this.name = name;
  }

  _createClass(News, [{
    key: "getName",
    value: function getName() {
      console.log(this.name);
    }
  }]);

  return News;
})();

var p = new News("Manoj");
p.getName();

var testArrowFunc = function testArrowFunc() {};

var numbers = [1, 2, 3];
var outputNumber = numbers.map(function (number) {
  return number * 2;
});

console.log(outputNumber);

var outputNumberArrow = numbers.map(function (number) {
  return number * 3;
});

console.log(outputNumberArrow);

var p = new Promise(function (resolve, reject) {
  return resolve(5);
});
p.then(function (val) {
  return console.log(val);
}); // 5

var someAsyncthings = function someAsyncthings() {
  return new Promise(function (resolve, reject) {
    resolve(_sum2.default + 2);
  });
};

someAsyncthings().then(function (val) {
  console.log(val);
}).catch(function (error) {
  console.log(error);
});