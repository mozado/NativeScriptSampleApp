"use strict";
var cameraModule = require("camera");
var core_1 = require("@angular/core");
var imageModule = require("ui/image");
var CameraPage = (function () {
    function CameraPage() {
    }
    CameraPage.prototype.openCamera = function () {
        cameraModule.takePicture({ width: 300, height: 300, keepAspectRatio: true }).then(function (picture) {
            console.log("Result is an image source instance");
            var image = new imageModule.Image();
            image.imageSource = picture;
        });
    };
    CameraPage = __decorate([
        core_1.Component({
            selector: "Camera",
            templateUrl: "/pages/camera/camera-page.xml",
            styleUrls: ["/pages/camera/camera-style.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], CameraPage);
    return CameraPage;
}());
exports.CameraPage = CameraPage;
//# sourceMappingURL=camera.component.js.map