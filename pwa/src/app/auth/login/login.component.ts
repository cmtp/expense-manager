import { Component, OnInit } from "@angular/core";
import { IUser } from "src/app/interfaces/IUser";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "exp-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: IUser;
  loginProcess: boolean;
  error: boolean = false;

  constructor(private authService: AuthService) {
    this.loginProcess = false;
  }

  ngOnInit() {
    this.user = {
      username: "christiantola",
      email: "christian@example.com",
      password: "christiantola"
    };
  }

  login() {
    this.loginProcess = true;
    this.authService.login(this.user).subscribe(
      response => {
        console.log(response);
        this.loginProcess = false;
      },
      err => {
        console.log("err", err);
        this.loginProcess = false;
      }
    );
  }
}
