import cameraModule = require("camera");
import {Component} from "@angular/core";
import imageModule = require("ui/image");


@Component({
  selector: "Camera",
  templateUrl: "/pages/camera/camera-page.xml",
  styleUrls: ["/pages/camera/camera-style.css"]
})

export class CameraPage {
  openCamera(){
      cameraModule.takePicture({width: 300, height: 300, keepAspectRatio: true}).then(picture => {
      console.log("Result is an image source instance");
      var image = new imageModule.Image();
      image.imageSource = picture;
    });
  }
}
