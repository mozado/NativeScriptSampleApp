"use strict";
var core_1 = require("@angular/core");
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var camera_component_1 = require("./pages/camera/camera.component");
var router_deprecated_1 = require("@angular/router-deprecated");
var router_1 = require("nativescript-angular/router");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [router_1.NS_ROUTER_PROVIDERS, login_component_1.LoginPage],
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: '<page-router-outlet></page-router-outlet>'
        }),
        router_deprecated_1.RouteConfig([
            { path: "/pages/login", component: login_component_1.LoginPage, name: "Login", useAsDefault: true },
            { path: "/pages/list", component: list_component_1.ListPage, name: "List" },
            { path: "/pages/camera", component: camera_component_1.CameraPage, name: "Camera" }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map