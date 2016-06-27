import {Component, OnInit,ElementRef,ViewChild} from "@angular/core";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Page} from "ui/page";
import {setHintColor} from "../../utils/hint-utils";
import {TextField} from "ui/text-field";
import {Color} from "color";
import {View} from "ui/core/view";

@Component({
	selector: "Login",
	templateUrl: "pages/login/login.html",
	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]

})

@Injectable()
export class LoginPage implements OnInit {
	@ViewChild("email") email:ElementRef;
	@ViewChild("password") password:ElementRef;
	@ViewChild("stackLayout") stackLayout:ElementRef;
	user: User;
	isLoggingIn = true;
	private router:Router;
	constructor(private _router:Router,private page:Page) {
		this.user = new User();
		this.user.email = "test@gmail.com";
		this.user.password = "Welcome@123";
		this.router = _router;
	}

	submit() {
		if(this.isLoggingIn) {
			this.login();
		} else {
			this.signUp();
		}
	}

	login() {
		if (!this.user.isValidEmail()) {
			alert("The email entered is not a valid email");
		} else {
			this.router.navigate(["List"]);
		}
	}

	signUp(){
		//this._userService.register(this.user);
		this.router.navigate(["Camera"]);
	}

	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
		let containerView = <View>this.stackLayout.nativeElement;
		containerView.animate({
			backgroundColor: this.isLoggingIn? new Color("white"):new Color("#301217"),duration:200
		});
		this.setTextFieldColor();
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
		this.page.backgroundImage = "res://bg_login.jpg";
	}

	setTextFieldColor() {
		let emailTextField = <TextField>this.email.nativeElement;
		let passwordTextField = <TextField>this.password.nativeElement;

		let mainTextColor = new Color(this.isLoggingIn? "black" : "#C4AFB4");
		emailTextField.color = mainTextColor;
		passwordTextField.color = mainTextColor;

		let hintColor = new Color(this.isLoggingIn? "#ACA6A7":"#C4AFB4");
		setHintColor({view:emailTextField,color:hintColor});
		setHintColor({view:passwordTextField,color:hintColor});

	}
}
