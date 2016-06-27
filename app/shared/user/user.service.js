"use strict";
var core_1 = require("@angular/core");
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        fetch("https://httpbin.org/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: user.email, password: user.password })
        }).then(function (r) { return r.json(); }).then(function (r) {
            console.log("JSON response" + JSON.stringify({ r: r }));
            alert("User successfully registered");
        }, function (e) {
            console.log("Error occurred " + e);
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map