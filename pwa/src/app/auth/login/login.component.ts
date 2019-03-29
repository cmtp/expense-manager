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

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.user).subscribe(response => {
      console.log(response);
    });
  }
}
