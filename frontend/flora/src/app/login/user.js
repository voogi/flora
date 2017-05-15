"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
    }
    User.isNull = function (user) {
        return user.username === null &&
            user.password === null;
    };
    return User;
}());
exports.User = User;
