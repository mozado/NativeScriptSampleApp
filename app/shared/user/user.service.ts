import {Injectable} from "@angular/core";
import {User} from "./user";

@Injectable()
export class UserService {
  register(user: User) {
    fetch("https://httpbin.org/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    	body: JSON.stringify({ email: user.email, password: user.password })
		}).then(r => { return r.json(); }).then(function (r) {
		
			console.log("JSON response"+  JSON.stringify({r}));
			alert("User successfully registered");
		}, 
		function (e) {
			 console.log("Error occurred " + e);
   	 });
  }
}