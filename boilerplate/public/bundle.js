'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nameP = 'Maggie';
console.log('Hello')
console.log(nameP);

var Hangman = function () {
    function Hangman() {
        _classCallCheck(this, Hangman);
    }

    _createClass(Hangman, [{
        key: 'mymethod',
        value: function mymethod() {
            return 'Hello';
        }
    }]);

    return Hangman;
}();

var hangman = new Hangman();
console.log(hangman.mymethod());
