import {Component} from "@angular/core";
import {LoginPage} from "./pages/login/login.component";
import {ListPage} from "./pages/list/list.component";
import {CameraPage} from "./pages/camera/camera.component";
import {RouteConfig} from "@angular/router-deprecated";
import {User} from "./shared/user/user";
import {UserService} from "./shared/user/user.service";
import {Router} from "@angular/router-deprecated";
import {NS_ROUTER_PROVIDERS,NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

@Component({
    selector: "my-app",
    providers: [NS_ROUTER_PROVIDERS,LoginPage],
    directives: [NS_ROUTER_DIRECTIVES],
    template:'<page-router-outlet></page-router-outlet>'
})

@RouteConfig ([
  {path:"/pages/login", component:LoginPage, name:"Login", useAsDefault:true},
  {path:"/pages/list", component:ListPage, name:"List"},
  {path:"/pages/camera", component:CameraPage, name:"Camera"}

])

export class AppComponent {}
