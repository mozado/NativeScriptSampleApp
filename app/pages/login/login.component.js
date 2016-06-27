"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var core_2 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var page_1 = require("ui/page");
var hint_utils_1 = require("../../utils/hint-utils");
var color_1 = require("color");
var LoginPage = (function () {
    function LoginPage(_router, page) {
        this._router = _router;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "test@gmail.com";
        this.user.password = "Welcome@123";
        this.router = _router;
    }
    LoginPage.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginPage.prototype.login = function () {
        if (!this.user.isValidEmail()) {
            alert("The email entered is not a valid email");
        }
        else {
            this.router.navigate(["List"]);
        }
    };
    LoginPage.prototype.signUp = function () {
        //this._userService.register(this.user);
        this.router.navigate(["Camera"]);
    };
    LoginPage.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var containerView = this.stackLayout.nativeElement;
        containerView.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"), duration: 200
        });
        this.setTextFieldColor();
    };
    LoginPage.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login.jpg";
    };
    LoginPage.prototype.setTextFieldColor = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_utils_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_utils_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    __decorate([
        core_1.ViewChild("email"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("stackLayout"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "stackLayout", void 0);
    LoginPage = __decorate([
        core_1.Component({
            selector: "Login",
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, page_1.Page])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.component.js.map